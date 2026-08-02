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
                { t: "私", p: "watashi", e: "I", th: "ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "タイ料理", p: "tai-ryouri", e: "Thai food", th: "อาหารไทย" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "食べません", p: "tabemasen", e: "do not eat", th: "ไม่กิน" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He doesn't drink water.",
            hint: "เขาไม่ดื่มน้ำ",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "水", p: "mizu", e: "water", th: "น้ำ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "飲みません", p: "nomimasen", e: "does not drink", th: "ไม่ดื่ม" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She doesn't read a book.",
            hint: "เธอไม่อ่านหนังสือ",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "本", p: "hon", e: "book", th: "หนังสือ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "読みません", p: "yomimasen", e: "does not read", th: "ไม่อ่าน" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "The teacher doesn't speak Japanese.",
            hint: "ครูไม่พูดภาษาญี่ปุ่น",
            answer: [
                { t: "先生", p: "sensei", e: "teacher", th: "ครู" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "日本語", p: "nihongo", e: "Japanese", th: "ภาษาญี่ปุ่น" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "話しません", p: "hanashimasen", e: "does not speak", th: "ไม่พูด" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I don't buy a car.",
            hint: "ผมไม่ซื้อรถยนต์",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "車", p: "kuruma", e: "car", th: "รถยนต์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "買いません", p: "kaimasen", e: "do not buy", th: "ไม่ซื้อ" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "My friend doesn't watch a movie.",
            hint: "เพื่อนของผมไม่ดูภาพยนตร์",
            answer: [
                { t: "友達", p: "tomodachi", e: "friend", th: "เพื่อน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "映画", p: "eiga", e: "movie", th: "ภาพยนตร์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "見ません", p: "mimasen", e: "does not watch", th: "ไม่ดู" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "We don't study grammar.",
            hint: "พวกเราไม่เรียนไวยากรณ์",
            answer: [
                { t: "私たち", p: "watashitachi", e: "we", th: "พวกเรา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "文法", p: "bunpou", e: "grammar", th: "ไวยากรณ์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "勉強しません", p: "benkyoushimasen", e: "do not study", th: "ไม่เรียน" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He doesn't write a letter.",
            hint: "เขาไม่เขียนจดหมาย",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "手紙", p: "tegami", e: "letter", th: "จดหมาย" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "書きません", p: "kakimasen", e: "does not write", th: "ไม่เขียน" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I don't listen to music.",
            hint: "ผมไม่ฟังเพลง",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "音楽", p: "ongaku", e: "music", th: "เพลง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "聴きません", p: "kikimasen", e: "do not listen to", th: "ไม่ฟัง" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She doesn't make coffee.",
            hint: "เธอไม่ชงกาแฟ",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "コーヒー", p: "koohee", e: "coffee", th: "กาแฟ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "淹れません", p: "iremasen", e: "does not make/brew", th: "ไม่ชง" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "The dog doesn't eat meat.",
            hint: "สุนัขไม่กินเนื้อ",
            answer: [
                { t: "犬", p: "inu", e: "dog", th: "สุนัข" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "肉", p: "niku", e: "meat", th: "เนื้อ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "食べません", p: "tabemasen", e: "does not eat", th: "ไม่กิน" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I don't wash my hands.",
            hint: "ผมไม่ล้างมือ",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "手", p: "te", e: "hands", th: "มือ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "洗いません", p: "araimasen", e: "do not wash", th: "ไม่ล้าง" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He doesn't open the window.",
            hint: "เขาไม่เปิดหน้าต่าง",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "窓", p: "mado", e: "window", th: "หน้าต่าง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "開けません", p: "akemasen", e: "does not open", th: "ไม่เปิด" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She doesn't close the door.",
            hint: "เธอไม่ปิดประตู",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ドア", p: "doa", e: "door", th: "ประตู" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "閉めません", p: "shimemasen", e: "does not close", th: "ไม่ปิด" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I don't take a photo.",
            hint: "ผมไม่ถ่ายรูป",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "写真", p: "shashin", e: "photo", th: "รูป" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "撮りません", p: "torimasen", e: "do not take", th: "ไม่ถ่าย" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "The cat doesn't drink milk.",
            hint: "แมวไม่ดื่มนม",
            answer: [
                { t: "猫", p: "neko", e: "cat", th: "แมว" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "牛乳", p: "gyuunyuu", e: "milk", th: "นม" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "飲みません", p: "nomimasen", e: "does not drink", th: "ไม่ดื่ม" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "They don't carry luggage.",
            hint: "พวกเขาไม่ยกกระเป๋าเดินทาง",
            answer: [
                { t: "彼ら", p: "karera", e: "they", th: "พวกเขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "荷物", p: "nimotsu", e: "luggage", th: "กระเป๋าเดินทาง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "運びません", p: "hakobimasen", e: "do not carry", th: "ไม่ยก" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I don't use a computer.",
            hint: "ผมไม่ใช้คอมพิวเตอร์",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "パソコン", p: "pasokon", e: "computer", th: "คอมพิวเตอร์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "使いません", p: "tsukaimasen", e: "do not use", th: "ไม่ใช้" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He doesn't cook dinner.",
            hint: "เขาไม่ทำอาหารเย็น",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "夕食", p: "yuushoku", e: "dinner", th: "อาหารเย็น" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "作りません", p: "tsukurimasen", e: "does not cook/make", th: "ไม่ทำ" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She doesn't play the guitar.",
            hint: "เธอไม่เล่นกีตาร์",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ギター", p: "gitaa", e: "guitar", th: "กีตาร์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "弾きません", p: "hikimasen", e: "does not play", th: "ไม่เล่น" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I don't clean the room.",
            hint: "ผมไม่ทำความสะอาดห้อง",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "部屋", p: "heya", e: "room", th: "ห้อง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "掃除しません", p: "soujishimasen", e: "do not clean", th: "ไม่ทำความสะอาด" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He doesn't sell shoes.",
            hint: "เขาไม่ขายรองเท้า",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "靴", p: "kutsu", e: "shoes", th: "รองเท้า" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "売りません", p: "urimasen", e: "does not sell", th: "ไม่ขาย" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She doesn't cut the bread.",
            hint: "เธอไม่หั่นขนมปัง",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "パン", p: "pan", e: "bread", th: "ขนมปัง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "切りません", p: "kirimasen", e: "does not cut", th: "ไม่หั่น" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I don't eat raw fish.",
            hint: "ผมไม่กินปลาดิบ",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "刺身", p: "sashimi", e: "sashimi / raw fish", th: "ปลาดิบ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "食べません", p: "tabemasen", e: "do not eat", th: "ไม่กิน" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He doesn't drive a truck.",
            hint: "เขาไม่ขับรถบรรทุก",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "トラック", p: "torakku", e: "truck", th: "รถบรรทุก" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "運転しません", p: "untenshimasen", e: "does not drive", th: "ไม่ขับ" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She doesn't learn a language.",
            hint: "เธอไม่เรียนภาษา",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "言語", p: "gengo", e: "language", th: "ภาษา" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "学びません", p: "manabimasen", e: "does not learn", th: "ไม่เรียน" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I don't carry a bag.",
            hint: "ผมไม่ถือกระเป๋า",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "カバン", p: "kaban", e: "bag", th: "กระเป๋า" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "持ちません", p: "mochimasen", e: "do not carry/hold", th: "ไม่ถือ" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He doesn't borrow a pencil.",
            hint: "เขาไม่ยืมดินสอ",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "鉛筆", p: "enpitsu", e: "pencil", th: "ดินสอ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "借りません", p: "karimasen", e: "does not borrow", th: "ไม่ยืม" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She doesn't plant a tree.",
            hint: "เธอไม่ปลูกต้นไม้",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "木", p: "ki", e: "tree", th: "ต้นไม้" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "植えません", p: "uemasen", e: "does not plant", th: "ไม่ปลูก" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I don't throw a ball.",
            hint: "ผมไม่ขว้างลูกบอล",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ボール", p: "booru", e: "ball", th: "ลูกบอล" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "投げません", p: "nagemasen", e: "do not throw", th: "ไม่ขว้าง" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        }
    ]
});