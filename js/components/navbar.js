// Asadin Edu Physics · Global Navbar Component

import { appState } from '../core/state.js';

export function renderNavbar(container) {
  const state = appState.getState();

  container.innerHTML = `
    <header class="navbar">
      <div class="nav-container">
        <!-- Brand -->
        <a href="#/" class="brand-link" id="nav-brand">
          <img src="./assets/brand/icon.svg" alt="Asadin Physics Logo" class="brand-logo-img" />
          <div class="brand-title-box">
            <span class="brand-name">ASADIN PHYSICS</span>
            <span class="brand-sub">Ensiklopedia & Lab Interaktif</span>
          </div>
        </a>

        <!-- Main Nav Links -->
        <ul class="nav-links" id="main-nav-links">
          <li><a href="#/" class="nav-link ${state.currentRoute === '/' ? 'active' : ''}" data-nav="home">Beranda</a></li>
          <li><a href="#/explore" class="nav-link ${state.currentRoute === '/explore' ? 'active' : ''}" data-nav="explore">Jelajah (Atlas)</a></li>
          <li><a href="#/equations" class="nav-link ${state.currentRoute === '/equations' ? 'active' : ''}" data-nav="equations">Persamaan</a></li>
          <li><a href="#/constants" class="nav-link ${state.currentRoute === '/constants' ? 'active' : ''}" data-nav="constants">Konstanta</a></li>
          <li><a href="#/experiments" class="nav-link ${state.currentRoute === '/experiments' ? 'active' : ''}" data-nav="experiments">Eksperimen</a></li>
          <li><a href="#/simulations" class="nav-link ${state.currentRoute === '/simulations' ? 'active' : ''}" data-nav="simulations">Lab Virtual</a></li>
          <li><a href="#/learn" class="nav-link ${state.currentRoute === '/learn' ? 'active' : ''}" data-nav="learn">Kurikulum</a></li>
          <li><a href="#/graph" class="nav-link ${state.currentRoute === '/graph' ? 'active' : ''}" data-nav="graph">Peta Konsep</a></li>
        </ul>

        <!-- Right Actions: Search & Mode Toggle -->
        <div class="nav-actions">
          <!-- Search Trigger Button -->
          <button class="search-trigger-btn" id="global-search-btn" title="Pencarian Cepat (Tekan /)">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Cari Fisika...</span>
            <kbd class="search-kbd">/</kbd>
          </button>

          <!-- Mode Toggle Pill: EXPLORE vs LEARN -->
          <div class="mode-toggle-group">
            <button class="mode-btn ${state.mode === 'explore' ? 'active' : ''}" id="mode-btn-explore" title="Jelajah Bebas Ensiklopedia">
              JELAJAH
            </button>
            <button class="mode-btn ${state.mode === 'learn' ? 'active' : ''}" id="mode-btn-learn" title="Jalur Pembelajaran Berjenjang">
              BELAJAR
            </button>
          </div>
        </div>
      </div>
    </header>
  `;

  // Attach event handlers
  const exploreBtn = container.querySelector('#mode-btn-explore');
  const learnBtn = container.querySelector('#mode-btn-learn');
  const searchBtn = container.querySelector('#global-search-btn');

  exploreBtn?.addEventListener('click', () => {
    appState.setState({ mode: 'explore' });
    window.location.hash = '#/explore';
  });

  learnBtn?.addEventListener('click', () => {
    appState.setState({ mode: 'learn' });
    window.location.hash = '#/learn';
  });

  searchBtn?.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('open-search'));
  });

  // Global keyboard shortcut '/' to open search
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('open-search'));
    }
  });
}
