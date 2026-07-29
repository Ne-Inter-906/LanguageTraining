// カテゴリリストが未定義なら作成
window.japaneseCategories = window.japaneseCategories || [];

// リストにこのファイルのデータを追加
window.japaneseCategories.push({
    name: "Obligation / Necessity (義務・〜しなければならない)",
    data: [
        {
            instruction: "I must study Japanese.",
            hint: "ผมต้องเรียนภาษาญี่ปุ่น",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "日本語", p: "nihongo", e: "Japanese language", th: "ภาษาญี่ปุ่น" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "勉強し", p: "benkyō-shi", e: "study (stem)", th: "เรียน" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "He must go to the hospital.",
            hint: "เขาต้องไปโรงพยาบาล",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "病院", p: "byōin", e: "hospital", th: "โรงพยาบาล" },
                { t: "に", p: "ni", e: "to / toward", th: "ไปที่" },
                { t: "行か", p: "ika", e: "go (nai-stem)", th: "ไป" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "She must take medicine.",
            hint: "เธอต้องกินยา",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "薬", p: "kusuri", e: "medicine", th: "ยา" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "飲ま", p: "noma", e: "drink/take (nai-stem)", th: "กิน / ดื่ม" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "I must wake up early tomorrow.",
            hint: "พรุ่งนี้ผมต้องตื่นเช้า",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "明日", p: "ashita", e: "tomorrow", th: "พรุ่งนี้" },
                { t: "早く", p: "hayaku", e: "early / quickly", th: "เช้า / เร็ว" },
                { t: "起き", p: "oki", e: "wake up (stem)", th: "ตื่น" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "We must submit the report.",
            hint: "พวกเราต้องส่งรายงาน",
            answer: [
                { t: "私達", p: "watashitachi", e: "we", th: "พวกเรา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "レポート", p: "repōto", e: "report", th: "รายงาน" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "提出し", p: "teishutsu-shi", e: "submit (stem)", th: "ส่ง" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "He must pay the money.",
            hint: "เขาต้องจ่ายเงิน",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "お金", p: "okane", e: "money", th: "เงิน" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "払わ", p: "harawa", e: "pay (nai-stem)", th: "จ่าย" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "You must buy a ticket.",
            hint: "คุณต้องซื้อตั๋ว",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "チケット", p: "chiketto", e: "ticket", th: "ตั๋ว" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "買わ", p: "kawa", e: "buy (nai-stem)", th: "ซื้อ" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "She must write an email.",
            hint: "เธอต้องเขียนอีเมล",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "メール", p: "mēru", e: "email", th: "อีเมล" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "書か", p: "kaka", e: "write (nai-stem)", th: "เขียน" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "I must return the book.",
            hint: "ผมต้องคืนหนังสือ",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "本", p: "hon", e: "book", th: "หนังสือ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "返さ", p: "kaesa", e: "return (nai-stem)", th: "คืน" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "He must clean the room.",
            hint: "เขาต้องทำความสะอาดห้อง",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "部屋", p: "heya", e: "room", th: "ห้อง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "掃除し", p: "sōji-shi", e: "clean (stem)", th: "ทำความสะอาด" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "We must bring a passport.",
            hint: "พวกเราต้องนำหนังสือเดินทางไป",
            answer: [
                { t: "私達", p: "watashitachi", e: "we", th: "พวกเรา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "パスポート", p: "pasupōto", e: "passport", th: "หนังสือเดินทาง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "持って", p: "motte", e: "take / hold", th: "ถือ / นำ" },
                { t: "行か", p: "ika", e: "go (nai-stem)", th: "ไป" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "I must work today.",
            hint: "วันนี้ผมต้องทำงาน",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "今日", p: "kyō", e: "today", th: "วันนี้" },
                { t: "働か", p: "hataraka", e: "work (nai-stem)", th: "ทำงาน" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "She must attend the meeting.",
            hint: "เธอต้องเข้าร่วมการประชุม",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "会議", p: "kaigi", e: "meeting", th: "การประชุม" },
                { t: "に", p: "ni", e: "to / at", th: "ที่ / ใน" },
                { t: "出席し", p: "shusseki-shi", e: "attend (stem)", th: "เข้าร่วม" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "You must speak in English.",
            hint: "คุณต้องพูดเป็นภาษาอังกฤษ",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "英語", p: "eigo", e: "English", th: "ภาษาอังกฤษ" },
                { t: "で", p: "de", e: "in / by means of", th: "ด้วย / เป็น" },
                { t: "話さ", p: "hanasa", e: "speak (nai-stem)", th: "พูด" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "I need to practice driving.",
            hint: "ผมจำเป็นต้องซ้อมขับรถ",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "運転", p: "unten", e: "driving", th: "การขับขี่" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "練習する", p: "renshū-suru", e: "to practice", th: "ฝึกซ้อม" },
                { t: "必要", p: "hitsuyō", e: "need / necessity", th: "จำเป็น" },
                { t: "が", p: "ga", e: "[subj]", th: "[ตัวชี้ประธาน]" },
                { t: "あります", p: "arimasu", e: "there is", th: "มี" }
            ]
        },
        {
            instruction: "He needs to reserve a room.",
            hint: "เขาจำเป็นต้องจองห้องพัก",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "部屋", p: "heya", e: "room", th: "ห้อง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "予約する", p: "yoyaku-suru", e: "to reserve", th: "จอง" },
                { t: "必要", p: "hitsuyō", e: "need / necessity", th: "จำเป็น" },
                { t: "が", p: "ga", e: "[subj]", th: "[ตัวชี้ประธาน]" },
                { t: "あります", p: "arimasu", e: "there is", th: "มี" }
            ]
        },
        {
            instruction: "She must wash the dishes.",
            hint: "เธอต้องล้างจาน",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "皿", p: "sara", e: "dishes / plate", th: "จาน" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "洗わ", p: "arawa", e: "wash (nai-stem)", th: "ล้าง" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "I must wait here.",
            hint: "ผมต้องรอที่นี่",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ここ", p: "koko", e: "here", th: "ที่นี่" },
                { t: "で", p: "de", e: "at / in", th: "ที่" },
                { t: "待た", p: "mata", e: "wait (nai-stem)", th: "รอ" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "We must protect nature.",
            hint: "พวกเราต้องปกป้องธรรมชาติ",
            answer: [
                { t: "私達", p: "watashitachi", e: "we", th: "พวกเรา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "自然", p: "shizen", e: "nature", th: "ธรรมชาติ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "守ら", p: "mamora", e: "protect (nai-stem)", th: "ปกป้อง" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        },
        {
            instruction: "He must fix the machine.",
            hint: "เขาต้องซ่อมเครื่องจักร",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "機械", p: "kikai", e: "machine", th: "เครื่องจักร" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "修理し", p: "shūri-shi", e: "repair (stem)", th: "ซ่อมแซม" },
                { t: "なければ", p: "nakereba", e: "if not", th: "หากไม่" },
                { t: "なりません", p: "narimasen", e: "must (won't do)", th: "ไม่ได้ / ต้อง" }
            ]
        }
    ]
});