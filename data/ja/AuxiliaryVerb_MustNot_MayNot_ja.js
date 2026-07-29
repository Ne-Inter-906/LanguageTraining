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
                { t: "部屋", p: "heya", e: "room", th: "ห้อง" },
                { t: "に", p: "ni", e: "into / to", th: "ที่ / ใน" },
                { t: "入って", p: "haitte", e: "enter (te-form)", th: "เข้า (รูป -te)" },
                { t: "も", p: "mo", e: "even if / also", th: "แม้ว่า" },
                { t: "いいです", p: "ii-desu", e: "it is OK / may", th: "ได้ / อนุญาต" }
            ]
        },
        {
            instruction: "You must not enter here.",
            hint: "ห้ามเข้าที่นี่",
            answer: [
                { t: "ここ", p: "koko", e: "here", th: "ที่นี่" },
                { t: "に", p: "ni", e: "into / to", th: "ที่ / 在" },
                { t: "入って", p: "haitte", e: "enter (te-form)", th: "เข้า (รูป -te)" },
                { t: "は", p: "wa", e: "[as for]", th: "[หัวเรื่อง]" },
                { t: "いけません", p: "ikemasen", e: "must not / not good", th: "ไม่ได้ / ห้าม" }
            ]
        },
        {
            instruction: "You may take photos here.",
            hint: "ถ่ายรูปที่นี่ได้",
            answer: [
                { t: "ここ", p: "koko", e: "here", th: "ที่นี่" },
                { t: "で", p: "de", e: "at / in", th: "ที่" },
                { t: "写真", p: "shashin", e: "photo", th: "รูปถ่าย" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "撮って", p: "totte", e: "take (te-form)", th: "ถ่าย (รูป -te)" },
                { t: "も", p: "mo", e: "even if / also", th: "แม้ว่า" },
                { t: "いいです", p: "ii-desu", e: "it is OK / may", th: "ได้ / อนุญาต" }
            ]
        },
        {
            instruction: "You must not take photos in the museum.",
            hint: "ห้ามถ่ายรูปในพิพิธภัณฑ์",
            answer: [
                { t: "博物館", p: "hakubutsukan", e: "museum", th: "พิพิธภัณฑ์" },
                { t: "で", p: "de", e: "at / in", th: "ที่" },
                { t: "写真", p: "shashin", e: "photo", th: "รูปถ่าย" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "撮って", p: "totte", e: "take (te-form)", th: "ถ่าย (รูป -te)" },
                { t: "は", p: "wa", e: "[as for]", th: "[หัวเรื่อง]" },
                { t: "いけません", p: "ikemasen", e: "must not / not good", th: "ไม่ได้ / ห้าม" }
            ]
        },
        {
            instruction: "You may sit on this chair.",
            hint: "นัั่งบนเก้าอี้ตัวนี้ได้",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "椅子", p: "isu", e: "chair", th: "เก้าอี้" },
                { t: "に", p: "ni", e: "on / at", th: "บน / ที่" },
                { t: "座って", p: "suwatte", e: "sit (te-form)", th: "นั่ง (รูป -te)" },
                { t: "も", p: "mo", e: "even if / also", th: "แม้ว่า" },
                { t: "いいです", p: "ii-desu", e: "it is OK / may", th: "ได้ / อนุญาต" }
            ]
        },
        {
            instruction: "You must not smoke here.",
            hint: "ห้ามสูบบุหรี่ที่นี่",
            answer: [
                { t: "ここ", p: "koko", e: "here", th: "ที่นี่" },
                { t: "で", p: "de", e: "at / in", th: "ที่" },
                { t: "タバコ", p: "tabako", e: "tobacco", th: "บุหรี่" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "吸って", p: "sutte", e: "smoke (te-form)", th: "สูบ (รูป -te)" },
                { t: "は", p: "wa", e: "[as for]", th: "[หัวเรื่อง]" },
                { t: "いけません", p: "ikemasen", e: "must not / not good", th: "ไม่ได้ / ห้าม" }
            ]
        },
        {
            instruction: "You may use this computer.",
            hint: "ใช้คอมพิวเตอร์เครื่องนี้ได้",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "パソコン", p: "pasokon", e: "computer", th: "คอมพิวเตอร์" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "使って", p: "tsukatte", e: "use (te-form)", th: "ใช้ (รูป -te)" },
                { t: "も", p: "mo", e: "even if / also", th: "แม้ว่า" },
                { t: "いいです", p: "ii-desu", e: "it is OK / may", th: "ได้ / อนุญาต" }
            ]
        },
        {
            instruction: "You must not park your car here.",
            hint: "ห้ามจอดรถที่นี่",
            answer: [
                { t: "ここ", p: "koko", e: "here", th: "ที่นี่" },
                { t: "に", p: "ni", e: "at / in", th: "ที่" },
                { t: "車", p: "kuruma", e: "car", th: "รถยนต์" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "止めて", p: "tomete", e: "park/stop (te-form)", th: "จอด (รูป -te)" },
                { t: "は", p: "wa", e: "[as for]", th: "[หัวเรื่อง]" },
                { t: "いけません", p: "ikemasen", e: "must not / not good", th: "ไม่ได้ / ห้าม" }
            ]
        },
        {
            instruction: "You may go home now.",
            hint: "กลับบ้านได้แล้ว",
            answer: [
                { t: "もう", p: "mō", e: "already / now", th: "แล้ว / ตอนนี้" },
                { t: "家", p: "ie", e: "home / house", th: "บ้าน" },
                { t: "に", p: "ni", e: "to / toward", th: "ที่ / ไป" },
                { t: "帰って", p: "kaette", e: "return (te-form)", th: "กลับ (รูป -te)" },
                { t: "も", p: "mo", e: "even if / also", th: "แม้ว่า" },
                { t: "いいです", p: "ii-desu", e: "it is OK / may", th: "ได้ / อนุญาต" }
            ]
        },
        {
            instruction: "You must not touch this machine.",
            hint: "ห้ามจับเครื่องจักรนี้",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "機械", p: "kikai", e: "machine", th: "เครื่องจักร" },
                { t: "に", p: "ni", e: "to / on", th: "ที่" },
                { t: "触って", p: "sawatte", e: "touch (te-form)", th: "จับ (รูป -te)" },
                { t: "は", p: "wa", e: "[as for]", th: "[หัวเรื่อง]" },
                { t: "いけません", p: "ikemasen", e: "must not / not good", th: "ไม่ได้ / ห้าม" }
            ]
        },
        {
            instruction: "You may eat food here.",
            hint: "กินอาหารที่นี่ได้",
            answer: [
                { t: "ここ", p: "koko", e: "here", th: "ที่นี่" },
                { t: "で", p: "de", e: "at / in", th: "ที่" },
                { t: "ご飯", p: "gohan", e: "meal / food", th: "ข้าว / อาหาร" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "食べて", p: "tabete", e: "eat (te-form)", th: "กิน (รูป -te)" },
                { t: "も", p: "mo", e: "even if / also", th: "แม้ว่า" },
                { t: "いいです", p: "ii-desu", e: "it is OK / may", th: "ได้ / อนุญาต" }
            ]
        },
        {
            instruction: "You must not use a phone while driving.",
            hint: "ห้ามใช้โทรศัพท์ขณะขับรถ",
            answer: [
                { t: "運転中", p: "unten-chū", e: "while driving", th: "ขณะขับรถ" },
                { t: "に", p: "ni", e: "in / at", th: "ใน / ขณะ" },
                { t: "電話", p: "denwa", e: "phone", th: "โทรศัพท์" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "使って", p: "tsukatte", e: "use (te-form)", th: "ใช้ (รูป -te)" },
                { t: "は", p: "wa", e: "[as for]", th: "[หัวเรื่อง]" },
                { t: "いけません", p: "ikemasen", e: "must not / not good", th: "ไม่ได้ / ห้าม" }
            ]
        },
        {
            instruction: "You may open the window.",
            hint: "เปิดหน้าต่างได้",
            answer: [
                { t: "窓", p: "mado", e: "window", th: "หน้าต่าง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "開けて", p: "akete", e: "open (te-form)", th: "เปิด (รูป -te)" },
                { t: "も", p: "mo", e: "even if / also", th: "แม้ว่า" },
                { t: "いいです", p: "ii-desu", e: "it is OK / may", th: "ได้ / อนุญาต" }
            ]
        },
        {
            instruction: "You must not make noise here.",
            hint: "ห้ามส่งเสียงดังที่นี่",
            answer: [
                { t: "ここ", p: "koko", e: "here", th: "ที่นี่" },
                { t: "で", p: "de", e: "at / in", th: "ที่" },
                { t: "騒いで", p: "sawaide", e: "make noise (te-form)", th: "ส่งเสียงดัง (รูป -te)" },
                { t: "は", p: "wa", e: "[as for]", th: "[หัวเรื่อง]" },
                { t: "いけません", p: "ikemasen", e: "must not / not good", th: "ไม่ได้ / ห้าม" }
            ]
        },
        {
            instruction: "You may rest for 10 minutes.",
            hint: "พักผ่อนได้ 10 นาที",
            answer: [
                { t: "10分間", p: "juppun-kan", e: "for 10 minutes", th: "เป็นเวลา 10 นาที" },
                { t: "休憩して", p: "kyūkei-shite", e: "rest (te-form)", th: "พักผ่อน (รูป -te)" },
                { t: "も", p: "mo", e: "even if / also", th: "แม้ว่า" },
                { t: "いいです", p: "ii-desu", e: "it is OK / may", th: "ได้ / อนุญาต" }
            ]
        },
        {
            instruction: "You must not forget your passport.",
            hint: "ห้ามลืมหนังสือเดินทาง",
            answer: [
                { t: "パスポート", p: "pasupōto", e: "passport", th: "หนังสือเดินทาง" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "忘れて", p: "wasurete", e: "forget (te-form)", th: "ลืม (รูป -te)" },
                { t: "は", p: "wa", e: "[as for]", th: "[หัวเรื่อง]" },
                { t: "いけません", p: "ikemasen", e: "must not / not good", th: "ไม่ได้ / ห้าม" }
            ]
        },
        {
            instruction: "You may swim in this lake.",
            hint: "ว่ายน้ำในทะเลสาบนี้ได้",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "湖", p: "mizuumi", e: "lake", th: "ทะเลสาบ" },
                { t: "で", p: "de", e: "in / at", th: "ใน / ที่" },
                { t: "泳いで", p: "oyoide", e: "swim (te-form)", th: "ว่ายน้ำ (รูป -te)" },
                { t: "も", p: "mo", e: "even if / also", th: "แม้ว่า" },
                { t: "いいです", p: "ii-desu", e: "it is OK / may", th: "ได้ / อนุญาต" }
            ]
        },
        {
            instruction: "You must not throw garbage here.",
            hint: "ห้ามทิ้งขยะที่นี่",
            answer: [
                { t: "ここ", p: "koko", e: "here", th: "ที่นี่" },
                { t: "に", p: "ni", e: "at / in", th: "ที่" },
                { t: "ゴミ", p: "gomi", e: "garbage", th: "ขยะ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "捨てて", p: "sutete", e: "throw away (te-form)", th: "ทิ้ง (รูป -te)" },
                { t: "は", p: "wa", e: "[as for]", th: "[หัวเรื่อง]" },
                { t: "いけません", p: "ikemasen", e: "must not / not good", th: "ไม่ได้ / ห้าม" }
            ]
        },
        {
            instruction: "You may drink this water.",
            hint: "ดื่มน้ำนี้ได้",
            answer: [
                { t: "この", p: "kono", e: "this", th: "นี้" },
                { t: "水", p: "mizu", e: "water", th: "น้ำ" },
                { t: "を", p: "o", e: "[obj]", th: "[ตัวชี้กรรม]" },
                { t: "飲んで", p: "nonde", e: "drink (te-form)", th: "ดื่ม (รูป -te)" },
                { t: "も", p: "mo", e: "even if / also", th: "แม้ว่า" },
                { t: "いいです", p: "ii-desu", e: "it is OK / may", th: "ได้ / อนุญาต" }
            ]
        },
        {
            instruction: "You must not run in the hallway.",
            hint: "ห้ามวิ่งในทางเดิน",
            answer: [
                { t: "廊下", p: "rōka", e: "hallway", th: "ทางเดิน" },
                { t: "を", p: "o", e: "[through]", th: "[ผ่าน]" },
                { t: "走って", p: "hashitte", e: "run (te-form)", th: "วิ่ง (รูป -te)" },
                { t: "は", p: "wa", e: "[as for]", th: "[หัวเรื่อง]" },
                { t: "いけません", p: "ikemasen", e: "must not / not good", th: "ไม่ได้ / ห้าม" }
            ]
        }
    ]
});