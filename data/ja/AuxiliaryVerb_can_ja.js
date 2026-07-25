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
                { t: "私", p: "watashi" },
                { t: "は", p: "wa" },
                { t: "日本語", p: "nihongo" },
                { t: "が", p: "ga" },
                { t: "話せます", p: "hanasemasu" }
            ]
        },
        {
            instruction: "He can drive a car.",
            hint: "เขาขับรถยนต์ได้",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "車", p: "kuruma" },
                { t: "を", p: "o" },
                { t: "運転できます", p: "unten-dekimasu" }
            ]
        },
        {
            instruction: "She can play the piano.",
            hint: "เธอเล่นเปียโนได้",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "ピアノ", p: "piano" },
                { t: "が", p: "ga" },
                { t: "弾けます", p: "hikemasu" }
            ]
        },
        {
            instruction: "I can swim in the sea.",
            hint: "ผมว่ายน้ำในทะเลได้",
            answer: [
                { t: "私", p: "watashi" },
                { t: "は", p: "wa" },
                { t: "海", p: "umi" },
                { t: "で", p: "de" },
                { t: "泳げます", p: "oyogemasu" }
            ]
        },
        {
            instruction: "My friend can cook Thai food.",
            hint: "เพื่อนของผมทำอาหารไทยได้",
            answer: [
                { t: "友達", p: "tomodachi" },
                { t: "は", p: "wa" },
                { t: "タイ料理", p: "tai-ryōri" },
                { t: "を", p: "o" },
                { t: "作れます", p: "tsukuremasu" }
            ]
        },
        {
            instruction: "The teacher can read Kanji.",
            hint: "ครูอ่านอักษรคันจิได้",
            answer: [
                { t: "先生", p: "sensei" },
                { t: "は", p: "wa" },
                { t: "漢字", p: "kanji" },
                { t: "が", p: "ga" },
                { t: "読めます", p: "yomemasu" }
            ]
        },
        {
            instruction: "I can write a letter in English.",
            hint: "ผมเขียนจดหมายเป็นภาษาอังกฤษได้",
            answer: [
                { t: "私", p: "watashi" },
                { t: "は", p: "wa" },
                { t: "英語", p: "eigo" },
                { t: "で", p: "de" },
                { t: "手紙", p: "tegami" },
                { t: "が", p: "ga" },
                { t: "書けます", p: "kakemasu" }
            ]
        },
        {
            instruction: "He can play chess.",
            hint: "เขาเล่นหมากรุกได้",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "チェス", p: "chesu" },
                { t: "が", p: "ga" },
                { t: "できます", p: "dekimasu" }
            ]
        },
        {
            instruction: "She can run fast.",
            hint: "เธอวิ่งเร็วได้",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "速く", p: "hayaku" },
                { t: "走れます", p: "hashiremasu" }
            ]
        },
        {
            instruction: "I can buy this bag.",
            hint: "ผมซื้อกระเป๋าใบนี้ได้",
            answer: [
                { t: "私", p: "watashi" },
                { t: "は", p: "wa" },
                { t: "この", p: "kono" },
                { t: "カバン", p: "kaban" },
                { t: "が", p: "ga" },
                { t: "買えます", p: "kaemasu" }
            ]
        },
        {
            instruction: "We can use a computer.",
            hint: "พวกเราใช้คอมพิวเตอร์ได้",
            answer: [
                { t: "私たち", p: "watashitachi" },
                { t: "は", p: "wa" },
                { t: "パソコン", p: "pasokon" },
                { t: "が", p: "ga" },
                { t: "使えます", p: "tsukaemasu" }
            ]
        },
        {
            instruction: "He can sing a song.",
            hint: "เขาร้องเพลงได้",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "歌", p: "uta" },
                { t: "が", p: "ga" },
                { t: "歌えます", p: "utaemasu" }
            ]
        },
        {
            instruction: "She can make coffee.",
            hint: "เธอชงกาแฟได้",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "コーヒー", p: "kōhī" },
                { t: "を", p: "o" },
                { t: "淹れられます", p: "ireraremasu" }
            ]
        },
        {
            instruction: "I can eat spicy food.",
            hint: "ผมกินอาหารเผ็ดได้",
            answer: [
                { t: "私", p: "watashi" },
                { t: "は", p: "wa" },
                { t: "辛い物", p: "karai-mono" },
                { t: "が", p: "ga" },
                { t: "食べられます", p: "taberaremasu" }
            ]
        },
        {
            instruction: "They can climb the mountain.",
            hint: "พวกเขาลีนเขาได้",
            answer: [
                { t: "彼ら", p: "karera" },
                { t: "は", p: "wa" },
                { t: "山", p: "yama" },
                { t: "に", p: "ni" },
                { t: "登れます", p: "noboremasu" }
            ]
        },
        {
            instruction: "I can see the ocean from here.",
            hint: "ผมมองเห็นทะเลจากที่นี่ได้",
            answer: [
                { t: "ここ", p: "koko" },
                { t: "から", p: "kara" },
                { t: "海", p: "umi" },
                { t: "が", p: "ga" },
                { t: "見えます", p: "miemasu" }
            ]
        },
        {
            instruction: "He can hear music.",
            hint: "เขาได้ยินเสียงเพลง",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "音楽", p: "ongaku" },
                { t: "が", p: "ga" },
                { t: "聞こえます", p: "kikoemasu" }
            ]
        },
        {
            instruction: "She can ride a bicycle.",
            hint: "เธอขี่จักรยานได้",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "自転車", p: "jitensha" },
                { t: "に", p: "ni" },
                { t: "乗れます", p: "noremasu" }
            ]
        },
        {
            instruction: "I can fix a bicycle.",
            hint: "ผมซ่อมจักรยานได้",
            answer: [
                { t: "私", p: "watashi" },
                { t: "は", p: "wa" },
                { t: "自転車", p: "jitensha" },
                { t: "を", p: "o" },
                { t: "修理できます", p: "shūri-dekimasu" }
            ]
        },
        {
            instruction: "He can reserve a hotel.",
            hint: "เขาจองโรงแรมได้",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "ホテル", p: "hoteru" },
                { t: "を", p: "o" },
                { t: "予約できます", p: "yoyaku-dekimasu" }
            ]
        }
    ]
});