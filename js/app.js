// Asadin Edu Physics · Main Application Entry & Controller

import { PhysicsRouter } from './core/router.js';
import { appState } from './core/state.js';
import { searchEngine } from './core/search.js';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';

import { renderHomePage } from './pages/home-page.js';
import { renderExplorePage } from './pages/explore-page.js';
import { renderEntityDetailPage } from './pages/entity-detail-page.js';
import { renderEquationsPage } from './pages/equations-page.js';
import { renderConstantsPage } from './pages/constants-page.js';
import { renderExperimentsPage } from './pages/experiments-page.js';
import { renderSimulationsPage } from './pages/simulations-page.js';
import { renderLearnPage } from './pages/learn-page.js';
import { renderGraphPage } from './pages/graph-page.js';
import { renderAboutPage } from './pages/about-page.js';

class AsadinPhysicsApp {
  constructor() {
    this.navSlot = document.getElementById('nav-slot');
    this.mainSlot = document.getElementById('main-slot');
    this.footerSlot = document.getElementById('footer-slot');

    this.searchModal = null;
    this.router = null;
  }

  init() {
    console.log('🚀 Initializing Asadin Edu Physics Application...');

    // 1. Render Global Shell Components
    renderNavbar(this.navSlot);
    renderFooter(this.footerSlot);
    this.setupSearchModal();

    // 2. Define SPA Routes
    const routes = [
      { path: '/', handler: (params) => this.renderPage(renderHomePage, params, '/') },
      { path: '/explore', handler: (params) => this.renderPage(renderExplorePage, params, '/explore') },
      { path: '/entity/:id', handler: (params) => this.renderPage(renderEntityDetailPage, params, '/entity') },
      { path: '/equations', handler: (params) => this.renderPage(renderEquationsPage, params, '/equations') },
      { path: '/constants', handler: (params) => this.renderPage(renderConstantsPage, params, '/constants') },
      { path: '/experiments', handler: (params) => this.renderPage(renderExperimentsPage, params, '/experiments') },
      { path: '/simulations', handler: (params) => this.renderPage(renderSimulationsPage, params, '/simulations') },
      { path: '/learn', handler: (params) => this.renderPage(renderLearnPage, params, '/learn') },
      { path: '/graph', handler: (params) => this.renderPage(renderGraphPage, params, '/graph') },
      { path: '/about', handler: (params) => this.renderPage(renderAboutPage, params, '/about') }
    ];

    this.router = new PhysicsRouter(routes, (notFoundPath) => {
      this.mainSlot.innerHTML = `
        <div class="content-wrap" style="padding: 100px 20px; text-align: center;">
          <h1 style="font-size: 3rem; margin-bottom: 12px; color: var(--cyan-bright);">404</h1>
          <h2 style="margin-bottom: 16px;">Halaman Tidak Ditemukan</h2>
          <p style="margin-bottom: 24px; color: var(--text-muted);">Jalur '${notFoundPath}' tidak terdaftar dalam katalog Asadin Physics.</p>
          <a href="#/" class="btn-primary">Kembali ke Beranda</a>
        </div>
      `;
    });

    // 3. Start Router
    this.router.init();

    // 4. Listen for route changes to update active nav state
    appState.subscribe((state) => {
      this.updateActiveNavPills(state.currentRoute);
    });
  }

  renderPage(pageRenderer, params, routePath) {
    appState.setState({ currentRoute: routePath });
    this.updateActiveNavPills(routePath);
    this.mainSlot.innerHTML = '';
    pageRenderer(this.mainSlot, params);
  }

  updateActiveNavPills(routePath) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${routePath}` || (routePath === '/' && href === '#/')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setupSearchModal() {
    const modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'search-modal-backdrop';
    modalBackdrop.innerHTML = `
      <div class="search-modal-box">
        <div class="search-input-row">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--cyan-bright);">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            id="modal-search-input" 
            class="search-main-input" 
            placeholder="Ketik konsep, rumus, partikel, atau konstanta... (Esc untuk tutup)" 
            autocomplete="off"
          />
          <kbd class="search-kbd" style="cursor: pointer;" id="close-modal-kbd">ESC</kbd>
        </div>
        <div class="search-results-list" id="modal-search-results">
          <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
            Ketik untuk mulai mencari di seluruh database fisika...
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalBackdrop);
    this.searchModal = modalBackdrop;

    const input = modalBackdrop.querySelector('#modal-search-input');
    const resultsContainer = modalBackdrop.querySelector('#modal-search-results');
    const closeKbd = modalBackdrop.querySelector('#close-modal-kbd');

    const openSearch = () => {
      modalBackdrop.classList.add('open');
      input.value = '';
      resultsContainer.innerHTML = `
        <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
          Ketik untuk mulai mencari di seluruh database fisika...
        </div>
      `;
      setTimeout(() => input.focus(), 50);
    };

    const closeSearch = () => {
      modalBackdrop.classList.remove('open');
    };

    window.addEventListener('open-search', openSearch);
    closeKbd?.addEventListener('click', closeSearch);

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeSearch();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeSearch();
      }
    });

    input?.addEventListener('input', (e) => {
      const q = e.target.value;
      if (!q.trim()) {
        resultsContainer.innerHTML = `
          <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
            Ketik untuk mulai mencari di seluruh database fisika...
          </div>
        `;
        return;
      }

      const results = searchEngine.search(q, { limit: 10 });
      if (results.length === 0) {
        resultsContainer.innerHTML = `
          <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
            Tidak ditemukan hasil untuk "<strong>${q}</strong>"
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = results.map(item => `
        <a href="${item.url}" class="search-result-item" data-url="${item.url}">
          <div class="search-item-left">
            <span class="search-item-title">${item.title}</span>
            <span class="search-item-sub">${item.subtitle || ''}</span>
          </div>
          <span class="search-item-badge">${item.badge}</span>
        </a>
      `).join('');

      resultsContainer.querySelectorAll('.search-result-item').forEach(link => {
        link.addEventListener('click', () => {
          closeSearch();
        });
      });
    });
  }
}

// Instantiate and start app on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  const app = new AsadinPhysicsApp();
  app.init();
});
