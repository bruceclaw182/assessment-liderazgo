/**
 * Supabase client for Assessment Center
 * Configure: Replace YOUR_SUPABASE_URL and YOUR_SUPABASE_ANON_KEY
 * with your actual values from supabase.com/dashboard
 */

const SUPABASE_URL = 'https://ohpkpgtsgmwwcohunlhf.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_SdpPBGLKvRNpg5Q1Qa6uKQ_hsgReEmo';

// Load Supabase JS client from CDN
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js';
  script.onload = () => {
    console.log('[Supabase] Client loaded');
  };
  script.onerror = () => {
    console.warn('[Supabase] Failed to load from CDN. QR codes will use placeholder URL.');
  };
  document.head.appendChild(script);
})();

// SQL to run in Supabase Dashboard → SQL Editor:
//
// CREATE TABLE equipos (
//   id SERIAL PRIMARY KEY,
//   codigo TEXT UNIQUE NOT NULL,
//   caso_id INTEGER NOT NULL,
//   nombre_equipo TEXT,
//   created_at TIMESTAMP DEFAULT NOW()
// );
//
// CREATE TABLE respuestas (
//   id SERIAL PRIMARY KEY,
//   equipo_id INTEGER REFERENCES equipos(id),
//   pregunta_num INTEGER NOT NULL,
//   decision_letra TEXT NOT NULL,
//   empatia INTEGER NOT NULL,
//   asertividad INTEGER NOT NULL,
//   ie INTEGER NOT NULL,
//   cohesion INTEGER NOT NULL,
//   created_at TIMESTAMP DEFAULT NOW()
// );
//
// CREATE TABLE resultados (
//   id SERIAL PRIMARY KEY,
//   equipo_id INTEGER REFERENCES equipos(id),
//   empatia_total INTEGER,
//   asertividad_total INTEGER,
//   ie_total INTEGER,
//   cohesion_total INTEGER,
//   perfil_predominante TEXT,
//   created_at TIMESTAMP DEFAULT NOW()
// );
