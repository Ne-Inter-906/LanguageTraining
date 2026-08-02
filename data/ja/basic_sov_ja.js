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
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "タイ料理", p: "tai-ryōri", e: "Thai food", th: "อาหารไทย" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "食べます", p: "tabemasu", e: "eat", th: "กิน" }
            ]
        },
        {
            instruction: "He drinks water.",
            hint: "เขาดื่มน้ำ",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "水", p: "mizu", e: "water", th: "น้ำ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "飲みます", p: "nomimasu", e: "drink", th: "ดื่ม" }
            ]
        },
        {
            instruction: "She reads a book.",
            hint: "เธออ่านหนังสือ",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "本", p: "hon", e: "book", th: "หนังสือ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "読みます", p: "yomimasu", e: "read", th: "อ่าน" }
            ]
        },
        {
            instruction: "The teacher speaks Japanese.",
            hint: "ครูพูดภาษาญี่ปุ่น",
            answer: [
                { t: "先生", p: "sensei", e: "teacher", th: "ครู / อาจารย์" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "日本語", p: "nihongo", e: "Japanese language", th: "ภาษาญี่ปุ่น" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "話します", p: "hanashimasu", e: "speak", th: "พูด" }
            ]
        },
        {
            instruction: "I buy a car.",
            hint: "ผมซื้อรถยนต์",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "車", p: "kuruma", e: "car", th: "รถยนต์" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "買います", p: "kaimasu", e: "buy", th: "ซื้อ" }
            ]
        },
        {
            instruction: "My friend watches a movie.",
            hint: "เพื่อนของผมดูภาพยนตร์",
            answer: [
                { t: "友達", p: "tomodachi", e: "friend", th: "เพื่อน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "映画", p: "eiga", e: "movie", th: "ภาพยนตร์" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "見ます", p: "mimasu", e: "watch / see", th: "ดู" }
            ]
        },
        {
            instruction: "We study grammar.",
            hint: "พวกเราเรียนไวยากรณ์",
            answer: [
                { t: "私たち", p: "watashitachi", e: "we", th: "พวกเรา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "文法", p: "bunpō", e: "grammar", th: "ไวยากรณ์" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "勉強します", p: "benkyō-shimasu", e: "study", th: "เรียน" }
            ]
        },
        {
            instruction: "He writes a letter.",
            hint: "เขาเขียนจดหมาย",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "手紙", p: "tegami", e: "letter", th: "จดหมาย" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "書きます", p: "kakimasu", e: "write", th: "เขียน" }
            ]
        },
        {
            instruction: "I listen to music.",
            hint: "ผมฟังเพลง",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "音楽", p: "ongaku", e: "music", th: "เพลง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "聴きます", p: "kikimasu", e: "listen to", th: "ฟัง" }
            ]
        },
        {
            instruction: "She makes coffee.",
            hint: "เธอชงกาแฟ",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "コーヒー", p: "kōhī", e: "coffee", th: "กาแฟ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "淹れます", p: "iremasu", e: "make / brew", th: "ชง" }
            ]
        },
        {
            instruction: "The dog eats meat.",
            hint: "สุนัขกินเนื้อ",
            answer: [
                { t: "犬", p: "inu", e: "dog", th: "สุนัข" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "肉", p: "niku", e: "meat", th: "เนื้อ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "食べます", p: "tabemasu", e: "eat", th: "กิน" }
            ]
        },
        {
            instruction: "I wash my hands.",
            hint: "ผมล้างมือ",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "手", p: "te", e: "hands", th: "มือ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "洗います", p: "araimasu", e: "wash", th: "ล้าง" }
            ]
        },
        {
            instruction: "He opens the window.",
            hint: "เขาเปิดหน้าต่าง",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "窓", p: "mado", e: "window", th: "หน้าต่าง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "開けます", p: "akemasu", e: "open", th: "เปิด" }
            ]
        },
        {
            instruction: "She closes the door.",
            hint: "เธอปิดประตู",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ドア", p: "doa", e: "door", th: "ประตู" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "閉めます", p: "shimemasu", e: "close", th: "ปิด" }
            ]
        },
        {
            instruction: "I take a photo.",
            hint: "ผมถ่ายรูป",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "写真", p: "shashin", e: "photo", th: "รูปถ่าย" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "撮ります", p: "torimasu", e: "take (a photo)", th: "ถ่าย" }
            ]
        },
        {
            instruction: "The cat drinks milk.",
            hint: "แมวดื่มนม",
            answer: [
                { t: "猫", p: "neko", e: "cat", th: "แมว" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "牛乳", p: "gyūnyū", e: "milk", th: "นม" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "飲みます", p: "nomimasu", e: "drink", th: "ดื่ม" }
            ]
        },
        {
            instruction: "They carry luggage.",
            hint: "พวกเขายกกระเป๋าเดินทาง",
            answer: [
                { t: "彼ら", p: "karera", e: "they", th: "พวกเขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "荷物", p: "nimotsu", e: "luggage", th: "สัมภาระ / กระเป๋าเดินทาง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "運びます", p: "hakobimasu", e: "carry / transport", th: "ขนย้าย / ยก" }
            ]
        },
        {
            instruction: "I use a computer.",
            hint: "ผมใช้คอมพิวเตอร์",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "パソコン", p: "pasokon", e: "computer", th: "คอมพิวเตอร์" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "使います", p: "tsukaimasu", e: "use", th: "ใช้" }
            ]
        },
        {
            instruction: "He cooks dinner.",
            hint: "เขาทำอาหารเย็น",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "夕食", p: "yūshoku", e: "dinner", th: "อาหารเย็น" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "作ります", p: "tsukurimasu", e: "make / cook", th: "ทำ" }
            ]
        },
        {
            instruction: "She plays the guitar.",
            hint: "เธอเล่นกีตาร์",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ギター", p: "gitā", e: "guitar", th: "กีตาร์" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "弾きます", p: "hikimasu", e: "play (string instrument)", th: "เล่น" }
            ]
        },
        {
            instruction: "I clean the room.",
            hint: "ผมทำความสะอาดห้อง",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "部屋", p: "heya", e: "room", th: "ห้อง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "掃除します", p: "sōji-shimasu", e: "clean", th: "ทำความสะอาด" }
            ]
        },
        {
            instruction: "He sells shoes.",
            hint: "เขาขายรองเท้า",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "靴", p: "kutsu", e: "shoes", th: "รองเท้า" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "売ります", p: "urimasu", e: "sell", th: "ขาย" }
            ]
        },
        {
            instruction: "She cuts the bread.",
            hint: "เธอหั่นขนมปัง",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "パン", p: "pan", e: "bread", th: "ขนมปัง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "切ります", p: "kirimasu", e: "cut", th: "หั่น / ตัด" }
            ]
        },
        {
            instruction: "I eat raw fish.",
            hint: "ผมกินปลาดิบ",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "刺身", p: "sashimi", e: "raw fish / sashimi", th: "ปลาดิบ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "食べます", p: "tabemasu", e: "eat", th: "กิน" }
            ]
        },
        {
            instruction: "He drives a truck.",
            hint: "เขาขับรถบรรทุก",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "トラック", p: "torakku", e: "truck", th: "รถบรรทุก" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "運転します", p: "unten-shimasu", e: "drive", th: "ขับ" }
            ]
        },
        {
            instruction: "She learns a language.",
            hint: "เธอเรียนภาษา",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "言語", p: "gengo", e: "language", th: "ภาษา" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "学びます", p: "manabimasu", e: "learn", th: "เรียนรู้" }
            ]
        },
        {
            instruction: "I carry a bag.",
            hint: "ผมถือกระเป๋า",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "カバン", p: "kaban", e: "bag", th: "กระเป๋า" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "持ちます", p: "mochimasu", e: "hold / carry", th: "ถือ" }
            ]
        },
        {
            instruction: "He borrows a pencil.",
            hint: "เขาขอยืมดินสอ",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "鉛筆", p: "enpitsu", e: "pencil", th: "ดินสอ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "借ります", p: "karimasu", e: "borrow", th: "ยืม" }
            ]
        },
        {
            instruction: "She plants a tree.",
            hint: "เธอปลูกต้นไม้",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "木", p: "ki", e: "tree", th: "ต้นไม้" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "植えます", p: "uemasu", e: "plant", th: "ปลูก" }
            ]
        },
        {
            instruction: "I throw a ball.",
            hint: "ผมขว้างลูกบอล",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ボール", p: "bōru", e: "ball", th: "ลูกบอล" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "投げます", p: "nagemasu", e: "throw", th: "ขว้าง / โยน" }
            ]
        }
    ]
});