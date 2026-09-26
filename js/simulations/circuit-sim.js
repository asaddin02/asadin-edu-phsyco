import { circuitModel } from './physics-models.js';
export class CircuitSimulation {
  constructor() { this.params = {voltage:12,r1:100,r2:200,topology:'series'}; }
  init(canvas,hudElement) {
    this.canvas=canvas; this.ctx=canvas.getContext('2d'); this.hudElement=hudElement;
    this.onResize=()=>this.resize(); window.addEventListener('resize',this.onResize); this.resize();
  }
  resize() {
    const {width,height}=this.canvas.getBoundingClientRect(), dpr=window.devicePixelRatio||1;
    this.canvas.width=width*dpr; this.canvas.height=height*dpr; this.ctx.setTransform(dpr,0,0,dpr,0,0); this.updateHUD();
  }
  updateHUD() {
    const {voltage,r1,r2,topology}=this.params; this.result=circuitModel(voltage,r1,r2,topology);
    const r=this.result;
    this.hudElement.innerHTML=`<div class="hud-line">R ekuivalen: <strong>${r.resistance.toFixed(2)} Ω</strong></div><div class="hud-line">Arus total: <strong>${r.current.toFixed(4)} A</strong></div><div class="hud-line">I₁ / I₂: <strong>${r.i1.toFixed(4)} / ${r.i2.toFixed(4)} A</strong></div><div class="hud-line">V₁ / V₂: <strong>${r.v1.toFixed(2)} / ${r.v2.toFixed(2)} V</strong></div><div class="hud-line">Daya total: <strong>${r.power.toFixed(3)} W</strong></div>`;
    this.draw();
  }
  draw() {
    const ctx=this.ctx,{width:w,height:h}=this.canvas.getBoundingClientRect();ctx.clearRect(0,0,w,h);
    const x1=35,x2=w-35,y1=h*.4,y2=h*.75;
    ctx.strokeStyle='#00f2fe';ctx.lineWidth=3;ctx.strokeRect(x1,y1,x2-x1,y2-y1);
    const resistor=(x,y,label)=>{ctx.fillStyle='#0c1220';ctx.fillRect(x-30,y-12,60,24);ctx.strokeStyle='#f6d365';ctx.strokeRect(x-30,y-12,60,24);ctx.fillStyle='#fff';ctx.font='12px monospace';ctx.textAlign='center';ctx.fillText(label,x,y-20);};
    resistor(w/2,y1,`R₁ ${this.params.r1} Ω`);
    if(this.params.topology==='parallel') {const ym=(y1+y2)/2;ctx.beginPath();ctx.moveTo(x1,ym);ctx.lineTo(x2,ym);ctx.stroke();resistor(w/2,ym,`R₂ ${this.params.r2} Ω`);}
    else {
      const y=(y1+y2)/2;ctx.fillStyle='#0c1220';ctx.fillRect(x2-12,y-30,24,60);ctx.strokeStyle='#f6d365';ctx.strokeRect(x2-12,y-30,24,60);
      ctx.fillStyle='#fff';ctx.textAlign='right';ctx.fillText(`R₂ ${this.params.r2} Ω`,x2-18,y);ctx.textAlign='center';
    }
    ctx.fillStyle='#0c1220';ctx.fillRect(w/2-25,y2-15,50,30);ctx.strokeStyle='#38ef7d';ctx.beginPath();ctx.moveTo(w/2-5,y2-15);ctx.lineTo(w/2-5,y2+15);ctx.moveTo(w/2+5,y2-8);ctx.lineTo(w/2+5,y2+8);ctx.stroke();
    ctx.fillStyle='#fff';ctx.fillText(`${this.params.voltage} V DC`,w/2,y2+35);
    ctx.fillText(this.params.topology==='series'?'Seri: I₁ = I₂':'Paralel: V₁ = V₂',w/2,y1-65);
  }
  destroy() { window.removeEventListener('resize',this.onResize); }
}
