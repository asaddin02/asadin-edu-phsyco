// Asadin Edu Physics · Home Page

import { PHYSICS_DOMAINS } from '../data/domains.js';
import { PHYSICS_ENTITIES } from '../data/entities.js';
import { PHYSICAL_CONSTANTS } from '../data/constants.js';
import { PHYSICS_EQUATIONS } from '../data/equations.js';

export function renderHomePage(container) {
  // Select featured domains and entities
  const featuredDomains = PHYSICS_DOMAINS.slice(0, 8);
  const featuredEntities = PHYSICS_ENTITIES.slice(0, 6);

  container.innerHTML = `
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="content-wrap">
        <div class="hero-badge">
          <span>🌌</span>
          <span>Eksplorasi Realitas Fisik dari Skala Subatomik hingga Kosmos</span>
        </div>

        <h1 class="hero-title">
          Bagaimana Alam Bekerja: Materi, Energi, Ruang & Waktu
        </h1>

        <p class="hero-desc">
          Bukan sekadar rumus atau bank soal. <strong>Asadin Edu Physics</strong> adalah ensiklopedia fisika interaktif komprehensif dan laboratorium virtual terbuka untuk menjelajahi hukum-hukum fundamental yang mengatur alam semesta.
        </p>

        <div class="hero-cta-group">
          <a href="#/explore" class="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>Jelajahi Atlas Fisika</span>
          </a>

          <a href="#/simulations" class="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Buka Lab Virtual (12 Simulasi)</span>
          </a>

          <a href="#/learn" class="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Alur Belajar SD – Kuliah</span>
          </a>
        </div>

        <!-- Quick Stats Bar -->
        <div class="hero-stats-row">
          <div class="stat-item">
            <span class="stat-num">28</span>
            <span class="stat-label">Domain Fisika Lengkap</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">14</span>
            <span class="stat-label">Tipe Entitas Fisis</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">12</span>
            <span class="stat-label">Simulasi Interaktif Real-Time</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">CODATA</span>
            <span class="stat-label">Akurasi Konstanta Standar SI</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE DOMAINS SECTION -->
    <section style="padding: 40px 0 60px;">
      <div class="content-wrap">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;">
          <div>
            <h2 style="font-size: 1.8rem; margin-bottom: 6px;">Peta Domain Fisika Utama</h2>
            <p>Dari kinematika mekanika klasik hingga teori relativitas dan mekanika kuantum.</p>
          </div>
          <a href="#/explore" style="font-weight: 600; font-size: 0.92rem; display: inline-flex; align-items: center; gap: 4px;">
            Lihat Semua 28 Domain ➔
          </a>
        </div>

        <div class="domains-grid">
          ${featuredDomains.map(d => `
            <a href="#/explore?domain=${d.id}" class="domain-card" style="--card-accent: ${d.color};">
              <div class="domain-card-header">
                <span class="domain-card-icon">${d.icon}</span>
                <span class="domain-scale-tag">${d.scale}</span>
              </div>
              <h3 class="domain-card-title">${d.name}</h3>
              <div class="domain-card-indo">${d.indonesianName}</div>
              <p class="domain-card-desc">${d.description}</p>
              <div class="domain-subtags">
                ${d.subdomains.slice(0, 3).map(s => `<span class="subtag">${s}</span>`).join('')}
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FEATURED ENTITIES SPOTLIGHT (MULTI-LAYER EXPLANATION DEMO) -->
    <section style="padding: 40px 0 60px; background: rgba(0, 0, 0, 0.25);">
      <div class="content-wrap">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px;">
          <div>
            <h2 style="font-size: 1.8rem; margin-bottom: 6px;">Entitas Fisis Unggulan</h2>
            <p>Setiap konsep disajikan dalam 4 lapisan: <em>Sederhana ➔ Standar ➔ Lanjut ➔ Deep Dive</em>.</p>
          </div>
          <a href="#/explore" style="font-weight: 600; font-size: 0.92rem;">Buka Katalog Entitas ➔</a>
        </div>

        <div class="entities-grid">
          ${featuredEntities.map(e => `
            <a href="#/entity/${e.id}" class="entity-card">
              <div class="entity-card-top">
                <span class="entity-type-badge badge-${e.entityType.toLowerCase()}">${e.entityType}</span>
                ${e.symbol ? `<span class="entity-symbol">${e.symbol}</span>` : ''}
              </div>
              <h3 class="entity-card-title">${e.name}</h3>
              <div class="entity-card-indo">${e.indonesianName}</div>
              <p class="entity-card-summary">${e.summary}</p>
              <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 12px;">
                <span>Domain: ${e.domainId}</span>
                <span style="color: var(--cyan-bright); font-weight: 600;">Lihat Detail ➔</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- INTERACTIVE LABS SHOWCASE CALLOUT -->
    <section style="padding: 60px 0;">
      <div class="content-wrap">
        <div style="background: linear-gradient(135deg, rgba(16, 23, 42, 0.8) 0%, rgba(8, 11, 20, 0.95) 100%); border: 1px solid rgba(0, 242, 254, 0.25); border-radius: var(--radius-lg); padding: 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
          <div>
            <div style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; background: rgba(0, 242, 254, 0.1); border-radius: var(--radius-full); color: var(--cyan-bright); font-size: 0.78rem; font-weight: 700; margin-bottom: 16px;">
              VIRTUAL PHYSICS ENGINE
            </div>
            <h2 style="font-size: 2.2rem; margin-bottom: 14px;">Eksperimen Tanpa Batas di Layar Anda</h2>
            <p style="margin-bottom: 24px; line-height: 1.7;">
              Ubah kecepatan awal peluru, amati dilatasi waktu relativistik pada kelajuan 99% kecepatan cahaya, geser kutub magnet untuk membelokkan berkas elektron Lorentz, dan amati emisi foton kuantum atom hidrogen.
            </p>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <a href="#/simulations?sim=projectile" class="btn-primary">Uji Gerak Parabola</a>
              <a href="#/simulations?sim=relativity" class="btn-secondary">Uji Relativitas</a>
              <a href="#/simulations?sim=bohr" class="btn-secondary">Uji Kuantum Atom</a>
            </div>
          </div>
          <div style="background: radial-gradient(circle at center, #0f1c3f 0%, #060913 100%); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); padding: 24px; text-align: center;">
            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--cyan-bright); margin-bottom: 12px;">LABORATORIUM VIRTUAL INTERAKTIF</div>
            <div style="font-size: 3.5rem; margin-bottom: 14px;">🚀 🧲 ⚛️ 🔭</div>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">
              Didukung integrasi numerik Euler-Cromer & Runge-Kutta real-time dengan grafik energi, vektor gaya, dan telemetri langsung.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
