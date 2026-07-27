//updated 20260726

// 1. 各ファイルのデータを直接オブジェクトにマッピング
const LANGUAGES_CONFIG = {
    "ja": {
        name: "Japanese (日本語)",
        categories: window.japaneseCategories || []
    },
    "th": {
        name: "Thai (タイ語)",
        categories: window.thaiCategories || []
    }
};

// 状態管理
let currentLanguage = "";
let questions = []; 
let questionIndex = 0;
let selectedWords = [];
let shuffledWords = [];
let selectedQuestionCount = "10"; // 初期値: 10問

// スコアと復習データの追跡用
let correctCount = 0;           // 一発正解した数
let isFirstAttempt = true;      // その問題でまだミスしてないか判定用フラグ
let incorrectQuestions = [];    // 間違えた問題をストックする配列
let currentAudio = null;        // 再生中オーディオ保持用

// DOM要素のキャッシュ
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const appHeader = document.querySelector('.app-header');

const btnAudio = document.getElementById('btn-audio');

const languageSelect = document.getElementById('language-select');
const categorySelect = document.getElementById('category-select');
const qText = document.getElementById('q-text');
const hText = document.getElementById('h-text');
const answerArea = document.getElementById('answer-area');
const wordArea = document.getElementById('word-area');
const btnCheck = document.getElementById('btn-check');
const btnNext = document.getElementById('btn-next');
const feedbackMsg = document.getElementById('feedback-msg');

// リザルト・カウンター関係のDOM
const progressCounter = document.getElementById('progress-counter');
const resultScore = document.getElementById('result-score');
const resultComment = document.getElementById('result-comment');
const incorrectList = document.getElementById('incorrect-list');
const reviewSection = document.getElementById('review-section');

// 初期化
window.onload = () => {
    Object.keys(LANGUAGES_CONFIG).forEach(langKey => {
        const option = document.createElement('option');
        option.value = langKey;
        option.textContent = LANGUAGES_CONFIG[langKey].name;
        languageSelect.appendChild(option);
    });
    
    changeLanguage();

    // アコーディオン外タップ時に閉じるイベントリスナーを追加
    document.addEventListener('click', (e) => {
        const accordion = document.getElementById('count-accordion');
        if (accordion && !accordion.contains(e.target)) {
            accordion.classList.remove('open');
        }
    });
};

// 言語変更時
function changeLanguage() {
    currentLanguage = languageSelect.value;
    categorySelect.innerHTML = '';

    LANGUAGES_CONFIG[currentLanguage].categories.forEach((cat, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = cat.name;
        categorySelect.appendChild(option);
    });

    changeCategory();
}

// カテゴリ（テーマ）変更時
function changeCategory() {
    const categoryIndex = categorySelect.value;
    questionIndex = 0;

    if (LANGUAGES_CONFIG[currentLanguage] && LANGUAGES_CONFIG[currentLanguage].categories[categoryIndex]) {
        // 元データを破壊しないように複製
        const rawQuestions = [...LANGUAGES_CONFIG[currentLanguage].categories[categoryIndex].data];
        
        // ランダムシャッフル (Fisher-Yates)
        for (let i = rawQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [rawQuestions[i], rawQuestions[j]] = [rawQuestions[j], rawQuestions[i]];
        }

        // 選択された問題数に応じて切り出し (Allの場合は全問)
        if (selectedQuestionCount === 'all') {
            questions = rawQuestions;
        } else {
            const count = parseInt(selectedQuestionCount, 10);
            questions = rawQuestions.slice(0, count);
        }
    }
}

// トレーニング開始ボタンを押した時
function startTraining() {
    if (!questions || questions.length === 0) return;
    
    // スコア管理のリセット
    correctCount = 0;
    incorrectQuestions = [];
    questionIndex = 0;
    
    // 画面の切り替え
    if (appHeader) appHeader.style.display = 'none';
    startScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    
    initQuestion();
}

// 問題の初期化
function initQuestion() {
    if (!questions || questions.length === 0) return;

    const question = questions[questionIndex];
    qText.textContent = question.instruction; 
    hText.textContent = question.hint;        
    selectedWords = [];
    isFirstAttempt = true; // 挑戦フラグをセット
    
    // 現在の進捗を表示 (例: 1 / 10)
    progressCounter.textContent = `${questionIndex + 1} / ${questions.length}`;
    
    shuffledWords = [...question.answer].sort(() => Math.random() - 0.5);
    
    btnCheck.style.display = 'block';
    btnNext.style.display = 'none';
    if (btnAudio) btnAudio.style.display = 'none';
    feedbackMsg.textContent = '';
    feedbackMsg.className = 'feedback';

    render();
}

// 画面描画
function render() {
    answerArea.innerHTML = '';
    selectedWords.forEach((word, index) => {
        const chip = createChip(word, () => removeWord(index));
        answerArea.appendChild(chip);
    });

    wordArea.innerHTML = '';
    shuffledWords.forEach((wordObj, index) => {
        const isUsed = isWordUsed(wordObj, index);
        const chip = createChip(wordObj, () => addWord(wordObj, index));
        if (isUsed) chip.classList.add('used');
        wordArea.appendChild(chip);
    });
}

function createChip(wordObj, onClick) {
    const div = document.createElement('div');
    div.className = 'chip';
    
    const targetText = document.createElement('div');
    targetText.textContent = wordObj.t;
    div.appendChild(targetText);

    const phonText = document.createElement('div');
    phonText.className = 'phonetic';
    phonText.textContent = wordObj.p;
    div.appendChild(phonText);

    div.onclick = onClick;
    return div;
}

function addWord(wordObj, originalIndex) {
    if (isWordUsed(wordObj, originalIndex)) return;
    selectedWords.push({ ...wordObj, originalIndex });
    
    feedbackMsg.textContent = '';
    feedbackMsg.className = 'feedback';
    render();
}

function removeWord(index) {
    selectedWords.splice(index, 1);
    feedbackMsg.textContent = '';
    feedbackMsg.className = 'feedback';
    render();
}

function isWordUsed(wordObj, index) {
    return selectedWords.some(sw => sw.originalIndex === index);
}

function resetAnswer() {
    selectedWords = [];
    feedbackMsg.textContent = '';
    feedbackMsg.className = 'feedback';
    render();
}

function playCurrentAudio(e) {
    if (e) e.stopPropagation();

    if (!questions || questions.length === 0) return;
    const question = questions[questionIndex];
    const correctAnswer = question.answer.map(a => a.t).join('');
    
    speakText(correctAnswer, currentLanguage);
}

function checkAnswer() {
    if (!questions || questions.length === 0) return;
    
    const question = questions[questionIndex];
    const userAnswer = selectedWords.map(sw => sw.t).join('');
    const correctAnswer = question.answer.map(a => a.t).join('');
    const correctPronunciation = question.answer.map(a => a.p).filter(p => p).join(' ');

    if (userAnswer === correctAnswer) {
        feedbackMsg.textContent = "✔ CORRECT ! 🎉";
        feedbackMsg.className = "feedback correct";
        
        // 正解時は answerArea を正解文＋発音表記の構成に置き換え
        answerArea.innerHTML = `
            <div class="final-answer-container">
                <div class="final-answer-text">${correctAnswer}</div>
                <div class="final-answer-pronunciation">${correctPronunciation}</div>
            </div>
        `;

        btnCheck.style.display = 'none';
        btnNext.style.display = 'block';
        if (btnAudio) btnAudio.style.display = 'inline-block';

        if (isFirstAttempt) {
            correctCount++;
        }
    } else {
        feedbackMsg.textContent = "✖ INCORRECT - TRY AGAIN";
        feedbackMsg.className = "feedback incorrect";
        
        if (isFirstAttempt) {
            if (!incorrectQuestions.includes(question)) {
                incorrectQuestions.push(question);
            }
            isFirstAttempt = false; 
        }
    }
}

function nextQuestion() {
    questionIndex++;
    if (btnAudio) btnAudio.style.display = 'none';
    if (questionIndex >= questions.length) {
        showResult();
        return;
    }
    initQuestion();
}

// 結果画面の表示
function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    if (appHeader) appHeader.style.display = 'block';

    resultScore.textContent = `${correctCount} / ${questions.length}`;

    let comment = "";
    if (correctCount === questions.length) {
        comment = "Perfect! Your syntax memory is flawless. ⚡";
    } else if (correctCount >= 7) {
        comment = "Great job! You have a solid grasp of this structure.";
    } else if (correctCount >= 4) {
        comment = "Good effort. Let's review the mistakes and run it again.";
    } else {
        comment = "Keep practicing! Focus on the word order rules.";
    }
    resultComment.textContent = comment;

    // 間違えた問題のレビューリスト表示
    incorrectList.innerHTML = '';
    if (incorrectQuestions.length > 0) {
        reviewSection.style.display = 'block';
        incorrectQuestions.forEach(q => {
            const item = document.createElement('div');
            item.className = 'review-item';
            
            const fullAnswer = q.answer.map(a => a.t).join('');
            const fullPronunciation = q.answer.map(a => a.p).filter(p => p).join(' ');
            
            item.innerHTML = `
                <div class="review-instruction">➔ ${q.instruction}</div>
                <div class="review-hint">${q.hint}</div>
                <div class="review-answer">${fullAnswer}</div>
                <div class="review-pronunciation">${fullPronunciation}</div>
            `;
            incorrectList.appendChild(item);
        });
    } else {
        reviewSection.style.display = 'none';
    }
}

function backToStart() {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
    
    if (appHeader) appHeader.style.display = 'block';

    changeCategory();
}

function speakText(text, langCode) {
    if (!text) return;

    let shortLang = 'en';
    let fullLang = 'en-US';
    if (langCode === 'th') { shortLang = 'th'; fullLang = 'th-TH'; }
    if (langCode === 'ja') { shortLang = 'ja'; fullLang = 'ja-JP'; }

    // 既存再生の停止
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }

    const fallbackToWebSpeech = () => {
        if (!('speechSynthesis' in window)) return;

        const speak = () => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = fullLang;
            utterance.rate = 0.85;

            const voices = window.speechSynthesis.getVoices();
            const matchingVoice = voices.find(v => 
                v.lang === fullLang || 
                v.lang.replace('_', '-').startsWith(shortLang)
            );

            if (matchingVoice) {
                utterance.voice = matchingVoice;
            }

            window.speechSynthesis.speak(utterance);
        };

        if (window.speechSynthesis.getVoices().length === 0) {
            window.speechSynthesis.onvoiceschanged = () => {
                speak();
                window.speechSynthesis.onvoiceschanged = null;
            };
        } else {
            speak();
        }
    };

    if (!navigator.onLine) {
        fallbackToWebSpeech();
        return;
    }

    const encodedText = encodeURIComponent(text);
    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=${shortLang}&client=tw-ob`;

    const audio = new Audio();
    audio.referrerPolicy = 'no-referrer'; // GitHub Pagesからのリクエスト制限回避
    audio.src = ttsUrl;
    audio.playbackRate = 0.9;
    currentAudio = audio;

    audio.play().catch(e => {
        console.warn("Google TTS failed, falling back to Web Speech API:", e);
        if (currentAudio === audio) {
            currentAudio = null;
        }
        fallbackToWebSpeech();
    });
}

function confirmQuit() {
    const message = 
        "Quit training and return to menu?\n" +
        "（メニューに戻りますか？現在の進捗はリセットされます）\n" +
        "（ยกเลิกการฝึกและกลับสู่เมนู?）";

    if (confirm(message)) {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }

        quizScreen.style.display = 'none';
        resultScreen.style.display = 'none';
        startScreen.style.display = 'block';
        if (appHeader) appHeader.style.display = 'block';

        changeCategory();
    }
}

// アコーディオンの開閉トグル
function toggleCountAccordion(e) {
    if (e) e.stopPropagation();
    const accordion = document.getElementById('count-accordion');
    accordion.classList.toggle('open');
}

// 問題数を選択した時
function selectQuestionCount(val, labelText) {
    selectedQuestionCount = val;
    document.getElementById('selected-count-label').textContent = labelText;

    const options = document.querySelectorAll('.count-option');
    options.forEach(opt => {
        if (opt.getAttribute('data-value') === val) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });

    document.getElementById('count-accordion').classList.remove('open');

    changeCategory();
}