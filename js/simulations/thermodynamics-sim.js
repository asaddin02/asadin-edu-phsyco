// Asadin Edu Physics · Interactive Simulation: Thermodynamic Cycles & Carnot Heat Engine Lab

export class ThermodynamicsSimulation {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.animId = null;

    this.params = {
      Th: 600, // Kelvin (Hot reservoir)
      Tc: 300, // Kelvin (Cold reservoir)
      speed: 1
    };

    this.state = {
      progress: 0, // 0 to 4 (stages of cycle)
      running: true
    };
  }

  init(canvas, hudElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.hudElement = hudElement;

    this.resize();
    window.addEventListener('resize', this.onResize);
    this.loop();
  }

  onResize = () => {
    this.resize();
  };

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.resetTransform();
    this.ctx.scale(dpr, dpr);
    this.updateHUD();
  }

  updateHUD() {
    if (!this.hudElement) return;
    const eta = ((1 - this.params.Tc / this.params.Th) * 100).toFixed(1);
    const Qh = (this.params.Th * 1.5).toFixed(0);
    const Qc = (this.params.Tc * 1.5).toFixed(0);
    const Wnet = (Qh - Qc).toFixed(0);

    const stages = [
      '1. Ekspansi Isotermal (Suhu T_H, Kalor Q_H Masuk)',
      '2. Ekspansi Adiabatik (Q = 0, Suhu Turun ke T_C)',
      '3. Kompresi Isotermal (Suhu T_C, Kalor Q_C Dibuang)',
      '4. Kompresi Adiabatik (Q = 0, Suhu Naik ke T_H)'
    ];
    const currentStage = stages[Math.floor(this.state.progress) % 4];

    this.hudElement.innerHTML = `
      <div class="hud-line"><span>Suhu Panas (T_H):</span> <span class="hud-val" style="color: #ff5858">${this.params.Th} K</span></div>
      <div class="hud-line"><span>Suhu Dingin (T_C):</span> <span class="hud-val" style="color: #00f2fe">${this.params.Tc} K</span></div>
      <div class="hud-line"><span>Efisiensi Carnot (η):</span> <span class="hud-val" style="color: #f6d365">${eta}%</span></div>
      <div class="hud-line"><span>Kerja Bersih (W_net):</span> <span class="hud-val">${Wnet} J</span></div>
      <div class="hud-line"><span>Tahap Aktif:</span> <span class="hud-val" style="font-size: 0.75rem">${currentStage}</span></div>
    `;
  }

  update(dt) {
    if (!this.state.running) return;
    this.state.progress = (this.state.progress + dt * 0.8 * this.params.speed) % 4;
    this.updateHUD();
  }

  draw() {
    if (!this.ctx || !this.canvas) return;
    const w = this.canvas.getBoundingClientRect().width;
    const h = this.canvas.getBoundingClientRect().height;

    this.ctx.clearRect(0, 0, w, h);

    const ox = 70;
    const oy = h - 60;
    const pw = w - 140;
    const ph = h - 120;

    // 1. Draw P-V Coordinate Axes
    this.ctx.strokeStyle = '#94a3b8';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    // Pressure P (vertical axis)
    this.ctx.moveTo(ox, 40);
    this.ctx.lineTo(ox, oy);
    // Volume V (horizontal axis)
    this.ctx.lineTo(ox + pw, oy);
    this.ctx.stroke();

    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '12px Inter, sans-serif';
    this.ctx.fillText('Tekanan (P)', ox - 10, 30);
    this.ctx.fillText('Volume (V)', ox + pw + 10, oy + 4);

    // 2. Define Carnot 4 key state points (A -> B -> C -> D)
    const ptA = { x: ox + pw * 0.15, y: oy - ph * 0.85 }; // State A
    const ptB = { x: ox + pw * 0.45, y: oy - ph * 0.55 }; // State B
    const ptC = { x: ox + pw * 0.85, y: oy - ph * 0.20 }; // State C
    const ptD = { x: ox + pw * 0.35, y: oy - ph * 0.35 }; // State D

    // 3. Draw Closed PV Carnot Cycle Loop
    this.ctx.beginPath();
    this.ctx.moveTo(ptA.x, ptA.y);
    // Path A -> B: Isotherm at Th (red curve)
    this.ctx.quadraticCurveTo((ptA.x + ptB.x) / 2, ptA.y + 20, ptB.x, ptB.y);
    // Path B -> C: Adiabat (steeper)
    this.ctx.quadraticCurveTo((ptB.x + ptC.x) / 2 + 10, (ptB.y + ptC.y) / 2 + 10, ptC.x, ptC.y);
    // Path C -> D: Isotherm at Tc (blue curve)
    this.ctx.quadraticCurveTo((ptC.x + ptD.x) / 2, ptC.y - 15, ptD.x, ptD.y);
    // Path D -> A: Adiabatic compression
    this.ctx.quadraticCurveTo((ptD.x + ptA.x) / 2 - 10, (ptD.y + ptA.y) / 2 - 10, ptA.x, ptA.y);
    this.ctx.closePath();

    // Fill work area
    this.ctx.fillStyle = 'rgba(0, 242, 254, 0.12)';
    this.ctx.fill();
    this.ctx.strokeStyle = '#00f2fe';
    this.ctx.lineWidth = 2.5;
    this.ctx.stroke();

    // Center Work Label W_net
    this.ctx.fillStyle = '#00f2fe';
    this.ctx.font = 'bold 13px Inter, sans-serif';
    this.ctx.fillText('Usaha W_net = ∮ P dV', ox + pw * 0.38, oy - ph * 0.45);

    // 4. Draw Current State Particle moving along cycle
    const stage = Math.floor(this.state.progress);
    const frac = this.state.progress - stage;
    let currX = 0, currY = 0;

    if (stage === 0) { // A to B
      currX = ptA.x + (ptB.x - ptA.x) * frac;
      currY = ptA.y + (ptB.y - ptA.y) * frac;
    } else if (stage === 1) { // B to C
      currX = ptB.x + (ptC.x - ptB.x) * frac;
      currY = ptB.y + (ptC.y - ptB.y) * frac;
    } else if (stage === 2) { // C to D
      currX = ptC.x + (ptD.x - ptC.x) * frac;
      currY = ptC.y + (ptD.y - ptC.y) * frac;
    } else { // D to A
      currX = ptD.x + (ptA.x - ptD.x) * frac;
      currY = ptD.y + (ptA.y - ptD.y) * frac;
    }

    this.ctx.save();
    this.ctx.shadowColor = '#f6d365';
    this.ctx.shadowBlur = 15;
    this.ctx.fillStyle = '#f6d365';
    this.ctx.beginPath();
    this.ctx.arc(currX, currY, 8, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();

    // State point labels A, B, C, D
    this.ctx.fillStyle = '#fff';
    this.ctx.font = 'bold 12px Inter, sans-serif';
    this.ctx.fillText('A (T_H)', ptA.x - 20, ptA.y - 10);
    this.ctx.fillText('B (T_H)', ptB.x + 8, ptB.y - 10);
    this.ctx.fillText('C (T_C)', ptC.x + 8, ptC.y + 16);
    this.ctx.fillText('D (T_C)', ptD.x - 30, ptD.y + 16);
  }

  loop = () => {
    this.update(0.018);
    this.draw();
    this.animId = requestAnimationFrame(this.loop);
  };

  destroy() {
    if (this.animId) cancelAnimationFrame(this.animId);
    window.removeEventListener('resize', this.onResize);
  }
}
