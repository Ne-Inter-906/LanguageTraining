// カテゴリリストが未定義なら作成
window.japaneseCategories = window.japaneseCategories || [];

// リストにこのファイルのデータを追加
window.japaneseCategories.push({
    name: "Tense SOV (時制 過去・進行・完了)",
    data: [
        // === 1. 過去形（〜ました） [1〜10問目] ===
        {
            instruction: "I watched a movie yesterday.",
            hint: "私は昨日映画を見ました。",
            answer: [
                { t: "私", p: "watashi" }, { t: "は", p: "wa" }, { t: "昨日", p: "kinou" },
                { t: "映画", p: "eiga" }, { t: "を", p: "o" }, { t: "見", p: "mi" },
                { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "He bought a new car.",
            hint: "彼は新しい車を買いました。",
            answer: [
                { t: "彼", p: "kare" }, { t: "は", p: "wa" }, { t: "新しい", p: "atarashii" },
                { t: "車", p: "kuruma" }, { t: "を", p: "o" }, { t: "買い", p: "kai" },
                { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "The train arrived at the station.",
            hint: "電車が駅に到着しました。",
            answer: [
                { t: "電車", p: "densha" }, { t: "が", p: "ga" }, { t: "駅", p: "eki" },
                { t: "に", p: "ni" }, { t: "到着", p: "touchaku" }, { t: "し", p: "shi" },
                { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "I washed my hands.",
            hint: "私は手を洗いました。",
            answer: [
                { t: "私", p: "watashi" }, { t: "は", p: "wa" }, { t: "手", p: "te" },
                { t: "を", p: "o" }, { t: "洗い", p: "arai" }, { t: "ました", p: "mashita" },
                { t: "。", p: "." }
            ]
        },
        {
            instruction: "We ate lunch together.",
            hint: "私たちは一緒に昼ご飯を食べました。",
            answer: [
                { t: "私たち", p: "watashitachi" }, { t: "は", p: "wa" }, { t: "一緒に", p: "isshoni" },
                { t: "昼ご飯", p: "hirugohan" }, { t: "を", p: "o" }, { t: "食べ", p: "tabe" },
                { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "I studied English last night.",
            hint: "私は昨夜英語を勉強しました。",
            answer: [
                { t: "私", p: "watashi" }, { t: "は", p: "wa" }, { t: "昨夜", p: "sakuya" },
                { t: "英語", p: "eigo" }, { t: "を", p: "o" }, { t: "勉強", p: "benkyou" },
                { t: "し", p: "shi" }, { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "The library closed at 5 o'clock.",
            hint: "図書館は5時に閉まりました。",
            answer: [
                { t: "図書館", p: "toshokan" }, { t: "は", p: "wa" }, { t: "5時", p: "goji" },
                { t: "に", p: "ni" }, { t: "閉まり", p: "shimari" }, { t: "ました", p: "mashita" },
                { t: "。", p: "." }
            ]
        },
        {
            instruction: "My friend came to Japan.",
            hint: "私の友達が日本に来ました。",
            answer: [
                { t: "私", p: "watashi" }, { t: "の", p: "no" }, { t: "友達", p: "tomodachi" },
                { t: "が", p: "ga" }, { t: "日本", p: "nihon" }, { t: "に", p: "ni" },
                { t: "来", p: "ki" }, { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "I read a book this morning.",
            hint: "私は今朝本を読みました。",
            answer: [
                { t: "私", p: "watashi" }, { t: "は", p: "wa" }, { t: "今朝", p: "kesa" },
                { t: "本", p: "hon" }, { t: "を", p: "o" }, { t: "読み", p: "yomi" },
                { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "He called the teacher.",
            hint: "彼は先生に電話をかけました。",
            answer: [
                { t: "彼", p: "kare" }, { t: "は", p: "wa" }, { t: "先生", p: "sensei" },
                { t: "に", p: "ni" }, { t: "電話", p: "denwa" }, { t: "を", p: "o" },
                { t: "かけ", p: "kake" }, { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },

        // === 2. 現在進行・状態（〜ています） [11〜20問目] ===
        {
            instruction: "I am playing a game now.",
            hint: "私は今ゲームをしています。",
            answer: [
                { t: "私", p: "watashi" }, { t: "は", p: "wa" }, { t: "今", p: "ima" },
                { t: "ゲーム", p: "geemu" }, { t: "を", p: "o" }, { t: "し", p: "shi" },
                { t: "て", p: "te" }, { t: "い", p: "i" }, { t: "ます", p: "masu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "She is reading a book.",
            hint: "彼女は本を読んでいます。",
            answer: [
                { t: "彼女", p: "kanojo" }, { t: "は", p: "wa" }, { t: "本", p: "hon" },
                { t: "を", p: "o" }, { t: "読ん", p: "yon" }, { t: "で", p: "de" },
                { t: "い", p: "i" }, { t: "ます", p: "masu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "It is raining right now.",
            hint: "今、雨が降っています。",
            answer: [
                { t: "今", p: "ima" }, { t: "、", p: "," }, { t: "雨", p: "ame" },
                { t: "が", p: "ga" }, { t: "降っ", p: "hut" }, { t: "て", p: "te" },
                { t: "い", p: "i" }, { t: "ます", p: "masu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "My friend is driving a car.",
            hint: "友達は車を運転しています。",
            answer: [
                { t: "友達", p: "tomodachi" }, { t: "は", p: "wa" }, { t: "車", p: "kuruma" },
                { t: "を", p: "o" }, { t: "運転", p: "unten" }, { t: "し", p: "shi" },
                { t: "て", p: "te" }, { t: "い", p: "i" }, { t: "ます", p: "masu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "They are listening to music.",
            hint: "彼らは音楽を聴いています。",
            answer: [
                { t: "彼ら", p: "karera" }, { t: "は", p: "wa" }, { t: "音楽", p: "ongaku" },
                { t: "を", p: "o" }, { t: "聴い", p: "kii" }, { t: "て", p: "te" },
                { t: "い", p: "i" }, { t: "ます", p: "masu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "The child is sleeping in the room.",
            hint: "子供は部屋で寝ています。",
            answer: [
                { t: "子供", p: "kodomo" }, { t: "は", p: "wa" }, { t: "部屋", p: "heya" },
                { t: "で", p: "de" }, { t: "寝", p: "ne" }, { t: "て", p: "te" },
                { t: "い", p: "i" }, { t: "ます", p: "masu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "I know his name.",
            hint: "私は彼の名前を知っています。",
            answer: [
                { t: "私", p: "watashi" }, { t: "は", p: "wa" }, { t: "彼", p: "kare" },
                { t: "の", p: "no" }, { t: "名前", p: "namae" }, { t: "を", p: "o" },
                { t: "知っ", p: "shit" }, { t: "て", p: "te" }, { t: "い", p: "i" },
                { t: "ます", p: "masu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "He lives in Tokyo.",
            hint: "彼は東京に住んでいます。",
            answer: [
                { t: "彼", p: "kare" }, { t: "は", p: "wa" }, { t: "東京", p: "toukyou" },
                { t: "に", p: "ni" }, { t: "住ん", p: "sun" }, { t: "で", p: "de" },
                { t: "い", p: "i" }, { t: "ます", p: "masu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "My older sister is cooking lunch.",
            hint: "姉は昼ご飯を作っています。",
            answer: [
                { t: "姉", p: "ane" }, { t: "は", p: "wa" }, { t: "昼ご飯", p: "hirugohan" },
                { t: "を", p: "o" }, { t: "作っ", p: "tsukut" }, { t: "て", p: "te" },
                { t: "い", p: "i" }, { t: "ます", p: "masu" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "The bus is stopping there.",
            hint: "バスがそこに止まっています。",
            answer: [
                { t: "バス", p: "basu" }, { t: "が", p: "ga" }, { t: "そこ", p: "soko" },
                { t: "に", p: "ni" }, { t: "止まっ", p: "tomat" }, { t: "て", p: "te" },
                { t: "い", p: "i" }, { t: "ます", p: "masu" }, { t: "。", p: "." }
            ]
        },

        // === 3. 過去進行・完了（〜ていました / 〜てしまいました） [21〜30問目] ===
        {
            instruction: "I was studying around 8 o'clock.",
            hint: "私は8時ごろ勉強していました。",
            answer: [
                { t: "私", p: "watashi" }, { t: "は", p: "wa" }, { t: "8時", p: "hachiji" },
                { t: "ごろ", p: "goro" }, { t: "勉強", p: "benkyou" }, { t: "し", p: "shi" },
                { t: "て", p: "te" }, { t: "い", p: "i" }, { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "When you called, I was taking a bath.",
            hint: "電話が鳴ったとき、私はお風呂に入っていました。",
            answer: [
                { t: "電話", p: "denwa" }, { t: "が", p: "ga" }, { t: "鳴った", p: "natta" },
                { t: "とき", p: "toki" }, { t: "、", p: "," }, { t: "私", p: "watashi" },
                { t: "は", p: "wa" }, { t: "お風呂", p: "ofuro" }, { t: "に", p: "ni" },
                { t: "入っ", p: "hai" }, { t: "て", p: "te" }, { t: "い", p: "i" },
                { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "He was waiting for his friend at the station.",
            hint: "彼は駅で友達を待っていました。",
            answer: [
                { t: "彼", p: "kare" }, { t: "は", p: "wa" }, { t: "駅", p: "eki" },
                { t: "で", p: "de" }, { t: "友達", p: "tomodachi" }, { t: "を", p: "o" },
                { t: "待っ", p: "mat" }, { t: "て", p: "te" }, { t: "い", p: "i" },
                { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "It was snowing this morning.",
            hint: "今朝は雪が降っていました。",
            answer: [
                { t: "今朝", p: "kesa" }, { t: "は", p: "wa" }, { t: "雪", p: "yuki" },
                { t: "が", p: "ga" }, { t: "降っ", p: "hut" }, { t: "て", p: "te" },
                { t: "い", p: "i" }, { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "She was playing the piano at that time.",
            hint: "そのとき彼女はピアノを弾いていました。",
            answer: [
                { t: "そのとき", p: "sonotoki" }, { t: "彼女", p: "kanojo" }, { t: "は", p: "wa" },
                { t: "ピアノ", p: "piano" }, { t: "を", p: "o" }, { t: "弾い", p: "hii" },
                { t: "て", p: "te" }, { t: "い", p: "i" }, { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "I accidentally lost my wallet.",
            hint: "私は財布を落としてしまいました。",
            answer: [
                { t: "私", p: "watashi" }, { t: "は", p: "wa" }, { t: "財布", p: "saifu" },
                { t: "を", p: "o" }, { t: "落とし", p: "otoshi" }, { t: "て", p: "te" },
                { t: "しまい", p: "shimai" }, { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "He accidentally ate my cake.",
            hint: "彼は私のケーキを食べてしまいました。",
            answer: [
                { t: "彼", p: "kare" }, { t: "は", p: "wa" }, { t: "私", p: "watashi" },
                { t: "の", p: "no" }, { t: "ケーキ", p: "keeki" }, { t: "を", p: "o" },
                { t: "食べ", p: "tabe" }, { t: "て", p: "te" }, { t: "しまい", p: "shimai" },
                { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "I have already finished my homework.",
            hint: "私はもう宿題をやってしまいました。",
            answer: [
                { t: "私", p: "watashi" }, { t: "は", p: "wa" }, { t: "もう", p: "mou" },
                { t: "宿題", p: "shukudai" }, { t: "を", p: "o" }, { t: "やっ", p: "yat" },
                { t: "て", p: "te" }, { t: "しまい", p: "shimai" }, { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "The last bus has gone.",
            hint: "最終バスが行ってしまいました。",
            answer: [
                { t: "最終", p: "saishuu" }, { t: "バス", p: "basu" }, { t: "が", p: "ga" },
                { t: "行っ", p: "it" }, { t: "て", p: "te" }, { t: "しまい", p: "shimai" },
                { t: "ました", p: "mashita" }, { t: "。", p: "." }
            ]
        },
        {
            instruction: "The computer broke down completely.",
            hint: "パソコンが壊れてしまいました。",
            answer: [
                { t: "パソコン", p: "pasokon" }, { t: "が", p: "ga" }, { t: "壊れ", p: "koware" },
                { t: "て", p: "te" }, { t: "しまい", p: "shimai" }, { t: "ました", p: "mashita" },
                { t: "。", p: "." }
            ]
        }
    ]
});