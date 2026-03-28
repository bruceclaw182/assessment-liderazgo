# Assessment Center — Liderazgo Emocional

Interactive workshop assessment app for Rick's "Liderazgo Emocional" executive workshop.

**6 equipos escanean QR → leen caso → eligen decisión → ven su perfil de liderazgo**

---

## 🚀 Deploy Checklist

### 1. Crear proyecto Supabase (gratis)
1. Ir a https://supabase.com y crear cuenta
2. New Project → nombrarlo "assessment-liderazgo"
3. Ir a **SQL Editor** y ejecutar este SQL:

```sql
CREATE TABLE equipos (
  id SERIAL PRIMARY KEY,
  codigo TEXT UNIQUE NOT NULL,
  caso_id INTEGER NOT NULL,
  nombre_equipo TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE respuestas (
  id SERIAL PRIMARY KEY,
  equipo_id INTEGER REFERENCES equipos(id),
  pregunta_num INTEGER NOT NULL,
  decision_letra TEXT NOT NULL,
  empatia INTEGER NOT NULL,
  asertividad INTEGER NOT NULL,
  ie INTEGER NOT NULL,
  cohesion INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

4. En **Settings → API** copiar:
   - `Project URL` → pegar en `js/supabase.js` como `SUPABASE_URL`
   - `anon public` key → pegar en `js/supabase.js` como `SUPABASE_ANON_KEY`

### 2. Deploy a Vercel (gratis)
1. Subir carpeta `assessment-liderazgo/` a GitHub
2. Ir a https://vercel.com → New Project → Import from GitHub
3. Deploy会自动 → obtener URL (ej: `https://assessment-liderazgo.vercel.app`)

### 3. Actualizar URLs
En `js/supabase.js`:
```javascript
const SUPABASE_URL = 'https://xxxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGc...';
```

En `js/qr.js`:
```javascript
const BASE_URL = 'https://assessment-liderazgo.vercel.app';
```

En `qr-print.html` línea near bottom:
```javascript
const VERCEL_URL = 'https://assessment-liderazgo.vercel.app';
```

### 4. Generar e imprimir QR codes
1. Abrir `https://assessment-liderazgo.vercel.app/qr-print.html`
2. Actualizar `VERCEL_URL` en qr-print.html con la URL real de Vercel
3. Recargar y click "Imprimir Códigos QR"
4. Cortar y entregar 1 QR a cada equipo

---

## 📱 Para el día del taller

### Participantes (cada equipo):
1. Escanear QR con celular
2. Ingresar código de equipo (EQ1, EQ2... EQ6)
3. Leer caso y elegir decisión
4. Ver su perfil de liderazgo

### Rick (facilitador):
1. Abrir `https://assessment-liderazgo.vercel.app/facilitator.html`
2. Ver resultados en tiempo real mientras equipos completan

---

## 📁 Estructura del proyecto

```
assessment-liderazgo/
├── index.html          # SPA principal (todas las pantallas)
├── qr-print.html       # Página para imprimir QRs
├── facilitator.html    # Vista del facilitador (standalone)
├── results.html        # Página de resultados (standalone)
├── game.html           # Pantalla del juego (standalone)
├── css/styles.css      # Estilos mobile-first
├── js/
│   ├── app.js          # Lógica principal
│   ├── cases.js        # Los 6 casos completos
│   ├── supabase.js     # Cliente Supabase
│   └── qr.js           # Generación de QR
└── vercel.json         # Config deploy
```

---

## 🔢 Los 6 casos

| # | Título | Tema |
|---|--------|------|
| 1 | El Día que Dos Titanes se Rompieron | Conflicto entre empleados clave |
| 2 | Cuando el Trabajo Llega Roto desde Casa | Empleado con crisis personal |
| 3 | El Trimestre que Nadie Olvidará | Presión vs bienestar del equipo |
| 4 | Heredé un Velorio | Líder nuevo con equipo disfuncional |
| 5 | El Ascenso que Parte el Alma | Decisión difícil sobre promoción |
| 6 | El Rumor que lo Quemó Todo | Crisis reputacional interna |

---

## 📊 Perfiles de liderazgo

| Puntaje más alto | Perfil | Descripción |
|-----------------|--------|------------|
| Empatía | Líder Humano | Conecta profundamente, puede perder firmeza |
| Asertividad | Líder Ejecutor | Decisivo, puede ser percibido como frío |
| IE | Líder Consciente | Equilibra razón y corazón |
| Cohesión | Líder de Equipo | Construye sinergia, puede evitar conflictos |

---

_Wayne + BRUCE — 2026-03-27_
