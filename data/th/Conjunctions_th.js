window.thaiCategories = window.thaiCategories || [];

window.thaiCategories.push({
    name: "Conjunctions (接続詞)",
    data: [
        // ------------------------------------------------------------------
        // 1. และ (láe) - 〜と、そして (AND)
        // ------------------------------------------------------------------
        {
            instruction: "I like tea and coffee.",
            hint: "私はお茶とコーヒーが好きです。",
            answer: [
                { t: "ฉัน", p: "chǎn" },
                { t: "ชอบ", p: "chôop" },
                { t: "ชา", p: "chaa" },
                { t: "และ", p: "láe" },
                { t: "กาแฟ", p: "kaa-fae" }
            ]
        },
        {
            instruction: "He can speak Thai and English.",
            hint: "彼はタイ語と英語を話すことができます。",
            answer: [
                { t: "เขา", p: "kháo" },
                { t: "พูด", p: "phûut" },
                { t: "ภาษาไทย", p: "phaa-sǎa-thai" },
                { t: "และ", p: "láe" },
                { t: "ภาษาอังกฤษ", p: "phaa-sǎa-ang-krit" },
                { t: "ได้", p: "dâi" }
            ]
        },
        {
            instruction: "We bought bread and milk.",
            hint: "私たちはパンと牛乳を買いました。",
            answer: [
                { t: "เรา", p: "rao" },
                { t: "ซื้อ", p: "súu" },
                { t: "ขนมปัง", p: "kha-nom-pang" },
                { t: "และ", p: "láe" },
                { t: "นม", p: "nom" }
            ]
        },
        {
            instruction: "He is smart and polite.",
            hint: "彼は頭が良くて、礼儀正しいです。",
            answer: [
                { t: "เขา", p: "kháo" },
                { t: "ฉลาด", p: "cha-laat" },
                { t: "และ", p: "láe" },
                { t: "สุภาพ", p: "su-phâap" }
            ]
        },

        // ------------------------------------------------------------------
        // 2. แต่ (tæ̀æ) - しかし、だが (BUT)
        // ------------------------------------------------------------------
        {
            instruction: "This item is good, but expensive.",
            hint: "この商品は良いですが、高いです。",
            answer: [
                { t: "อันนี้", p: "an-níi" },
                { t: "ดี", p: "dii" },
                { t: "แต่", p: "tæ̀æ" },
                { t: "แพง", p: "phaeng" }
            ]
        },
        {
            instruction: "I want to go, but I don't have time.",
            hint: "行きたいですが、時間がありません。",
            answer: [
                { t: "อยาก", p: "yàak" },
                { t: "ไป", p: "pai" },
                { t: "แต่", p: "tæ̀æ" },
                { t: "ไม่มี", p: "mâi mii" },
                { t: "เวลา", p: "wee-laa" }
            ]
        },
        {
            instruction: "Thai food is delicious, but spicy.",
            hint: "タイ料理はおいしいですが、辛いです。",
            answer: [
                { t: "อาหารไทย", p: "aa-hǎan-thai" },
                { t: "อร่อย", p: "a-ròi" },
                { t: "แต่", p: "tæ̀æ" },
                { t: "เผ็ด", p: "phet" }
            ]
        },
        {
            instruction: "I studied, but I did not understand.",
            hint: "勉強しましたが、わかりませんでした。",
            answer: [
                { t: "เรียน", p: "rīan" },
                { t: "แล้ว", p: "láew" },
                { t: "แต่", p: "tæ̀æ" },
                { t: "ไม่เข้าใจ", p: "mâi khâo-chai" }
            ]
        },

        // ------------------------------------------------------------------
        // 3. เพราะ (phró) / เพราะว่า - 〜だから、〜のために (BECAUSE)
        // ------------------------------------------------------------------
        {
            instruction: "I didn't go because it rained.",
            hint: "雨が降ったので行きませんでした。",
            answer: [
                { t: "ไม่ได้", p: "mâi dâi" },
                { t: "ไป", p: "pai" },
                { t: "เพราะ", p: "phró" },
                { t: "ฝนตก", p: "fon-tok" }
            ]
        },
        {
            instruction: "He rests because he is tired.",
            hint: "彼は疲れているので休んでいます。",
            answer: [
                { t: "เขา", p: "kháo" },
                { t: "พักผ่อน", p: "phak-phòn" },
                { t: "เพราะ", p: "phró" },
                { t: "เหนื่อย", p: "nùeai" }
            ]
        },
        {
            instruction: "I like him because he is kind.",
            hint: "彼は優しいので好きです。",
            answer: [
                { t: "ชอบ", p: "chôop" },
                { t: "เขา", p: "kháo" },
                { t: "เพราะ", p: "phró" },
                { t: "ใจดี", p: "chai-dii" }
            ]
        },
        {
            instruction: "We were late because of heavy traffic.",
            hint: "渋滞していたので遅れました。",
            answer: [
                { t: "มา", p: "maa" },
                { t: "สาย", p: "sǎai" },
                { t: "เพราะ", p: "phró" },
                { t: "รถติด", p: "rot-tit" }
            ]
        },

        // ------------------------------------------------------------------
        // 4. ดังนั้น (daŋ-nán) - だから、したがって (SO / THEREFORE)
        // ------------------------------------------------------------------
        {
            instruction: "It's raining, so I won't go.",
            hint: "雨が降っています、だから行きません。",
            answer: [
                { t: "ฝนตก", p: "fon-tok" },
                { t: "ดังนั้น", p: "daŋ-nán" },
                { t: "ฉัน", p: "chǎn" },
                { t: "จะ", p: "cha" },
                { t: "ไม่ไป", p: "mâi pai" }
            ]
        },
        {
            instruction: "He studied hard, so he passed.",
            hint: "彼は一生懸命勉強しました、だから合格しました。",
            answer: [
                { t: "เขา", p: "kháo" },
                { t: "ขยัน", p: "kha-yan" },
                { t: "เรียน", p: "rīan" },
                { t: "ดังนั้น", p: "daŋ-nán" },
                { t: "สอบผ่าน", p: "sòop-phàan" }
            ]
        },
        {
            instruction: "I am hungry, so I will eat.",
            hint: "お腹が空きました、だからご飯を食べます。",
            answer: [
                { t: "หิวข้าว", p: "hǐu-khâaw" },
                { t: "ดังนั้น", p: "daŋ-nán" },
                { t: "จะ", p: "cha" },
                { t: "กินข้าว", p: "kin-khâaw" }
            ]
        },
        {
            instruction: "The item is broken, so I returned it.",
            hint: "商品が壊れていました、だから返品しました。",
            answer: [
                { t: "ของ", p: "khǒong" },
                { t: "พัง", p: "phang" },
                { t: "ดังนั้น", p: "daŋ-nán" },
                { t: "จึง", p: "jueng" },
                { t: "คืน", p: "khuen" }
            ]
        },

        // ------------------------------------------------------------------
        // 5. ถ้า (thâa) - もし〜なら (IF)
        // ------------------------------------------------------------------
        {
            instruction: "If you are free, let's go.",
            hint: "もし暇なら、一緒に行きましょう。",
            answer: [
                { t: "ถ้า", p: "thâa" },
                { t: "ว่าง", p: "wâang" },
                { t: "ไป", p: "pai" },
                { t: "ด้วยกัน", p: "dûai-kan" }
            ]
        },
        {
            instruction: "If it rains, stay home.",
            hint: "もし雨が降ったら、家にいてください。",
            answer: [
                { t: "ถ้า", p: "thâa" },
                { t: "ฝนตก", p: "fon-tok" },
                { t: "อยู่", p: "yùu" },
                { t: "บ้าน", p: "bâan" }
            ]
        },
        {
            instruction: "If you don't know, ask him.",
            hint: "もし知らないなら、彼に聞いてください。",
            answer: [
                { t: "ถ้า", p: "thâa" },
                { t: "ไม่รู้", p: "mâi rúu" },
                { t: "ให้", p: "hâi" },
                { t: "ถาม", p: "thǎam" },
                { t: "เขา", p: "kháo" }
            ]
        },
        {
            instruction: "If you are tired, take a rest.",
            hint: "もし疲れたなら、休んでください。",
            answer: [
                { t: "ถ้า", p: "thâa" },
                { t: "เหนื่อย", p: "nùeai" },
                { t: "ก็", p: "kôo" },
                { t: "พักผ่อน", p: "phak-phòn" }
            ]
        },

        // ------------------------------------------------------------------
        // 6. หรือ (rǔu) - または、それとも (OR)
        // ------------------------------------------------------------------
        {
            instruction: "Do you want tea or coffee?",
            hint: "お茶がいいですか、それともコーヒーがいいですか？",
            answer: [
                { t: "คุณ", p: "khun" },
                { t: "เอา", p: "ao" },
                { t: "ชา", p: "chaa" },
                { t: "หรือ", p: "rǔu" },
                { t: "กาแฟ", p: "kaa-fae" }
            ]
        },
        {
            instruction: "Will you go today or tomorrow?",
            hint: "今日行きますか、それとも明日行きますか？",
            answer: [
                { t: "จะ", p: "cha" },
                { t: "ไป", p: "pai" },
                { t: "วันนี้", p: "wan-níi" },
                { t: "หรือ", p: "rǔu" },
                { t: "พรุ่งนี้", p: "phrúng-níi" }
            ]
        },
        {
            instruction: "Is this correct or wrong?",
            hint: "これは正しいですか、それとも間違っていますか？",
            answer: [
                { t: "อันนี้", p: "an-níi" },
                { t: "ถูก", p: "thùuk" },
                { t: "หรือ", p: "rǔu" },
                { t: "ผิด", p: "phit" }
            ]
        },
        {
            instruction: "Are you going by bus or train?",
            hint: "バスで行きますか、それとも電車で行きますか？",
            answer: [
                { t: "ไป", p: "pai" },
                { t: "รถเมล์", p: "rot-mee" },
                { t: "หรือ", p: "rǔu" },
                { t: "รถไฟ", p: "rot-fai" }
            ]
        },

        // ------------------------------------------------------------------
        // 7. ถึงแม้ว่า (thǔng-mâe-wâa) / ถึง - 〜であるにもかかわらず (ALTHOUGH)
        // ------------------------------------------------------------------
        {
            instruction: "Although it's rain, I will go.",
            hint: "雨が降っているにもかかわらず、私は行きます。",
            answer: [
                { t: "ถึงแม้ว่า", p: "thǔng-mâe-wâa" },
                { t: "ฝนตก", p: "fon-tok" },
                { t: "แต่", p: "tæ̀æ" },
                { t: "จะ", p: "cha" },
                { t: "ไป", p: "pai" }
            ]
        },
        {
            instruction: "Although tired, he works hard.",
            hint: "疲れているにもかかわらず、彼は一生懸命働きます。",
            answer: [
                { t: "ถึงแม้ว่า", p: "thǔng-mâe-wâa" },
                { t: "เหนื่อย", p: "nùeai" },
                { t: "แต่", p: "tæ̀æ" },
                { t: "ก็", p: "kôo" },
                { t: "ขยัน", p: "kha-yan" }
            ]
        },
        {
            instruction: "Although expensive, I will buy it.",
            hint: "高いにもかかわらず、買います。",
            answer: [
                { t: "ถึงแม้ว่า", p: "thǔng-mâe-wâa" },
                { t: "แพง", p: "phaeng" },
                { t: "แต่", p: "tæ̀æ" },
                { t: "จะ", p: "cha" },
                { t: "ซื้อ", p: "súu" }
            ]
        },

        // ------------------------------------------------------------------
        // 8. หลังจาก (lǎng-chàak) / ก่อน (kòon) - 〜の後で / 〜の前に (AFTER / BEFORE)
        // ------------------------------------------------------------------
        {
            instruction: "Wash hands before eating.",
            hint: "ご飯を食べる前に手を洗ってください。",
            answer: [
                { t: "ล้างมือ", p: "láang-mue" },
                { t: "ก่อน", p: "kòon" },
                { t: "กินข้าว", p: "kin-khâaw" }
            ]
        },
        {
            instruction: "Take a bath after exercise.",
            hint: "運動した後にシャワーを浴びます。",
            answer: [
                { t: "อาบน้ำ", p: "àap-nám" },
                { t: "หลังจาก", p: "lǎng-chàak" },
                { t: "ออกกำลังกาย", p: "òok-kam-lang-kaai" }
            ]
        },
        {
            instruction: "Sleep after finishing work.",
            hint: "仕事が終わった後に寝ます。",
            answer: [
                { t: "นอน", p: "nohn" },
                { t: "หลังจาก", p: "lǎng-chàak" },
                { t: "เลิกงาน", p: "lôek-ngaan" }
            ]
        }
    ]
});