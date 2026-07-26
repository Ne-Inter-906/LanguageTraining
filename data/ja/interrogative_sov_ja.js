// カテゴリリストが未定義なら作成
window.japaneseCategories = window.japaneseCategories || [];

// リストにこのファイルのデータを追加
window.japaneseCategories.push({
    name: "Interrogative Question (疑問詞疑問文)",
    data: [
    // --- 既存の10問 ---
    {
        instruction: "Where are you going?",
        hint: "คุณจะไปไหนครับ",
        answer: [
            { t: "あなた", p: "anata" }, { t: "は", p: "wa" }, { t: "どこ", p: "doko" }, { t: "に", p: "ni" },
            { t: "行き", p: "iki" }, { t: "ます", p: "masu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "What did you eat for lunch?",
        hint: "มื้อเที่ยงทานอะไรครับ",
        answer: [
            { t: "昼ご飯", p: "hirugohan" }, { t: "に", p: "ni" }, { t: "何", p: "nani" }, { t: "を", p: "o" },
            { t: "食べ", p: "tabe" }, { t: "ました", p: "mashita" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "When will the train arrive?",
        hint: "รถไฟจะมาถึงเมื่อไหร่ครับ",
        answer: [
            { t: "電車", p: "densha" }, { t: "は", p: "wa" }, { t: "いつ", p: "itsu" }, { t: "到着", p: "touchaku" },
            { t: "し", p: "shi" }, { t: "ます", p: "masu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Who is that person?",
        hint: "คนนั้นคือใครครับ",
        answer: [
            { t: "あの", p: "ano" }, { t: "人", p: "hito" }, { t: "は", p: "wa" }, { t: "誰", p: "dare" },
            { t: "です", p: "desu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Whose bag is this?",
        hint: "นี่คือกระเป๋าของใครครับ",
        answer: [
            { t: "これ", p: "kore" }, { t: "は", p: "wa" }, { t: "誰", p: "dare" }, { t: "の", p: "no" },
            { t: "カバン", p: "kaban" }, { t: "です", p: "desu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Which bus goes to the station?",
        hint: "รถบัสคันไหนไปสถานีครับ",
        answer: [
            { t: "どの", p: "dono" }, { t: "バス", p: "basu" }, { t: "が", p: "ga" }, { t: "駅", p: "eki" },
            { t: "に", p: "ni" }, { t: "行き", p: "iki" }, { t: "ます", p: "masu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "How do you write this kanji?",
        hint: "คันจินี้เขียนยังไงครับ",
        answer: [
            { t: "この", p: "kono" }, { t: "漢字", p: "kanji" }, { t: "は", p: "wa" }, { t: "どう", p: "dou" },
            { t: "書き", p: "kaki" }, { t: "ます", p: "masu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Why did you buy this book?",
        hint: "ทำไมถึงซื้อหนังสือเล่มนี้ครับ",
        answer: [
            { t: "なぜ", p: "naze" }, { t: "この", p: "kono" }, { t: "本", p: "hon" }, { t: "を", p: "o" },
            { t: "買い", p: "kai" }, { t: "ました", p: "mashita" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "How many apples did you buy?",
        hint: "ซื้อแอปเปิ้ลมาเหลือกี่ลูกครับ / ซื้อแอปเปิ้ลมากี่ลูกครับ",
        answer: [
            { t: "リンゴ", p: "ringo" }, { t: "を", p: "o" }, { t: "いくつ", p: "ikutsu" },
            { t: "買い", p: "kai" }, { t: "ました", p: "mashita" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "What time does the meeting start?",
        hint: "การประชุมเริ่มกี่โมงครับ",
        answer: [
            { t: "会議", p: "kaigi" }, { t: "は", p: "wa" }, { t: "何時", p: "nanji" }, { t: "に", p: "ni" },
            { t: "始まり", p: "hajimari" }, { t: "ます", p: "masu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },

    // --- 追加の20問（11〜30問目） ---
    {
        instruction: "Where did you buy that shirt?",
        hint: "เสื้อตัวนั้นซื้อที่ไหนครับ",
        answer: [
            { t: "その", p: "sono" }, { t: "シャツ", p: "shatsu" }, { t: "は", p: "wa" }, { t: "どこ", p: "doko" },
            { t: "で", p: "de" }, { t: "買い", p: "kai" }, { t: "ました", p: "mashita" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Who did you watch the movie with?",
        hint: "ดูหนังกับใครครับ",
        answer: [
            { t: "誰", p: "dare" }, { t: "と", p: "to" }, { t: "映画", p: "eiga" }, { t: "を", p: "o" },
            { t: "見", p: "mi" }, { t: "ました", p: "mashita" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "How much is this coffee?",
        hint: "กาแฟนี้ราคาเท่าไหร่ครับ",
        answer: [
            { t: "この", p: "kono" }, { t: "コーヒー", p: "koohii" }, { t: "は", p: "wa" }, { t: "いくら", p: "ikura" },
            { t: "です", p: "desu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "What kind of music do you listen to?",
        hint: "ฟังเพลงแนวไหนครับ",
        answer: [
            { t: "どんな", p: "donna" }, { t: "音楽", p: "ongaku" }, { t: "を", p: "o" },
            { t: "聴き", p: "kiki" }, { t: "ます", p: "masu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Which one is your umbrella?",
        hint: "ร่มของคุณคืออันไหนครับ",
        answer: [
            { t: "あなた", p: "anata" }, { t: "の", p: "no" }, { t: "傘", p: "kasa" }, { t: "は", p: "wa" },
            { t: "どれ", p: "dore" }, { t: "です", p: "desu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "How long does it take to the airport?",
        hint: "ไปถึงสนามบินใช้เวลานานเท่าไหร่ครับ",
        answer: [
            { t: "空港", p: "kuukou" }, { t: "まで", p: "made" }, { t: "どのくらい", p: "donokurai" },
            { t: "かかり", p: "kakari" }, { t: "ます", p: "masu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Why are you studying Japanese?",
        hint: "ทำไมถึงเรียนภาษาญี่ปุ่นอยู่ครับ",
        answer: [
            { t: "なぜ", p: "naze" }, { t: "日本語", p: "nihongo" }, { t: "を", p: "o" }, { t: "勉強", p: "benkyou" },
            { t: "し", p: "shi" }, { t: "ている", p: "teiru" }, { t: "の", p: "no" }, { t: "です", p: "desu" },
            { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "What is inside this box?",
        hint: "ข้างในกล่องนี้มีอะไรครับ",
        answer: [
            { t: "この", p: "kono" }, { t: "箱", p: "hako" }, { t: "の", p: "no" }, { t: "中", p: "naka" },
            { t: "に", p: "ni" }, { t: "は", p: "wa" }, { t: "何", p: "nani" }, { t: "が", p: "ga" },
            { t: "あり", p: "ari" }, { t: "ます", p: "masu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Until what time is the library open?",
        hint: "ห้องสมุดเปิดถึงกี่โมงครับ",
        answer: [
            { t: "図書館", p: "toshokan" }, { t: "は", p: "wa" }, { t: "何時", p: "nanji" }, { t: "まで", p: "made" },
            { t: "開い", p: "arai" }, { t: "て", p: "te" }, { t: "い", p: "i" }, { t: "ます", p: "masu" },
            { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Who cooked this dish?",
        hint: "ใครทำอาหารจานนี้ครับ",
        answer: [
            { t: "誰", p: "dare" }, { t: "が", p: "ga" }, { t: "この", p: "kono" }, { t: "料理", p: "ryouri" },
            { t: "を", p: "o" }, { t: "作り", p: "tsukuri" }, { t: "ました", p: "mashita" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Where is the convenience store?",
        hint: "ร้านสะดวกซื้ออยู่ที่ไหนครับ",
        answer: [
            { t: "コンビニ", p: "konbini" }, { t: "は", p: "wa" }, { t: "どこ", p: "doko" }, { t: "に", p: "ni" },
            { t: "あり", p: "ari" }, { t: "ます", p: "masu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "What are you looking for?",
        hint: "กำลังหาอะไรอยู่ครับ",
        answer: [
            { t: "あなた", p: "anata" }, { t: "は", p: "wa" }, { t: "何", p: "nani" }, { t: "を", p: "o" },
            { t: "探し", p: "sagashi" }, { t: "て", p: "te" }, { t: "い", p: "i" }, { t: "ます", p: "masu" },
            { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "How many people are coming tomorrow?",
        hint: "พรุ่งนี้จะมากันกี่คนครับ",
        answer: [
            { t: "明日", p: "ashita" }, { t: "は", p: "wa" }, { t: "何人", p: "nannin" },
            { t: "来", p: "ki" }, { t: "ます", p: "masu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "From where did you come?",
        hint: "มาจากประเทศไหนครับ",
        answer: [
            { t: "どこ", p: "doko" }, { t: "の", p: "no" }, { t: "国", p: "kuni" }, { t: "から", p: "kara" },
            { t: "来", p: "ki" }, { t: "ました", p: "mashita" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Which sport do you like best?",
        hint: "ชอบกีฬาอะไรมากที่สุดครับ",
        answer: [
            { t: "どの", p: "dono" }, { t: "スポーツ", p: "supootsu" }, { t: "が", p: "ga" }, { t: "一番", p: "ichiban" },
            { t: "好き", p: "suki" }, { t: "です", p: "desu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "How was your weekend?",
        hint: "วันหยุดสุดสัปดาห์เป็นอย่างไรบ้างครับ",
        answer: [
            { t: "週末", p: "shuumatsu" }, { t: "は", p: "wa" }, { t: "どう", p: "dou" },
            { t: "でした", p: "deshita" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "How many times a week do you gym?",
        hint: "ไปยิมสัปดาห์ละกี่ครั้งครับ",
        answer: [
            { t: "週", p: "shuu" }, { t: "に", p: "ni" }, { t: "何回", p: "nankai" }, { t: "ジム", p: "jimu" },
            { t: "に", p: "ni" }, { t: "行き", p: "iki" }, { t: "ます", p: "masu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "What is your phone number?",
        hint: "เบอร์โทรศัพท์เบอร์อะไรครับ",
        answer: [
            { t: "電話番号", p: "denwabangou" }, { t: "は", p: "wa" }, { t: "何番", p: "nanban" },
            { t: "です", p: "desu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Since when have you been sick?",
        hint: "รู้สึกไม่สบายตั้งแต่เมื่อไหร่ครับ",
        answer: [
            { t: "いつ", p: "itsu" }, { t: "から", p: "kara" }, { t: "体調", p: "taichou" }, { t: "が", p: "ga" },
            { t: "悪い", p: "warui" }, { t: "の", p: "no" }, { t: "です", p: "desu" }, { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    },
    {
        instruction: "Whose car keys are these?",
        hint: "นี่ือกุญแจรถของใครครับ",
        answer: [
            { t: "これ", p: "kore" }, { t: "は", p: "wa" }, { t: "誰", p: "dare" }, { t: "の", p: "no" },
            { t: "車", p: "kuruma" }, { t: "の", p: "no" }, { t: "鍵", p: "kagi" }, { t: "です", p: "desu" },
            { t: "か", p: "ka" }, { t: "？", p: "?" }
        ]
    }
    ]
});