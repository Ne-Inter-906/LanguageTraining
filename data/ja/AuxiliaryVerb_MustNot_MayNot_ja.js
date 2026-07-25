// カテゴリリストが未定義なら作成
window.japaneseCategories = window.japaneseCategories || [];

// リストにこのファイルのデータを追加
window.japaneseCategories.push({
    name: "Permission / Prohibition (許可・禁止)",
    data: [
        {
            instruction: "You may enter the room.",
            hint: "คุณเข้าห้องได้",
            answer: [
                { t: "部屋", p: "heya" },
                { t: "に", p: "ni" },
                { t: "入っても", p: "haittemo" },
                { t: "いいです", p: "ii-desu" }
            ]
        },
        {
            instruction: "You must not enter here.",
            hint: "ห้ามเข้าที่นี่",
            answer: [
                { t: "ここ", p: "koko" },
                { t: "に", p: "ni" },
                { t: "入ってはいけません", p: "haitte-wa-ikemasen" }
            ]
        },
        {
            instruction: "You may take photos here.",
            hint: "ถ่ายรูปที่นี่ได้",
            answer: [
                { t: "ここ", p: "koko" },
                { t: "で", p: "de" },
                { t: "写真", p: "shashin" },
                { t: "を", p: "o" },
                { t: "撮っても", p: "tottemo" },
                { t: "いいです", p: "ii-desu" }
            ]
        },
        {
            instruction: "You must not take photos in the museum.",
            hint: "ห้ามถ่ายรูปในพิพิธภัณฑ์",
            answer: [
                { t: "博物館", p: "hakubutsukan" },
                { t: "で", p: "de" },
                { t: "写真", p: "shashin" },
                { t: "を", p: "o" },
                { t: "撮ってはいけません", p: "totte-wa-ikemasen" }
            ]
        },
        {
            instruction: "You may sit on this chair.",
            hint: "นัั่งบนเก้าอี้ตัวนี้ได้",
            answer: [
                { t: "この", p: "kono" },
                { t: "椅子", p: "isu" },
                { t: "に", p: "ni" },
                { t: "座っても", p: "suwattemo" },
                { t: "いいです", p: "ii-desu" }
            ]
        },
        {
            instruction: "You must not smoke here.",
            hint: "ห้ามสูบบุหรี่ที่นี่",
            answer: [
                { t: "ここ", p: "koko" },
                { t: "で", p: "de" },
                { t: "タバコ", p: "tabako" },
                { t: "を", p: "o" },
                { t: "吸ってはいけません", p: "sutte-wa-ikemasen" }
            ]
        },
        {
            instruction: "You may use this computer.",
            hint: "ใช้คอมพิวเตอร์เครื่องนี้ได้",
            answer: [
                { t: "この", p: "kono" },
                { t: "パソコン", p: "pasokon" },
                { t: "を", p: "o" },
                { t: "使っても", p: "tsukattemo" },
                { t: "いいです", p: "ii-desu" }
            ]
        },
        {
            instruction: "You must not park your car here.",
            hint: "ห้ามจอดรถที่นี่",
            answer: [
                { t: "ここ", p: "koko" },
                { t: "に", p: "ni" },
                { t: "車", p: "kuruma" },
                { t: "を", p: "o" },
                { t: "止めてはいけません", p: "tomete-wa-ikemasen" }
            ]
        },
        {
            instruction: "You may go home now.",
            hint: "กลับบ้านได้แล้ว",
            answer: [
                { t: "もう", p: "mō" },
                { t: "家", p: "ie" },
                { t: "に", p: "ni" },
                { t: "帰っても", p: "kaettemo" },
                { t: "いいです", p: "ii-desu" }
            ]
        },
        {
            instruction: "You must not touch this machine.",
            hint: "ห้ามจับเครื่องจักรนี้",
            answer: [
                { t: "この", p: "kono" },
                { t: "機械", p: "kikai" },
                { t: "に", p: "ni" },
                { t: "触ってはいけません", p: "sawatte-wa-ikemasen" }
            ]
        },
        {
            instruction: "You may eat food here.",
            hint: "กินอาหารที่นี่ได้",
            answer: [
                { t: "ここ", p: "koko" },
                { t: "で", p: "de" },
                { t: "ご飯", p: "gohan" },
                { t: "を", p: "o" },
                { t: "食べても", p: "tabetemo" },
                { t: "いいです", p: "ii-desu" }
            ]
        },
        {
            instruction: "You must not use a phone while driving.",
            hint: "ห้ามใช้โทรศัพท์ขณะขับรถ",
            answer: [
                { t: "運転中", p: "unten-chū" },
                { t: "に", p: "ni" },
                { t: "電話", p: "denwa" },
                { t: "を", p: "o" },
                { t: "使ってはいけません", p: "tsukatte-wa-ikemasen" }
            ]
        },
        {
            instruction: "You may open the window.",
            hint: "เปิดหน้าต่างได้",
            answer: [
                { t: "窓", p: "mado" },
                { t: "を", p: "o" },
                { t: "開けても", p: "aketemo" },
                { t: "いいです", p: "ii-desu" }
            ]
        },
        {
            instruction: "You must not make noise here.",
            hint: "ห้ามส่งเสียงดังที่นี่",
            answer: [
                { t: "ここ", p: "koko" },
                { t: "で", p: "de" },
                { t: "騒いではいけません", p: "sawaide-wa-ikemasen" }
            ]
        },
        {
            instruction: "You may rest for 10 minutes.",
            hint: "พักผ่อนได้ 10 นาที",
            answer: [
                { t: "10分間", p: "juppun-kan" },
                { t: "休憩しても", p: "kyūkei-shitemo" },
                { t: "いいです", p: "ii-desu" }
            ]
        },
        {
            instruction: "You must not forget your passport.",
            hint: "ห้ามลืมหนังสือเดินทาง",
            answer: [
                { t: "パスポート", p: "pasupōto" },
                { t: "を", p: "o" },
                { t: "忘れてはいけません", p: "wasurete-wa-ikemasen" }
            ]
        },
        {
            instruction: "You may swim in this lake.",
            hint: "ว่ายน้ำในทะเลสาบนี้ได้",
            answer: [
                { t: "この", p: "kono" },
                { t: "湖", p: "mizuumi" },
                { t: "で", p: "de" },
                { t: "泳いでも", p: "oyoidemo" },
                { t: "いいです", p: "ii-desu" }
            ]
        },
        {
            instruction: "You must not throw garbage here.",
            hint: "ห้ามทิ้งขยะที่นี่",
            answer: [
                { t: "ここ", p: "koko" },
                { t: "に", p: "ni" },
                { t: "ゴミ", p: "gomi" },
                { t: "を", p: "o" },
                { t: "捨ててはいけません", p: "sutete-wa-ikemasen" }
            ]
        },
        {
            instruction: "You may drink this water.",
            hint: "ดื่มน้ำนี้ได้",
            answer: [
                { t: "この", p: "kono" },
                { t: "水", p: "mizu" },
                { t: "を", p: "o" },
                { t: "飲んでも", p: "nondemo" },
                { t: "いいです", p: "ii-desu" }
            ]
        },
        {
            instruction: "You must not run in the hallway.",
            hint: "ห้ามวิ่งในทางเดิน",
            answer: [
                { t: "廊下", p: "rōka" },
                { t: "を", p: "o" },
                { t: "走ってはいけません", p: "hashitte-wa-ikemasen" }
            ]
        }
    ]
});