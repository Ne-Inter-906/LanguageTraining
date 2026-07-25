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
                { t: "明日", p: "ashita" },
                { t: "は", p: "wa" },
                { t: "雨", p: "ame" },
                { t: "が", p: "ga" },
                { t: "降る", p: "furu" },
                { t: "かもしれません", p: "kamo-shiremasen" }
            ]
        },
        {
            instruction: "He must be busy.",
            hint: "เขาต้องยุ่งแน่ๆ",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "忙しい", p: "isogashii" },
                { t: "に違いない", p: "ni-chigai-arimasen" }
            ]
        },
        {
            instruction: "She might come today.",
            hint: "วันนี้เธออาจจะมา",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "今日", p: "kyō" },
                { t: "来る", p: "kuru" },
                { t: "かもしれません", p: "kamo-shiremasen" }
            ]
        },
        {
            instruction: "This answer must be correct.",
            hint: "คำตอบนี้ต้องถูกต้องแน่ๆ",
            answer: [
                { t: "この", p: "kono" },
                { t: "答え", p: "kotae" },
                { t: "は", p: "wa" },
                { t: "正しい", p: "tadashii" },
                { t: "に違いない", p: "ni-chigai-arimasen" }
            ]
        },
        {
            instruction: "The train might be late.",
            hint: "รถไฟอาจจะล่าช้า",
            answer: [
                { t: "電車", p: "densha" },
                { t: "は", p: "wa" },
                { t: "遅れる", p: "okureru" },
                { t: "かもしれません", p: "kamo-shiremasen" }
            ]
        },
        {
            instruction: "He must be tired.",
            hint: "เขาต้องเหนื่อยแน่ๆ",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "疲れている", p: "tsukarete-iru" },
                { t: "に違いない", p: "ni-chigai-arimasen" }
            ]
        },
        {
            instruction: "The meeting might be long.",
            hint: "การประชุมอาจจะนาน",
            answer: [
                { t: "会議", p: "kaigi" },
                { t: "は", p: "wa" },
                { t: "長くなる", p: "nagaku-naru" },
                { t: "かもしれません", p: "kamo-shiremasen" }
            ]
        },
        {
            instruction: "She must know the secret.",
            hint: "เธอต้องรู้ความลับแน่ๆ",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "秘密", p: "himitsu" },
                { t: "を", p: "o" },
                { t: "知っている", p: "shitte-iru" },
                { t: "に違いない", p: "ni-chigai-arimasen" }
            ]
        },
        {
            instruction: "I might buy a new computer.",
            hint: "ผมอาจจะซื้อคอมพิวเตอร์ใหม่",
            answer: [
                { t: "新しい", p: "atarashii" },
                { t: "パソコン", p: "pasokon" },
                { t: "を", p: "o" },
                { t: "買う", p: "kau" },
                { t: "かもしれません", p: "kamo-shiremasen" }
            ]
        },
        {
            instruction: "This machine must be broken.",
            hint: "เครื่องจักรนี้ต้องเสียแน่ๆ",
            answer: [
                { t: "この", p: "kono" },
                { t: "機械", p: "kikai" },
                { t: "は", p: "wa" },
                { t: "故障している", p: "koshō-shite-iru" },
                { t: "に違いない", p: "ni-chigai-arimasen" }
            ]
        },
        {
            instruction: "He might forget his passport.",
            hint: "เขาอาจจะลืมหนังสือเดินทาง",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "パスポート", p: "pasupōto" },
                { t: "を", p: "o" },
                { t: "忘れる", p: "wasureru" },
                { t: "かもしれません", p: "kamo-shiremasen" }
            ]
        },
        {
            instruction: "She must be sleeping now.",
            hint: "ตอนนี้เธอต้องกำลังนอนอยู่แน่ๆ",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "今", p: "ima" },
                { t: "寝ている", p: "nete-iru" },
                { t: "に違いない", p: "ni-chigai-arimasen" }
            ]
        },
        {
            instruction: "The store might be closed.",
            hint: "ร้านอาจจะปิด",
            answer: [
                { t: "店", p: "mise" },
                { t: "は", p: "wa" },
                { t: "閉まっている", p: "shimatte-iru" },
                { t: "かもしれません", p: "kamo-shiremasen" }
            ]
        },
        {
            instruction: "They must be happy.",
            hint: "พวกเขามีความสุขแน่ๆ",
            answer: [
                { t: "彼ら", p: "karera" },
                { t: "は", p: "wa" },
                { t: "幸せ", p: "shiawase" },
                { t: "に違いない", p: "ni-chigai-arimasen" }
            ]
        },
        {
            instruction: "It might be expensive.",
            hint: "มันอาจจะแพง",
            answer: [
                { t: "それ", p: "sore" },
                { t: "は", p: "wa" },
                { t: "高い", p: "takai" },
                { t: "かもしれません", p: "kamo-shiremasen" }
            ]
        },
        {
            instruction: "He must be the teacher.",
            hint: "เขาต้องเป็นครูแน่ๆ",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "先生", p: "sensei" },
                { t: "に違いない", p: "ni-chigai-arimasen" }
            ]
        },
        {
            instruction: "The test might be difficult.",
            hint: "ข้อสอบอาจจะยาก",
            answer: [
                { t: "テスト", p: "tesuto" },
                { t: "は", p: "wa" },
                { t: "難しい", p: "muzukashii" },
                { t: "かもしれません", p: "kamo-shiremasen" }
            ]
        },
        {
            instruction: "She must be at home.",
            hint: "เธอต้องอยู่ที่บ้านแน่ๆ",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "家", p: "ie" },
                { t: "に", p: "ni" },
                { t: "いる", p: "iru" },
                { t: "に違いない", p: "ni-chigai-arimasen" }
            ]
        },
        {
            instruction: "It might snow tonight.",
            hint: "คืนนี้หิมะอาจจะตก",
            answer: [
                { t: "今夜", p: "kon'ya" },
                { t: "は", p: "wa" },
                { t: "雪", p: "yuki" },
                { t: "が", p: "ga" },
                { t: "降る", p: "furu" },
                { t: "かもしれません", p: "kamo-shiremasen" }
            ]
        },
        {
            instruction: "This problem must be dangerous.",
            hint: "ปัญหานี้ต้องอันตรายแน่ๆ",
            answer: [
                { t: "この", p: "kono" },
                { t: "問題", p: "mondai" },
                { t: "は", p: "wa" },
                { t: "危険", p: "kiken" },
                { t: "に違いない", p: "ni-chigai-arimasen" }
            ]
        }
    ]
});