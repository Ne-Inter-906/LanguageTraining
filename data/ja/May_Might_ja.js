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
                { t: "明日", p: "ashita" }, { t: "は", p: "wa" }, { t: "雨", p: "ame" },
                { t: "が", p: "ga" }, { t: "降る", p: "furu" }, { t: "かも", p: "kamo" },
                { t: "しれ", p: "shire" }, { t: "ません", p: "masen" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "He may be busy now.",
            hint: "ตอนนี้เขาอาจจะยุ่ง",
            answer: [
                { t: "彼", p: "kare" }, { t: "は", p: "wa" }, { t: "今", p: "ima" },
                { t: "忙しい", p: "isogashii" }, { t: "かも", p: "kamo" }, { t: "しれ", p: "shire" },
                { t: "ません", p: "masen" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "This train might be delayed.",
            hint: "รถไฟขบวนนี้อาจจะล่าช้า",
            answer: [
                { t: "この", p: "kono" }, { t: "電車", p: "densha" }, { t: "は", p: "wa" },
                { t: "遅れる", p: "okureru" }, { t: "かも", p: "kamo" }, { t: "しれ", p: "shire" },
                { t: "ません", p: "masen" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "She might come to the party.",
            hint: "เธออาจจะมางานปาร์ตี้",
            answer: [
                { t: "彼女", p: "kanojo" }, { t: "は", p: "wa" }, { t: "パーティー", p: "paatii" },
                { t: "に", p: "ni" }, { t: "来る", p: "kuru" }, { t: "かも", p: "kamo" },
                { t: "しれ", p: "shire" }, { t: "ません", p: "masen" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "That store may be closed today.",
            hint: "วันนี้ร้านนั้นอาจจะปิด",
            answer: [
                { t: "あの", p: "ano" }, { t: "店", p: "mise" }, { t: "は", p: "wa" },
                { t: "今日", p: "kyou" }, { t: "休み", p: "yasumi" }, { t: "かも", p: "kamo" },
                { t: "しれ", p: "shire" }, { t: "ません", p: "masen" }, { t: "。", p: "." }
            ]
        },

        // ==========================================================================
        // 2. 確信（〜に違いない / must be） [5問]
        // ==========================================================================
        {
            instruction: "He must be tired after work.",
            hint: "หลังเลิกงานเขาต้องเหนื่อยแน่ๆ",
            answer: [
                { t: "彼", p: "kare" }, { t: "は", p: "wa" }, { t: "仕事", p: "shigoto" },
                { t: "の", p: "no" }, { t: "後", p: "ato" }, { t: "で", p: "de" },
                { t: "疲れ", p: "tsukare" }, { t: "て", p: "te" }, { t: "いる", p: "iru" },
                { t: "に", p: "ni" }, { t: "違い", p: "chigai" }, { t: "ありません", p: "arimasen" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "This answer must be correct.",
            hint: "คำตอบนี้ต้องถูกต้องอย่างแน่นอน",
            answer: [
                { t: "この", p: "kono" }, { t: "答え", p: "kotae" }, { t: "は", p: "wa" },
                { t: "正しい", p: "tadashii" }, { t: "に", p: "ni" }, { t: "違い", p: "chigai" },
                { t: "ありません", p: "arimasen" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "She must be happy with the gift.",
            hint: "เธอต้องดีใจกับของขวัญแน่ๆ",
            answer: [
                { t: "彼女", p: "kanojo" }, { t: "は", p: "wa" }, { t: "プレゼント", p: "purezento" },
                { t: "に", p: "ni" }, { t: "喜ん", p: "yorokon" }, { t: "で", p: "de" },
                { t: "いる", p: "iru" }, { t: "に", p: "ni" }, { t: "違い", p: "chigai" },
                { t: "ありません", p: "arimasen" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "They must know each other.",
            hint: "พวกเขาต้องรู้จักกันอย่างแน่นอน",
            answer: [
                { t: "彼ら", p: "karera" }, { t: "は", p: "wa" }, { t: "知り合い", p: "shiriai" },
                { t: "に", p: "ni" }, { t: "違い", p: "chigai" }, { t: "ありません", p: "arimasen" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "This coffee must be hot.",
            hint: "กาแฟนี้ต้องร้อนแน่ๆ",
            answer: [
                { t: "この", p: "kono" }, { t: "コーヒー", p: "koohee" }, { t: "は", p: "wa" },
                { t: "熱い", p: "atsui" }, { t: "に", p: "ni" }, { t: "違い", p: "chigai" },
                { t: "ありません", p: "arimasen" }, { t: "。", p: "." }
            ]
        },

        // ==========================================================================
        // 3. 伝聞（〜だそうだ・〜らしい / I heard that, seems） [5問]
        // ==========================================================================
        {
            instruction: "I heard that Tanaka is coming tomorrow.",
            hint: "ได้ยินว่าคุณทะนะกะจะมาพรุ่งนี้",
            answer: [
                { t: "田中", p: "tanaka" }, { t: "さん", p: "san" }, { t: "は", p: "wa" },
                { t: "明日", p: "ashita" }, { t: "来る", p: "kuru" }, { t: "そう", p: "sou" },
                { t: "です", p: "desu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "I heard that the exam was difficult.",
            hint: "ได้ยินว่าข้อสอบยาก",
            answer: [
                { t: "試験", p: "shiken" }, { t: "は", p: "wa" }, { t: "難しかっ", p: "muzukashika" },
                { t: "た", p: "ta" }, { t: "そう", p: "sou" }, { t: "です", p: "desu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "It seems like it will snow tonight.",
            hint: "ดูเหมือนว่าหิมะจะตกคืนนี้",
            answer: [
                { t: "今夜", p: "konya" }, { t: "は", p: "wa" }, { t: "雪", p: "yuki" },
                { t: "が", p: "ga" }, { t: "降る", p: "furu" }, { t: "らしい", p: "rashii" },
                { t: "です", p: "desu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "I heard that Thai food is spicy.",
            hint: "ได้ยินว่าอาหารไทยเผ็ด",
            answer: [
                { t: "タイ", p: "tai" }, { t: "料理", p: "ryouri" }, { t: "は", p: "wa" },
                { t: "辛い", p: "karai" }, { t: "そう", p: "sou" }, { t: "です", p: "desu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "It seems he left early.",
            hint: "ดูเหมือนว่าเขาจะกลับไว",
            answer: [
                { t: "彼", p: "kare" }, { t: "は", p: "wa" }, { t: "早く", p: "hayaku" },
                { t: "帰っ", p: "kae" }, { t: "た", p: "ta" }, { t: "らしい", p: "rashii" },
                { t: "です", p: "desu" }, { t: "。", p: "." }
            ]
        },

        // ==========================================================================
        // 4. 外観推測（〜そうだ・〜に見える / looks like） [5問]
        // ==========================================================================
        {
            instruction: "This dish looks delicious.",
            hint: "อาหารนี้ดูน่าอร่อย",
            answer: [
                { t: "この", p: "kono" }, { t: "料理", p: "ryouri" }, { t: "は", p: "wa" },
                { t: "美味し", p: "oishi" }, { t: "そう", p: "sou" }, { t: "です", p: "desu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "It looks like it will rain soon.",
            hint: "ดูเหมือนฝนกำลังจะตกเร็วๆ นี้",
            answer: [
                { t: "今にも", p: "imanimo" }, { t: "雨", p: "ame" }, { t: "が", p: "ga" },
                { t: "降り", p: "furi" }, { t: "そう", p: "sou" }, { t: "です", p: "desu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "She looks happy today.",
            hint: "วันนี้เธออดูมีความสุข",
            answer: [
                { t: "彼女", p: "kanojo" }, { t: "は", p: "wa" }, { t: "今日", p: "kyou" },
                { t: "嬉し", p: "ureshi" }, { t: "そう", p: "sou" }, { t: "です", p: "desu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "That bag looks heavy.",
            hint: "กระเป๋าใบนั้นดูหนัก",
            answer: [
                { t: "その", p: "sono" }, { t: "カバン", p: "kaban" }, { t: "は", p: "wa" },
                { t: "重", p: "omo" }, { t: "そう", p: "sou" }, { t: "です", p: "desu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "This problem looks difficult.",
            hint: "โจทย์นี้ดูยาก",
            answer: [
                { t: "この", p: "kono" }, { t: "問題", p: "mondai" }, { t: "は", p: "wa" },
                { t: "難し", p: "muzukashi" }, { t: "そう", p: "sou" }, { t: "です", p: "desu" }, { t: "。", p: "." }
            ]
        }
    ]
});