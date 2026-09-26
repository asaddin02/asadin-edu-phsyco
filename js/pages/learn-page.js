// Asadin Edu Physics · Learning Platform Page (SD, SMP, SMA, University, Educator)

import { CURRICULUM_DATA } from '../data/curriculum.js';
import { appState } from '../core/state.js';

export function renderLearnPage(container, params = {}) {
  let activeLevelId = params.level || appState.getState().activeLevel || 'sma';
  let activeLevel = CURRICULUM_DATA.levels.find(l => l.id === activeLevelId) || CURRICULUM_DATA.levels[2];

  // Sample Interactive Physics Quiz for the current level
  const quizBank = {
    sd: [
      {
        q: 'Ketika kamu mendorong mobil mainan di atas karpet berbulu tebal, mobil berhenti lebih cepat dibanding di atas keramik licin. Mengapa hal itu terjadi?',
        options: [
          'Karena karpet memiliki gaya gesek yang lebih besar yang memperlambat mobil.',
          'Karena gravitasi di atas karpet menjadi dua kali lipat lebih kuat.',
          'Karena energi mobil tiba-tiba lenyap ditelan karpet.',
          'Karena udara di atas karpet jauh lebih berat.'
        ],
        correct: 0,
        explanation: 'Permukaan karpet yang kasar memberikan gaya gesek (friction) lebih besar pada roda mobil mainan sehingga mengubah energi geraknya menjadi sedikit energi panas dan menghentikan mobil.'
      }
    ],
    smp: [
      {
        q: 'Sebuah balok ditarik ke kanan dengan gaya 25 N dan ditarik ke kiri dengan gaya 15 N. Jika massa balok adalah 2 kg, berapakah percepatan balok tersebut?',
        options: [
          '5 m/s² ke arah kanan',
          '20 m/s² ke arah kanan',
          '2.5 m/s² ke arah kiri',
          '10 m/s² ke arah kanan'
        ],
        correct: 0,
        explanation: 'Gaya neto adalah ∑F = 25 N - 15 N = 10 N ke kanan. Berdasarkan Hukum II Newton: a = ∑F / m = 10 N / 2 kg = 5 m/s² ke kanan.'
      }
    ],
    sma: [
      {
        q: 'Sebuah peluru ditembakkan dengan kecepatan awal v₀ pada sudut elevasi 45°. Di titik tertinggi lintasannya, manakah pernyataan yang BENAR?',
        options: [
          'Kecepatan peluru bernilai nol mutlak.',
          'Kecepatannya adalah v₀ cos 45° dan percepatannya tetap 9.8 m/s² ke bawah.',
          'Percepatan peluru tepat nol karena berada di titik puncak.',
          'Gaya gravitasi berhenti bekerja sesaat pada peluru.'
        ],
        correct: 1,
        explanation: 'Di titik puncak gerak parabola, hanya kecepatan vertikal (v_y) yang nol sesaat. Kecepatan horizontal (v_x = v₀ cos 45°) tetap konstan, dan percepatan gravitasi g tetap bekerja 9.8 m/s² ke arah bawah.'
      }
    ],
    university: [
      {
        q: 'Berdasarkan Teorema Noether dalam mekanika analitik Lagrangian, hukum kekekalan apakah yang merupakan akibat langsung dari simetri translasi waktu (time-translation invariance)?',
        options: [
          'Kekekalan Momentum Sudut',
          'Kekekalan Energi Total Sistem',
          'Kekekalan Muatan Listrik',
          'Kekekalan Massa Inersial'
        ],
        correct: 1,
        explanation: 'Teorema Noether menyatakan bahwa setiap simetri kontinu pada aksi Lagrangian menghasilkan kuantitas kekal: translasi waktu menghasilkan kekekalan energi, translasi spasial menghasilkan kekekalan momentum linear, dan rotasi menghasilkan kekekalan momentum sudut.'
      }
    ],
    educator: [
      {
        q: 'Bagaimana pendekatan pedagogis terbaik dalam mengatasi miskonsepsi siswa bahwa "benda yang bergerak selalu memiliki gaya neto yang mendorongnya"?',
        options: [
          'Menyuruh siswa menghafal teks Hukum I Newton berulang-ulang.',
          'Menggunakan model Predict-Observe-Explain (POE) dengan demonstrasi kereta luncur di atas rel bantalan udara (air-track) tanpa gesekan.',
          'Memberikan latihan soal hitungan angka sebanyak mungkin.',
          'Menjelaskan bahwa pandangan tersebut tidak apa-apa karena intuitif.'
        ],
        correct: 1,
        explanation: 'Miskonsepsi Aristotelian sangat kuat berakar pada pengalaman sehari-hari yang penuh gesekan. Demonstrasi meja menggunakan bantalan udara (air track) atau simulasi hampa udara memaksa kognitif siswa menyaksikan benda meluncur konstan tanpa dorongan gaya eksternal.'
      }
    ]
  };

  function render() {
    container.innerHTML = `
      <div class="content-wrap" style="padding-top: 36px; padding-bottom: 80px;">
        <!-- Header -->
        <div style="margin-bottom: 24px;">
          <div style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; background: rgba(56, 239, 125, 0.1); border-radius: var(--radius-full); color: var(--emerald-neon); font-size: 0.78rem; font-weight: 700; margin-bottom: 10px;">
            KURIKULUM BERJENJANG ASADIN EDU
          </div>
          <h1 style="font-size: 2.2rem; margin-bottom: 8px;">Jalur Belajar Fisika: Dari Intuisi Hingga Analitik</h1>
          <p>Pilih tingkat pendidikan Anda untuk mengikuti alur pembelajaran yang dirancang secara pedagogis dan terstruktur.</p>
        </div>

        <!-- Level Selector Tabs -->
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 32px;">
          ${CURRICULUM_DATA.levels.map(lvl => `
            <button 
              class="btn-secondary ${lvl.id === activeLevel.id ? 'btn-primary' : ''}" 
              data-lvl-id="${lvl.id}"
              style="padding: 10px 20px; font-size: 0.9rem;"
            >
              ${lvl.title}
            </button>
          `).join('')}
        </div>

        <!-- Active Level Overview Banner -->
        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 30px; margin-bottom: 36px; position: relative;">
          <span style="display: inline-block; font-size: 0.8rem; font-weight: 700; color: ${activeLevel.color}; background: ${activeLevel.color}22; padding: 4px 12px; border-radius: var(--radius-full); margin-bottom: 10px;">
            ${activeLevel.badge}
          </span>
          <h2 style="font-size: 1.8rem; margin-bottom: 6px;">${activeLevel.title}</h2>
          <div style="font-size: 1.05rem; color: var(--cyan-bright); margin-bottom: 12px;">${activeLevel.subtitle}</div>
          <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); max-width: 800px;">
            ${activeLevel.description}
          </p>
        </div>

        <!-- Modules List -->
        <div style="display: flex; flex-direction: column; gap: 28px; margin-bottom: 48px;">
          ${activeLevel.modules.map((mod, idx) => `
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 28px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="font-size: 2rem;">${mod.icon}</span>
                  <div>
                    <span style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Modul ${idx + 1}</span>
                    <h3 style="font-size: 1.35rem; color: #fff;">${mod.title}</h3>
                  </div>
                </div>
                <span class="subtag" style="color: var(--cyan-bright); font-family: var(--font-mono);">${mod.duration}</span>
              </div>

              <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 20px;">
                ${mod.summary}
              </p>

              <!-- Lessons within module -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px;">
                ${mod.lessons.map(l => `
                  <div style="background: rgba(0, 0, 0, 0.35); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column;">
                    <h4 style="font-size: 1.05rem; color: #fff; margin-bottom: 10px;">${l.title}</h4>
                    
                    <div style="margin-bottom: 12px;">
                      <strong style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted);">Konsep Kunci:</strong>
                      <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px;">
                        ${l.concepts.map(c => `<span class="subtag">${c}</span>`).join('')}
                      </div>
                    </div>

                    <div style="background: rgba(0, 242, 254, 0.05); border-left: 3px solid var(--cyan-bright); padding: 10px 14px; border-radius: 4px; font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 12px;">
                      <strong>Takeaway Utama:</strong><br/>
                      ${l.takeaway}
                    </div>

                    ${l.activity ? `
                      <div style="background: rgba(246, 211, 101, 0.05); border-left: 3px solid var(--amber-solar); padding: 10px 14px; border-radius: 4px; font-size: 0.85rem; color: var(--text-secondary); margin-top: auto;">
                        <strong>Aktivitas Mandiri / Meja:</strong><br/>
                        ${l.activity}
                      </div>
                    ` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Interactive Self-Check Quiz Section -->
        <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 32px;" id="quiz-section-box">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span style="font-size: 1.5rem;">🎯</span>
            <h3 style="font-size: 1.3rem;">Uji Pemahaman Konseptual (${activeLevel.badge})</h3>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 20px;">
            Jawab pertanyaan berikut untuk mengevaluasi pemahaman Anda:
          </p>

          ${(quizBank[activeLevel.id] || []).map((qItem, qIdx) => `
            <div class="quiz-question-box" data-qidx="${qIdx}">
              <div style="font-weight: 600; font-size: 1.05rem; color: #fff; margin-bottom: 14px;">
                ${qItem.q}
              </div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
                ${qItem.options.map((opt, optIdx) => `
                  <button 
                    class="quiz-option-btn" 
                    data-qidx="${qIdx}" 
                    data-optidx="${optIdx}"
                    style="text-align: left; background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px 16px; color: var(--text-primary); font-size: 0.9rem; cursor: pointer; transition: all var(--trans-fast);"
                  >
                    ${String.fromCharCode(65 + optIdx)}. ${opt}
                  </button>
                `).join('')}
              </div>
              <div class="quiz-feedback-box" style="display: none; padding: 14px 18px; border-radius: var(--radius-sm); font-size: 0.9rem; line-height: 1.6;"></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Listeners for level tabs
    const lvlButtons = container.querySelectorAll('button[data-lvl-id]');
    lvlButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-lvl-id');
        activeLevelId = id;
        activeLevel = CURRICULUM_DATA.levels.find(l => l.id === id);
        appState.setState({ activeLevel: id });
        render();
      });
    });

    // Quiz Options Handlers
    const optionButtons = container.querySelectorAll('.quiz-option-btn');
    optionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const qidx = parseInt(btn.getAttribute('data-qidx'), 10);
        const optidx = parseInt(btn.getAttribute('data-optidx'), 10);
        const question = quizBank[activeLevel.id][qidx];
        const qBox = container.querySelector(`.quiz-question-box[data-qidx="${qidx}"]`);
        const feedback = qBox?.querySelector('.quiz-feedback-box');

        const allOpts = qBox.querySelectorAll('.quiz-option-btn');
        allOpts.forEach(b => {
          b.disabled = true;
          b.style.cursor = 'default';
        });

        if (feedback) {
          feedback.style.display = 'block';
          if (optidx === question.correct) {
            btn.style.background = 'rgba(56, 239, 125, 0.2)';
            btn.style.borderColor = 'var(--emerald-neon)';
            btn.style.color = '#fff';
            feedback.style.background = 'rgba(56, 239, 125, 0.1)';
            feedback.style.border = '1px solid var(--emerald-neon)';
            feedback.style.color = '#fff';
            feedback.innerHTML = `<strong>Jawaban Benar! 🎉</strong><br/>${question.explanation}`;
          } else {
            btn.style.background = 'rgba(255, 65, 108, 0.2)';
            btn.style.borderColor = '#ff416c';
            btn.style.color = '#fff';
            allOpts[question.correct].style.background = 'rgba(56, 239, 125, 0.2)';
            allOpts[question.correct].style.borderColor = 'var(--emerald-neon)';
            feedback.style.background = 'rgba(255, 65, 108, 0.1)';
            feedback.style.border = '1px solid #ff416c';
            feedback.style.color = '#fff';
            feedback.innerHTML = `<strong>Kurang Tepat.</strong> Jawaban yang benar adalah <strong>${String.fromCharCode(65 + question.correct)}</strong>.<br/>${question.explanation}`;
          }
        }
      });
    });
  }

  render();
}
