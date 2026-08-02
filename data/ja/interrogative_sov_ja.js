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
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "どこ", p: "doko", e: "where", th: "ที่ไหน" },
                { t: "に", p: "ni", e: "to", th: "ไปยัง" },
                { t: "行き", p: "iki", e: "go", th: "ไป" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "What did you eat for lunch?",
            hint: "มื้อเที่ยงทานอะไรครับ",
            answer: [
                { t: "昼ご飯", p: "hirugohan", e: "lunch", th: "มื้อเที่ยง" },
                { t: "に", p: "ni", e: "for", th: "สำหรับ" },
                { t: "何", p: "nani", e: "what", th: "อะไร" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "食べ", p: "tabe", e: "eat", th: "ทาน / กิน" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "When will the train arrive?",
            hint: "รถไฟจะมาถึงเมื่อไหร่ครับ",
            answer: [
                { t: "電車", p: "densha", e: "train", th: "รถไฟ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "いつ", p: "itsu", e: "when", th: "เมื่อไหร่" },
                { t: "到着", p: "tōchaku", e: "arrival", th: "การมาถึง" },
                { t: "し", p: "shi", e: "do", th: "ทำ" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Who is that person?",
            hint: "คนนั้นคือใครครับ",
            answer: [
                { t: "あの", p: "ano", e: "that", th: "นั้น" },
                { t: "人", p: "hito", e: "person", th: "คน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "誰", p: "dare", e: "who", th: "ใคร" },
                { t: "です", p: "desu", e: "is / am / are", th: "คือ" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Whose bag is this?",
            hint: "นี่คือกระเป๋าของใครครับ",
            answer: [
                { t: "これ", p: "kore", e: "this", th: "นี่" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "誰", p: "dare", e: "who", th: "ใคร" },
                { t: "の", p: "no", e: "'s (possessive)", th: "ของ" },
                { t: "カバン", p: "kaban", e: "bag", th: "กระเป๋า" },
                { t: "です", p: "desu", e: "is / am / are", th: "คือ" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Which bus goes to the station?",
            hint: "รถบัสคันไหนไปสถานีครับ",
            answer: [
                { t: "どの", p: "dono", e: "which", th: "คันไหน / อันไหน" },
                { t: "バス", p: "basu", e: "bus", th: "รถบัส" },
                { t: "が", p: "ga", e: "[subj]", th: "[ตัวชี้ประธาน]" },
                { t: "駅", p: "eki", e: "station", th: "สถานี" },
                { t: "に", p: "ni", e: "to", th: "ไปยัง" },
                { t: "行き", p: "iki", e: "go", th: "ไป" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "How do you write this kanji?",
            hint: "คันจินี้เขียนยังไงครับ",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "漢字", p: "kanji", e: "kanji", th: "คันจิ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "どう", p: "dō", e: "how", th: "อย่างไร / ยังไง" },
                { t: "書き", p: "kaki", e: "write", th: "เขียน" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Why did you buy this book?",
            hint: "ทำไมถึงซื้อหนังสือเล่มนี้ครับ",
            answer: [
                { t: "なぜ", p: "naze", e: "why", th: "ทำไม" },
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "本", p: "hon", e: "book", th: "หนังสือ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "買い", p: "kai", e: "buy", th: "ซื้อ" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "How many apples did you buy?",
            hint: "ซื้อแอปเปิ้ลมากี่ลูกครับ",
            answer: [
                { t: "リンゴ", p: "ringo", e: "apple", th: "แอปเปิ้ล" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "いくつ", p: "ikutsu", e: "how many", th: "กี่ลูก / กี่อัน" },
                { t: "買い", p: "kai", e: "buy", th: "ซื้อ" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "What time does the meeting start?",
            hint: "การประชุมเริ่มกี่โมงครับ",
            answer: [
                { t: "会議", p: "kaigi", e: "meeting", th: "การประชุม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "何時", p: "nanji", e: "what time", th: "กี่โมง" },
                { t: "に", p: "ni", e: "at", th: "ตอน" },
                { t: "始まり", p: "hajimari", e: "start", th: "เริ่ม" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },

        // --- 追加の20問（11〜30問目） ---
        {
            instruction: "Where did you buy that shirt?",
            hint: "เสื้อตัวนั้นซื้อที่ไหนครับ",
            answer: [
                { t: "その", p: "sono", e: "that", th: "นั้น" },
                { t: "シャツ", p: "shatsu", e: "shirt", th: "เสื้อเชิ้ต / เสื้อ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "どこ", p: "doko", e: "where", th: "ที่ไหน" },
                { t: "で", p: "de", e: "at", th: "ที่" },
                { t: "買い", p: "kai", e: "buy", th: "ซื้อ" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Who did you watch the movie with?",
            hint: "ดูหนังกับใครครับ",
            answer: [
                { t: "誰", p: "dare", e: "who", th: "ใคร" },
                { t: "と", p: "to", e: "with", th: "กับ" },
                { t: "映画", p: "eiga", e: "movie", th: "ภาพยนตร์ / หนัง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "見", p: "mi", e: "watch", th: "ดู" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "How much is this coffee?",
            hint: "กาแฟนี้ราคาเท่าไหร่ครับ",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "コーヒー", p: "kōhī", e: "coffee", th: "กาแฟ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "いくら", p: "ikura", e: "how much", th: "เท่าไหร่" },
                { t: "です", p: "desu", e: "is / am / are", th: "คือ" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "What kind of music do you listen to?",
            hint: "ฟังเพลงแนวไหนครับ",
            answer: [
                { t: "どんな", p: "donna", e: "what kind of", th: "แบบไหน / แนวไหน" },
                { t: "音楽", p: "ongaku", e: "music", th: "เพลง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "聴き", p: "kiki", e: "listen to", th: "ฟัง" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Which one is your umbrella?",
            hint: "ร่มของคุณคืออันไหนครับ",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "の", p: "no", e: "'s (possessive)", th: "ของ" },
                { t: "傘", p: "kasa", e: "umbrella", th: "ร่ม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "どれ", p: "dore", e: "which one", th: "อันไหน" },
                { t: "です", p: "desu", e: "is / am / are", th: "คือ" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "How long does it take to the airport?",
            hint: "ไปถึงสนามบินใช้เวลานานเท่าไหร่ครับ",
            answer: [
                { t: "空港", p: "kūkō", e: "airport", th: "สนามบิน" },
                { t: "まで", p: "made", e: "to / until", th: "ถึง" },
                { t: "どのくらい", p: "donokurai", e: "how long", th: "นานเท่าไหร่" },
                { t: "かかり", p: "kakari", e: "take (time)", th: "ใช้เวลา" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Why are you studying Japanese?",
            hint: "ทำไมถึงเรียนภาษาญี่ปุ่นอยู่ครับ",
            answer: [
                { t: "なぜ", p: "naze", e: "why", th: "ทำไม" },
                { t: "日本語", p: "nihongo", e: "Japanese language", th: "ภาษาญี่ปุ่น" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "勉強", p: "benkyō", e: "study", th: "เรียน" },
                { t: "し", p: "shi", e: "do", th: "ทำ" },
                { t: "ている", p: "teiru", e: "is (ing)", th: "อยู่" },
                { t: "の", p: "no", e: "[explanatory]", th: "[เกริ่นอธิบาย]" },
                { t: "です", p: "desu", e: "[polite]", th: "ครับ/ค่ะ" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "What is inside this box?",
            hint: "ข้างในกล่องนี้มีอะไรครับ",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "箱", p: "hako", e: "box", th: "กล่อง" },
                { t: "の", p: "no", e: "of", th: "ของ" },
                { t: "中", p: "naka", e: "inside", th: "ข้างใน" },
                { t: "に", p: "ni", e: "in / at", th: "ใน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "何", p: "nani", e: "what", th: "อะไร" },
                { t: "が", p: "ga", e: "[subj]", th: "[ตัวชี้ประธาน]" },
                { t: "あり", p: "ari", e: "exist / have", th: "มี" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Until what time is the library open?",
            hint: "ห้องสมุดเปิดถึงกี่โมงครับ",
            answer: [
                { t: "図書館", p: "toshokan", e: "library", th: "ห้องสมุด" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "何時", p: "nanji", e: "what time", th: "กี่โมง" },
                { t: "まで", p: "made", e: "until", th: "ถึง" },
                { t: "開い", p: "ai", e: "open", th: "เปิด" },
                { t: "て", p: "te", e: "[ing]", th: "[ต่อเนื่อง]" },
                { t: "い", p: "i", e: "is (state)", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Who cooked this dish?",
            hint: "ใครทำอาหารจานนี้ครับ",
            answer: [
                { t: "誰", p: "dare", e: "who", th: "ใคร" },
                { t: "が", p: "ga", e: "[subj]", th: "[ตัวชี้ประธาน]" },
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "料理", p: "ryōri", e: "dish / food", th: "อาหาร" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "作り", p: "tsukuri", e: "make / cook", th: "ทำ" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Where is the convenience store?",
            hint: "ร้านสะดวกซื้ออยู่ที่ไหนครับ",
            answer: [
                { t: "コンビニ", p: "konbini", e: "convenience store", th: "ร้านสะดวกซื้อ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "どこ", p: "doko", e: "where", th: "ที่ไหน" },
                { t: "に", p: "ni", e: "at", th: "ที่" },
                { t: "あり", p: "ari", e: "exist / be", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "What are you looking for?",
            hint: "กำลังหาอะไรอยู่ครับ",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "何", p: "nani", e: "what", th: "อะไร" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "探し", p: "sagashi", e: "look for", th: "หา" },
                { t: "て", p: "te", e: "[ing]", th: "[ต่อเนื่อง]" },
                { t: "い", p: "i", e: "is (ing)", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "How many people are coming tomorrow?",
            hint: "พรุ่งนี้จะมากันกี่คนครับ",
            answer: [
                { t: "明日", p: "ashita", e: "tomorrow", th: "พรุ่งนี้" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "何人", p: "nannin", e: "how many people", th: "กี่คน" },
                { t: "来", p: "ki", e: "come", th: "มา" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "From where did you come?",
            hint: "มาจากประเทศไหนครับ",
            answer: [
                { t: "どこ", p: "doko", e: "where", th: "ที่ไหน" },
                { t: "の", p: "no", e: "of", th: "ของ" },
                { t: "国", p: "kuni", e: "country", th: "ประเทศ" },
                { t: "から", p: "kara", e: "from", th: "จาก" },
                { t: "来", p: "ki", e: "come", th: "มา" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Which sport do you like best?",
            hint: "ชอบกีฬาอะไรมากที่สุดครับ",
            answer: [
                { t: "どの", p: "dono", e: "which", th: "อันไหน / อะไร" },
                { t: "スポーツ", p: "supōtsu", e: "sport", th: "กีฬา" },
                { t: "が", p: "ga", e: "[subj]", th: "[ตัวชี้ประธาน]" },
                { t: "一番", p: "ichiban", e: "the most", th: "มากที่สุด" },
                { t: "好き", p: "suki", e: "like", th: "ชอบ" },
                { t: "です", p: "desu", e: "is / am / are", th: "คือ" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "How was your weekend?",
            hint: "วันหยุดสุดสัปดาห์เป็นอย่างไรบ้างครับ",
            answer: [
                { t: "週末", p: "shūmatsu", e: "weekend", th: "วันหยุดสุดสัปดาห์" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "どう", p: "dō", e: "how", th: "อย่างไร / เป็นไง" },
                { t: "でした", p: "deshita", e: "was / were", th: "เป็น (อดีต)" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "How many times a week do you gym?",
            hint: "ไปยิมสัปดาห์ละกี่ครั้งครับ",
            answer: [
                { t: "週", p: "shū", e: "week", th: "สัปดาห์" },
                { t: "に", p: "ni", e: "per", th: "ต่อ" },
                { t: "何回", p: "nankai", e: "how many times", th: "กี่ครั้ง" },
                { t: "ジム", p: "jimu", e: "gym", th: "ยิม" },
                { t: "に", p: "ni", e: "to", th: "ไปยัง" },
                { t: "行き", p: "iki", e: "go", th: "ไป" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "What is your phone number?",
            hint: "เบอร์โทรศัพท์เบอร์อะไรครับ",
            answer: [
                { t: "電話番号", p: "denwabangō", e: "phone number", th: "เบอร์โทรศัพท์" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "何番", p: "nanban", e: "what number", th: "เบอร์อะไร" },
                { t: "です", p: "desu", e: "is / am / are", th: "คือ" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Since when have you been sick?",
            hint: "รู้สึกไม่สบายตั้งแต่เมื่อไหร่ครับ",
            answer: [
                { t: "いつ", p: "itsu", e: "when", th: "เมื่อไหร่" },
                { t: "から", p: "kara", e: "since / from", th: "ตั้งแต่" },
                { t: "体調", p: "taichō", e: "physical condition", th: "สุขภาพ / สภาพร่างกาย" },
                { t: "が", p: "ga", e: "[subj]", th: "[ตัวชี้ประธาน]" },
                { t: "悪い", p: "warui", e: "bad", th: "ไม่ดี / แย่" },
                { t: "の", p: "no", e: "[explanatory]", th: "[เกริ่นอธิบาย]" },
                { t: "です", p: "desu", e: "[polite]", th: "ครับ/ค่ะ" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        },
        {
            instruction: "Whose car keys are these?",
            hint: "นี่คือกุญแจรถของใครครับ",
            answer: [
                { t: "これ", p: "kore", e: "this", th: "นี่" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "誰", p: "dare", e: "who", th: "ใคร" },
                { t: "の", p: "no", e: "'s (possessive)", th: "ของ" },
                { t: "車", p: "kuruma", e: "car", th: "รถยนต์" },
                { t: "の", p: "no", e: "of", th: "ของ" },
                { t: "鍵", p: "kagi", e: "key", th: "กุญแจ" },
                { t: "です", p: "desu", e: "is / am / are", th: "คือ" },
                { t: "か", p: "ka", e: "[question]", th: "[คำถาม]" },
                { t: "？", p: "?", e: "?", th: "?" }
            ]
        }
    ]
});