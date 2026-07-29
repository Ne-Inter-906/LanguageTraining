// カテゴリリストが未定義なら作成
window.japaneseCategories = window.japaneseCategories || [];

// リストにこのファイルのデータを追加
window.japaneseCategories.push({
    name: "Potential (可能・〜できる)",
    data: [
        {
            instruction: "I can speak Japanese.",
            hint: "ผมพูดภาษาญี่ปุ่นได้",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "日本語", p: "nihongo", e: "Japanese language", th: "ภาษาญี่ปุ่น" },
                { t: "が", p: "ga", e: "[obj of potential]", th: "[ตัวชี้เป้าหมายความสามารถ]" },
                { t: "話せます", p: "hanasemasu", e: "can speak", th: "พูดได้" }
            ]
        },
        {
            instruction: "He can drive a car.",
            hint: "เขาขับรถยนต์ได้",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "車", p: "kuruma", e: "car", th: "รถยนต์" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "運転", p: "unten", e: "driving", th: "การขับขี่" },
                { t: "できます", p: "dekimasu", e: "can do", th: "ทำได้" }
            ]
        },
        {
            instruction: "She can play the piano.",
            hint: "เธอเล่นเปียโนได้",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ピアノ", p: "piano", e: "piano", th: "เปียโน" },
                { t: "が", p: "ga", e: "[obj of potential]", th: "[ตัวชี้เป้าหมายความสามารถ]" },
                { t: "ひけます", p: "hikemasu", e: "can play (string/key)", th: "เล่นได้" }
            ]
        },
        {
            instruction: "I can swim in the sea.",
            hint: "ผมว่ายน้ำในทะเลได้",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "海", p: "umi", e: "sea / ocean", th: "ทะเล" },
                { t: "で", p: "de", e: "at / in", th: "ที่ / ใน" },
                { t: "泳げます", p: "oyogemasu", e: "can swim", th: "ว่ายน้ำได้" }
            ]
        },
        {
            instruction: "My friend can cook Thai food.",
            hint: "เพื่อนของผมทำอาหารไทยได้",
            answer: [
                { t: "友達", p: "tomodachi", e: "friend", th: "เพื่อน" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "タイ料理", p: "tai-ryōri", e: "Thai food", th: "อาหารไทย" },
                { t: "が", p: "ga", e: "[obj of potential]", th: "[ตัวชี้เป้าหมายความสามารถ]" },
                { t: "作れます", p: "tsukuremasu", e: "can make/cook", th: "ทำได้" }
            ]
        },
        {
            instruction: "The teacher can read Kanji.",
            hint: "ครูอ่านอักษรคันจิได้",
            answer: [
                { t: "先生", p: "sensei", e: "teacher", th: "ครู / อาจารย์" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "漢字", p: "kanji", e: "Kanji characters", th: "อักษรคันจิ" },
                { t: "が", p: "ga", e: "[obj of potential]", th: "[ตัวชี้เป้าหมายความสามารถ]" },
                { t: "読めます", p: "yomemasu", e: "can read", th: "อ่านได้" }
            ]
        },
        {
            instruction: "I can write a letter in English.",
            hint: "ผมเขียนจดหมายเป็นภาษาอังกฤษได้",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "英語", p: "eigo", e: "English", th: "ภาษาอังกฤษ" },
                { t: "で", p: "de", e: "in / by means of", th: "ด้วย / เป็น" },
                { t: "手紙", p: "tegami", e: "letter", th: "จดหมาย" },
                { t: "が", p: "ga", e: "[obj of potential]", th: "[ตัวชี้เป้าหมายความสามารถ]" },
                { t: "書けます", p: "kakemasu", e: "can write", th: "เขียนได้" }
            ]
        },
        {
            instruction: "He can play chess.",
            hint: "เขาเล่นหมากรุกได้",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "チェス", p: "chesu", e: "chess", th: "หมากรุกฝรั่ง" },
                { t: "が", p: "ga", e: "[obj of potential]", th: "[ตัวชี้เป้าหมายความสามารถ]" },
                { t: "できます", p: "dekimasu", e: "can do / play", th: "เล่นได้ / ทำได้" }
            ]
        },
        {
            instruction: "She can run fast.",
            hint: "เธอวิ่งเร็วได้",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "速く", p: "hayaku", e: "fast / quickly", th: "เร็ว" },
                { t: "走れます", p: "hashiremasu", e: "can run", th: "วิ่งได้" }
            ]
        },
        {
            instruction: "I can buy this bag.",
            hint: "ผมซื้อกระเป๋าใบนี้ได้",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "カバン", p: "kaban", e: "bag", th: "กระเป๋า" },
                { t: "が", p: "ga", e: "[obj of potential]", th: "[ตัวชี้เป้าหมายความสามารถ]" },
                { t: "買えます", p: "kaemasu", e: "can buy", th: "ซื้อได้" }
            ]
        },
        {
            instruction: "We can use a computer.",
            hint: "พวกเราใช้คอมพิวเตอร์ได้",
            answer: [
                { t: "私たち", p: "watashitachi", e: "we", th: "พวกเรา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "パソコン", p: "pasokon", e: "computer", th: "คอมพิวเตอร์" },
                { t: "が", p: "ga", e: "[obj of potential]", th: "[ตัวชี้เป้าหมายความสามารถ]" },
                { t: "使えます", p: "tsukaemasu", e: "can use", th: "ใช้ได้" }
            ]
        },
        {
            instruction: "He can sing a song.",
            hint: "เขาร้องเพลงได้",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "歌", p: "uta", e: "song", th: "เพลง" },
                { t: "が", p: "ga", e: "[obj of potential]", th: "[ตัวชี้เป้าหมายความสามารถ]" },
                { t: "歌えます", p: "utaemasu", e: "can sing", th: "ร้องได้" }
            ]
        },
        {
            instruction: "She can make coffee.",
            hint: "เธอชงกาแฟได้",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "コーヒー", p: "kōhī", e: "coffee", th: "กาแฟ" },
                { t: "が", p: "ga", e: "[obj of potential]", th: "[ตัวชี้เป้าหมายความสามารถ]" },
                { t: "淹れられます", p: "ireraremasu", e: "can brew / make", th: "ชงได้" }
            ]
        },
        {
            instruction: "I can eat spicy food.",
            hint: "ผมกินอาหารเผ็ดได้",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "辛い物", p: "karai-mono", e: "spicy food", th: "ของเผ็ด / อาหารเผ็ด" },
                { t: "が", p: "ga", e: "[obj of potential]", th: "[ตัวชี้เป้าหมายความสามารถ]" },
                { t: "食べられます", p: "taberaremasu", e: "can eat", th: "กินได้" }
            ]
        },
        {
            instruction: "They can climb the mountain.",
            hint: "พวกเขาลีนเขาได้",
            answer: [
                { t: "彼ら", p: "karera", e: "they", th: "พวกเขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "山", p: "yama", e: "mountain", th: "ภูเขา" },
                { t: "に", p: "ni", e: "on / to", th: "ที่" },
                { t: "登れます", p: "noboremasu", e: "can climb", th: "ปีนได้" }
            ]
        },
        {
            instruction: "I can see the ocean from here.",
            hint: "ผมมองเห็นทะเลจากที่นี่ได้",
            answer: [
                { t: "ここ", p: "koko", e: "here", th: "ที่นี่" },
                { t: "から", p: "kara", e: "from", th: "จาก" },
                { t: "海", p: "umi", e: "sea / ocean", th: "ทะเล" },
                { t: "が", p: "ga", e: "[subj/obj]", th: "[ตัวชี้ประธาน/เป้าหมาย]" },
                { t: "見えます", p: "miemasu", e: "can see / is visible", th: "มองเห็น" }
            ]
        },
        {
            instruction: "He can hear music.",
            hint: "เขาได้ยินเสียงเพลง",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "音楽", p: "ongaku", e: "music", th: "ดนตรี / เพลง" },
                { t: "が", p: "ga", e: "[subj/obj]", th: "[ตัวชี้ประธาน/เป้าหมาย]" },
                { t: "聞こえます", p: "kikoemasu", e: "can hear / is audible", th: "ได้ยิน" }
            ]
        },
        {
            instruction: "She can ride a bicycle.",
            hint: "เธอขี่จักรยานได้",
            answer: [
                { t: "彼女", p: "kanojo", e: "she", th: "เธอ" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "自転車", p: "jitensha", e: "bicycle", th: "จักรยาน" },
                { t: "に", p: "ni", e: "on", th: "ที่" },
                { t: "乗れます", p: "noremasu", e: "can ride", th: "ขี่ได้ / นั่งได้" }
            ]
        },
        {
            instruction: "I can fix a bicycle.",
            hint: "ผมซ่อมจักรยานได้",
            answer: [
                { t: "私", p: "watashi", e: "I", th: "ฉัน / ผม" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "自転車", p: "jitensha", e: "bicycle", th: "จักรยาน" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "修理", p: "shūri", e: "repair", th: "การซ่อมแซม" },
                { t: "できます", p: "dekimasu", e: "can do", th: "ทำได้" }
            ]
        },
        {
            instruction: "He can reserve a hotel.",
            hint: "เขาจองโรงแรมได้",
            answer: [
                { t: "彼", p: "kare", e: "he", th: "เขา" },
                { t: "は", p: "wa", e: "[topic]", th: "[หัวเรื่อง]" },
                { t: "ホテル", p: "hoteru", e: "hotel", th: "โรงแรม" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "予約", p: "yoyaku", e: "reservation", th: "การจอง" },
                { t: "できます", p: "dekimasu", e: "can do", th: "ทำได้" }
            ]
        }
    ]
});