// カテゴリリストが未定義なら作成
window.thaiCategories = window.thaiCategories || [];

// リストにこのファイルのデータを追加
window.thaiCategories.push({
    name: "Basic_questions (疑問文)",
    data: [
        {
            instruction: "Are you free?",
            hint: "あなたは暇ですか？",
            answer: [
                { t: "คุณ", p: "khun" },
                { t: "ว่าง", p: "wâang" },
                { t: "ไหม", p: "mǎi" }
            ]
        },
        {
            instruction: "Is it delicious?",
            hint: "美味しいですか？",
            answer: [
                { t: "อร่อย", p: "a-ròi" },
                { t: "ไหม", p: "mǎi" }
            ]
        },
        {
            instruction: "Do you understand?",
            hint: "理解できますか？ / 分かりますか？",
            answer: [
                { t: "เข้าใจ", p: "khâo-jai" },
                { t: "ไหม", p: "mǎi" }
            ]
        },
        {
            instruction: "What is this?",
            hint: "これは何ですか？",
            answer: [
                { t: "นี่", p: "nîi" },
                { t: "คือ", p: "khuu" },
                { t: "อะไร", p: "a-rai" }
            ]
        },
        {
            instruction: "What are you eating?",
            hint: "あなたは何を食べていますか？",
            answer: [
                { t: "คุณ", p: "khun" },
                { t: "กิน", p: "kin" },
                { t: "อะไร", p: "a-rai" }
            ]
        },
        {
            instruction: "Where are you going?",
            hint: "あなたはどこへ行きますか？",
            answer: [
                { t: "คุณ", p: "khun" },
                { t: "จะ", p: "ja" },
                { t: "ไป", p: "pai" },
                { t: "ไหน", p: "nǎi" }
            ]
        },
        {
            instruction: "Where is the bathroom?",
            hint: "トイレはどこですか？",
            answer: [
                { t: "ห้องน้ำ", p: "hôong-nám" },
                { t: "อยู่", p: "yùu" },
                { t: "ที่ไหน", p: "thîi-nǎi" }
            ]
        },
        {
            instruction: "Who is he?",
            hint: "彼は誰ですか？",
            answer: [
                { t: "เขา", p: "khǎo" },
                { t: "คือ", p: "khuu" },
                { t: "ใคร", p: "khrai" }
            ]
        },
        {
            instruction: "Whose car is this?",
            hint: "これは誰の車ですか？",
            answer: [
                { t: "นี่", p: "nîi" },
                { t: "รถ", p: "rot" },
                { t: "ของ", p: "khǒong" },
                { t: "ใคร", p: "khrai" }
            ]
        },
        {
            instruction: "When will you return?",
            hint: "あなたはいつ戻りますか？",
            answer: [
                { t: "คุณ", p: "khun" },
                { t: "จะ", p: "ja" },
                { t: "กลับ", p: "glap" },
                { t: "เมื่อไหร่", p: "mûa-rài" }
            ]
        },
        {
            instruction: "How much is this?",
            hint: "これはいくらですか？",
            answer: [
                { t: "อันนี้", p: "an-níi" },
                { t: "ราคา", p: "raa-khaaa" },
                { t: "เท่าไหร่", p: "thâo-rài" }
            ]
        },
        {
            instruction: "How old are you?",
            hint: "あなたは何歳ですか？",
            answer: [
                { t: "คุณ", p: "khun" },
                { t: "อายุ", p: "aa-yu" },
                { t: "เท่าไหร่", p: "thâo-rài" }
            ]
        },
        {
            instruction: "Why did you come?",
            hint: "なぜ来ましたか？",
            answer: [
                { t: "ทำไม", p: "tham-mai" },
                { t: "ถึง", p: "thǔng" },
                { t: "มา", p: "maa" }
            ]
        },
        {
            instruction: "How do you go?",
            hint: "どのように行きますか？",
            answer: [
                { t: "ไป", p: "pai" },
                { t: "อย่างไร", p: "yàang-rai" }
            ]
        },
        {
            instruction: "Which one do you like?",
            hint: "どちら（どのもの）が好きですか？",
            answer: [
                { t: "คุณ", p: "khun" },
                { t: "ชอบ", p: "chôop" },
                { t: "อันไหน", p: "an-nǎi" }
            ]
        }
    ]
});