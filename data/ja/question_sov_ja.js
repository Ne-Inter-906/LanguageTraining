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
                { t: "あなた", p: "anata" },
                { t: "は", p: "wa" },
                { t: "タイ料理", p: "tai-ryōri" },
                { t: "を", p: "o" },
                { t: "食べます", p: "tabemasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does he drink water?",
            hint: "เขาดื่มน้ำไหม",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "水", p: "mizu" },
                { t: "を", p: "o" },
                { t: "飲みます", p: "nomimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does she read a book?",
            hint: "เธออ่านหนังสือไหม",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "本", p: "hon" },
                { t: "を", p: "o" },
                { t: "読みます", p: "yomimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does the teacher speak Japanese?",
            hint: "ครูพูดภาษาญี่ปุ่นไหม",
            answer: [
                { t: "先生", p: "sensei" },
                { t: "は", p: "wa" },
                { t: "日本語", p: "nihongo" },
                { t: "を", p: "o" },
                { t: "話します", p: "hanashimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Do you buy a car?",
            hint: "คุณซื้อรถยนต์ไหม",
            answer: [
                { t: "あなた", p: "anata" },
                { t: "は", p: "wa" },
                { t: "車", p: "kuruma" },
                { t: "を", p: "o" },
                { t: "買います", p: "kaimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does your friend watch a movie?",
            hint: "เพื่อนของคุณดูภาพยนตร์ไหม",
            answer: [
                { t: "友達", p: "tomodachi" },
                { t: "は", p: "wa" },
                { t: "映画", p: "eiga" },
                { t: "を", p: "o" },
                { t: "見ます", p: "mimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Do you study grammar?",
            hint: "คุณเรียนไวยากรณ์ไหม",
            answer: [
                { t: "あなた", p: "anata" },
                { t: "は", p: "wa" },
                { t: "文法", p: "bunpō" },
                { t: "を", p: "o" },
                { t: "勉強します", p: "benkyō-shimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does he write a letter?",
            hint: "เขาเขียนจดหมายไหม",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "手紙", p: "tegami" },
                { t: "を", p: "o" },
                { t: "書きます", p: "kakimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Do you listen to music?",
            hint: "คุณฟังเพลงไหม",
            answer: [
                { t: "あなた", p: "anata" },
                { t: "は", p: "wa" },
                { t: "音楽", p: "ongaku" },
                { t: "を", p: "o" },
                { t: "聴きます", p: "kikimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does she make coffee?",
            hint: "เธอชงกาแฟไหม",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "コーヒー", p: "kōhī" },
                { t: "を", p: "o" },
                { t: "淹れます", p: "iremasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does the dog eat meat?",
            hint: "สุนัขกินเนื้อไหม",
            answer: [
                { t: "犬", p: "inu" },
                { t: "は", p: "wa" },
                { t: "肉", p: "niku" },
                { t: "を", p: "o" },
                { t: "食べます", p: "tabemasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Do you wash your hands?",
            hint: "คุณล้างมือไหม",
            answer: [
                { t: "あなた", p: "anata" },
                { t: "は", p: "wa" },
                { t: "手", p: "te" },
                { t: "を", p: "o" },
                { t: "洗います", p: "araimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does he open the window?",
            hint: "เขาเปิดหน้าต่างไหม",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "窓", p: "mado" },
                { t: "を", p: "o" },
                { t: "開けます", p: "akemasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does she close the door?",
            hint: "เธอปิดประตูไหม",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "ドア", p: "doa" },
                { t: "を", p: "o" },
                { t: "閉めます", p: "shimemasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Do you take a photo?",
            hint: "คุณถ่ายรูปไหม",
            answer: [
                { t: "あなた", p: "anata" },
                { t: "は", p: "wa" },
                { t: "写真", p: "shashin" },
                { t: "を", p: "o" },
                { t: "撮ります", p: "torimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does the cat drink milk?",
            hint: "แมวดื่มนมไหม",
            answer: [
                { t: "猫", p: "neko" },
                { t: "は", p: "wa" },
                { t: "牛乳", p: "gyūnyū" },
                { t: "を", p: "o" },
                { t: "飲みます", p: "nomimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Do they carry luggage?",
            hint: "พวกเขายกกระเป๋าเดินทางไหม",
            answer: [
                { t: "彼ら", p: "karera" },
                { t: "は", p: "wa" },
                { t: "荷物", p: "nimotsu" },
                { t: "を", p: "o" },
                { t: "運びます", p: "hakobimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Do you use a computer?",
            hint: "คุณใช้คอมพิวเตอร์ไหม",
            answer: [
                { t: "あなた", p: "anata" },
                { t: "は", p: "wa" },
                { t: "パソコン", p: "pasokon" },
                { t: "を", p: "o" },
                { t: "使います", p: "tsukaimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does he cook dinner?",
            hint: "เขาทำอาหารเย็นไหม",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "夕食", p: "yūshoku" },
                { t: "を", p: "o" },
                { t: "作ります", p: "tsukurimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does she play the guitar?",
            hint: "เธอเล่นกีตาร์ไหม",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "ギター", p: "gitā" },
                { t: "を", p: "o" },
                { t: "弾きます", p: "hikimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Do you clean the room?",
            hint: "คุณทำความสะอาดห้องไหม",
            answer: [
                { t: "あなた", p: "anata" },
                { t: "は", p: "wa" },
                { t: "部屋", p: "heya" },
                { t: "を", p: "o" },
                { t: "掃除します", p: "sōji-shimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does he sell shoes?",
            hint: "เขาขายรองเท้าไหม",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "靴", p: "kutsu" },
                { t: "を", p: "o" },
                { t: "売ります", p: "urimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does she cut the bread?",
            hint: "เธอหั่นขนมปังไหม",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "パン", p: "pan" },
                { t: "を", p: "o" },
                { t: "切ります", p: "kirimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Do you eat raw fish?",
            hint: "คุณกินปลาดิบไหม",
            answer: [
                { t: "あなた", p: "anata" },
                { t: "は", p: "wa" },
                { t: "刺身", p: "sashimi" },
                { t: "を", p: "o" },
                { t: "食べます", p: "tabemasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does he drive a truck?",
            hint: "เขาขับรถบรรทุกไหม",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "トラック", p: "torakku" },
                { t: "を", p: "o" },
                { t: "運転します", p: "unten-shimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does she learn a language?",
            hint: "เธอเรียนภาษาไหม",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "言語", p: "gengo" },
                { t: "を", p: "o" },
                { t: "学びます", p: "manabimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Do you carry a bag?",
            hint: "คุณถือกระเป๋าไหม",
            answer: [
                { t: "あなた", p: "anata" },
                { t: "は", p: "wa" },
                { t: "カバン", p: "kaban" },
                { t: "を", p: "o" },
                { t: "持ちます", p: "mochimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does he borrow a pencil?",
            hint: "เขายืมดินสอไหม",
            answer: [
                { t: "彼", p: "kare" },
                { t: "は", p: "wa" },
                { t: "鉛筆", p: "enpitsu" },
                { t: "を", p: "o" },
                { t: "借ります", p: "karimasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Does she plant a tree?",
            hint: "เธอปลูกต้นไม้ไหม",
            answer: [
                { t: "彼女", p: "kanojo" },
                { t: "は", p: "wa" },
                { t: "木", p: "ki" },
                { t: "を", p: "o" },
                { t: "植えます", p: "uemasu" },
                { t: "か", p: "ka" }
            ]
        },
        {
            instruction: "Do you throw a ball?",
            hint: "คุณขว้างลูกบอลไหม",
            answer: [
                { t: "あなた", p: "anata" },
                { t: "は", p: "wa" },
                { t: "ボール", p: "bōru" },
                { t: "を", p: "o" },
                { t: "投げます", p: "nagemasu" },
                { t: "か", p: "ka" }
            ]
        }
    ]
});