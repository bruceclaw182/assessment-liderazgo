/**
 * Assessment Center - Liderazgo Emocional
 * QR Code Generation — Complete Working Implementation
 * Library: qrcode.js loaded from CDN in qr-print.html
 */

'use strict';

const BASE_URL = 'https://assessment-liderazgo.vercel.app'; // Rick: replace after Vercel deploy

const TEAMS = ['EQ1','EQ2','EQ3','EQ4','EQ5','EQ6'];

/**
 * Generate QR codes for all 6 teams
 * Call this from qr-print.html after DOM is ready
 */
function generateAllQRCodes(vercelUrl) {
  const base = vercelUrl || BASE_URL;
  const grid = document.getElementById('qr-grid');
  if (!grid) return;

  grid.innerHTML = '';

  TEAMS.forEach(team => {
    const url = `${base}/?equipo=${team}`;
    const card = document.createElement('div');
    card.className = 'qr-card';
    card.innerHTML = `
      <h3 class="qr-team-name">Equipo ${team}</h3>
      <canvas id="qr-canvas-${team}" class="qr-canvas"></canvas>
      <p class="qr-url">${url}</p>
    `;
    grid.appendChild(card);

    // Generate QR onto canvas
    if (typeof QRCode !== 'undefined') {
      QRCode.toCanvas(document.getElementById(`qr-canvas-${team}`), url, {
        width: 180,
        margin: 2,
        color: { dark: '#1a237e', light: '#ffffff' }
      }).catch(err => console.error('[QR] Error generating', team, err));
    }
  });
}

/**
 * Generate single QR for a team
 */
function generateSingleQR(teamCode, canvasId, vercelUrl) {
  const base = vercelUrl || BASE_URL;
  const url = `${base}/?equipo=${teamCode}`;
  if (typeof QRCode !== 'undefined') {
    QRCode.toCanvas(document.getElementById(canvasId), url, {
      width: 200,
      margin: 2,
      color: { dark: '#1a237e', light: '#ffffff' }
    });
  }
}
