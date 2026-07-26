// 1. 各ファイルのデータを直接オブジェクトにマッピング
const LANGUAGES_CONFIG = {
    "ja": {
        name: "Japanese (日本語)",
        // 自動的に蓄積された配列を読み込む
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

// 【新設】スコアと復習データの追跡用
let correctCount = 0;           // 一発正解した数
let isFirstAttempt = true;      // その問題でまだミスしてないか判定用フラグ
let incorrectQuestions = [];    // 間違えた問題をストックする配列

// DOM要素のキャッシュ
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const appHeader = document.querySelector('.app-header'); // ヘッダー要素の追加キャッシュ

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

// 【新設】リザルト・カウンター関係のDOM
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
        // 元のデータを破壊しないように、シャッフル用のシャローコピー（配列の複製）を作成
        const rawQuestions = [...LANGUAGES_CONFIG[currentLanguage].categories[categoryIndex].data];
        
        // 読み込んだ問題の配列を完全にランダムにシャッフル (Fisher-Yates)
        for (let i = rawQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [rawQuestions[i], rawQuestions[j]] = [rawQuestions[j], rawQuestions[i]];
        }

        // シャッフルされた中から、先頭の10問だけを切り出す
        questions = rawQuestions.slice(0, 10);
    }
}

// 【新設】トレーニング開始ボタンを押した時
function startTraining() {
    if (!questions || questions.length === 0) return;
    
    // スコア管理のリセット
    correctCount = 0;
    incorrectQuestions = [];
    questionIndex = 0;
    
    // 画面の切り替え（トレーニング中はタイトルヘッダーを非表示）
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
    isFirstAttempt = true; // この問題への最初の挑戦フラグを立てる
    
    // 現在の進捗を表示 (例: 1 / 10)
    progressCounter.textContent = `${questionIndex + 1} / ${questions.length}`;
    
    shuffledWords = [...question.answer].sort(() => Math.random() - 0.5);
    
    btnCheck.style.display = 'block';
    btnNext.style.display = 'none';
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

function playCurrentAudio() {
    // イベントの伝播やデフォルト動作をストップ（誤動作防止）
    if (event) event.stopPropagation();

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

    if (userAnswer === correctAnswer) {
        // メッセージをより明確に表示
        feedbackMsg.textContent = "✔ CORRECT ! 🎉";
        feedbackMsg.className = "feedback correct";
        
        btnCheck.style.display = 'none';
        btnNext.style.display = 'block';
        if (btnAudio) btnAudio.style.display = 'inline-block';

        if (isFirstAttempt) {
            correctCount++;
        }
    } else {
        // メッセージをより明確に表示
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
    btnAudio.style.display = 'none';
    if (questionIndex >= questions.length) {
        // 10問終了したらリザルト画面を表示
        showResult();
        return;
    }
    initQuestion();
}

// 【新設】結果画面の生成と表示
function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    // リザルト画面でタイトルを再度見せたい場合は 'block' に設定
    if (appHeader) appHeader.style.display = 'block';

    // スコア表示
    resultScore.textContent = `${correctCount} / ${questions.length}`;

    // スコアに応じたメッセージ生成
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
            
            // 正解の文字列を構築
            const fullAnswer = q.answer.map(a => a.t).join('');
            
            item.innerHTML = `
                <div class="review-instruction">➔ ${q.instruction}</div>
                <div class="review-hint">${q.hint}</div>
                <div class="review-answer">${fullAnswer}</div>
            `;
            incorrectList.appendChild(item);
        });
    } else {
        reviewSection.style.display = 'none';
    }
}

// 【新設】メニューに戻る際、カテゴリを再読み込みして問題を再シャッフルさせる
function backToStart() {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
    
    // スタート画面に戻ったらタイトルを表示
    if (appHeader) appHeader.style.display = 'block';

    changeCategory(); // 次のターンのためにシャッフルした10問を裏で再用意
}

// 現在再生中の Audio インスタンス保持用（重なり防止）
let currentAudio = null;

function speakText(text, langCode) {
    if (!text) return;

    // 言語コードのマッピング
    let shortLang = 'en';
    let fullLang = 'en-US';
    if (langCode === 'th') { shortLang = 'th'; fullLang = 'th-TH'; }
    if (langCode === 'ja') { shortLang = 'ja'; fullLang = 'ja-JP'; }

    // 1. 既存の再生を停止（Web Speech API & Google TTS 両方）
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }

    // 2. Web Speech API へのフォールバック処理を関数化
    const fallbackToWebSpeech = () => {
        if (!('speechSynthesis' in window)) return;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = fullLang;
        utterance.rate = 0.85;

        // 利用可能な音声があればセット
        const voices = window.speechSynthesis.getVoices();
        const matchingVoice = voices.find(v => v.lang === fullLang || v.lang.startsWith(shortLang));
        if (matchingVoice) {
            utterance.voice = matchingVoice;
        }

        window.speechSynthesis.speak(utterance);
    };

    // 3. オフライン判定：ネット未接続なら即座に Web Speech API を実行
    if (!navigator.onLine) {
        fallbackToWebSpeech();
        return;
    }

    // 4. Google TTS で再生を試みる
    const encodedText = encodeURIComponent(text);
    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=${shortLang}&client=tw-ob`;

    currentAudio = new Audio(ttsUrl);
    currentAudio.playbackRate = 0.9;

    // ネットワークエラーやブロック等で再生失敗した場合にフォールバック発動
    currentAudio.play().catch(e => {
        console.warn("Google TTS failed, falling back to Web Speech API:", e);
        fallbackToWebSpeech();
    });
}

// トレーニングを途中で終了してスタート画面に戻る
function confirmQuit() {
  const message = 
    "Quit training and return to menu?\n" +
    "（メニューに戻りますか？現在の進捗はリセットされます）\n" +
    "（ยกเลิกการฝึกและกลับสู่เมนู?）";

  // iPhone / Android / PC 全ての標準ブラウザで共通動作
  if (confirm(message)) {
    // 再生中の音声を停止
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }

    // 画面切り替え（スタート画面へ戻り、タイトルを表示）
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
    if (appHeader) appHeader.style.display = 'block';

    // 次回のプレイに向けて問題を再シャッフル準備
    changeCategory();
  }
}