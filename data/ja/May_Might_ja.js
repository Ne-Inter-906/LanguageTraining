// カテゴリリストが未定義なら作成
window.japaneseCategories = window.japaneseCategories || [];

// 独立した単独ファイルとして読み込める 20問構成データ（Hint: Thai）
window.japaneseCategories.push({
    name: "May Might (推量・確信・伝聞・推測)",
    data: [
        // ==========================================================================
        // 1. 推量（〜かもしれない / may, might） [5問]
        // ==========================================================================
        {
            instruction: "It may rain tomorrow.",
            hint: "พรุ่งนี้ฝนอาจจะตก",
            answer: [
                { t: "明日", p: "ashita", e: "tomorrow", th: "พรุ่งนี้" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "雨", p: "ame", e: "rain", th: "ฝน" },
                { t: "が", p: "ga", e: "[subject]", th: "[ประธาน]" },
                { t: "降る", p: "furu", e: "fall", th: "ตก" },
                { t: "かも", p: "kamo", e: "might", th: "อาจ" },
                { t: "しれ", p: "shire", e: "know", th: "จะ" },
                { t: "ません", p: "masen", e: "not [polite]", th: "[สุภาพปฏิเสธ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He may be busy now.",
            hint: "ตอนนี้เขาอาจจะยุ่ง",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "今", p: "ima", e: "now", th: "ตอนนี้" },
                { t: "忙しい", p: "isogashii", e: "busy", th: "ยุ่ง" },
                { t: "かも", p: "kamo", e: "might", th: "อาจ" },
                { t: "しれ", p: "shire", e: "know", th: "จะ" },
                { t: "ません", p: "masen", e: "not [polite]", th: "[สุภาพปฏิเสธ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "This train might be delayed.",
            hint: "รถไฟขบวนนี้อาจจะล่าช้า",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "電車", p: "densha", e: "train", th: "รถไฟ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "遅れる", p: "okureru", e: "be delayed", th: "ล่าช้า" },
                { t: "かも", p: "kamo", e: "might", th: "อาจ" },
                { t: "しれ", p: "shire", e: "know", th: "จะ" },
                { t: "ません", p: "masen", e: "not [polite]", th: "[สุภาพปฏิเสธ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She might come to the party.",
            hint: "เธออาจจะมางานปาร์ตี้",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "パーティー", p: "paatii", e: "party", th: "ปาร์ตี้" },
                { t: "に", p: "ni", e: "to", th: "ที่" },
                { t: "来る", p: "kuru", e: "come", th: "มา" },
                { t: "かも", p: "kamo", e: "might", th: "อาจ" },
                { t: "しれ", p: "shire", e: "know", th: "จะ" },
                { t: "ません", p: "masen", e: "not [polite]", th: "[สุภาพปฏิเสธ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "That store may be closed today.",
            hint: "วันนี้ร้านนั้นอาจจะปิด",
            answer: [
                { t: "あの", p: "ano", e: "that", th: "นั้น" },
                { t: "店", p: "mise", e: "store", th: "ร้าน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "今日", p: "kyou", e: "today", th: "วันนี้" },
                { t: "休み", p: "yasumi", e: "closed", th: "ปิด" },
                { t: "かも", p: "kamo", e: "might", th: "อาจ" },
                { t: "しれ", p: "shire", e: "know", th: "จะ" },
                { t: "ません", p: "masen", e: "not [polite]", th: "[สุภาพปฏิเสธ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },

        // ==========================================================================
        // 2. 確信（〜に違いない / must be） [5問]
        // ==========================================================================
        {
            instruction: "He must be tired after work.",
            hint: "หลังเลิกงานเขาต้องเหนื่อยแน่ๆ",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "仕事", p: "shigoto", e: "work", th: "งาน" },
                { t: "の", p: "no", e: "of", th: "ของ" },
                { t: "後", p: "ato", e: "after", th: "หลัง" },
                { t: "で", p: "de", e: "at", th: "ที่" },
                { t: "疲れ", p: "tsukare", e: "tired", th: "เหนื่อย" },
                { t: "て", p: "te", e: "[conjunctive]", th: "[เชื่อม]" },
                { t: "いる", p: "iru", e: "be", th: "อยู่" },
                { t: "に", p: "ni", e: "to", th: "อย่าง" },
                { t: "違い", p: "chigai", e: "mistake", th: "ผิดพลาด" },
                { t: "ありません", p: "arimasen", e: "there is no", th: "ไม่มี" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "This answer must be correct.",
            hint: "คำตอบนี้ต้องถูกต้องอย่างแน่นอน",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "答え", p: "kotae", e: "answer", th: "คำตอบ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "正しい", p: "tadashii", e: "correct", th: "ถูกต้อง" },
                { t: "に", p: "ni", e: "to", th: "อย่าง" },
                { t: "違い", p: "chigai", e: "mistake", th: "ผิดพลาด" },
                { t: "ありません", p: "arimasen", e: "there is no", th: "ไม่มี" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She must be happy with the gift.",
            hint: "เธอต้องดีใจกับของขวัญแน่ๆ",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "プレゼント", p: "purezento", e: "gift", th: "ของขวัญ" },
                { t: "に", p: "ni", e: "with", th: "กับ" },
                { t: "喜ん", p: "yorokon", e: "delighted", th: "ดีใจ" },
                { t: "で", p: "de", e: "[conjunctive]", th: "[เชื่อม]" },
                { t: "いる", p: "iru", e: "be", th: "อยู่" },
                { t: "に", p: "ni", e: "to", th: "อย่าง" },
                { t: "違い", p: "chigai", e: "mistake", th: "ผิดพลาด" },
                { t: "ありません", p: "arimasen", e: "there is no", th: "ไม่มี" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "They must know each other.",
            hint: "พวกเขาต้องรู้จักกันอย่างแน่นอน",
            answer: [
                { t: "彼ら", p: "karera", e: "they", th: "พวกเขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "知り合い", p: "shiriai", e: "acquaintances", th: "คนรู้จัก" },
                { t: "に", p: "ni", e: "to", th: "อย่าง" },
                { t: "違い", p: "chigai", e: "mistake", th: "ผิดพลาด" },
                { t: "ありません", p: "arimasen", e: "there is no", th: "ไม่มี" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "This coffee must be hot.",
            hint: "กาแฟนี้ต้องร้อนแน่ๆ",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "コーヒー", p: "koohee", e: "coffee", th: "กาแฟ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "熱い", p: "atsui", e: "hot", th: "ร้อน" },
                { t: "に", p: "ni", e: "to", th: "อย่าง" },
                { t: "違い", p: "chigai", e: "mistake", th: "ผิดพลาด" },
                { t: "ありません", p: "arimasen", e: "there is no", th: "ไม่มี" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },

        // ==========================================================================
        // 3. 伝聞（〜だそうだ・〜らしい / I heard that, seems） [5問]
        // ==========================================================================
        {
            instruction: "I heard that Tanaka is coming tomorrow.",
            hint: "ได้ยินว่าคุณทะนะกะจะมาพรุ่งนี้",
            answer: [
                { t: "田中", p: "tanaka", e: "Tanaka", th: "ทะนะกะ" },
                { t: "さん", p: "san", e: "Mr./Ms.", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "明日", p: "ashita", e: "tomorrow", th: "พรุ่งนี้" },
                { t: "来る", p: "kuru", e: "come", th: "มา" },
                { t: "そう", p: "sou", e: "I heard", th: "ได้ยินว่า" },
                { t: "です", p: "desu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I heard that the exam was difficult.",
            hint: "ได้ยินว่าข้อสอบยาก",
            answer: [
                { t: "試験", p: "shiken", e: "exam", th: "ข้อสอบ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "難しかっ", p: "muzukashika", e: "was difficult", th: "ยาก" },
                { t: "た", p: "ta", e: "[past]", th: "[อดีต]" },
                { t: "そう", p: "sou", e: "I heard", th: "ได้ยินว่า" },
                { t: "です", p: "desu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "It seems like it will snow tonight.",
            hint: "ดูเหมือนว่าหิมะจะตกคืนนี้",
            answer: [
                { t: "今夜", p: "konya", e: "tonight", th: "คืนนี้" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "雪", p: "yuki", e: "snow", th: "หิมะ" },
                { t: "が", p: "ga", e: "[subject]", th: "[ประธาน]" },
                { t: "降る", p: "furu", e: "fall", th: "ตก" },
                { t: "らしい", p: "rashii", e: "seems like", th: "ดูเหมือนว่า" },
                { t: "です", p: "desu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I heard that Thai food is spicy.",
            hint: "ได้ยินว่าอาหารไทยเผ็ด",
            answer: [
                { t: "タイ", p: "tai", e: "Thai", th: "ไทย" },
                { t: "料理", p: "ryouri", e: "food", th: "อาหาร" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "辛い", p: "karai", e: "spicy", th: "เผ็ด" },
                { t: "そう", p: "sou", e: "I heard", th: "ได้ยินว่า" },
                { t: "です", p: "desu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "It seems he left early.",
            hint: "ดูเหมือนว่าเขาจะกลับไว",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "早く", p: "hayaku", e: "early", th: "ไว" },
                { t: "帰っ", p: "kae", e: "went home", th: "กลับ" },
                { t: "た", p: "ta", e: "[past]", th: "[อดีต]" },
                { t: "らしい", p: "rashii", e: "seems like", th: "ดูเหมือนว่า" },
                { t: "です", p: "desu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },

        // ==========================================================================
        // 4. 外観推測（〜そうだ・〜に見える / looks like） [5問]
        // ==========================================================================
        {
            instruction: "This dish looks delicious.",
            hint: "อาหารนี้ดูน่าอร่อย",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "料理", p: "ryouri", e: "dish", th: "อาหาร" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "美味し", p: "oishi", e: "delicious", th: "อร่อย" },
                { t: "そう", p: "sou", e: "looks like", th: "ดูน่า" },
                { t: "です", p: "desu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "It looks like it will rain soon.",
            hint: "ดูเหมือนฝนกำลังจะตกเร็วๆ นี้",
            answer: [
                { t: "今にも", p: "imanimo", e: "at any moment", th: "เร็วๆ นี้" },
                { t: "雨", p: "ame", e: "rain", th: "ฝน" },
                { t: "が", p: "ga", e: "[subject]", th: "[ประธาน]" },
                { t: "降り", p: "furi", e: "fall", th: "ตก" },
                { t: "そう", p: "sou", e: "looks like", th: "ดูเหมือน" },
                { t: "です", p: "desu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She looks happy today.",
            hint: "วันนี้เธออดูมีความสุข",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "今日", p: "kyou", e: "today", th: "วันนี้" },
                { t: "嬉し", p: "ureshi", e: "happy", th: "มีความสุข" },
                { t: "そう", p: "sou", e: "looks like", th: "ดู" },
                { t: "です", p: "desu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "That bag looks heavy.",
            hint: "กระเป๋าใบนั้นดูหนัก",
            answer: [
                { t: "その", p: "sono", e: "that", th: "นั้น" },
                { t: "カバン", p: "kaban", e: "bag", th: "กระเป๋า" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "重", p: "omo", e: "heavy", th: "หนัก" },
                { t: "そう", p: "sou", e: "looks like", th: "ดู" },
                { t: "です", p: "desu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "This problem looks difficult.",
            hint: "โจทย์นี้ดูยาก",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "問題", p: "mondai", e: "problem", th: "โจทย์" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "難し", p: "muzukashi", e: "difficult", th: "ยาก" },
                { t: "そう", p: "sou", e: "looks like", th: "ดู" },
                { t: "です", p: "desu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        }
    ]
});