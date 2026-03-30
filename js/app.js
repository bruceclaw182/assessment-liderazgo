'use strict';

// ============================================================
// WEB AUDIO ENGINE — sonidos sintetizados, sin archivos externos
// ============================================================
const AudioEngine = {
  ctx: null,

  init() {
    if (!this.ctx) {
      try {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) { /* Audio not available */ }
    }
    if (this.ctx?.state === 'suspended') this.ctx.resume();
  },

  _tone(freq, dur, type = 'sine', vol = 0.25, delay = 0) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
    gain.gain.setValueAtTime(0, this.ctx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(vol, this.ctx.currentTime + delay + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + dur);
    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + dur + 0.05);
  },

  playClick() {
    this._tone(700, 0.07, 'sine', 0.12);
  },

  playSelect() {
    // Confirmación: dos tonos ascendentes
    this._tone(440, 0.14, 'sine', 0.22);
    this._tone(660, 0.2, 'sine', 0.18, 0.12);
  },

  playChime() {
    // Bienvenida: arpegio ascendente
    [523, 659, 784, 1047].forEach((f, i) => this._tone(f, 0.4, 'sine', 0.18, i * 0.13));
  },

  playReveal() {
    // Resultado: fanfarria corta
    [330, 415, 523, 659, 880].forEach((f, i) => this._tone(f, 0.55, 'sine', 0.18, i * 0.09));
  },

  playTimerWarn() {
    // Advertencia 5 min: doble beep
    this._tone(440, 0.13, 'triangle', 0.18);
    this._tone(440, 0.13, 'triangle', 0.15, 0.28);
  },

  playTimerDanger() {
    // Peligro 1 min: tono bajo urgente
    this._tone(280, 0.22, 'sawtooth', 0.14);
  },
};

// ============================================================
// SISTEMA DE RÚBRICA — LIDERAZGO EMOCIONAL
// Puntaje total con 10 preguntas: -50 (todo mal) → 100 (todo bien)
// ============================================================

function getNivel(totalScore) {
  if (totalScore <= 0)  return { nivel: 1, nombre: 'Reactivo',        color: '#ef5350', emoji: '⚠️', rango: '-50 a 0' };
  if (totalScore <= 35) return { nivel: 2, nombre: 'En Construcción', color: '#ff9800', emoji: '🔧', rango: '1 a 35' };
  if (totalScore <= 60) return { nivel: 3, nombre: 'Funcional',       color: '#ffd740', emoji: '📈', rango: '36 a 60' };
  if (totalScore <= 80) return { nivel: 4, nombre: 'Efectivo',        color: '#66bb6a', emoji: '✅', rango: '61 a 80' };
  return                       { nivel: 5, nombre: 'Alto Impacto',    color: '#26c6da', emoji: '🎯', rango: '81 a 100' };
}

const DESCRIPCIONES_NIVEL = {
  1: {
    resumen: 'La mayoría de las decisiones del equipo tendieron a amplificar los problemas en lugar de contenerlos. Esto no refleja falta de intención — refleja que los patrones bajo presión aún no están alineados con las mejores prácticas de liderazgo emocional.',
    empatia:     'Hay sensibilidad hacia las personas, pero se traduce en involucramiento emocional que complica la toma de decisiones. La empatía sin estructura genera triangulación y falta de límites claros.',
    asertividad: 'Hay intención de actuar con decisión, pero bajo presión las respuestas tendieron a ser impulsivas o evasivas. La asertividad sin lectura emocional del contexto genera resistencia en el equipo.',
    ie:          'Existe interés en comprender las dinámicas emocionales, pero aún no se traduce en decisiones efectivas en situaciones de alta complejidad.',
    cohesion:    'La orientación hacia el equipo es genuina, pero las decisiones priorizaron la armonía a corto plazo sobre la efectividad. Esto posterga conflictos necesarios.',
  },
  2: {
    resumen: 'El equipo muestra intuición de liderazgo en algunos momentos, pero la reacción emocional predomina sobre la gestión estratégica. Hay una base para desarrollar — los patrones están emergiendo.',
    empatia:     'La empatía funciona bien en contextos de baja complejidad. En escenarios de alta presión, la conexión emocional tendió a nublar la dirección necesaria.',
    asertividad: 'Hay claridad en las posiciones, pero el equipo aún tiene dificultad calibrando el momento y la forma de comunicarlas. La asertividad efectiva requiere leer el contexto emocional.',
    ie:          'La conciencia emocional está presente pero su aplicación es inconsistente. El equipo reconoce lo que pasa emocionalmente en algunos casos, pero no de forma sistemática.',
    cohesion:    'La orientación al equipo es genuina. El reto es que la cohesión real no puede construirse evitando las conversaciones difíciles — ese es el punto donde el equipo aún cede.',
  },
  3: {
    resumen: 'El equipo tiene una base sólida de liderazgo emocional. Resuelve la mayoría de las situaciones de forma efectiva, aunque en los escenarios de mayor complejidad aún aparecen oportunidades de mejora claras.',
    empatia:     'El equipo demuestra empatía práctica: entiende las emociones y las usa como información para decidir. El desarrollo está en mantener esa capacidad bajo presión extrema.',
    asertividad: 'Las decisiones son claras y el equipo las sostiene en la mayoría de escenarios. El área de desarrollo es la asertividad compasiva: decir lo difícil sin romper la relación.',
    ie:          'El equipo navega la complejidad emocional con criterio y reconoce sus sesgos en algunos contextos. El siguiente nivel es hacerlo de forma consistente en situaciones de mayor ambigüedad.',
    cohesion:    'El equipo construye confianza y alineación. El reto está en sostener la cohesión cuando hay que tomar decisiones que no gustan a todos — ahí la dinámica aún se tensiona.',
  },
  4: {
    resumen: 'El equipo demuestra un manejo consistente de escenarios complejos. Sus decisiones tienen impacto positivo claro en las personas y en los resultados. Está en el cuartil superior de liderazgo emocional.',
    empatia:     'La empatía es una competencia madura. El equipo lee con precisión los estados emocionales y los integra en la toma de decisiones sin perder efectividad.',
    asertividad: 'El equipo toma posición con claridad y genera dirección en situaciones ambiguas. Su asertividad es un recurso confiable que activa cuando lo necesita.',
    ie:          'El equipo maneja la complejidad emocional con sofisticación: distingue entre reacción e interpretación y elige sus respuestas de manera consciente en la mayoría de escenarios.',
    cohesion:    'El equipo construye contextos donde las personas se sienten seguras para comprometerse. Su orientación colectiva amplifica el potencial individual de cada miembro.',
  },
  5: {
    resumen: 'El equipo demostró toma de decisiones alineada con las mejores prácticas de inteligencia emocional organizacional. Este nivel de respuesta ante situaciones complejas es poco común y altamente valorado.',
    empatia:     'La empatía opera al nivel de los mejores líderes: es precisa, oportuna y nunca sacrifica la efectividad por la comodidad. Un diferenciador real en escenarios de alta presión.',
    asertividad: 'La asertividad es excepcional: el equipo toma posición cuando importa, lo comunica con claridad y lo sostiene con evidencia. Genera dirección incluso sin consenso.',
    ie:          'El equipo demuestra inteligencia emocional de alto rendimiento: entiende, regula y usa las emociones como información estratégica. Esta capacidad es rara y crea ventaja competitiva.',
    cohesion:    'Este equipo construye cohesión que resiste la presión. Su capacidad de alinear personas alrededor de objetivos comunes, incluso en momentos difíciles, es su mayor activo.',
  },
};

function calcularPerfil(totals, totalScore) {
  const dims = [
    { key: 'empatia',      label: 'Empatía',                val: totals.empatia },
    { key: 'asertividad',  label: 'Asertividad',            val: totals.asertividad },
    { key: 'ie',           label: 'Inteligencia Emocional', val: totals.ie },
    { key: 'cohesion',     label: 'Cohesión de Equipo',     val: totals.cohesion },
  ].sort((a, b) => b.val - a.val);

  const nivel = getNivel(totalScore);
  const dominante = dims[0];
  const debil = dims[dims.length - 1];
  const desc = DESCRIPCIONES_NIVEL[nivel.nivel];

  return {
    nivel: nivel.nivel,
    nombre: nivel.nombre,
    emoji: nivel.emoji,
    color: nivel.color,
    resumen: desc.resumen,
    descripcionDim: desc[dominante.key],
    dominante: dominante.label,
    debil: debil.label,
    debilVal: debil.val,
  };
}

function getDimLabel(val) {
  if (val <= 3) return { text: 'Área crítica',  color: '#ef5350' };
  if (val <= 5) return { text: 'Por desarrollar', color: '#ff9800' };
  if (val <= 7) return { text: 'Promedio',      color: '#ffd740' };
  if (val <= 9) return { text: 'Fortaleza',     color: '#66bb6a' };
  return               { text: 'Excepcional',   color: '#26c6da' };
}

// ============================================================
// ESTADO DE LA APLICACIÓN (V2)
// ============================================================
const State = {
  teamCode: null,
  teamId: null,
  caseId: null,
  caseData: null,
  decision: null,
  startTime: null,
  timerInterval: null,
  timeRemaining: 25 * 60,
  radarChart: null,
  warnPlayed: false,
  dangerPlayed: false,
  // V2: navegación por escenas y preguntas
  sceneIndex: 0,
  questionIndex: 0,
  totalScore: 0,
  scoreBreakdown: { empatia: 0, asertividad: 0, ie: 0, cohesion: 0 },
  answeredCount: 0,
  allAnswers: [],
};

// ============================================================
// NAVEGACIÓN DE PANTALLAS (SPA)
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Ocultar loading overlay
  setTimeout(() => {
    document.getElementById('loading-overlay')?.classList.add('hidden');
  }, 900);

  // Página facilitador dedicada
  if (window.location.pathname.endsWith('facilitator.html')) {
    showScreen('screen-facilitator');
    initFacilitator();
    return;
  }

  // Código de equipo desde URL (QR)
  const params = new URLSearchParams(window.location.search);
  const teamParam = params.get('equipo');
  if (teamParam) {
    const inp = document.getElementById('team-code-input');
    if (inp) inp.value = teamParam;
    showScreen('screen-team-code');
  }

  // === Botones Welcome ===
  document.getElementById('btn-start-assessment')?.addEventListener('click', () => {
    AudioEngine.init();
    AudioEngine.playChime();
    showScreen('screen-team-code');
  });

  document.getElementById('btn-facilitator-view')?.addEventListener('click', () => {
    AudioEngine.init();
    AudioEngine.playClick();
    showScreen('screen-facilitator');
    initFacilitator();
  });

  // === Código de equipo ===
  document.getElementById('btn-submit-team-code')?.addEventListener('click', () => {
    AudioEngine.init();
    submitTeamCode();
  });

  document.getElementById('team-code-input')?.addEventListener('keypress', e => {
    if (e.key === 'Enter') { AudioEngine.init(); submitTeamCode(); }
  });

  // === Instrucciones ===
  document.getElementById('btn-start-cases')?.addEventListener('click', () => {
    AudioEngine.playClick();
    showScreen('screen-case');
    startAssessment();
  });

  // === Resultados ===
  document.getElementById('btn-restart-assessment')?.addEventListener('click', () => {
    AudioEngine.playClick();
    location.reload();
  });

  // === Facilitador ===
  document.getElementById('btn-export-results')?.addEventListener('click', () => {
    AudioEngine.playClick();
    exportCSV();
  });

  document.getElementById('btn-print-qr')?.addEventListener('click', () => {
    AudioEngine.playClick();
    showScreen('screen-qr-print');
    loadQRCodes();
  });

  document.getElementById('btn-back-to-main')?.addEventListener('click', () => {
    AudioEngine.playClick();
    showScreen('screen-welcome');
  });

  // === QR print ===
  document.getElementById('btn-print')?.addEventListener('click', () => {
    AudioEngine.playClick();
    window.print();
  });

  document.getElementById('btn-back-to-facilitator')?.addEventListener('click', () => {
    AudioEngine.playClick();
    showScreen('screen-facilitator');
    initFacilitator();
  });
});

// ============================================================
// CÓDIGO DE EQUIPO
// ============================================================
async function submitTeamCode() {
  const input = document.getElementById('team-code-input');
  const errorEl = document.getElementById('error-msg');
  const btn = document.getElementById('btn-submit-team-code');
  const code = input?.value.trim().toUpperCase();

  if (!code) { showError(errorEl, 'Escribe el nombre de tu equipo'); return; }
  if (errorEl) errorEl.classList.add('hidden');

  if (btn) { btn.disabled = true; btn.textContent = 'Entrando...'; }
  State.teamCode = code;

  // Caso aleatorio siempre
  const casoAleatorio = Math.floor(Math.random() * 6) + 1;

  try {
    const team = await getOrCreateTeam(code, casoAleatorio);
    State.teamId = team.id;
    State.caseId = team.caso_id;
  } catch (_) {
    State.caseId = casoAleatorio;
  }

  State.caseData = CASOS.find(c => c.id === State.caseId) ?? CASOS[0];

  if (btn) { btn.disabled = false; btn.textContent = 'Unirse al Taller'; }
  AudioEngine.playClick();
  showScreen('screen-instructions');
}

function showError(el, msg) {
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
}

// ============================================================
// SUPABASE
// ============================================================
function getClient() {
  if (typeof SUPABASE_URL === 'undefined' || SUPABASE_URL === 'YOUR_SUPABASE_URL') {
    throw new Error('Supabase not configured');
  }
  return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function getOrCreateTeam(nombre, casoId) {
  const db = getClient();
  // Cada vez que entra un equipo crea un registro nuevo (permite múltiples intentos)
  const { data: created } = await db
    .from('equipos')
    .insert({ codigo: nombre, caso_id: casoId, nombre_equipo: nombre })
    .select().single();
  return created;
}

// ============================================================
// ASSESSMENT — ENGINE V2 (Escenas × Preguntas con Feedback)
// ============================================================
function startAssessment() {
  State.startTime = Date.now();
  State.decision = null;
  State.timeRemaining = 25 * 60;
  State.warnPlayed = false;
  State.dangerPlayed = false;
  State.sceneIndex = 0;
  State.questionIndex = 0;
  State.totalScore = 0;
  State.scoreBreakdown = { empatia: 0, asertividad: 0, ie: 0, cohesion: 0 };
  State.answeredCount = 0;
  State.allAnswers = [];
  renderCurrentQuestion();
  startTimer();
}

function getCurrentScene() {
  return State.caseData?.escenarios?.[State.sceneIndex] ?? null;
}

function getCurrentQuestion() {
  const scene = getCurrentScene();
  return scene?.preguntas?.[State.questionIndex] ?? null;
}

function renderCurrentQuestion() {
  const c = State.caseData;
  const scene = getCurrentScene();
  const question = getCurrentQuestion();
  if (!c || !scene || !question) return;

  const totalScenes = c.escenarios.length;
  const sceneNum = State.sceneIndex + 1;
  const qNum = State.questionIndex + 1;
  const totalQ = scene.preguntas.length;

  // Header
  document.getElementById('current-case').textContent = sceneNum;
  document.getElementById('total-cases').textContent = totalScenes;
  document.getElementById('progress-fill').style.width = `${((sceneNum - 1) / totalScenes) * 100}%`;
  document.getElementById('score-value').textContent = State.totalScore;
  const qLabel = document.getElementById('question-progress-label');
  if (qLabel) qLabel.textContent = `Pregunta ${qNum} de ${totalQ}`;

  // Contenido
  const badge = document.getElementById('case-badge');
  if (badge) badge.textContent = c.tema;

  document.getElementById('case-title').textContent = c.titulo;
  const sceneTitle = document.getElementById('scene-title');
  if (sceneTitle) sceneTitle.textContent = scene.titulo;
  document.getElementById('case-description').textContent = scene.narrativa;
  document.getElementById('case-question').textContent = question.pregunta;

  // Ocultar feedback/transición, mostrar opciones
  document.getElementById('feedback-panel')?.classList.add('hidden');
  document.getElementById('transition-panel')?.classList.add('hidden');
  document.getElementById('decision-buttons').style.display = '';

  // Renderizar opciones
  const container = document.getElementById('decision-buttons');
  if (!container) return;
  container.innerHTML = '';

  question.opciones.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-decision';
    btn.innerHTML = `
      <span class="decision-letter">${opt.letra}</span>
      <span class="decision-text">${opt.texto}</span>
    `;
    btn.addEventListener('click', () => onOptionSelected(opt, btn));
    container.appendChild(btn);
  });
}

function onOptionSelected(opt, btnEl) {
  // Deshabilitar todas las opciones
  document.querySelectorAll('.btn-decision').forEach(b => {
    b.disabled = true;
    b.style.opacity = b === btnEl ? '1' : '0.38';
  });
  btnEl.classList.add('selected');
  AudioEngine.playSelect();

  const isCorrect = opt.correcta === true;

  // Acumular score
  if (isCorrect) {
    State.totalScore += opt.puntos;
    State.scoreBreakdown.empatia += opt.empatia;
    State.scoreBreakdown.asertividad += opt.asertividad;
    State.scoreBreakdown.ie += opt.ie;
    State.scoreBreakdown.cohesion += opt.cohesion;
    State.answeredCount++;
    State.allAnswers.push(opt);
    document.getElementById('score-value').textContent = State.totalScore;
  }

  showFeedback(opt, isCorrect);
}

function showFeedback(opt, isCorrect) {
  document.getElementById('decision-buttons').style.display = 'none';

  const panel = document.getElementById('feedback-panel');
  const iconEl = document.getElementById('feedback-icon');
  const resultEl = document.getElementById('feedback-result');
  const textEl = document.getElementById('feedback-text');
  const retryBtn = document.getElementById('btn-retry');
  const nextBtn = document.getElementById('btn-next-question');

  if (isCorrect) {
    panel.className = 'feedback-panel feedback-correct';
    iconEl.textContent = '✓';
    resultEl.textContent = `+${opt.puntos} puntos`;
    AudioEngine.playChime();
  } else {
    panel.className = 'feedback-panel feedback-incorrect';
    iconEl.textContent = '✗';
    resultEl.textContent = `${opt.puntos} puntos`;
    AudioEngine.playTimerWarn();
  }

  textEl.textContent = opt.feedback;

  // Botones
  retryBtn.classList.toggle('hidden', isCorrect);
  nextBtn.classList.remove('hidden');

  // Cambiar texto del "Siguiente" según contexto
  const scene = getCurrentScene();
  const isLastQ = State.questionIndex >= scene.preguntas.length - 1;
  const isLastScene = State.sceneIndex >= State.caseData.escenarios.length - 1;
  if (isLastQ && isLastScene) {
    nextBtn.textContent = 'Ver Resultados →';
  } else if (isLastQ) {
    nextBtn.textContent = 'Siguiente Escena →';
  } else {
    nextBtn.textContent = 'Siguiente Pregunta →';
  }

  panel.classList.remove('hidden');

  // Listeners (remover previos)
  const newRetry = retryBtn.cloneNode(true);
  const newNext = nextBtn.cloneNode(true);
  retryBtn.parentNode.replaceChild(newRetry, retryBtn);
  nextBtn.parentNode.replaceChild(newNext, nextBtn);

  if (!isCorrect) {
    newRetry.classList.remove('hidden');
    newRetry.addEventListener('click', () => {
      // Restar los puntos negativos que no acumulamos, solo volvemos a mostrar la pregunta
      panel.classList.add('hidden');
      document.getElementById('decision-buttons').style.display = '';
      // Rehabilitar opciones
      document.querySelectorAll('.btn-decision').forEach(b => {
        b.disabled = false;
        b.style.opacity = '1';
        b.classList.remove('selected');
      });
    });
  }

  newNext.addEventListener('click', () => {
    const scn = getCurrentScene();
    const isLast = State.questionIndex >= scn.preguntas.length - 1;

    if (isLast) {
      showTransition();
    } else {
      State.questionIndex++;
      renderCurrentQuestion();
    }
  });
}

function showTransition() {
  const scene = getCurrentScene();
  const isLastScene = State.sceneIndex >= State.caseData.escenarios.length - 1;

  document.getElementById('feedback-panel')?.classList.add('hidden');
  document.getElementById('decision-buttons').style.display = 'none';

  if (isLastScene) {
    stopTimer();
    showResults();
    return;
  }

  const panel = document.getElementById('transition-panel');
  const textEl = document.getElementById('transition-text');
  if (textEl) textEl.textContent = scene.transicion || '...';

  panel.classList.remove('hidden');

  const nextSceneBtn = document.getElementById('btn-next-scene');
  const fresh = nextSceneBtn.cloneNode(true);
  nextSceneBtn.parentNode.replaceChild(fresh, nextSceneBtn);
  fresh.addEventListener('click', () => {
    State.sceneIndex++;
    State.questionIndex = 0;
    panel.classList.add('hidden');
    renderCurrentQuestion();
    AudioEngine.playClick();
  });
}

async function saveAnswer(d) {
  const db = getClient();
  await db.from('respuestas').insert({
    equipo_id: State.teamId,
    pregunta_num: State.caseId,
    decision_letra: d.letra,
    empatia: d.empatia,
    asertividad: d.asertividad,
    ie: d.ie,
    cohesion: d.cohesion,
  });
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  updateTimer(State.timeRemaining);
  State.timerInterval = setInterval(() => {
    State.timeRemaining--;
    updateTimer(State.timeRemaining);

    if (State.timeRemaining === 300 && !State.warnPlayed) {
      AudioEngine.playTimerWarn();
      State.warnPlayed = true;
    }
    if (State.timeRemaining === 60 && !State.dangerPlayed) {
      AudioEngine.playTimerDanger();
      State.dangerPlayed = true;
    }
    if (State.timeRemaining <= 0) {
      stopTimer();
      showResults();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(State.timerInterval);
  State.timerInterval = null;
}

function updateTimer(secs) {
  const valEl = document.getElementById('timer-value');
  const displayEl = valEl?.closest('.timer-display');
  if (!valEl) return;

  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  valEl.textContent = `${m}:${s}`;

  const warn = secs < 300;
  const danger = secs < 60;
  valEl.classList.toggle('timer-warning', warn && !danger);
  valEl.classList.toggle('timer-danger', danger);
  displayEl?.classList.toggle('timer-warning', warn && !danger);
  displayEl?.classList.toggle('timer-danger', danger);
}

// ============================================================
// RESULTADOS (V2 — scores acumulados de todas las respuestas)
// ============================================================
function showResults() {
  showScreen('screen-results');

  const n = Math.max(1, State.answeredCount);
  const totals = {
    empatia:     Math.round(State.scoreBreakdown.empatia / n),
    asertividad: Math.round(State.scoreBreakdown.asertividad / n),
    ie:          Math.round(State.scoreBreakdown.ie / n),
    cohesion:    Math.round(State.scoreBreakdown.cohesion / n),
  };

  // Código de equipo + puntaje total
  const teamEl = document.getElementById('results-team-code');
  if (teamEl) teamEl.textContent = State.teamCode;

  // Mostrar puntaje total si hay elemento
  const totalScoreEl = document.getElementById('results-total-score');
  if (totalScoreEl) totalScoreEl.textContent = State.totalScore;

  // Tarjetas de puntuación
  [
    ['result-empatia',     'bar-value-empatia',     totals.empatia],
    ['result-asertividad', 'bar-value-asertividad',  totals.asertividad],
    ['result-ie',          'bar-value-ie',            totals.ie],
    ['result-cohesion',    'bar-value-cohesion',      totals.cohesion],
  ].forEach(([cardId, barId, val]) => {
    const el = document.getElementById(cardId);
    const bar = document.getElementById(barId);
    if (el) el.textContent = val;
    if (bar) bar.textContent = val;
  });

  // Barras animadas (max 10) + etiqueta de nivel por dimensión
  setTimeout(() => {
    ['empatia', 'asertividad', 'ie', 'cohesion'].forEach(dim => {
      const fill = document.getElementById(`bar-fill-${dim}`);
      if (fill) fill.style.width = `${Math.min(100, (totals[dim] / 10) * 100)}%`;
      // Inyectar etiqueta de nivel debajo de la barra
      const track = fill?.parentElement;
      if (track) {
        const lbl = getDimLabel(totals[dim]);
        let tag = track.nextElementSibling;
        if (!tag || !tag.classList.contains('dim-level-tag')) {
          tag = document.createElement('div');
          tag.className = 'dim-level-tag';
          track.after(tag);
        }
        tag.textContent = lbl.text;
        tag.style.color = lbl.color;
        tag.style.fontSize = '0.72rem';
        tag.style.fontWeight = '600';
        tag.style.marginTop = '4px';
        tag.style.letterSpacing = '0.04em';
        tag.style.textTransform = 'uppercase';
      }
    });
  }, 350);

  // Sonido de revelación
  setTimeout(() => AudioEngine.playReveal(), 450);

  // Gráfico radar
  setTimeout(() => renderRadar(totals), 700);

  // Perfil de liderazgo — pasar totalScore para rúbrica
  setTimeout(() => revealProfile(totals, State.totalScore), 1300);

  // Guardar en Supabase
  if (State.allAnswers.length > 0) {
    State.allAnswers.forEach(a => saveAnswer(a).catch(() => {}));
  }
  saveResults(totals).catch(() => {});
}

// ============================================================
// RADAR CHART (Chart.js)
// ============================================================
function renderRadar(totals) {
  const canvas = document.getElementById('radar-chart');
  if (!canvas || typeof Chart === 'undefined') return;

  if (State.radarChart) { State.radarChart.destroy(); }

  State.radarChart = new Chart(canvas, {
    type: 'radar',
    data: {
      labels: ['Empatía', 'Asertividad', 'I.E.', 'Cohesión'],
      datasets: [{
        label: State.teamCode || 'Equipo',
        data: [totals.empatia, totals.asertividad, totals.ie, totals.cohesion],
        backgroundColor: 'rgba(245,127,23,0.12)',
        borderColor: '#f57f17',
        borderWidth: 2.5,
        pointBackgroundColor: '#f57f17',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      animation: { duration: 900, easing: 'easeOutQuart' },
      plugins: { legend: { display: false } },
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            color: 'rgba(255,255,255,0.25)',
            font: { size: 9 },
            backdropColor: 'transparent',
          },
          grid: { color: 'rgba(255,255,255,0.07)' },
          angleLines: { color: 'rgba(255,255,255,0.07)' },
          pointLabels: {
            color: 'rgba(255,255,255,0.65)',
            font: { size: 11, family: "'Inter', sans-serif", weight: '500' },
          },
        },
      },
    },
  });
}

// ============================================================
// PERFIL REVEAL — Rúbrica científica por puntaje + dimensión
// ============================================================
function revealProfile(totals, totalScore) {
  const perfil = calcularPerfil(totals, totalScore);

  let el = document.getElementById('profile-reveal');
  if (!el) {
    el = document.createElement('div');
    el.id = 'profile-reveal';
    el.className = 'profile-reveal';
    const barCard = document.querySelector('#screen-results .bar-chart')?.closest('.card');
    if (barCard) barCard.parentNode.insertBefore(el, barCard);
    else document.querySelector('.results-container')?.appendChild(el);
  }

  el.style.background = `linear-gradient(135deg, ${perfil.color}18 0%, rgba(10,14,26,0.9) 100%)`;
  el.style.borderColor = `${perfil.color}55`;

  // Generar los 5 niveles visuales
  const nivelesHTML = [1,2,3,4,5].map(n => {
    const names = ['Reactivo','En Construcción','Funcional','Efectivo','Alto Impacto'];
    const colors = ['#ef5350','#ff9800','#ffd740','#66bb6a','#26c6da'];
    const active = n === perfil.nivel;
    return `<div style="
      flex:1; height:6px; border-radius:3px;
      background:${active ? colors[n-1] : 'rgba(255,255,255,0.1)'};
      transition: all 0.4s;
    " title="${names[n-1]}"></div>`;
  }).join('');

  el.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <span style="font-size:2rem">${perfil.emoji}</span>
      <div>
        <div style="font-size:0.7rem;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:0.08em">Nivel de Liderazgo Emocional</div>
        <div style="font-size:1.4rem;font-weight:700;color:${perfil.color};font-family:var(--font-heading)">${perfil.nombre}</div>
      </div>
    </div>
    <div style="display:flex;gap:4px;margin-bottom:14px">${nivelesHTML}</div>
    <p style="font-size:0.85rem;color:rgba(255,255,255,0.78);line-height:1.6;margin-bottom:12px">${perfil.resumen}</p>
    <div style="border-top:1px solid rgba(255,255,255,0.07);padding-top:12px;margin-bottom:10px">
      <div style="font-size:0.72rem;color:${perfil.color};text-transform:uppercase;letter-spacing:0.07em;font-weight:600;margin-bottom:6px">Dimensión predominante · ${perfil.dominante}</div>
      <p style="font-size:0.82rem;color:rgba(255,255,255,0.65);line-height:1.55;margin:0">${perfil.descripcionDim}</p>
    </div>
    <div style="font-size:0.75rem;color:rgba(255,255,255,0.4);margin-top:6px">
      Mayor oportunidad de desarrollo: <span style="color:#ff9800;font-weight:600">${perfil.debil} (${perfil.debilVal}/10)</span>
    </div>
  `;
  el.classList.remove('hidden');
}

async function saveResults(totals) {
  const db = getClient();
  const perfil = calcularPerfil(totals, State.totalScore);
  await db.from('resultados').insert({
    equipo_id: State.teamId,
    empatia_total: totals.empatia,
    asertividad_total: totals.asertividad,
    ie_total: totals.ie,
    cohesion_total: totals.cohesion,
    perfil_predominante: perfil.nombre,
  });
}

// ============================================================
// EXPORT CSV
// ============================================================
function exportCSV() {
  const tbody = document.getElementById('facilitator-table-body');
  if (!tbody) return;

  const lines = ['Equipo,Empatía,Asertividad,I.E.,Cohesión,Perfil,Estado'];
  tbody.querySelectorAll('tr').forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length >= 6) {
      lines.push(Array.from(cells).map(c => `"${c.textContent.trim()}"`).join(','));
    }
  });

  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'), {
    href: url,
    download: `assessment-${new Date().toISOString().slice(0,10)}.csv`,
  });
  a.click();
  URL.revokeObjectURL(url);
}

// ============================================================
// QR CODES
// ============================================================
function loadQRCodes() {
  if (typeof QRCode !== 'undefined') {
    generateAllQRCodes(window.location.origin);
    return;
  }
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js';
  script.onload = () => generateAllQRCodes(window.location.origin);
  document.head.appendChild(script);
}

// ============================================================
// FACILITADOR
// ============================================================
function initFacilitator() {
  loadFacilitatorData();
  clearInterval(window._facInterval);
  window._facInterval = setInterval(loadFacilitatorData, 5000);
}

async function loadFacilitatorData() {
  const tbody = document.getElementById('facilitator-table-body');
  if (!tbody) return;

  try {
    const db = getClient();
    const [{ data: equipos }, { data: respuestas }, { data: resultados }] = await Promise.all([
      db.from('equipos').select('*'),
      db.from('respuestas').select('*'),
      db.from('resultados').select('*'),
    ]);

    if (!equipos?.length) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center" style="padding:2rem;color:#546e7a">Esperando equipos...</td></tr>';
      return;
    }

    tbody.innerHTML = '';
    equipos.forEach(eq => {
      const resps = (respuestas || []).filter(r => r.equipo_id === eq.id);
      const result = (resultados || []).find(r => r.equipo_id === eq.id);
      const done = resps.length > 0;
      const sum = key => resps.reduce((s, r) => s + (r[key] || 0), 0);

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${eq.codigo}</strong></td>
        <td style="color:#e91e63;font-weight:600">${done ? sum('empatia') : '—'}</td>
        <td style="color:#f57f17;font-weight:600">${done ? sum('asertividad') : '—'}</td>
        <td style="color:#00bcd4;font-weight:600">${done ? sum('ie') : '—'}</td>
        <td style="color:#4caf50;font-weight:600">${done ? sum('cohesion') : '—'}</td>
        <td style="font-size:0.8rem;color:#b0bec5">${result?.perfil_predominante || '—'}</td>
        <td><span class="status-badge ${done ? 'status-completed' : 'status-pending'}">${done ? 'Completado' : 'Pendiente'}</span></td>
      `;
      tbody.appendChild(tr);
    });
  } catch (_) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center" style="padding:2rem;color:#546e7a">Modo demo — configura Supabase para datos en vivo</td></tr>';
  }
}
