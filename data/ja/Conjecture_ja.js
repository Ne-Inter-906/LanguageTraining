// カテゴリリストが未定義なら作成
window.japaneseCategories = window.japaneseCategories || [];

// リストにこのファイルのデータを追加
window.japaneseCategories.push({
    name: "Conjecture / Certainty (推量・確信)",
    data: [
        {
            instruction: "It might rain tomorrow.",
            hint: "พรุ่งนี้ฝนอาจจะตก",
            answer: [
                { t: "明日", p: "ashita", e: "tomorrow", th: "พรุ่งนี้" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "雨", p: "ame", e: "rain", th: "ฝน" },
                { t: "が", p: "ga", e: "[subj]", th: "[ตัวชี้ประธาน]" },
                { t: "降る", p: "furu", e: "fall (rain)", th: "ตก" },
                { t: "かも", p: "kamo", e: "might / maybe", th: "อาจจะ" },
                { t: "しれません", p: "shiremasen", e: "[possibility]", th: "[แสดงความเป็นไปได้]" }
            ]
        },
        {
            instruction: "He must be busy.",
            hint: "เขาต้องยุ่งแน่ๆ",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "忙しい", p: "isogashii", e: "busy", th: "ยุ่ง" },
                { t: "に", p: "ni", e: "[particle]", th: "[คำเชื่อม]" },
                { t: "違い", p: "chigai", e: "mistake / doubt", th: "ผิดพลาด" },
                { t: "ない", p: "nai", e: "no (must be)", th: "ไม่มี (ต้อง...แน่ๆ)" }
            ]
        },
        {
            instruction: "She might come today.",
            hint: "วันนี้เธออาจจะมา",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "今日", p: "kyō", e: "today", th: "วันนี้" },
                { t: "来る", p: "kuru", e: "come", th: "มา" },
                { t: "かも", p: "kamo", e: "might / maybe", th: "อาจจะ" },
                { t: "しれません", p: "shiremasen", e: "[possibility]", th: "[แสดงความเป็นไปได้]" }
            ]
        },
        {
            instruction: "This answer must be correct.",
            hint: "คำตอบนี้ต้องถูกต้องแน่ๆ",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "答え", p: "kotae", e: "answer", th: "คำตอบ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "正しい", p: "tadashii", e: "correct / right", th: "ถูกต้อง" },
                { t: "に", p: "ni", e: "[particle]", th: "[คำเชื่อม]" },
                { t: "違い", p: "chigai", e: "mistake / doubt", th: "ผิดพลาด" },
                { t: "ない", p: "nai", e: "no (must be)", th: "ไม่มี (ต้อง...แน่ๆ)" }
            ]
        },
        {
            instruction: "The train might be late.",
            hint: "รถไฟอาจจะล่าช้า",
            answer: [
                { t: "電車", p: "densha", e: "train", th: "รถไฟ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "遅れる", p: "okureru", e: "be late", th: "ล่าช้า / สาย" },
                { t: "かも", p: "kamo", e: "might / maybe", th: "อาจจะ" },
                { t: "しれません", p: "shiremasen", e: "[possibility]", th: "[แสดงความเป็นไปได้]" }
            ]
        },
        {
            instruction: "He must be tired.",
            hint: "เขาต้องเหนื่อยแน่ๆ",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "疲れて", p: "tsukarete", e: "get tired", th: "เหนื่อย" },
                { t: "いる", p: "iru", e: "is (state)", th: "อยู่" },
                { t: "に", p: "ni", e: "[particle]", th: "[คำเชื่อม]" },
                { t: "違い", p: "chigai", e: "mistake / doubt", th: "ผิดพลาด" },
                { t: "ない", p: "nai", e: "no (must be)", th: "ไม่มี (ต้อง...แน่ๆ)" }
            ]
        },
        {
            instruction: "The meeting might be long.",
            hint: "การประชุมอาจจะนาน",
            answer: [
                { t: "会議", p: "kaigi", e: "meeting", th: "การประชุม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "長く", p: "nagaku", e: "long", th: "ยาว / นาน" },
                { t: "なる", p: "naru", e: "become", th: "กลายเป็น" },
                { t: "かも", p: "kamo", e: "might / maybe", th: "อาจจะ" },
                { t: "しれません", p: "shiremasen", e: "[possibility]", th: "[แสดงความเป็นไปได้]" }
            ]
        },
        {
            instruction: "She must know the secret.",
            hint: "เธอต้องรู้ความลับแน่ๆ",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "秘密", p: "himitsu", e: "secret", th: "ความลับ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "知って", p: "shitte", e: "know", th: "รู้" },
                { t: "いる", p: "iru", e: "is (state)", th: "อยู่" },
                { t: "に", p: "ni", e: "[particle]", th: "[คำเชื่อม]" },
                { t: "違い", p: "chigai", e: "mistake / doubt", th: "ผิดพลาด" },
                { t: "ない", p: "nai", e: "no (must be)", th: "ไม่มี (ต้อง...แน่ๆ)" }
            ]
        },
        {
            instruction: "I might buy a new computer.",
            hint: "ผมอาจจะซื้อคอมพิวเตอร์ใหม่",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "新しい", p: "atarashii", e: "new", th: "ใหม่" },
                { t: "パソコン", p: "pasokon", e: "computer", th: "คอมพิวเตอร์" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "買う", p: "kau", e: "buy", th: "ซื้อ" },
                { t: "かも", p: "kamo", e: "might / maybe", th: "อาจจะ" },
                { t: "しれません", p: "shiremasen", e: "[possibility]", th: "[แสดงความเป็นไปได้]" }
            ]
        },
        {
            instruction: "This machine must be broken.",
            hint: "เครื่องจักรนี้ต้องเสียแน่ๆ",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "機械", p: "kikai", e: "machine", th: "เครื่องจักร" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "故障して", p: "koshō-shite", e: "out of order", th: "เสีย / ชำรุด" },
                { t: "いる", p: "iru", e: "is (state)", th: "อยู่" },
                { t: "に", p: "ni", e: "[particle]", th: "[คำเชื่อม]" },
                { t: "違い", p: "chigai", e: "mistake / doubt", th: "ผิดพลาด" },
                { t: "ない", p: "nai", e: "no (must be)", th: "ไม่มี (ต้อง...แน่ๆ)" }
            ]
        },
        {
            instruction: "He might forget his passport.",
            hint: "เขาอาจจะลืมหนังสือเดินทาง",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "パスポート", p: "pasupōto", e: "passport", th: "หนังสือเดินทาง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "忘れる", p: "wasureru", e: "forget", th: "ลืม" },
                { t: "かも", p: "kamo", e: "might / maybe", th: "อาจจะ" },
                { t: "しれません", p: "shiremasen", e: "[possibility]", th: "[แสดงความเป็นไปได้]" }
            ]
        },
        {
            instruction: "She must be sleeping now.",
            hint: "ตอนนี้เธอต้องกำลังนอนอยู่แน่ๆ",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "今", p: "ima", e: "now", th: "ตอนนี้" },
                { t: "寝て", p: "nete", e: "sleep", th: "นอน" },
                { t: "いる", p: "iru", e: "is (ing)", th: "อยู่" },
                { t: "に", p: "ni", e: "[particle]", th: "[คำเชื่อม]" },
                { t: "違い", p: "chigai", e: "mistake / doubt", th: "ผิดพลาด" },
                { t: "ない", p: "nai", e: "no (must be)", th: "ไม่มี (ต้อง...แน่ๆ)" }
            ]
        },
        {
            instruction: "The store might be closed.",
            hint: "ร้านอาจจะปิด",
            answer: [
                { t: "店", p: "mise", e: "store / shop", th: "ร้าน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "閉まって", p: "shimatte", e: "closed", th: "ปิด" },
                { t: "いる", p: "iru", e: "is (state)", th: "อยู่" },
                { t: "かも", p: "kamo", e: "might / maybe", th: "อาจจะ" },
                { t: "しれません", p: "shiremasen", e: "[possibility]", th: "[แสดงความเป็นไปได้]" }
            ]
        },
        {
            instruction: "They must be happy.",
            hint: "พวกเขามีความสุขแน่ๆ",
            answer: [
                { t: "彼ら", p: "karera", e: "they", th: "พวกเขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "幸せ", p: "shiawase", e: "happy", th: "มีความสุข" },
                { t: "に", p: "ni", e: "[particle]", th: "[คำเชื่อม]" },
                { t: "違い", p: "chigai", e: "mistake / doubt", th: "ผิดพลาด" },
                { t: "ない", p: "nai", e: "no (must be)", th: "ไม่มี (ต้อง...แน่ๆ)" }
            ]
        },
        {
            instruction: "It might be expensive.",
            hint: "มันอาจจะแพง",
            answer: [
                { t: "それ", p: "sore", e: "it / that", th: "มัน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "高い", p: "takai", e: "expensive", th: "แพง" },
                { t: "かも", p: "kamo", e: "might / maybe", th: "อาจจะ" },
                { t: "しれません", p: "shiremasen", e: "[possibility]", th: "[แสดงความเป็นไปได้]" }
            ]
        },
        {
            instruction: "He must be the teacher.",
            hint: "เขาต้องเป็นครูแน่ๆ",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "先生", p: "sensei", e: "teacher", th: "ครู / อาจารย์" },
                { t: "に", p: "ni", e: "[particle]", th: "[คำเชื่อม]" },
                { t: "違い", p: "chigai", e: "mistake / doubt", th: "ผิดพลาด" },
                { t: "ない", p: "nai", e: "no (must be)", th: "ไม่มี (ต้อง...แน่ๆ)" }
            ]
        },
        {
            instruction: "The test might be difficult.",
            hint: "ข้อสอบอาจจะยาก",
            answer: [
                { t: "テスト", p: "tesuto", e: "test / exam", th: "ข้อสอบ / การสอบ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "難しい", p: "muzukashii", e: "difficult", th: "ยาก" },
                { t: "かも", p: "kamo", e: "might / maybe", th: "อาจจะ" },
                { t: "しれません", p: "shiremasen", e: "[possibility]", th: "[แสดงความเป็นไปได้]" }
            ]
        },
        {
            instruction: "She must be at home.",
            hint: "เธอต้องอยู่ที่บ้านแน่ๆ",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "家", p: "ie", e: "home / house", th: "บ้าน" },
                { t: "に", p: "ni", e: "at / in", th: "ที่" },
                { t: "いる", p: "iru", e: "be / exist", th: "อยู่" },
                { t: "に", p: "ni", e: "[particle]", th: "[คำเชื่อม]" },
                { t: "違い", p: "chigai", e: "mistake / doubt", th: "ผิดพลาด" },
                { t: "ない", p: "nai", e: "no (must be)", th: "ไม่มี (ต้อง...แน่ๆ)" }
            ]
        },
        {
            instruction: "It might snow tonight.",
            hint: "คืนนี้หิมะอาจจะตก",
            answer: [
                { t: "今夜", p: "kon'ya", e: "tonight", th: "คืนนี้" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "雪", p: "yuki", e: "snow", th: "หิมะ" },
                { t: "が", p: "ga", e: "[subj]", th: "[ตัวชี้ประธาน]" },
                { t: "降る", p: "furu", e: "fall (snow)", th: "ตก" },
                { t: "かも", p: "kamo", e: "might / maybe", th: "อาจจะ" },
                { t: "しれません", p: "shiremasen", e: "[possibility]", th: "[แสดงความเป็นไปได้]" }
            ]
        },
        {
            instruction: "This problem must be dangerous.",
            hint: "ปัญหานี้ต้องอันตรายแน่ๆ",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "問題", p: "mondai", e: "problem / issue", th: "ปัญหา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "危険", p: "kiken", e: "dangerous", th: "อันตราย" },
                { t: "に", p: "ni", e: "[particle]", th: "[คำเชื่อม]" },
                { t: "違い", p: "chigai", e: "mistake / doubt", th: "ผิดพลาด" },
                { t: "ない", p: "nai", e: "no (must be)", th: "ไม่มี (ต้อง...แน่ๆ)" }
            ]
        }
    ]
});