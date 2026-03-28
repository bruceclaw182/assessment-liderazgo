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
// PERFILES DE LIDERAZGO
// ============================================================
const PERFILES = {
  empatia: {
    nombre: 'Líder Humano',
    emoji: '❤️',
    color: '#e91e63',
    descripcion: 'Tu fortaleza es la conexión genuina con las personas. Lees las emociones con precisión y creas espacios donde la gente se siente vista y escuchada. Los equipos confían en ti instintivamente.',
    dimension: 'Empatía',
  },
  asertividad: {
    nombre: 'Líder Ejecutor',
    emoji: '⚡',
    color: '#f57f17',
    descripcion: 'Tomas decisiones con claridad y las sostienes con convicción. En momentos de presión, tu equipo sabe que habrá una dirección. Transformas la incertidumbre en acción.',
    dimension: 'Asertividad',
  },
  ie: {
    nombre: 'Líder Consciente',
    emoji: '🧠',
    color: '#00bcd4',
    descripcion: 'Navegas la complejidad emocional con maestría. Entiendes el "por qué" detrás de los comportamientos y usas esa comprensión para facilitar conversaciones difíciles con sabiduría.',
    dimension: 'Inteligencia Emocional',
  },
  cohesion: {
    nombre: 'Líder de Equipo',
    emoji: '🤝',
    color: '#4caf50',
    descripcion: 'Tu poder está en construir colectivos que funcionan. Creas cohesión donde había individualismo — tu equipo supera su potencial individual cuando trabaja contigo.',
    dimension: 'Cohesión de Equipo',
  },
};

function calcularPerfil(totals) {
  const dims = [
    { key: 'empatia',      val: totals.empatia },
    { key: 'asertividad',  val: totals.asertividad },
    { key: 'ie',           val: totals.ie },
    { key: 'cohesion',     val: totals.cohesion },
  ].sort((a, b) => b.val - a.val);

  // Equilibrio si la diferencia entre el 1° y 2° es mínima
  if (dims[0].val > 0 && dims[0].val - dims[1].val <= 1) {
    return {
      nombre: 'Líder Integral',
      emoji: '🌟',
      color: '#ffd700',
      descripcion: 'Demuestras un equilibrio excepcional entre todas las dimensiones del liderazgo emocional. Tu versatilidad te permite adaptarte con maestría a cualquier situación.',
      dimension: 'Equilibrio Total',
    };
  }
  return PERFILES[dims[0].key];
}

// ============================================================
// ESTADO DE LA APLICACIÓN
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
// ASSESSMENT — CASO
// ============================================================
function startAssessment() {
  State.startTime = Date.now();
  State.decision = null;
  State.timeRemaining = 25 * 60;
  State.warnPlayed = false;
  State.dangerPlayed = false;
  renderCase();
  startTimer();
}

function renderCase() {
  const c = State.caseData;
  if (!c) return;

  document.getElementById('current-case').textContent = c.id;
  document.getElementById('total-cases').textContent = '6';
  document.getElementById('case-title').textContent = c.titulo;
  document.getElementById('case-description').textContent = c.contexto;
  document.getElementById('case-question').textContent = c.crisis;
  document.getElementById('progress-fill').style.width = `${(c.id / 6) * 100}%`;

  const container = document.getElementById('decision-buttons');
  if (!container) return;
  container.innerHTML = '';

  c.decisiones.forEach(d => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-decision';
    btn.innerHTML = `
      <span class="decision-letter">${d.letra}</span>
      <span class="decision-text">${d.texto}</span>
    `;
    btn.addEventListener('click', () => onDecisionSelected(d, btn));
    container.appendChild(btn);
  });
}

function onDecisionSelected(decision, btnEl) {
  // Desactivar todos
  document.querySelectorAll('.btn-decision').forEach(b => {
    b.disabled = true;
    b.style.opacity = b === btnEl ? '1' : '0.38';
  });
  btnEl.classList.add('selected');

  AudioEngine.playSelect();
  State.decision = decision;
  saveAnswer(decision).catch(() => {});

  setTimeout(() => {
    stopTimer();
    showResults();
  }, 950);
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
// RESULTADOS
// ============================================================
function showResults() {
  showScreen('screen-results');

  const d = State.decision;
  if (!d) return;

  const totals = {
    empatia: d.empatia,
    asertividad: d.asertividad,
    ie: d.ie,
    cohesion: d.cohesion,
  };

  // Código de equipo
  const teamEl = document.getElementById('results-team-code');
  if (teamEl) teamEl.textContent = State.teamCode;

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

  // Barras animadas (max 10 por decisión)
  setTimeout(() => {
    const max = 10;
    ['empatia', 'asertividad', 'ie', 'cohesion'].forEach(dim => {
      const fill = document.getElementById(`bar-fill-${dim}`);
      if (fill) fill.style.width = `${Math.min(100, (totals[dim] / max) * 100)}%`;
    });
  }, 350);

  // Sonido de revelación
  setTimeout(() => AudioEngine.playReveal(), 450);

  // Gráfico radar
  setTimeout(() => renderRadar(totals), 700);

  // Perfil de liderazgo — wow effect
  setTimeout(() => revealProfile(totals), 1300);

  // Guardar en Supabase
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
// PERFIL REVEAL
// ============================================================
function revealProfile(totals) {
  const perfil = calcularPerfil(totals);

  let el = document.getElementById('profile-reveal');
  if (!el) {
    el = document.createElement('div');
    el.id = 'profile-reveal';
    el.className = 'profile-reveal';
    // Insertar antes de las barras
    const barCard = document.querySelector('#screen-results .bar-chart')?.closest('.card');
    if (barCard) barCard.parentNode.insertBefore(el, barCard);
    else document.querySelector('.results-container')?.appendChild(el);
  }

  el.style.background = `linear-gradient(135deg, ${perfil.color}18 0%, rgba(10,14,26,0.9) 100%)`;
  el.style.borderColor = `${perfil.color}55`;

  el.innerHTML = `
    <span class="profile-emoji">${perfil.emoji}</span>
    <div class="profile-label">Tu perfil de liderazgo</div>
    <div class="profile-name" style="color:${perfil.color}">${perfil.nombre}</div>
    <p class="profile-desc">${perfil.descripcion}</p>
    <div class="profile-dim">Dimensión dominante · ${perfil.dimension}</div>
  `;
  el.classList.remove('hidden');
}

async function saveResults(totals) {
  const db = getClient();
  const perfil = calcularPerfil(totals);
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
