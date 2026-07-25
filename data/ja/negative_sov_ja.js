// カテゴリリストが未定義なら作成
window.japaneseCategories = window.japaneseCategories || [];

// リストにこのファイルのデータを追加
window.japaneseCategories.push({
    name: "Negative (否定文)",
    data: [
    {
        instruction: "I don't eat Thai food.",
        hint: "ผมไม่กินอาหารไทย",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "タイ料理", p: "tai-ryōri" },
            { t: "を", p: "o" },
            { t: "食べません", p: "tabemasen" }
        ]
    },
    {
        instruction: "He doesn't drink water.",
        hint: "เขาไม่ดื่มน้ำ",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "水", p: "mizu" },
            { t: "を", p: "o" },
            { t: "飲みません", p: "nomimasen" }
        ]
    },
    {
        instruction: "She doesn't read a book.",
        hint: "เธอไม่อ่านหนังสือ",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "本", p: "hon" },
            { t: "を", p: "o" },
            { t: "読みません", p: "yomimasen" }
        ]
    },
    {
        instruction: "The teacher doesn't speak Japanese.",
        hint: "ครูไม่พูดภาษาญี่ปุ่น",
        answer: [
            { t: "先生", p: "sensei" },
            { t: "は", p: "wa" },
            { t: "日本語", p: "nihongo" },
            { t: "を", p: "o" },
            { t: "話しません", p: "hanashimasen" }
        ]
    },
    {
        instruction: "I don't buy a car.",
        hint: "ผมไม่ซื้อรถยนต์",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "車", p: "kuruma" },
            { t: "を", p: "o" },
            { t: "買いません", p: "kaimasen" }
        ]
    },
    {
        instruction: "My friend doesn't watch a movie.",
        hint: "เพื่อนของผมไม่ดูภาพยนตร์",
        answer: [
            { t: "友達", p: "tomodachi" },
            { t: "は", p: "wa" },
            { t: "映画", p: "eiga" },
            { t: "を", p: "o" },
            { t: "見ません", p: "mimasen" }
        ]
    },
    {
        instruction: "We don't study grammar.",
        hint: "พวกเราไม่เรียนไวยากรณ์",
        answer: [
            { t: "私たち", p: "watashitachi" },
            { t: "は", p: "wa" },
            { t: "文法", p: "bunpō" },
            { t: "を", p: "o" },
            { t: "勉強しません", p: "benkyō-shimasen" }
        ]
    },
    {
        instruction: "He doesn't write a letter.",
        hint: "เขาไม่เขียนจดหมาย",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "手紙", p: "tegami" },
            { t: "を", p: "o" },
            { t: "書きません", p: "kakimasu" }
        ]
    },
    {
        instruction: "I don't listen to music.",
        hint: "ผมไม่ฟังเพลง",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "音楽", p: "ongaku" },
            { t: "を", p: "o" },
            { t: "聴きません", p: "kikimasen" }
        ]
    },
    {
        instruction: "She doesn't make coffee.",
        hint: "เธอไม่ชงกาแฟ",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "コーヒー", p: "kōhī" },
            { t: "を", p: "o" },
            { t: "淹れません", p: "iremasen" }
        ]
    },
    {
        instruction: "The dog doesn't eat meat.",
        hint: "สุนัขไม่กินเนื้อ",
        answer: [
            { t: "犬", p: "inu" },
            { t: "は", p: "wa" },
            { t: "肉", p: "niku" },
            { t: "を", p: "o" },
            { t: "食べません", p: "tabemasen" }
        ]
    },
    {
        instruction: "I don't wash my hands.",
        hint: "ผมไม่ล้างมือ",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "手", p: "te" },
            { t: "を", p: "o" },
            { t: "洗いません", p: "araimasen" }
        ]
    },
    {
        instruction: "He doesn't open the window.",
        hint: "เขาไม่เปิดหน้าต่าง",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "窓", p: "mado" },
            { t: "を", p: "o" },
            { t: "開けません", p: "akemasen" }
        ]
    },
    {
        instruction: "She doesn't close the door.",
        hint: "เธอไม่ปิดประตู",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "ドア", p: "doa" },
            { t: "を", p: "o" },
            { t: "閉めません", p: "shimemasen" }
        ]
    },
    {
        instruction: "I don't take a photo.",
        hint: "ผมไม่ถ่ายรูป",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "写真", p: "shashin" },
            { t: "を", p: "o" },
            { t: "撮りません", p: "torimasen" }
        ]
    },
    {
        instruction: "The cat doesn't drink milk.",
        hint: "แมวไม่ดื่มนม",
        answer: [
            { t: "猫", p: "neko" },
            { t: "は", p: "wa" },
            { t: "牛乳", p: "gyūnyū" },
            { t: "を", p: "o" },
            { t: "飲みません", p: "nomimasen" }
        ]
    },
    {
        instruction: "They don't carry luggage.",
        hint: "พวกเขาไม่ยกกระเป๋าเดินทาง",
        answer: [
            { t: "彼ら", p: "karera" },
            { t: "は", p: "wa" },
            { t: "荷物", p: "nimotsu" },
            { t: "を", p: "o" },
            { t: "運びません", p: "hakobimasu" }
        ]
    },
    {
        instruction: "I don't use a computer.",
        hint: "ผมไม่ใช้คอมพิวเตอร์",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "パソコン", p: "pasokon" },
            { t: "を", p: "o" },
            { t: "使いません", p: "tsukaimasu" }
        ]
    },
    {
        instruction: "He doesn't cook dinner.",
        hint: "เขาไม่ทำอาหารเย็น",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "夕食", p: "yūshoku" },
            { t: "を", p: "o" },
            { t: "作りません", p: "tsukurimasu" }
        ]
    },
    {
        instruction: "She doesn't play the guitar.",
        hint: "เธอไม่เล่นกีตาร์",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "ギター", p: "gitā" },
            { t: "を", p: "o" },
            { t: "弾きません", p: "hikimasen" }
        ]
    },
    {
        instruction: "I don't clean the room.",
        hint: "ผมไม่ทำความสะอาดห้อง",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "部屋", p: "heya" },
            { t: "を", p: "o" },
            { t: "掃除しません", p: "sōji-shimasu" }
        ]
    },
    {
        instruction: "He doesn't sell shoes.",
        hint: "เขาไม่ขายรองเท้า",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "靴", p: "kutsu" },
            { t: "を", p: "o" },
            { t: "売りません", p: "urimasu" }
        ]
    },
    {
        instruction: "She doesn't cut the bread.",
        hint: "เธอไม่หั่นขนมปัง",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "パン", p: "pan" },
            { t: "を", p: "o" },
            { t: "切りません", p: "kirimasu" }
        ]
    },
    {
        instruction: "I don't eat raw fish.",
        hint: "ผมไม่กินปลาดิบ",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "刺身", p: "sashimi" },
            { t: "を", p: "o" },
            { t: "食べません", p: "tabemasen" }
        ]
    },
    {
        instruction: "He doesn't drive a truck.",
        hint: "เขาไม่ขับรถบรรทุก",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "トラック", p: "torakku" },
            { t: "を", p: "o" },
            { t: "運転しません", p: "unten-shimasu" }
        ]
    },
    {
        instruction: "She doesn't learn a language.",
        hint: "เธอไม่เรียนภาษา",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "言語", p: "gengo" },
            { t: "を", p: "o" },
            { t: "学びません", p: "manabimasu" }
        ]
    },
    {
        instruction: "I don't carry a bag.",
        hint: "ผมไม่ถือกระเป๋า",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "カバン", p: "kaban" },
            { t: "を", p: "o" },
            { t: "持ちません", p: "mochimasu" }
        ]
    },
    {
        instruction: "He doesn't borrow a pencil.",
        hint: "เขาไม่ยืมดินสอ",
        answer: [
            { t: "彼", p: "kare" },
            { t: "は", p: "wa" },
            { t: "鉛筆", p: "enpitsu" },
            { t: "を", p: "o" },
            { t: "借りません", p: "karimasu" }
        ]
    },
    {
        instruction: "She doesn't plant a tree.",
        hint: "เธอไม่ปลูกต้นไม้",
        answer: [
            { t: "彼女", p: "kanojo" },
            { t: "は", p: "wa" },
            { t: "木", p: "ki" },
            { t: "を", p: "o" },
            { t: "植えません", p: "uemasu" }
        ]
    },
    {
        instruction: "I don't throw a ball.",
        hint: "ผมไม่ขว้างลูกบอล",
        answer: [
            { t: "私", p: "watashi" },
            { t: "は", p: "wa" },
            { t: "ボール", p: "bōru" },
            { t: "を", p: "o" },
            { t: "投げません", p: "nagemasu" }
        ]
    }
    ]
});