// カテゴリリストが未定義なら作成
window.japaneseCategories = window.japaneseCategories || [];

// リストにこのファイルのデータを追加
window.japaneseCategories.push({
    name: "Tense SOV (時制 過去・進行・完了)",
    data: [
        // === 1. 過去形（〜ました） [1〜10問目] ===
        {
            instruction: "I watched a movie yesterday.",
            hint: "เมื่อวานฉันดูหนัง",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "昨日", p: "kinou", e: "yesterday", th: "เมื่อวาน" },
                { t: "映画", p: "eiga", e: "movie", th: "หนัง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "見", p: "mi", e: "watch", th: "ดู" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He bought a new car.",
            hint: "เขาซื้อรถใหม่",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "新しい", p: "atarashii", e: "new", th: "ใหม่" },
                { t: "車", p: "kuruma", e: "car", th: "รถ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "買い", p: "kai", e: "buy", th: "ซื้อ" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "The train arrived at the station.",
            hint: "รถไฟมาถึงสถานีแล้ว",
            answer: [
                { t: "電車", p: "densha", e: "train", th: "รถไฟ" },
                { t: "が", p: "ga", e: "[subject]", th: "[ประธาน]" },
                { t: "駅", p: "eki", e: "station", th: "สถานี" },
                { t: "に", p: "ni", e: "at", th: "ที่" },
                { t: "到着", p: "touchaku", e: "arrival", th: "การมาถึง" },
                { t: "し", p: "shi", e: "do", th: "ทำ" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I washed my hands.",
            hint: "ฉันล้างมือแล้ว",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "手", p: "te", e: "hand", th: "มือ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "洗い", p: "arai", e: "wash", th: "ล้าง" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "We ate lunch together.",
            hint: "พวกเราทานอาหารกลางวันด้วยกัน",
            answer: [
                { t: "私たち", p: "watashitachi", e: "we", th: "พวกเรา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "一緒に", p: "isshoni", e: "together", th: "ด้วยกัน" },
                { t: "昼ご飯", p: "hirugohan", e: "lunch", th: "อาหารกลางวัน" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "食べ", p: "tabe", e: "eat", th: "ทาน" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I studied English last night.",
            hint: "เมื่อคืนฉันเรียนภาษาอังกฤษ",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "昨夜", p: "sakuya", e: "last night", th: "เมื่อคืน" },
                { t: "英語", p: "eigo", e: "English", th: "ภาษาอังกฤษ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "勉強", p: "benkyou", e: "study", th: "เรียน" },
                { t: "し", p: "shi", e: "do", th: "ทำ" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "The library closed at 5 o'clock.",
            hint: "ห้องสมุดปิดตอน 5 โมง",
            answer: [
                { t: "図書館", p: "toshokan", e: "library", th: "ห้องสมุด" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "5時", p: "goji", e: "5 o'clock", th: "5 โมง" },
                { t: "に", p: "ni", e: "at", th: "ตอน" },
                { t: "閉まり", p: "shimari", e: "close", th: "ปิด" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "My friend came to Japan.",
            hint: "เพื่อนของฉันมาญี่ปุ่น",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน" },
                { t: "の", p: "no", e: "'s", th: "ของ" },
                { t: "友達", p: "tomodachi", e: "friend", th: "เพื่อน" },
                { t: "が", p: "ga", e: "[subject]", th: "[ประธาน]" },
                { t: "日本", p: "nihon", e: "Japan", th: "ญี่ปุ่น" },
                { t: "に", p: "ni", e: "to", th: "ที่" },
                { t: "来", p: "ki", e: "come", th: "มา" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I read a book this morning.",
            hint: "เมื่อเช้าฉันอ่านหนังสือ",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "今朝", p: "kesa", e: "this morning", th: "เมื่อเช้า" },
                { t: "本", p: "hon", e: "book", th: "หนังสือ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "読み", p: "yomi", e: "read", th: "อ่าน" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He called the teacher.",
            hint: "เขาโทรหาคุณครู",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "先生", p: "sensei", e: "teacher", th: "คุณครู" },
                { t: "に", p: "ni", e: "to", th: "หา" },
                { t: "電話", p: "denwa", e: "phone", th: "โทรศัพท์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "かけ", p: "kake", e: "make (call)", th: "โทร" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },

        // === 2. 現在進行・状態（〜ています） [11〜20問目] ===
        {
            instruction: "I am playing a game now.",
            hint: "ตอนนี้ฉันกำลังเล่นเกมอยู่",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "今", p: "ima", e: "now", th: "ตอนนี้" },
                { t: "ゲーム", p: "geemu", e: "game", th: "เกม" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "し", p: "shi", e: "do", th: "เล่น" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She is reading a book.",
            hint: "เธอกำลังอ่านหนังสืออยู่",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "本", p: "hon", e: "book", th: "หนังสือ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "読ん", p: "yon", e: "read", th: "อ่าน" },
                { t: "で", p: "de", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "It is raining right now.",
            hint: "ตอนนี้ฝนกำลังตกอยู่",
            answer: [
                { t: "今", p: "ima", e: "now", th: "ตอนนี้" },
                { t: "、", p: ",", e: ",", th: "," },
                { t: "雨", p: "ame", e: "rain", th: "ฝน" },
                { t: "が", p: "ga", e: "[subject]", th: "[ประธาน]" },
                { t: "降っ", p: "fut", e: "fall", th: "ตก" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "My friend is driving a car.",
            hint: "เพื่อนกำลังขับรถอยู่",
            answer: [
                { t: "友達", p: "tomodachi", e: "friend", th: "เพื่อน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "車", p: "kuruma", e: "car", th: "รถ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "運転", p: "unten", e: "drive", th: "ขับ" },
                { t: "し", p: "shi", e: "do", th: "ทำ" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "They are listening to music.",
            hint: "พวกเขากำลังฟังเพลงอยู่",
            answer: [
                { t: "彼ら", p: "karera", e: "they", th: "พวกเขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "音楽", p: "ongaku", e: "music", th: "เพลง" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "聴い", p: "kii", e: "listen", th: "ฟัง" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "The child is sleeping in the room.",
            hint: "เด็กกำลังนอนหลับอยู่ในห้อง",
            answer: [
                { t: "子供", p: "kodomo", e: "child", th: "เด็ก" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "部屋", p: "heya", e: "room", th: "ห้อง" },
                { t: "で", p: "de", e: "in", th: "ใน" },
                { t: "寝", p: "ne", e: "sleep", th: "นอน" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I know his name.",
            hint: "ฉันรู้จักชื่อของเขา",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "彼", p: "kare", e: "his", th: "เขา" },
                { t: "の", p: "no", e: "'s", th: "ของ" },
                { t: "名前", p: "namae", e: "name", th: "ชื่อ" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "知っ", p: "shir", e: "know", th: "รู้" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He lives in Tokyo.",
            hint: "เขาอาศัยอยู่ในโตเกียว",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "東京", p: "toukyou", e: "Tokyo", th: "โตเกียว" },
                { t: "に", p: "ni", e: "in", th: "ใน" },
                { t: "住ん", p: "sun", e: "live", th: "อาศัย" },
                { t: "で", p: "de", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "My older sister is cooking lunch.",
            hint: "พี่สาวกำลังทำอาหารกลางวันอยู่",
            answer: [
                { t: "姉", p: "ane", e: "older sister", th: "พี่สาว" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "昼ご飯", p: "hirugohan", e: "lunch", th: "อาหารกลางวัน" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "作っ", p: "tsukut", e: "make", th: "ทำ" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "The bus is stopping there.",
            hint: "รถบัสจอดอยู่ตรงนั้น",
            answer: [
                { t: "バス", p: "basu", e: "bus", th: "รถบัส" },
                { t: "が", p: "ga", e: "[subject]", th: "[ประธาน]" },
                { t: "そこ", p: "soko", e: "there", th: "ตรงนั้น" },
                { t: "に", p: "ni", e: "at", th: "ที่" },
                { t: "止まっ", p: "tomat", e: "stop", th: "จอด" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ます", p: "masu", e: "[polite]", th: "[สุภาพ]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },

        // === 3. 過去進行・完了（〜ていました / 〜てしまいました） [21〜30問目] ===
        {
            instruction: "I was studying around 8 o'clock.",
            hint: "ช่วงประมาณ 8 โมง ฉันกำลังเรียนอยู่",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "8時", p: "hachiji", e: "8 o'clock", th: "8 โมง" },
                { t: "ごろ", p: "goro", e: "around", th: "ประมาณ" },
                { t: "勉強", p: "benkyou", e: "study", th: "เรียน" },
                { t: "し", p: "shi", e: "do", th: "ทำ" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "When you called, I was taking a bath.",
            hint: "ตอนที่คุณโทรมา ฉันกำลังอาบน้ำอยู่",
            answer: [
                { t: "電話", p: "denwa", e: "phone", th: "โทรศัพท์" },
                { t: "が", p: "ga", e: "[subject]", th: "[ประธาน]" },
                { t: "鳴った", p: "natta", e: "rang", th: "ดัง" },
                { t: "とき", p: "toki", e: "when", th: "ตอนที่" },
                { t: "、", p: ",", e: ",", th: "," },
                { t: "私", p: "watashi", e: "I", th: "ฉัน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "お風呂", p: "ofuro", e: "bath", th: "อ่างอาบน้ำ" },
                { t: "に", p: "ni", e: "into", th: "ใน" },
                { t: "入っ", p: "hai", e: "enter", th: "เข้า" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He was waiting for his friend at the station.",
            hint: "เขากำลังรอเพื่อนอยู่ที่สถานี",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "駅", p: "eki", e: "station", th: "สถานี" },
                { t: "で", p: "de", e: "at", th: "ที่" },
                { t: "友達", p: "tomodachi", e: "friend", th: "เพื่อน" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "待っ", p: "mat", e: "wait", th: "รอ" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "It was snowing this morning.",
            hint: "เมื่อเช้านี้หิมะกำลังตกอยู่",
            answer: [
                { t: "今朝", p: "kesa", e: "this morning", th: "เมื่อเช้า" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "雪", p: "yuki", e: "snow", th: "หิมะ" },
                { t: "が", p: "ga", e: "[subject]", th: "[ประธาน]" },
                { t: "降っ", p: "fut", e: "fall", th: "ตก" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "She was playing the piano at that time.",
            hint: "ตอนนั้นเธอกำลังเล่นเปียโนอยู่",
            answer: [
                { t: "そのとき", p: "sonotoki", e: "at that time", th: "ตอนนั้น" },
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ピアノ", p: "piano", e: "piano", th: "เปียโน" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "弾い", p: "hii", e: "play", th: "เล่น" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "い", p: "i", e: "be", th: "อยู่" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I accidentally lost my wallet.",
            hint: "ฉันทำกระเป๋าสตางค์หายไปเสียแล้ว",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "財布", p: "saifu", e: "wallet", th: "กระเป๋าสตางค์" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "落とし", p: "otoshi", e: "drop", th: "ทำตก" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "しまい", p: "shimai", e: "completely", th: "เสียแล้ว" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "He accidentally ate my cake.",
            hint: "เขาเผลอกินเค้กของฉันไปเสียแล้ว",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "私", p: "watashi", e: "my", th: "ฉัน" },
                { t: "の", p: "no", e: "'s", th: "ของ" },
                { t: "ケーキ", p: "keeki", e: "cake", th: "เค้ก" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "食べ", p: "tabe", e: "eat", th: "กิน" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "しまい", p: "shimai", e: "completely", th: "เสียแล้ว" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "I have already finished my homework.",
            hint: "ฉันทำการบ้านเสร็จเรียบร้อยแล้ว",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "もう", p: "mou", e: "already", th: "แล้ว" },
                { t: "宿題", p: "shukudai", e: "homework", th: "การบ้าน" },
                { t: "を", p: "o", e: "[object]", th: "[กรรม]" },
                { t: "やっ", p: "yat", e: "do", th: "ทำ" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "しまい", p: "shimai", e: "finish", th: "เสร็จเรียบร้อย" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "The last bus has gone.",
            hint: "รถบัสเที่ยวสุดท้ายออกไปเสียแล้ว",
            answer: [
                { t: "最終", p: "saishuu", e: "last", th: "สุดท้าย" },
                { t: "バス", p: "basu", e: "bus", th: "รถบัส" },
                { t: "が", p: "ga", e: "[subject]", th: "[ประธาน]" },
                { t: "行っ", p: "it", e: "go", th: "ไป" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "しまい", p: "shimai", e: "completely", th: "เสียแล้ว" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        },
        {
            instruction: "The computer broke down completely.",
            hint: "คอมพิวเตอร์พังไปเสียแล้ว",
            answer: [
                { t: "パソコン", p: "pasokon", e: "computer", th: "คอมพิวเตอร์" },
                { t: "が", p: "ga", e: "[subject]", th: "[ประธาน]" },
                { t: "壊れ", p: "koware", e: "break", th: "พัง" },
                { t: "て", p: "te", e: "[te-form]", th: "[เชื่อม]" },
                { t: "しまい", p: "shimai", e: "completely", th: "เสียแล้ว" },
                { t: "ました", p: "mashita", e: "[past]", th: "[อดีต]" },
                { t: "。", p: ".", e: ".", th: "." }
            ]
        }
    ]
});