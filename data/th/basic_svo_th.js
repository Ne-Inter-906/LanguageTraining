// カテゴリリストが未定義なら作成
window.thaiCategories = window.thaiCategories || [];

// リストにこのファイルのデータを追加
window.thaiCategories.push({
    name: "Basic SVO (基本文法 SVO) ",
    data: [

//const thaiBasicSvo = [
    {
        instruction: "I eat Thai food.",
        hint: "私はタイ料理を食べます",
        answer: [
            { t: "ผม", p: "phǒm" },
            { t: "กิน", p: "kin" },
            { t: "อาหาร", p: "aa-hǎan" },
            { t: "ไทย", p: "thai" }
        ]
    },
    {
        instruction: "She drinks iced coffee.",
        hint: "彼女はアイスコーヒーを飲みます",
        answer: [
            { t: "เขา", p: "khǎo" },
            { t: "ดื่ม", p: "dùum" },
            { t: "กาแฟ", p: "kaa-fae" },
            { t: "เย็น", p: "yen" }
        ]
    },
    {
        instruction: "He buys a new computer.",
        hint: "彼は新しいパソコンを買います",
        answer: [
            { t: "เขา", p: "khǎo" },
            { t: "ซื้อ", p: "súu" },
            { t: "คอมพิวเตอร์", p: "khom-phiw-toe" },
            { t: "ใหม่", p: "mài" }
        ]
    },
    {
        instruction: "I study Japanese language.",
        hint: "私は日本語を勉強します",
        answer: [
            { t: "ผม", p: "phǒm" },
            { t: "เรียน", p: "rian" },
            { t: "ภาษา", p: "phaa-sǎa" },
            { t: "ญี่ปุ่น", p: "yîi-pùn" }
        ]
    },
    {
        instruction: "We go to the market.",
        hint: "私たちは市場に行きます",
        answer: [
            { t: "พวกเรา", p: "phûak-rao" },
            { t: "ไป", p: "pai" },
            { t: "ตลาด", p: "ta-làat" }
        ]
    },
    {
        instruction: "They watch a movie.",
        hint: "彼らは映画を見ます",
        answer: [
            { t: "พวกเขา", p: "phûak-khǎo" },
            { t: "ดู", p: "duu" },
            { t: "หนัง", p: "nǎng" }
        ]
    },
    {
        instruction: "The teacher speaks Thai.",
        hint: "先生はタイ語を話します",
        answer: [
            { t: "ครู", p: "khruu" },
            { t: "พูด", p: "phûut" },
            { t: "ภาษา", p: "phaa-sǎa" },
            { t: "ไทย", p: "thai" }
        ]
    },
    {
        instruction: "I like spicy food.",
        hint: "私は辛い食べ物が好きです",
        answer: [
            { t: "ผม", p: "phǒm" },
            { t: "ชอบ", p: "chôop" },
            { t: "อาหาร", p: "aa-hǎan" },
            { t: "เผ็ด", p: "phet" }
        ]
    },
    {
        instruction: "She listens to music.",
        hint: "彼女は音楽を聴きます",
        answer: [
            { t: "เขา", p: "khǎo" },
            { t: "ฟัง", p: "fang" },
            { t: "เพลง", p: "phleng" }
        ]
    },
    {
        instruction: "He writes a letter.",
        hint: "彼は手紙を書きます",
        answer: [
            { t: "เขา", p: "khǎo" },
            { t: "เขียน", p: "khǐan" },
            { t: "จดหมาย", p: "jot-mǎai" }
        ]
    },
    {
        instruction: "I read a book.",
        hint: "私は本を読みます",
        answer: [
            { t: "ผม", p: "phǒm" },
            { t: "อ่าน", p: "àan" },
            { t: "หนังสือ", p: "nang-sǔu" }
        ]
    },
    {
        instruction: "They play football.",
        hint: "彼らはサッカーをします",
        answer: [
            { t: "พวกเขา", p: "phûak-khǎo" },
            { t: "เล่น", p: "len" },
            { t: "ฟุตบอล", p: "fud-bon" }
        ]
    },
    {
        instruction: "Mother cooks food.",
        hint: "母は料理を作ります",
        answer: [
            { t: "แม่", p: "mâe" },
            { t: "ทำ", p: "tham" },
            { t: "อาหาร", p: "aa-hǎan" }
        ]
    },
    {
        instruction: "Father drives a car.",
        hint: "父は車を運転します",
        answer: [
            { t: "พ่อ", p: "phôo" },
            { t: "ขับ", p: "khap" },
            { t: "รถ", p: "rot" }
        ]
    },
    {
        instruction: "I sell black coffee.",
        hint: "私はブラックコーヒーを売ります",
        answer: [
            { t: "ผม", p: "phǒm" },
            { t: "ขาย", p: "khǎai" },
            { t: "กาแฟ", p: "kaa-fae" },
            { t: "ดำ", p: "dam" }
        ]
    },
    {
        instruction: "She opens the door.",
        hint: "彼女はドアを開けます",
        answer: [
            { t: "เขา", p: "khǎo" },
            { t: "เปิด", p: "pòet" },
            { t: "ประตู", p: "pra-tuu" }
        ]
    },
    {
        instruction: "He closes the window.",
        hint: "彼は窓を閉めます",
        answer: [
            { t: "เขา", p: "khǎo" },
            { t: "ปิด", p: "pìt" },
            { t: "หน้าต่าง", p: "nâa-tàang" }
        ]
    },
    {
        instruction: "I clean the room.",
        hint: "私は部屋を掃除します",
        answer: [
            { t: "ผม", p: "phǒm" },
            { t: "ทำความสะอาด", p: "tham-khwaam-sa-àat" },
            { t: "ห้อง", p: "hôong" }
        ]
    },
    {
        instruction: "We wash the car.",
        hint: "私たちは車を洗います",
        answer: [
            { t: "พวกเรา", p: "phûak-rao" },
            { t: "ล้าง", p: "láang" },
            { t: "รถ", p: "rot" }
        ]
    },
    {
        instruction: "She wears red clothes.",
        hint: "彼女は赤い服を着ます",
        answer: [
            { t: "เขา", p: "khǎo" },
            { t: "ใส่", p: "sài" },
            { t: "เสื้อผ้า", p: "sûa-phâa" },
            { t: "สีแดง", p: "sǐi-daeng" }
        ]
    },
    {
        instruction: "I use a smartphone.",
        hint: "私はスマートフォンを使います",
        answer: [
            { t: "ผม", p: "phǒm" },
            { t: "ใช้", p: "chái" },
            { t: "สมาร์ทโฟน", p: "sa-maat-foon" }
        ]
    },
    {
        instruction: "He drinks hot tea.",
        hint: "彼は温かいお茶を飲みます",
        answer: [
            { t: "เขา", p: "khǎo" },
            { t: "ดื่ม", p: "dùum" },
            { t: "ชา", p: "chaa" },
            { t: "ร้อน", p: "róon" }
        ]
    },
    {
        instruction: "They order green curry.",
        hint: "彼らはグリーンカレーを注文します",
        answer: [
            { t: "พวกเขา", p: "phûak-khǎo" },
            { t: "สั่ง", p: "sàng" },
            { t: "แกงเขียวหวาน", p: "gaeng-khǐaw-wǎan" }
        ]
    },
    {
        instruction: "I pay money.",
        hint: "私はお金を払います",
        answer: [
            { t: "ผม", p: "phǒm" },
            { t: "จ่าย", p: "jàai" },
            { t: "เงิน", p: "ngoen" }
        ]
    },
    {
        instruction: "She takes a picture.",
        hint: "彼女は写真を撮ります",
        answer: [
            { t: "เขา", p: "khǎo" },
            { t: "ถ่าย", p: "thàai" },
            { t: "รูป", p: "rûup" }
        ]
    },
    {
        instruction: "He rides a bicycle.",
        hint: "彼は自転車に乗ります",
        answer: [
            { t: "เขา", p: "khǎo" },
            { t: "ปั่น", p: "pàn" },
            { t: "จักรยาน", p: "jak-kra-yaan" }
        ]
    },
    {
        instruction: "I teach English.",
        hint: "私は英語を教えます",
        answer: [
            { t: "ผม", p: "phǒm" },
            { t: "สอน", p: "sǒon" },
            { t: "ภาษา", p: "phaa-sǎa" },
            { t: "อังกฤษ", p: "ang-krits" }
        ]
    },
    {
        instruction: "We wait for the bus.",
        hint: "私たちはバスを待ちます",
        answer: [
            { t: "พวกเรา", p: "phûak-rao" },
            { t: "รอ", p: "roo" },
            { t: "รถเมล์", p: "rot-mee" }
        ]
    },
    {
        instruction: "She plants flowers.",
        hint: "彼女は花を植えます",
        answer: [
            { t: "เขา", p: "khǎo" },
            { t: "ปลูก", p: "plùuk" },
            { t: "ดอกไม้", p: "dook-mái" }
        ]
    },
    {
        instruction: "I love Thailand.",
        hint: "私はタイが好き/愛しています",
        answer: [
            { t: "ผม", p: "phǒm" },
            { t: "รัก", p: "rak" },
            { t: "ประเทศไทย", p: "pra-thêet-thai" }
        ]
    }
    ]
});