// カテゴリリストが未定義なら作成
window.japaneseCategories = window.japaneseCategories || [];

// リストにこのファイルのデータを追加
window.japaneseCategories.push({
    name: "Basic (平叙文)",
    data: [
    {
        instruction: "I eat Thai food.",
        hint: "ผมกินอาหารไทย",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "タイ料理", p: "tai-ryōri" },
            { t: "を", p: "o" },
            { t: "食べます", p: "tabemasu" }
        ]
    },
    {
        instruction: "He drinks water.",
        hint: "เขาดื่มน้ำ",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "水", p: "mizu" },
            { t: "を", p: "o" },
            { t: "飲みます", p: "nomimasu" }
        ]
    },
    {
        instruction: "She reads a book.",
        hint: "เธออ่านหนังสือ",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "本", p: "hon" },
            { t: "を", p: "o" },
            { t: "読みます", p: "yomimasu" }
        ]
    },
    {
        instruction: "The teacher speaks Japanese.",
        hint: "ครูพูดภาษาญี่ปุ่น",
        answer: [
            { t: "先生", p: "sensei" },
            { t: "は", p: "wa" },
            { t: "日本語", p: "nihongo" },
            { t: "を", p: "o" },
            { t: "話します", p: "hanashimasu" }
        ]
    },
    {
        instruction: "I buy a car.",
        hint: "ผมซื้อรถยนต์",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "車", p: "kuruma" },
            { t: "を", p: "o" },
            { t: "買います", p: "kaimasu" }
        ]
    },
    {
        instruction: "My friend watches a movie.",
        hint: "เพื่อนของผมดูภาพยนตร์",
        answer: [
            { t: "友達", p: "tomodachi" },
            { t: "は", p: "wa" },
            { t: "映画", p: "eiga" },
            { t: "を", p: "o" },
            { t: "見ます", p: "mimasu" }
        ]
    },
    {
        instruction: "We study grammar.",
        hint: "พวกเราเรียนไวยากรณ์",
        answer: [
            { t: "私たち", p: "watashitachi" },
            { t: "は", p: "wa" },
            { t: "文法", p: "bunpō" },
            { t: "を", p: "o" },
            { t: "勉強します", p: "benkyō-shimasu" }
        ]
    },
    {
        instruction: "He writes a letter.",
        hint: "เขาเขียนจดหมาย",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "手紙", p: "tegami" },
            { t: "を", p: "o" },
            { t: "書きます", p: "kakimasu" }
        ]
    },
    {
        instruction: "I listen to music.",
        hint: "ผมฟังเพลง",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "音楽", p: "ongaku" },
            { t: "を", p: "o" },
            { t: "聴きます", p: "kikimasu" }
        ]
    },
    {
        instruction: "She makes coffee.",
        hint: "เธอชงกาแฟ",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "コーヒー", p: "kōhī" },
            { t: "を", p: "o" },
            { t: "淹れます", p: "iremasu" }
        ]
    },
    {
        instruction: "The dog eats meat.",
        hint: "สุนัขกินเนื้อ",
        answer: [
            { t: "犬", p: "inu" },
            { t: "は", p: "wa" },
            { t: "肉", p: "niku" },
            { t: "を", p: "o" },
            { t: "食べます", p: "tabemasu" }
        ]
    },
    {
        instruction: "I wash my hands.",
        hint: "ผมล้างมือ",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "手", p: "te" },
            { t: "を", p: "o" },
            { t: "洗います", p: "araimasu" }
        ]
    },
    {
        instruction: "He opens the window.",
        hint: "เขาเปิดหน้าต่าง",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "窓", p: "mado" },
            { t: "を", p: "o" },
            { t: "開けます", p: "akemasu" }
        ]
    },
    {
        instruction: "She closes the door.",
        hint: "เธอปิดประตู",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "ドア", p: "doa" },
            { t: "を", p: "o" },
            { t: "閉めます", p: "shimemasu" }
        ]
    },
    {
        instruction: "I take a photo.",
        hint: "ผมถ่ายรูป",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "写真", p: "shashin" },
            { t: "を", p: "o" },
            { t: "撮ります", p: "torimasu" }
        ]
    },
    {
        instruction: "The cat drinks milk.",
        hint: "แมวดื่มนม",
        answer: [
            { t: "猫", p: "neko" },
            { t: "は", p: "wa" },
            { t: "牛乳", p: "gyūnyū" },
            { t: "を", p: "o" },
            { t: "飲みます", p: "nomimasu" }
        ]
    },
    {
        instruction: "They carry luggage.",
        hint: "พวกเขายกกระเป๋าเดินทาง",
        answer: [
            { t: "彼ら", p: "karera" },
            { t: "は", p: "wa" },
            { t: "荷物", p: "nimotsu" },
            { t: "を", p: "o" },
            { t: "運びます", p: "hakobimasu" }
        ]
    },
    {
        instruction: "I use a computer.",
        hint: "ผมใช้คอมพิวเตอร์",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "パソコン", p: "pasokon" },
            { t: "を", p: "o" },
            { t: "使います", p: "tsukaimasu" }
        ]
    },
    {
        instruction: "He cooks dinner.",
        hint: "เขาทำอาหารเย็น",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "夕食", p: "yūshoku" },
            { t: "を", p: "o" },
            { t: "作ります", p: "tsukurimasu" }
        ]
    },
    {
        instruction: "She plays the guitar.",
        hint: "เธอเล่นกีตาร์",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "ギター", p: "gitā" },
            { t: "を", p: "o" },
            { t: "弾きます", p: "hikimasu" }
        ]
    },
    {
        instruction: "I clean the room.",
        hint: "ผมทำความสะอาดห้อง",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "部屋", p: "heya" },
            { t: "を", p: "o" },
            { t: "掃除します", p: "sōji-shimasu" }
        ]
    },
    {
        instruction: "He sells shoes.",
        hint: "เขาขายรองเท้า",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "靴", p: "kutsu" },
            { t: "を", p: "o" },
            { t: "売ります", p: "urimasu" }
        ]
    },
    {
        instruction: "She cuts the bread.",
        hint: "เธอหั่นขนมปัง",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "パン", p: "pan" },
            { t: "を", p: "o" },
            { t: "切ります", p: "kirimasu" }
        ]
    },
    {
        instruction: "I raw fish.", // 一般的な英語表現としてI eat raw fish
        instruction: "I eat raw fish.",
        hint: "ผมกินปลาดิบ",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "刺身", p: "sashimi" },
            { t: "を", p: "o" },
            { t: "食べます", p: "tabemasu" }
        ]
    },
    {
        instruction: "He drives a truck.",
        hint: "เขาขับรถบรรทุก",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "トラック", p: "torakku" },
            { t: "を", p: "o" },
            { t: "運転します", p: "unten-shimasu" }
        ]
    },
    {
        instruction: "She learns a language.",
        hint: "เธอเรียนภาษา",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "言語", p: "gengo" },
            { t: "を", p: "o" },
            { t: "学びます", p: "manabimasu" }
        ]
    },
    {
        instruction: "I carry a bag.",
        hint: "ผมถือกระเป๋า",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "カバン", p: "kaban" },
            { t: "を", p: "o" },
            { t: "持ちます", p: "mochimasu" }
        ]
    },
    {
        instruction: "He borrows a pencil.",
        hint: "ขอยืมดินสอ",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "鉛筆", p: "enpitsu" },
            { t: "を", p: "o" },
            { t: "借ります", p: "karimasu" }
        ]
    },
    {
        instruction: "She plants a tree.",
        hint: "เธอปลูกต้นไม้",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "木", p: "ki" },
            { t: "を", p: "o" },
            { t: "植えます", p: "uemasu" }
        ]
    },
    {
        instruction: "I throw a ball.",
        hint: "ผมขว้างลูกบอล",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "ボール", p: "bōru" },
            { t: "を", p: "o" },
            { t: "投げます", p: "nagemasu" }
        ]
    }
    ]
});