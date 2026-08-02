// カテゴリリストが未定義なら作成
window.japaneseCategories = window.japaneseCategories || [];

// リストにこのファイルのデータを追加
window.japaneseCategories.push({
    name: "Question SOV (疑問文)",
    data: [
        {
            instruction: "Do you eat Thai food?",
            hint: "คุณกินอาหารไทยไหม",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "タイ料理", p: "tai-ryouri", e: "Thai food", th: "อาหารไทย" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "食べます", p: "tabemasu", e: "eat", th: "กิน" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does he drink water?",
            hint: "เขาดื่มน้ำไหม",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "水", p: "mizu", e: "water", th: "น้ำ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "飲みます", p: "nomimasu", e: "drink", th: "ดื่ม" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does she read a book?",
            hint: "เธออ่านหนังสือไหม",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "本", p: "hon", e: "book", th: "หนังสือ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "読みます", p: "yomimasu", e: "read", th: "อ่าน" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does the teacher speak Japanese?",
            hint: "ครูพูดภาษาญี่ปุ่นไหม",
            answer: [
                { t: "先生", p: "sensei", e: "teacher", th: "ครู" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "日本語", p: "nihongo", e: "Japanese", th: "ภาษาญี่ปุ่น" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "話します", p: "hanashimasu", e: "speak", th: "พูด" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Do you buy a car?",
            hint: "คุณซื้อรถยนต์ไหม",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "車", p: "kuruma", e: "car", th: "รถยนต์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "買います", p: "kaimasu", e: "buy", th: "ซื้อ" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does your friend watch a movie?",
            hint: "เพื่อนของคุณดูภาพยนตร์ไหม",
            answer: [
                { t: "友達", p: "tomodachi", e: "friend", th: "เพื่อน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "映画", p: "eiga", e: "movie", th: "ภาพยนตร์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "見ます", p: "mimasu", e: "watch", th: "ดู" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Do you study grammar?",
            hint: "คุณเรียนไวยากรณ์ไหม",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "文法", p: "bunpou", e: "grammar", th: "ไวยากรณ์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "勉強します", p: "benkyoushimasu", e: "study", th: "เรียน" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does he write a letter?",
            hint: "เขาเขียนจดหมายไหม",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "手紙", p: "tegami", e: "letter", th: "จดหมาย" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "書きます", p: "kakimasu", e: "write", th: "เขียน" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Do you listen to music?",
            hint: "คุณฟังเพลงไหม",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "音楽", p: "ongaku", e: "music", th: "เพลง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "聴きます", p: "kikimasu", e: "listen to", th: "ฟัง" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does she make coffee?",
            hint: "เธอชงกาแฟไหม",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "コーヒー", p: "koohee", e: "coffee", th: "กาแฟ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "淹れます", p: "iremasu", e: "make/brew", th: "ชง" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does the dog eat meat?",
            hint: "สุนัขกินเนื้อไหม",
            answer: [
                { t: "犬", p: "inu", e: "dog", th: "สุนัข" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "肉", p: "niku", e: "meat", th: "เนื้อ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "食べます", p: "tabemasu", e: "eat", th: "กิน" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Do you wash your hands?",
            hint: "คุณล้างมือไหม",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "手", p: "te", e: "hands", th: "มือ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "洗います", p: "araimasu", e: "wash", th: "ล้าง" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does he open the window?",
            hint: "เขาเปิดหน้าต่างไหม",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "窓", p: "mado", e: "window", th: "หน้าต่าง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "開けます", p: "akemasu", e: "open", th: "เปิด" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does she close the door?",
            hint: "เธอปิดประตูไหม",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ドア", p: "doa", e: "door", th: "ประตู" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "閉めます", p: "shimemasu", e: "close", th: "ปิด" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Do you take a photo?",
            hint: "คุณถ่ายรูปไหม",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "写真", p: "shashin", e: "photo", th: "รูป" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "撮ります", p: "torimasu", e: "take", th: "ถ่าย" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does the cat drink milk?",
            hint: "แมวดื่มนมไหม",
            answer: [
                { t: "猫", p: "neko", e: "cat", th: "แมว" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "牛乳", p: "gyuunyuu", e: "milk", th: "นม" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "飲みます", p: "nomimasu", e: "drink", th: "ดื่ม" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Do they carry luggage?",
            hint: "พวกเขายกกระเป๋าเดินทางไหม",
            answer: [
                { t: "彼ら", p: "karera", e: "they", th: "พวกเขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "荷物", p: "nimotsu", e: "luggage", th: "กระเป๋าเดินทาง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "運びます", p: "hakobimasu", e: "carry", th: "ยก" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Do you use a computer?",
            hint: "คุณใช้คอมพิวเตอร์ไหม",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "パソコン", p: "pasokon", e: "computer", th: "คอมพิวเตอร์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "使います", p: "tsukaimasu", e: "use", th: "ใช้" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does he cook dinner?",
            hint: "เขาทำอาหารเย็นไหม",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "夕食", p: "yuushoku", e: "dinner", th: "อาหารเย็น" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "作ります", p: "tsukurimasu", e: "cook/make", th: "ทำ" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does she play the guitar?",
            hint: "เธอเล่นกีตาร์ไหม",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ギター", p: "gitaa", e: "guitar", th: "กีตาร์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "弾きます", p: "hikimasu", e: "play", th: "เล่น" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Do you clean the room?",
            hint: "คุณทำความสะอาดห้องไหม",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "部屋", p: "heya", e: "room", th: "ห้อง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "掃除します", p: "soujishimasu", e: "clean", th: "ทำความสะอาด" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does he sell shoes?",
            hint: "เขาขายรองเท้าไหม",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "靴", p: "kutsu", e: "shoes", th: "รองเท้า" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "売ります", p: "urimasu", e: "sell", th: "ขาย" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does she cut the bread?",
            hint: "เธอหั่นขนมปังไหม",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "パン", p: "pan", e: "bread", th: "ขนมปัง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "切ります", p: "kirimasu", e: "cut", th: "หั่น" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Do you eat raw fish?",
            hint: "คุณกินปลาดิบไหม",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "刺身", p: "sashimi", e: "sashimi / raw fish", th: "ปลาดิบ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "食べます", p: "tabemasu", e: "eat", th: "กิน" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does he drive a truck?",
            hint: "เขาขับรถบรรทุกไหม",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "トラック", p: "torakku", e: "truck", th: "รถบรรทุก" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "運転します", p: "untenshimasu", e: "drive", th: "ขับ" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does she learn a language?",
            hint: "เธอเรียนภาษาไหม",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "言語", p: "gengo", e: "language", th: "ภาษา" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "学びます", p: "manabimasu", e: "learn", th: "เรียน" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Do you carry a bag?",
            hint: "คุณถือกระเป๋าไหม",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "カバン", p: "kaban", e: "bag", th: "กระเป๋า" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "持ちます", p: "mochimasu", e: "carry/hold", th: "ถือ" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does he borrow a pencil?",
            hint: "เขายืมดินสอไหม",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "鉛筆", p: "enpitsu", e: "pencil", th: "ดินสอ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "借ります", p: "karimasu", e: "borrow", th: "ยืม" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Does she plant a tree?",
            hint: "เธอปลูกต้นไม้ไหม",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "木", p: "ki", e: "tree", th: "ต้นไม้" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "植えます", p: "uemasu", e: "plant", th: "ปลูก" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        },
        {
            instruction: "Do you throw a ball?",
            hint: "คุณขว้างลูกบอลไหม",
            answer: [
                { t: "あなた", p: "anata", e: "you", th: "คุณ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ボール", p: "booru", e: "ball", th: "ลูกบอล" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "投げます", p: "nagemasu", e: "throw", th: "ขว้าง" },
                { t: "か", p: "ka", e: "[question]", th: "ไหม" }
            ]
        }
    ]
});