// App Logic for NCERT History Bilingual Quiz Application
// Supports Chapter 4 (Medium Level) and Chapter 5 (Hard Level)

// Auto-sync theme from localStorage
try {
  const savedTheme = localStorage.getItem('theme');
  const isDarkMode = localStorage.getItem('nextsem_dark_mode');
  if (savedTheme === 'light' || isDarkMode === 'false') {
    document.documentElement.classList.add('light-theme');
    document.body.classList.add('light-theme');
  }
} catch (e) {}

(function () {
  'use strict';

  // Global App State
  let state = {
    currentChapter: 'bio8', // Default to NCERT Class 12 Biology Chapter 8
    allQuestions: allChaptersData['bio8'].questions,
    filteredQuestions: [...allChaptersData['bio8'].questions],
    currentIndex: 0,
    userAnswers: {}, // { [questionId]: 'a' | 'b' | 'c' | 'd' }
    mode: 'practice', // 'practice' | 'exam'
    language: 'bilingual', // 'bilingual' | 'en' | 'hi'
    isReviewed: false,
    timerSeconds: 0,
    timerId: null
  };

  // DOM Elements
  const dom = {
    appRoot: document.getElementById('appRoot'),
    chapterSelector: document.getElementById('chapterSelector'),
    headerBadge: document.getElementById('headerBadge'),
    appTitle: document.getElementById('appTitle'),
    appSubtitleHi: document.getElementById('appSubtitleHi'),
    appSubtitleEn: document.getElementById('appSubtitleEn'),
    langSelector: document.getElementById('langSelector'),
    modeSelector: document.getElementById('modeSelector'),
    categoryFilter: document.getElementById('categoryFilter'),
    currentScoreText: document.getElementById('currentScoreText'),
    timerDisplay: document.getElementById('timerDisplay'),
    progressFill: document.getElementById('progressFill'),
    questionNavStrip: document.getElementById('questionNavStrip'),
    qBadge: document.getElementById('qBadge'),
    qCategory: document.getElementById('qCategory'),
    qTextEn: document.getElementById('qTextEn'),
    qTextHi: document.getElementById('qTextHi'),
    statementsBox: document.getElementById('statementsBox'),
    statementsList: document.getElementById('statementsList'),
    promptEn: document.getElementById('promptEn'),
    promptHi: document.getElementById('promptHi'),
    optionsGrid: document.getElementById('optionsGrid'),
    explanationCard: document.getElementById('explanationCard'),
    expSourceRef: document.getElementById('expSourceRef'),
    expEn: document.getElementById('expEn'),
    expHi: document.getElementById('expHi'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    clearBtn: document.getElementById('clearBtn'),
    submitExamBtn: document.getElementById('submitExamBtn'),
    resultModal: document.getElementById('resultModal'),
    modalPercentage: document.getElementById('modalPercentage'),
    modalFraction: document.getElementById('modalFraction'),
    modalHeading: document.getElementById('modalHeading'),
    modalFeedback: document.getElementById('modalFeedback'),
    metricCorrect: document.getElementById('metricCorrect'),
    metricWrong: document.getElementById('metricWrong'),
    metricSkipped: document.getElementById('metricSkipped'),
    reviewAnswersBtn: document.getElementById('reviewAnswersBtn'),
    restartTestBtn: document.getElementById('restartTestBtn')
  };

  // Initialization
  function init() {
    bindEvents();
    
    // Check URL parameters for chapter selection (e.g., ?chapter=math4 or ?chapter=bio8)
    const urlParams = new URLSearchParams(window.location.search);
    const urlChapter = urlParams.get('chapter');
    const initialChapter = (urlChapter && allChaptersData[urlChapter]) ? urlChapter : 'math4';
    
    loadChapter(initialChapter);
    startTimer();
    updateLanguageClass();
  }

  // Load Chapter Configuration
  function loadChapter(chapterKey) {
    state.currentChapter = chapterKey;
    const chData = allChaptersData[chapterKey];
    if (!chData) return;

    // Update URL query parameter cleanly without reloading page
    const url = new URL(window.location);
    url.searchParams.set('chapter', chapterKey);
    window.history.replaceState({}, '', url);

    // Update Header
    dom.headerBadge.innerHTML = `<span>${chData.badgeText || chData.titleEn}</span>`;
    dom.appTitle.textContent = chData.titleEn;
    dom.appSubtitleHi.textContent = chData.titleHi;
    dom.appSubtitleEn.textContent = `${chData.level} Multiple Choice Questions (Bilingual / द्विभाषी)`;

    // Update Chapter Selector UI
    dom.chapterSelector.querySelectorAll('.segment-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.chapter === chapterKey);
    });

    // Populate Category Filter Dropdown
    dom.categoryFilter.innerHTML = '';
    chData.categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.value;
      opt.textContent = `${cat.labelEn}`;
      dom.categoryFilter.appendChild(opt);
    });

    // Update Question Pool
    state.allQuestions = chData.questions;
    state.filteredQuestions = [...chData.questions];
    state.currentIndex = 0;
    state.userAnswers = {};
    state.isReviewed = false;

    renderNavStrip();
    renderCurrentQuestion();
    updateScoreWidget();
  }

  // Timer
  function startTimer() {
    if (state.timerId) clearInterval(state.timerId);
    state.timerSeconds = 0;
    state.timerId = setInterval(() => {
      state.timerSeconds++;
      const mins = String(Math.floor(state.timerSeconds / 60)).padStart(2, '0');
      const secs = String(state.timerSeconds % 60).padStart(2, '0');
      dom.timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  function stopTimer() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  // Event Listeners
  function bindEvents() {
    // Chapter Switcher
    dom.chapterSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      const chKey = btn.dataset.chapter;
      if (chKey !== state.currentChapter && allChaptersData[chKey]) {
        loadChapter(chKey);
        startTimer();
      }
    });

    // Language Switcher
    dom.langSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      state.language = btn.dataset.lang;
      dom.langSelector.querySelectorAll('.segment-btn').forEach(b => b.classList.toggle('active', b === btn));
      updateLanguageClass();
    });

    // Mode Switcher
    dom.modeSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      const mode = btn.dataset.mode;
      if (state.mode === mode) return;

      state.mode = mode;
      state.isReviewed = false;
      dom.modeSelector.querySelectorAll('.segment-btn').forEach(b => b.classList.toggle('active', b === btn));

      state.userAnswers = {};
      state.currentIndex = 0;
      startTimer();
      renderNavStrip();
      renderCurrentQuestion();
      updateScoreWidget();
    });

    // Category Filter
    dom.categoryFilter.addEventListener('change', (e) => {
      const cat = e.target.value;
      if (cat === 'all') {
        state.filteredQuestions = [...state.allQuestions];
      } else {
        state.filteredQuestions = state.allQuestions.filter(q => q.category === cat);
      }
      state.currentIndex = 0;
      renderNavStrip();
      renderCurrentQuestion();
      updateScoreWidget();
    });

    // Navigation Buttons
    dom.prevBtn.addEventListener('click', () => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderCurrentQuestion();
      }
    });

    dom.nextBtn.addEventListener('click', () => {
      if (state.currentIndex < state.filteredQuestions.length - 1) {
        state.currentIndex++;
        renderCurrentQuestion();
      }
    });

    dom.clearBtn.addEventListener('click', () => {
      const currentQ = state.filteredQuestions[state.currentIndex];
      if (!currentQ || state.isReviewed || (state.mode === 'practice' && state.userAnswers[currentQ.id])) {
        return;
      }
      delete state.userAnswers[currentQ.id];
      renderNavStrip();
      renderCurrentQuestion();
      updateScoreWidget();
    });

    dom.submitExamBtn.addEventListener('click', submitExam);

    // Modal Actions
    dom.reviewAnswersBtn.addEventListener('click', () => {
      dom.resultModal.classList.remove('active');
      state.isReviewed = true;
      state.currentIndex = 0;
      renderNavStrip();
      renderCurrentQuestion();
    });

    dom.restartTestBtn.addEventListener('click', () => {
      dom.resultModal.classList.remove('active');
      state.userAnswers = {};
      state.isReviewed = false;
      state.currentIndex = 0;
      startTimer();
      renderNavStrip();
      renderCurrentQuestion();
      updateScoreWidget();
    });
  }

  // Update Language Class
  function updateLanguageClass() {
    dom.appRoot.classList.remove('lang-en-only', 'lang-hi-only');
    if (state.language === 'en') {
      dom.appRoot.classList.add('lang-en-only');
    } else if (state.language === 'hi') {
      dom.appRoot.classList.add('lang-hi-only');
    }
  }

  // Render Navigator
  function renderNavStrip() {
    dom.questionNavStrip.innerHTML = '';
    state.filteredQuestions.forEach((q, index) => {
      const btn = document.createElement('button');
      btn.className = 'q-nav-btn';
      btn.textContent = index + 1;
      btn.type = 'button';
      btn.dataset.index = index;

      if (index === state.currentIndex) {
        btn.classList.add('active');
      }

      const ans = state.userAnswers[q.id];
      if (ans) {
        if (state.mode === 'practice' || state.isReviewed) {
          if (ans === q.correct) {
            btn.classList.add('answered-correct');
          } else {
            btn.classList.add('answered-wrong');
          }
        } else {
          btn.classList.add('attempted');
        }
      }

      btn.addEventListener('click', () => {
        state.currentIndex = index;
        renderCurrentQuestion();
      });

      dom.questionNavStrip.appendChild(btn);
    });
  }

  // Render Current Question
  function renderCurrentQuestion() {
    const total = state.filteredQuestions.length;
    if (total === 0) {
      dom.qTextEn.textContent = 'No questions available in this category.';
      dom.qTextHi.textContent = 'इस श्रेणी में कोई प्रश्न उपलब्ध नहीं है।';
      dom.optionsGrid.innerHTML = '';
      dom.statementsBox.style.display = 'none';
      dom.explanationCard.style.display = 'none';
      return;
    }

    const currentQ = state.filteredQuestions[state.currentIndex];

    // Meta
    dom.qBadge.textContent = `Question ${state.currentIndex + 1} of ${total}`;
    dom.qCategory.textContent = state.language === 'hi' 
      ? currentQ.categoryLabel.hi 
      : (state.language === 'en' ? currentQ.categoryLabel.en : `${currentQ.categoryLabel.en} / ${currentQ.categoryLabel.hi}`);

    // Progress Fill
    const progressPercent = ((state.currentIndex + 1) / total) * 100;
    dom.progressFill.style.width = `${progressPercent}%`;

    // Question Texts
    dom.qTextEn.textContent = currentQ.questionEn;
    dom.qTextHi.textContent = currentQ.questionHi;

    // Statements (for multi-statement questions)
    if (currentQ.statementsEn && currentQ.statementsEn.length > 0) {
      dom.statementsBox.style.display = 'block';
      dom.statementsList.innerHTML = '';
      currentQ.statementsEn.forEach((stEn, idx) => {
        const stHi = currentQ.statementsHi[idx];
        const item = document.createElement('div');
        item.className = 'statement-item';
        item.innerHTML = `
          <div class="st-en lang-en-item"><strong>${idx + 1}.</strong> ${stEn}</div>
          <div class="st-hi lang-hi-item"><strong>${idx + 1}.</strong> ${stHi}</div>
        `;
        dom.statementsList.appendChild(item);
      });
      dom.promptEn.textContent = currentQ.promptEn || '';
      dom.promptHi.textContent = currentQ.promptHi || '';
    } else {
      dom.statementsBox.style.display = 'none';
    }

    // Options Grid
    dom.optionsGrid.innerHTML = '';
    const selectedAnswer = state.userAnswers[currentQ.id];
    const isAnswered = selectedAnswer !== undefined;
    const showFeedback = (state.mode === 'practice' && isAnswered) || state.isReviewed;

    currentQ.options.forEach((opt) => {
      const optEl = document.createElement('div');
      optEl.className = 'option-item';
      optEl.dataset.key = opt.key;

      if (selectedAnswer === opt.key) {
        optEl.classList.add('selected');
      }

      if (showFeedback) {
        optEl.classList.add('locked');
        if (opt.key === currentQ.correct) {
          optEl.classList.add('correct');
        } else if (selectedAnswer === opt.key && selectedAnswer !== currentQ.correct) {
          optEl.classList.add('wrong');
        }
      }

      optEl.innerHTML = `
        <div class="option-key">${opt.key}</div>
        <div class="option-text-wrap">
          <div class="opt-en lang-en-item">${opt.textEn}</div>
          <div class="opt-hi lang-hi-item">${opt.textHi}</div>
        </div>
      `;

      optEl.addEventListener('click', () => {
        if (showFeedback && state.mode === 'practice') return;
        if (state.isReviewed) return;
        selectOption(opt.key);
      });

      dom.optionsGrid.appendChild(optEl);
    });

    // Explanation
    if (showFeedback) {
      dom.explanationCard.style.display = 'block';
      dom.expSourceRef.textContent = currentQ.sourceRef || '';
      dom.expEn.innerHTML = `<strong>English Solution:</strong> ${currentQ.explanationEn}`;
      dom.expHi.innerHTML = `<strong>हिन्दी व्याख्या:</strong> ${currentQ.explanationHi}`;
    } else {
      dom.explanationCard.style.display = 'none';
    }

    // Prev/Next & Submit Buttons
    dom.prevBtn.disabled = state.currentIndex === 0;
    const isLast = state.currentIndex === total - 1;

    if (state.mode === 'exam' && !state.isReviewed) {
      dom.submitExamBtn.style.display = 'inline-flex';
      dom.nextBtn.style.display = isLast ? 'none' : 'inline-flex';
    } else {
      dom.submitExamBtn.style.display = 'none';
      dom.nextBtn.style.display = 'inline-flex';
      dom.nextBtn.textContent = isLast ? 'Finish' : 'Next →';
    }

    renderNavStrip();
  }

  // Handle Option Selection
  function selectOption(key) {
    const currentQ = state.filteredQuestions[state.currentIndex];
    state.userAnswers[currentQ.id] = key;

    renderCurrentQuestion();
    updateScoreWidget();

    if (state.mode === 'exam' && state.currentIndex === state.filteredQuestions.length - 1) {
      dom.submitExamBtn.style.display = 'inline-flex';
    }
  }

  // Score Calculation
  function calculateScore() {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    state.filteredQuestions.forEach(q => {
      const userAns = state.userAnswers[q.id];
      if (!userAns) {
        skipped++;
      } else if (userAns === q.correct) {
        correct++;
      } else {
        wrong++;
      }
    });

    return {
      correct,
      wrong,
      skipped,
      total: state.filteredQuestions.length,
      percentage: state.filteredQuestions.length > 0 ? Math.round((correct / state.filteredQuestions.length) * 100) : 0
    };
  }

  function updateScoreWidget() {
    const total = state.filteredQuestions.length;
    const answeredCount = Object.keys(state.userAnswers).length;

    if (state.mode === 'practice' || state.isReviewed) {
      const score = calculateScore();
      dom.currentScoreText.textContent = `${score.correct} / ${total} (${score.percentage}%)`;
    } else {
      dom.currentScoreText.textContent = `${answeredCount} / ${total} Attempted`;
    }
  }

  // Submit Exam Mode
  function submitExam() {
    stopTimer();
    const stats = calculateScore();

    dom.modalPercentage.textContent = `${stats.percentage}%`;
    dom.modalFraction.textContent = `${stats.correct} / ${stats.total}`;
    dom.metricCorrect.textContent = stats.correct;
    dom.metricWrong.textContent = stats.wrong;
    dom.metricSkipped.textContent = stats.skipped;

    if (stats.percentage >= 80) {
      dom.modalHeading.textContent = "Outstanding Performance! 🏆";
      dom.modalFeedback.textContent = "You have an excellent grasp of the medieval European social orders and institutional concepts.";
    } else if (stats.percentage >= 50) {
      dom.modalHeading.textContent = "Good Effort! 📚";
      dom.modalFeedback.textContent = "Solid conceptual understanding. Review the explanations to reinforce medieval terminology and dates.";
    } else {
      dom.modalHeading.textContent = "Keep Practicing! 💡";
      dom.modalFeedback.textContent = "Review the three orders, manorial estates, and the 14th-century crisis to strengthen your score.";
    }

    dom.resultModal.classList.add('active');
  }

  // Kickstart
  document.addEventListener('DOMContentLoaded', init);
})();
