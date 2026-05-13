const sources = {
  core: {
    label: 'Core decks',
    chapters: {
      jlpt_n5: {
        label: 'JLPT N5',
        cards: [
          { kanji: '日', meaning: 'day / sun', reading: 'にち・ひ' },
          { kanji: '月', meaning: 'month / moon', reading: 'げつ・つき' },
          { kanji: '火', meaning: 'fire', reading: 'か・ひ' },
          { kanji: '水', meaning: 'water', reading: 'すい・みず' },
          { kanji: '木', meaning: 'tree / wood', reading: 'もく・き' },
          { kanji: '金', meaning: 'gold / money', reading: 'きん・かね' },
          { kanji: '土', meaning: 'earth / soil', reading: 'ど・つち' },
          { kanji: '人', meaning: 'person', reading: 'じん・ひと' },
          { kanji: '山', meaning: 'mountain', reading: 'さん・やま' },
          { kanji: '川', meaning: 'river', reading: 'せん・かわ' },
          { kanji: '上', meaning: 'up / above', reading: 'じょう・うえ' },
          { kanji: '下', meaning: 'down / below', reading: 'か・した' },
          { kanji: '中', meaning: 'middle / inside', reading: 'ちゅう・なか' },
          { kanji: '大', meaning: 'big', reading: 'だい・おお' },
          { kanji: '小', meaning: 'small', reading: 'しょう・ちい' },
        ],
      },
      jlpt_n4: {
        label: 'JLPT N4',
        cards: [
          { kanji: '会', meaning: 'meet / association', reading: 'かい・あう' },
          { kanji: '社', meaning: 'company / shrine', reading: 'しゃ' },
          { kanji: '時', meaning: 'time / hour', reading: 'じ・とき' },
          { kanji: '間', meaning: 'interval / between', reading: 'かん・あいだ' },
          { kanji: '場', meaning: 'place / field', reading: 'じょう・ば' },
          { kanji: '所', meaning: 'place', reading: 'しょ・ところ' },
          { kanji: '電', meaning: 'electricity', reading: 'でん' },
          { kanji: '車', meaning: 'car / vehicle', reading: 'しゃ・くるま' },
          { kanji: '駅', meaning: 'station', reading: 'えき' },
          { kanji: '道', meaning: 'road / way', reading: 'どう・みち' },
          { kanji: '食', meaning: 'eat / food', reading: 'しょく・たべる' },
          { kanji: '飲', meaning: 'drink', reading: 'いん・のむ' },
          { kanji: '友', meaning: 'friend', reading: 'ゆう・とも' },
          { kanji: '話', meaning: 'talk / story', reading: 'わ・はなす' },
          { kanji: '買', meaning: 'buy', reading: 'かう' },
        ],
      },
      school: {
        label: 'School basics',
        cards: [
          { kanji: '学', meaning: 'study / learning', reading: 'がく・まなぶ' },
          { kanji: '校', meaning: 'school', reading: 'こう' },
          { kanji: '先', meaning: 'previous / ahead', reading: 'せん・さき' },
          { kanji: '生', meaning: 'life / student', reading: 'せい・いきる' },
          { kanji: '本', meaning: 'book / origin', reading: 'ほん・もと' },
          { kanji: '語', meaning: 'language / word', reading: 'ご・かたる' },
          { kanji: '文', meaning: 'sentence / writing', reading: 'ぶん・もん' },
          { kanji: '字', meaning: 'character / letter', reading: 'じ' },
          { kanji: '読', meaning: 'read', reading: 'どく・よむ' },
          { kanji: '書', meaning: 'write', reading: 'しょ・かく' },
        ],
      },
    },
  },
  genki1: {
    label: 'Genki I',
    chapters: {
      ch3: { label: 'Chapter 3', cards: [
        { kanji: 'アイスクリーム', meaning: 'ice cream', reading: 'アイスクリーム', studyType: 'read-only' },
        { kanji: '朝', meaning: 'morning', reading: 'あさ', studyType: 'read-only' },
        { kanji: '朝ご飯', meaning: 'breakfast', reading: 'あさごはん', studyType: 'read-only' },
        { kanji: '明日', meaning: 'tomorrow', reading: 'あした', studyType: 'read-only' },
        { kanji: 'あまり', meaning: 'not much (with neg. sentence)', reading: 'あまり', studyType: 'read-only' },
        { kanji: 'いい', meaning: 'good', reading: 'いい', studyType: 'read-only' },
        { kanji: '家', meaning: 'house; home', reading: 'いえ', studyType: 'read-only' },
        { kanji: '行く', meaning: 'to go', reading: 'いく', studyType: 'read-only' },
        { kanji: '一', meaning: 'one', reading: 'いち', studyType: 'write' },
        { kanji: '一万', meaning: 'ten thousand', reading: 'いちまん', studyType: 'write' },
        { kanji: 'いつ', meaning: 'when', reading: 'いつ', studyType: 'read-only' },
        { kanji: 'うち', meaning: 'home; house; my place', reading: 'うち', studyType: 'read-only' },
        { kanji: '映画', meaning: 'movie', reading: 'えいが', studyType: 'read-only' },
        { kanji: '円', meaning: 'yen; circle', reading: 'えん', studyType: 'write' },
        { kanji: '円高', meaning: 'strong yen', reading: 'えんだか', studyType: 'write' },
        { kanji: '起きる', meaning: 'to get up', reading: 'おきる', studyType: 'read-only' },
        { kanji: 'お酒', meaning: 'sake; alcohol', reading: 'おさけ', studyType: 'read-only' },
        { kanji: 'お茶', meaning: 'green tea', reading: 'おちゃ', studyType: 'read-only' },
        { kanji: '音楽', meaning: 'music', reading: 'おんがく', studyType: 'read-only' },
        { kanji: '帰る', meaning: 'to go back; to return', reading: 'かえる', studyType: 'read-only' },
        { kanji: '学校', meaning: 'school', reading: 'がっこう', studyType: 'read-only' },
        { kanji: '聞く', meaning: 'to hear; to listen; to ask', reading: 'きく', studyType: 'read-only' },
        { kanji: '九', meaning: 'nine', reading: 'きゅう', studyType: 'write' },
        { kanji: '今日', meaning: 'today', reading: 'きょう', studyType: 'read-only' },
        { kanji: '来る', meaning: 'to come', reading: 'くる', studyType: 'read-only' },
        { kanji: 'コーヒー', meaning: 'coffee', reading: 'コーヒー', studyType: 'read-only' },
        { kanji: '五', meaning: 'five', reading: 'ご', studyType: 'write' },
        { kanji: '子供の時', meaning: 'in one\'s childhood', reading: 'こどものとき', studyType: 'write' },
        { kanji: '～ごろ', meaning: 'at about...', reading: '～ごろ', studyType: 'read-only' },
        { kanji: '今晩', meaning: 'tonight', reading: 'こんばん', studyType: 'read-only' },
        { kanji: '酒', meaning: 'sake; alcohol', reading: 'さけ', studyType: 'read-only' },
        { kanji: '雑誌', meaning: 'magazine', reading: 'ざっし', studyType: 'read-only' },
        { kanji: '三', meaning: 'three', reading: 'さん', studyType: 'write' },
        { kanji: '三千', meaning: 'three thousand', reading: 'さんぜん', studyType: 'write' },
        { kanji: '三年生', meaning: 'third-year student', reading: 'さんねんせい', studyType: 'write' },
        { kanji: '三百', meaning: 'three hundred', reading: 'さんびゃく', studyType: 'write' },
        { kanji: '七', meaning: 'seven', reading: '(しち/なな)', studyType: 'write' },
        { kanji: '週末', meaning: 'weekend', reading: 'しゅうまつ', studyType: 'read-only' },
        { kanji: '十万', meaning: 'one hundred thousand', reading: 'じゅうまん', studyType: 'write' },
        { kanji: 'スポーツ', meaning: 'sports', reading: 'スポーツ', studyType: 'read-only' },
        { kanji: 'する', meaning: 'to do; to decide on (an item); to wear small items (necktie, watch, etc.); to cost', reading: 'する', studyType: 'read-only' },
        { kanji: '千', meaning: 'thousand', reading: 'せん', studyType: 'write' },
        { kanji: '千円', meaning: 'one thousand yen', reading: 'せんえん', studyType: 'write' },
        { kanji: '全然', meaning: 'not at all', reading: 'ぜんぜん', studyType: 'read-only' },
        { kanji: 'そうですね', meaning: 'That\'s right.; Let me see.', reading: 'そうですね', studyType: 'read-only' },
        { kanji: 'たいてい', meaning: 'usually', reading: 'たいてい', studyType: 'read-only' },
        { kanji: '食べる', meaning: 'to eat', reading: 'たべる', studyType: 'read-only' },
        { kanji: '茶', meaning: 'green tea', reading: 'ちゃ', studyType: 'read-only' },
        { kanji: 'ちょっと', meaning: 'a little', reading: 'ちょっと', studyType: 'read-only' },
        { kanji: 'デート', meaning: 'date (romantic, not calendar)', reading: 'デート', studyType: 'read-only' },
        { kanji: 'テニス', meaning: 'tennis', reading: 'テニス', studyType: 'read-only' },
        { kanji: 'でも', meaning: 'but', reading: 'でも', studyType: 'read-only' },
        { kanji: 'テレビ', meaning: 'TV', reading: 'テレビ', studyType: 'read-only' },
        { kanji: 'どうですか', meaning: 'How about...?; How is...?', reading: 'どうですか', studyType: 'read-only' },
        { kanji: '十', meaning: 'ten', reading: '(とお/じゅう)', studyType: 'write' },
        { kanji: '時々', meaning: 'sometimes', reading: 'ときどき', studyType: 'read-only' },
        { kanji: '土曜日', meaning: 'Saturday', reading: 'どようび', studyType: 'read-only' },
        { kanji: '二', meaning: 'two', reading: 'に', studyType: 'write' },
        { kanji: '日曜日', meaning: 'Sunday', reading: 'にちようび', studyType: 'read-only' },
        { kanji: '二年生', meaning: 'second-year student', reading: 'にねんせい', studyType: 'write' },
        { kanji: '寝る', meaning: 'to sleep; to go to sleep', reading: 'ねる', studyType: 'read-only' },
        { kanji: '飲む', meaning: 'to drink', reading: 'のむ', studyType: 'read-only' },
        { kanji: '八', meaning: 'eight', reading: 'はち', studyType: 'write' },
        { kanji: '八千', meaning: 'eight thousand', reading: 'はっせん', studyType: 'write' },
        { kanji: '八百', meaning: 'eight hundred', reading: 'はっぴゃく', studyType: 'write' },
        { kanji: '話す', meaning: 'to speak; to talk', reading: 'はなす', studyType: 'read-only' },
        { kanji: '早い', meaning: 'early', reading: 'はやい', studyType: 'read-only' },
        { kanji: '晩ご飯', meaning: 'dinner', reading: 'ばんごはん', studyType: 'read-only' },
        { kanji: 'ハンバーガー', meaning: 'hamburger', reading: 'ハンバーガー', studyType: 'read-only' },
        { kanji: '百', meaning: 'hundred', reading: 'ひゃく', studyType: 'write' },
        { kanji: '百円', meaning: 'one hundred yen', reading: 'ひゃくえん', studyType: 'write' },
        { kanji: '百万', meaning: 'one million', reading: 'ひゃくまん', studyType: 'write' },
        { kanji: '昼ご飯', meaning: 'lunch', reading: 'ひるごはん', studyType: 'read-only' },
        { kanji: '勉強する', meaning: 'to study', reading: 'べんきょうする', studyType: 'read-only' },
        { kanji: '毎日', meaning: 'every day', reading: 'まいにち', studyType: 'read-only' },
        { kanji: '毎晩', meaning: 'every night', reading: 'まいばん', studyType: 'read-only' },
        { kanji: 'マクドナルド', meaning: 'McDonald\'s', reading: 'マクドナルド', studyType: 'read-only' },
        { kanji: '円い', meaning: 'round', reading: 'まるい', studyType: 'write' },
        { kanji: '水', meaning: 'water', reading: 'みず', studyType: 'read-only' },
        { kanji: '見る', meaning: 'to see; to look at; to watch', reading: 'みる', studyType: 'read-only' },
        { kanji: 'よく', meaning: 'often; much; well', reading: 'よく', studyType: 'read-only' },
        { kanji: '四年生', meaning: 'fourth-year student', reading: 'よねんせい', studyType: 'write' },
        { kanji: '読む', meaning: 'to read', reading: 'よむ', studyType: 'read-only' },
        { kanji: '四', meaning: 'four', reading: 'よん', studyType: 'write' },
        { kanji: '六', meaning: 'six', reading: 'ろく', studyType: 'write' },
        { kanji: '六百', meaning: 'six hundred', reading: 'ろっぴゃく', studyType: 'write' },
      ] },
      ch4: { label: 'Chapter 4', cards: [
        { kanji: '間', meaning: 'between', reading: 'あいだ', studyType: 'read-only' },
        { kanji: '会う', meaning: 'to meet; to see (a person)', reading: 'あう', studyType: 'read-only' },
        { kanji: '明後日', meaning: 'the day after tomorrow', reading: 'あさって', studyType: 'read-only' },
        { kanji: '明日', meaning: 'tomorrow', reading: 'あした', studyType: 'read-only' },
        { kanji: 'あなた', meaning: 'you', reading: 'あなた', studyType: 'read-only' },
        { kanji: 'ある', meaning: 'there is...', reading: 'ある', studyType: 'read-only' },
        { kanji: 'アルバイト', meaning: 'part-time job', reading: 'アルバイト', studyType: 'read-only' },
        { kanji: '椅子', meaning: 'chair; stool', reading: 'いす', studyType: 'read-only' },
        { kanji: '一月', meaning: 'January', reading: 'いちがつ', studyType: 'read-only' },
        { kanji: '一時間', meaning: 'one hour', reading: 'いちじかん', studyType: 'read-only' },
        { kanji: '五日', meaning: 'the fifth day of a month; five days', reading: 'いつか', studyType: 'read-only' },
        { kanji: '一か月', meaning: 'one month', reading: 'いっかげつ', studyType: 'write' },
        { kanji: '犬', meaning: 'dog', reading: 'いぬ', studyType: 'read-only' },
        { kanji: 'いる', meaning: '(a person) is in...; stays at...', reading: 'いる', studyType: 'read-only' },
        { kanji: '上', meaning: 'above; on', reading: 'うえ', studyType: 'read-only' },
        { kanji: '後ろ', meaning: 'back', reading: 'うしろ', studyType: 'read-only' },
        { kanji: '屋上', meaning: 'rooftop', reading: 'おくじょう', studyType: 'write' },
        { kanji: 'お寺', meaning: 'temple', reading: 'おてら', studyType: 'read-only' },
        { kanji: 'おととい', meaning: 'the day before yesterday', reading: 'おととい', studyType: 'read-only' },
        { kanji: 'おととし', meaning: 'the year before last', reading: 'おととし', studyType: 'read-only' },
        { kanji: 'お土産', meaning: 'souvenir', reading: 'おみやげ', studyType: 'read-only' },
        { kanji: '買い物', meaning: 'shopping', reading: 'かいもの', studyType: 'read-only' },
        { kanji: '買う', meaning: 'to buy', reading: 'かう', studyType: 'read-only' },
        { kanji: '書く', meaning: 'to write', reading: 'かく', studyType: 'read-only' },
        { kanji: '火山', meaning: 'volcano', reading: 'かざん', studyType: 'write' },
        { kanji: '火星', meaning: 'Mars', reading: 'かせい', studyType: 'write' },
        { kanji: '火曜日', meaning: 'Tuesday', reading: 'かようび', studyType: 'read-only' },
        { kanji: '昨日', meaning: 'yesterday', reading: 'きのう', studyType: 'read-only' },
        { kanji: '今日', meaning: 'today', reading: 'きょう', studyType: 'read-only' },
        { kanji: '去年', meaning: 'last year', reading: 'きょねん', studyType: 'read-only' },
        { kanji: '金曜日', meaning: 'Friday', reading: 'きんようび', studyType: 'read-only' },
        { kanji: '九月', meaning: 'September', reading: 'くがつ', studyType: 'read-only' },
        { kanji: '下さい', meaning: 'please give/do...', reading: 'ください', studyType: 'write' },
        { kanji: '～ぐらい', meaning: 'amount (approximate measurement)', reading: '～ぐらい', studyType: 'read-only' },
        { kanji: 'クラス', meaning: 'class', reading: 'クラス', studyType: 'read-only' },
        { kanji: '月曜日', meaning: 'Monday', reading: 'げつようび', studyType: 'read-only' },
        { kanji: '公園', meaning: 'park', reading: 'こうえん', studyType: 'read-only' },
        { kanji: '五月', meaning: 'May', reading: 'ごがつ', studyType: 'read-only' },
        { kanji: '九日', meaning: 'the ninth day of a month; nine days', reading: 'ここのか', studyType: 'read-only' },
        { kanji: '今年', meaning: 'this year', reading: 'ことし', studyType: 'read-only' },
        { kanji: '子供', meaning: 'child', reading: 'こども', studyType: 'read-only' },
        { kanji: 'この人', meaning: 'this person', reading: 'このひと', studyType: 'write' },
        { kanji: 'ご飯', meaning: 'rice; meal', reading: 'ごはん', studyType: 'read-only' },
        { kanji: 'ごめんなさい', meaning: 'I\'m sorry.', reading: 'ごめんなさい', studyType: 'read-only' },
        { kanji: '今月', meaning: 'this month', reading: 'こんげつ', studyType: 'read-only' },
        { kanji: '今週', meaning: 'this week', reading: 'こんしゅう', studyType: 'read-only' },
        { kanji: '再来月', meaning: 'the month after next', reading: 'さらいげつ', studyType: 'read-only' },
        { kanji: '再来週', meaning: 'the week after next', reading: 'さらいしゅう', studyType: 'read-only' },
        { kanji: '再来年', meaning: 'the year after next', reading: 'さらいねん', studyType: 'read-only' },
        { kanji: '三月', meaning: 'March', reading: 'さんがつ', studyType: 'read-only' },
        { kanji: '三時半', meaning: 'half past three', reading: 'さんじはん', studyType: 'write' },
        { kanji: '四月', meaning: 'April', reading: 'しがつ', studyType: 'read-only' },
        { kanji: '～時間', meaning: '...hours', reading: '～じかん', studyType: 'read-only' },
        { kanji: '下', meaning: 'under', reading: 'した', studyType: 'read-only' },
        { kanji: '七月', meaning: 'July', reading: 'しちがつ', studyType: 'read-only' },
        { kanji: '写真', meaning: 'picture; photograph', reading: 'しゃしん', studyType: 'read-only' },
        { kanji: '十一月', meaning: 'November', reading: 'じゅういちがつ', studyType: 'read-only' },
        { kanji: '十一日', meaning: 'the eleventh day of a month', reading: 'じゅういちにち', studyType: 'read-only' },
        { kanji: '十月', meaning: 'October', reading: 'じゅうがつ', studyType: 'read-only' },
        { kanji: '十二月', meaning: 'December', reading: 'じゅうにがつ', studyType: 'read-only' },
        { kanji: '十四日', meaning: 'the fourteenth day of a month', reading: 'じゅうよっか', studyType: 'read-only' },
        { kanji: '水泳', meaning: 'swimming', reading: 'すいえい', studyType: 'write' },
        { kanji: '水道', meaning: 'water supply', reading: 'すいどう', studyType: 'write' },
        { kanji: '水曜日', meaning: 'Wednesday', reading: 'すいようび', studyType: 'read-only' },
        { kanji: 'スーパー', meaning: 'supermarket', reading: 'スーパー', studyType: 'read-only' },
        { kanji: '先月', meaning: 'last month', reading: 'せんげつ', studyType: 'read-only' },
        { kanji: '先週', meaning: 'last week', reading: 'せんしゅう', studyType: 'read-only' },
        { kanji: 'だから', meaning: 'so; therefore', reading: 'だから', studyType: 'read-only' },
        { kanji: 'たくさん', meaning: 'many; a lot', reading: 'たくさん', studyType: 'read-only' },
        { kanji: '近く', meaning: 'near; nearby', reading: 'ちかく', studyType: 'read-only' },
        { kanji: '中学', meaning: 'junior high school (abbreviation)', reading: 'ちゅうがく', studyType: 'write' },
        { kanji: '一日', meaning: 'the first day of a month', reading: 'ついたち', studyType: 'read-only' },
        { kanji: '机', meaning: 'desk', reading: 'つくえ', studyType: 'read-only' },
        { kanji: '土', meaning: 'soil', reading: 'つち', studyType: 'write' },
        { kanji: '手紙', meaning: 'letter', reading: 'てがみ', studyType: 'read-only' },
        { kanji: 'デパート', meaning: 'department store', reading: 'デパート', studyType: 'read-only' },
        { kanji: '寺', meaning: 'temple', reading: 'てら', studyType: 'read-only' },
        { kanji: '～と', meaning: 'together with (a person)', reading: '～と', studyType: 'read-only' },
        { kanji: 'どうして', meaning: 'why', reading: 'どうして', studyType: 'read-only' },
        { kanji: '十日', meaning: 'the tenth day of a month; ten days', reading: 'とおか', studyType: 'read-only' },
        { kanji: '時', meaning: 'when...; at the time of...', reading: 'とき', studyType: 'read-only' },
        { kanji: '土地', meaning: 'land', reading: 'とち', studyType: 'write' },
        { kanji: '隣', meaning: 'next', reading: 'となり', studyType: 'read-only' },
        { kanji: '撮る', meaning: 'to take (a picture)', reading: 'とる', studyType: 'read-only' },
        { kanji: '中', meaning: 'inside', reading: 'なか', studyType: 'read-only' },
        { kanji: '七日', meaning: 'the seventh day of a month; seven days', reading: 'なのか', studyType: 'read-only' },
        { kanji: '二か月前', meaning: 'two months ago', reading: 'にかげつまえ', studyType: 'read-only' },
        { kanji: '二月', meaning: 'February', reading: 'にがつ', studyType: 'read-only' },
        { kanji: '二週間前', meaning: 'two weeks ago', reading: 'にしゅうかんまえ', studyType: 'read-only' },
        { kanji: '二十四日', meaning: 'the twenty-fourth day of a month', reading: 'にじゅうよっか', studyType: 'read-only' },
        { kanji: '日曜日', meaning: 'Sunday', reading: 'にちようび', studyType: 'read-only' },
        { kanji: '猫', meaning: 'cat', reading: 'ねこ', studyType: 'read-only' },
        { kanji: '粘土', meaning: 'clay', reading: 'ねんど', studyType: 'write' },
        { kanji: '上る', meaning: 'to go up', reading: 'のぼる', studyType: 'write' },
        { kanji: 'バス停', meaning: 'bus stop', reading: 'バスてい', studyType: 'read-only' },
        { kanji: '八月', meaning: 'August', reading: 'はちがつ', studyType: 'read-only' },
        { kanji: '二十日', meaning: 'the twentieth day of a month', reading: 'はつか', studyType: 'read-only' },
        { kanji: '花火', meaning: 'fireworks', reading: 'はなび', studyType: 'write' },
        { kanji: '母の日', meaning: 'Mother\'s Day', reading: 'ははのひ', studyType: 'write' },
        { kanji: 'パン', meaning: 'bread', reading: 'パン', studyType: 'read-only' },
        { kanji: '半額', meaning: 'half price', reading: 'はんがく', studyType: 'write' },
        { kanji: '半年', meaning: 'half a year', reading: 'はんとし', studyType: 'write' },
        { kanji: '半分', meaning: 'half', reading: 'はんぶん', studyType: 'write' },
        { kanji: '火', meaning: 'fire', reading: 'ひ', studyType: 'write' },
        { kanji: '左', meaning: 'left', reading: 'ひだり', studyType: 'read-only' },
        { kanji: '人', meaning: 'person', reading: 'ひと', studyType: 'read-only' },
        { kanji: '一人で', meaning: 'alone', reading: 'ひとりで', studyType: 'read-only' },
        { kanji: '病院', meaning: 'hospital', reading: 'びょういん', studyType: 'read-only' },
        { kanji: '二日', meaning: 'the second day of a month; two days', reading: 'ふつか', studyType: 'read-only' },
        { kanji: 'ホテル', meaning: 'hotel', reading: 'ホテル', studyType: 'read-only' },
        { kanji: '本屋', meaning: 'bookstore', reading: 'ほんや', studyType: 'read-only' },
        { kanji: '前', meaning: 'front; before...', reading: 'まえ', studyType: 'read-only' },
        { kanji: '町', meaning: 'town; city', reading: 'まち', studyType: 'read-only' },
        { kanji: '待つ', meaning: 'to wait', reading: 'まつ', studyType: 'read-only' },
        { kanji: '右', meaning: 'right', reading: 'みぎ', studyType: 'read-only' },
        { kanji: '水着', meaning: 'bathing suit', reading: 'みずぎ', studyType: 'write' },
        { kanji: '三日', meaning: 'the third day of a month; three days', reading: 'みっか', studyType: 'read-only' },
        { kanji: '土産', meaning: 'souvenir', reading: 'みやげ', studyType: 'read-only' },
        { kanji: '六日', meaning: 'the sixth day of a month; six days', reading: 'むいか', studyType: 'read-only' },
        { kanji: 'メール', meaning: 'e-mail', reading: 'メール', studyType: 'read-only' },
        { kanji: '木曜日', meaning: 'Thursday', reading: 'もくようび', studyType: 'read-only' },
        { kanji: '八日', meaning: 'the eighth day of a month; eight days', reading: 'ようか', studyType: 'read-only' },
        { kanji: '曜日', meaning: 'day of the week', reading: 'ようび', studyType: 'write' },
        { kanji: '四日', meaning: 'the fourth day of a month; four days', reading: 'よっか', studyType: 'read-only' },
        { kanji: '来月', meaning: 'next month', reading: 'らいげつ', studyType: 'read-only' },
        { kanji: '来週', meaning: 'next week', reading: 'らいしゅう', studyType: 'read-only' },
        { kanji: '来年', meaning: 'next year', reading: 'らいねん', studyType: 'read-only' },
        { kanji: '料金', meaning: 'charge', reading: 'りょうきん', studyType: 'write' },
        { kanji: 'レストラン', meaning: 'restaurant', reading: 'レストラン', studyType: 'read-only' },
        { kanji: '六月', meaning: 'June', reading: 'ろくがつ', studyType: 'read-only' },
        { kanji: '分かる', meaning: 'to understand', reading: 'わかる', studyType: 'read-only' },
      ] },
      ch5: { label: 'Chapter 5', cards: [
        { kanji: '新しい', meaning: 'new', reading: 'あたらしい', studyType: 'read-only' },
        { kanji: '熱い', meaning: 'hot (thing)', reading: 'あつい', studyType: 'read-only' },
        { kanji: '暑い', meaning: 'hot (weather)', reading: 'あつい', studyType: 'read-only' },
        { kanji: '意見', meaning: 'opinion', reading: 'いけん', studyType: 'write' },
        { kanji: '忙しい', meaning: 'busy (people/days)', reading: 'いそがしい', studyType: 'read-only' },
        { kanji: '一行目', meaning: 'first line', reading: 'いちぎょうめ', studyType: 'write' },
        { kanji: '一緒に', meaning: 'together', reading: 'いっしょに', studyType: 'read-only' },
        { kanji: '飲酒運転', meaning: 'drunken driving', reading: 'いんしゅうんてん', studyType: 'write' },
        { kanji: '海', meaning: 'sea', reading: 'うみ', studyType: 'read-only' },
        { kanji: 'Lサイズ', meaning: 'L size; large size', reading: 'エルサイズ', studyType: 'read-only' },
        { kanji: '大きい', meaning: 'big; large; great', reading: 'おおきい', studyType: 'read-only' },
        { kanji: '面白い', meaning: 'interesting; funny', reading: 'おもしろい', studyType: 'read-only' },
        { kanji: '泳ぐ', meaning: 'to swim', reading: 'およぐ', studyType: 'read-only' },
        { kanji: '書留', meaning: 'registered mail', reading: 'かきとめ', studyType: 'read-only' },
        { kanji: 'かっこいい', meaning: 'attractive; good-looking; stylish; cool', reading: 'かっこいい', studyType: 'read-only' },
        { kanji: '元日', meaning: 'the first day of the year', reading: 'がんじつ', studyType: 'write' },
        { kanji: '聞く', meaning: 'to hear; to listen; to ask', reading: 'きく', studyType: 'read-only' },
        { kanji: '切手', meaning: 'postal stamps', reading: 'きって', studyType: 'read-only' },
        { kanji: '切符', meaning: 'ticket', reading: 'きっぷ', studyType: 'read-only' },
        { kanji: '嫌い', meaning: 'disgusted with; to dislike', reading: 'きらい（な）', studyType: 'read-only' },
        { kanji: 'きれい（な）', meaning: 'beautiful; clean', reading: 'きれい（な）', studyType: 'read-only' },
        { kanji: '元気', meaning: 'healthy; energetic', reading: 'げんき（な）', studyType: 'read-only' },
        { kanji: '見物', meaning: 'sightseeing', reading: 'けんぶつ', studyType: 'write' },
        { kanji: '航空便', meaning: 'airmail', reading: 'こうくうびん', studyType: 'read-only' },
        { kanji: '小包', meaning: 'parcel', reading: 'こづつみ', studyType: 'read-only' },
        { kanji: '怖い', meaning: 'scary; frightening', reading: 'こわい', studyType: 'read-only' },
        { kanji: 'サーフィン', meaning: 'surfing', reading: 'サーフィン', studyType: 'read-only' },
        { kanji: '寒い', meaning: 'cold (weather)', reading: 'さむい', studyType: 'read-only' },
        { kanji: '静か', meaning: 'quiet', reading: 'しずか（な）', studyType: 'read-only' },
        { kanji: '私鉄', meaning: 'private railroad', reading: 'してつ', studyType: 'write' },
        { kanji: '地元', meaning: 'local', reading: 'じもと', studyType: 'write' },
        { kanji: 'ジャズ', meaning: 'jazz (music)', reading: 'ジャズ', studyType: 'read-only' },
        { kanji: '宿題', meaning: 'homework', reading: 'しゅくだい', studyType: 'read-only' },
        { kanji: '女性', meaning: 'woman', reading: 'じょせい', studyType: 'write' },
        { kanji: '私立大学', meaning: 'private university', reading: 'しりつだいがく', studyType: 'write' },
        { kanji: '好き', meaning: 'fond of; to like', reading: 'すき（な）', studyType: 'read-only' },
        { kanji: 'すごく', meaning: 'extremely', reading: 'すごく', studyType: 'read-only' },
        { kanji: '速達', meaning: 'special delivery', reading: 'そくたつ', studyType: 'read-only' },
        { kanji: 'それから', meaning: 'and then', reading: 'それから', studyType: 'read-only' },
        { kanji: '大嫌い', meaning: 'to hate', reading: 'だいきらい（な）', studyType: 'read-only' },
        { kanji: '大丈夫', meaning: 'It\'s okay.; Not to worry.; Everything is under control.', reading: 'だいじょうぶ', studyType: 'read-only' },
        { kanji: '大好き', meaning: 'to love; very fond of', reading: 'だいすき（な）', studyType: 'read-only' },
        { kanji: '楽しい', meaning: 'fun', reading: 'たのしい', studyType: 'read-only' },
        { kanji: '食べ物', meaning: 'food', reading: 'たべもの', studyType: 'read-only' },
        { kanji: '誕生日', meaning: 'birthday', reading: 'たんじょうび', studyType: 'read-only' },
        { kanji: '男性', meaning: 'man', reading: 'だんせい', studyType: 'write' },
        { kanji: '田んぼ', meaning: 'rice field', reading: 'たんぼ', studyType: 'write' },
        { kanji: '小さい', meaning: 'small', reading: 'ちいさい', studyType: 'read-only' },
        { kanji: '長女', meaning: 'the eldest daughter', reading: 'ちょうじょ', studyType: 'write' },
        { kanji: '朝食', meaning: 'breakfast', reading: 'ちょうしょく', studyType: 'write' },
        { kanji: 'つまらない', meaning: 'boring', reading: 'つまらない', studyType: 'read-only' },
        { kanji: '出かける', meaning: 'to go out', reading: 'でかける', studyType: 'read-only' },
        { kanji: 'テスト', meaning: 'test', reading: 'テスト', studyType: 'read-only' },
        { kanji: '天気', meaning: 'weather', reading: 'てんき', studyType: 'read-only' },
        { kanji: '天国', meaning: 'heaven', reading: 'てんごく', studyType: 'write' },
        { kanji: '天才', meaning: 'genius', reading: 'てんさい', studyType: 'write' },
        { kanji: '天皇', meaning: 'Japanese emperor', reading: 'てんのう', studyType: 'write' },
        { kanji: 'とても', meaning: 'very', reading: 'とても', studyType: 'read-only' },
        { kanji: 'どんな', meaning: 'what kind of...', reading: 'どんな', studyType: 'read-only' },
        { kanji: '納豆', meaning: 'natto (fermented soybeans)', reading: 'なっとう', studyType: 'read-only' },
        { kanji: 'にぎやか（な）', meaning: 'lively', reading: 'にぎやか（な）', studyType: 'read-only' },
        { kanji: '人気', meaning: 'popularity', reading: 'にんき', studyType: 'write' },
        { kanji: '飲み物', meaning: 'drink', reading: 'のみもの', studyType: 'read-only' },
        { kanji: '乗る', meaning: 'to ride; to board', reading: 'のる', studyType: 'read-only' },
        { kanji: '葉書', meaning: 'postcard', reading: 'はがき', studyType: 'read-only' },
        { kanji: 'バス', meaning: 'bus', reading: 'バス', studyType: 'read-only' },
        { kanji: '花見', meaning: 'flower viewing', reading: 'はなみ', studyType: 'write' },
        { kanji: '飛行機', meaning: 'airplane', reading: 'ひこうき', studyType: 'read-only' },
        { kanji: '暇', meaning: 'not busy; free time; spare time', reading: 'ひま（な）', studyType: 'read-only' },
        { kanji: '富士山', meaning: 'Mt. Fuji', reading: 'ふじさん', studyType: 'write' },
        { kanji: '船便', meaning: 'surface mail', reading: 'ふなびん', studyType: 'read-only' },
        { kanji: '古い', meaning: 'old (thing)', reading: 'ふるい', studyType: 'read-only' },
        { kanji: '部屋', meaning: 'room', reading: 'へや', studyType: 'read-only' },
        { kanji: '僕', meaning: 'I (used by men)', reading: 'ぼく', studyType: 'read-only' },
        { kanji: '保険', meaning: 'insurance', reading: 'ほけん', studyType: 'read-only' },
        { kanji: '～枚', meaning: 'counter for flat objects', reading: '～まい', studyType: 'read-only' },
        { kanji: '～まで', meaning: 'until (a time); to (a place); as far as', reading: '～まで', studyType: 'read-only' },
        { kanji: '窓口', meaning: 'counter', reading: 'まどぐち', studyType: 'read-only' },
        { kanji: '難しい', meaning: 'difficult', reading: 'むずかしい', studyType: 'read-only' },
        { kanji: 'やさしい', meaning: 'easy (problem); kind (person)', reading: 'やさしい', studyType: 'read-only' },
        { kanji: '安い', meaning: 'inexpensive; cheap (thing)', reading: 'やすい', studyType: 'read-only' },
        { kanji: '休み', meaning: 'holiday; day off; absence', reading: 'やすみ', studyType: 'read-only' },
        { kanji: 'やる', meaning: 'to do; to perform; to give (to pets, plants, siblings, etc.)', reading: 'やる', studyType: 'read-only' },
        { kanji: '旅行', meaning: 'travel', reading: 'りょこう', studyType: 'read-only' },
      ] },
      ch6: { label: 'Chapter 6', cards: [
        { kanji: '開ける', meaning: 'to open (something)', reading: 'あける', studyType: 'read-only' },
        { kanji: '遊ぶ', meaning: 'to play; to spend time pleasantly', reading: 'あそぶ', studyType: 'read-only' },
        { kanji: '後で', meaning: 'later on', reading: 'あとで', studyType: 'read-only' },
        { kanji: '急ぐ', meaning: 'to hurry', reading: 'いそぐ', studyType: 'read-only' },
        { kanji: '右折', meaning: 'right turn', reading: 'うせつ', studyType: 'write' },
        { kanji: 'お金', meaning: 'money', reading: 'おかね', studyType: 'read-only' },
        { kanji: '教える', meaning: 'to teach; to instruct', reading: 'おしえる', studyType: 'read-only' },
        { kanji: '遅く', meaning: '(do something) late', reading: 'おそく', studyType: 'read-only' },
        { kanji: 'お風呂', meaning: 'bath', reading: 'おふろ', studyType: 'read-only' },
        { kanji: 'お風呂に入る', meaning: 'to take a bath', reading: 'おふろにはいる', studyType: 'read-only' },
        { kanji: '降りる', meaning: 'to get off', reading: 'おりる', studyType: 'read-only' },
        { kanji: '海外', meaning: 'overseas', reading: 'かいがい', studyType: 'write' },
        { kanji: '返す', meaning: 'to return (a thing)', reading: 'かえす', studyType: 'read-only' },
        { kanji: '学部', meaning: 'department; faculty', reading: 'がくぶ', studyType: 'write' },
        { kanji: '角', meaning: 'corner', reading: 'かど', studyType: 'read-only' },
        { kanji: '金', meaning: 'money', reading: 'かね', studyType: 'read-only' },
        { kanji: '～から', meaning: 'because...; from...', reading: '～から', studyType: 'read-only' },
        { kanji: '借りる', meaning: 'to borrow; to rent; to hire', reading: 'かりる', studyType: 'read-only' },
        { kanji: '関西', meaning: 'Kansai area', reading: 'かんさい', studyType: 'write' },
        { kanji: '漢字', meaning: 'kanji; Chinese character', reading: 'かんじ', studyType: 'read-only' },
        { kanji: '関東', meaning: 'Kanto area', reading: 'かんとう', studyType: 'write' },
        { kanji: '北', meaning: 'north', reading: 'きた', studyType: 'read-only' },
        { kanji: '北口', meaning: 'north exit', reading: 'きたぐち', studyType: 'write' },
        { kanji: '教科書', meaning: 'textbook', reading: 'きょうかしょ', studyType: 'read-only' },
        { kanji: '結構です', meaning: 'That would be fine.; That wouldn\'t be necessary.', reading: 'けっこうです', studyType: 'read-only' },
        { kanji: '国会', meaning: 'the Diet', reading: 'こっかい', studyType: 'write' },
        { kanji: '今週', meaning: 'this week', reading: 'こんしゅう', studyType: 'read-only' },
        { kanji: '先に', meaning: 'ahead', reading: 'さきに', studyType: 'write' },
        { kanji: '左折', meaning: 'left turn', reading: 'させつ', studyType: 'write' },
        { kanji: '左右', meaning: 'right and left', reading: 'さゆう', studyType: 'write' },
        { kanji: 'シーディー', meaning: 'CD', reading: 'シーディー', studyType: 'read-only' },
        { kanji: '死ぬ', meaning: 'to die', reading: 'しぬ', studyType: 'read-only' },
        { kanji: '市民病院', meaning: 'municipal hospital', reading: 'しみんびょういん', studyType: 'read-only' },
        { kanji: '閉める', meaning: 'to close (something)', reading: 'しめる', studyType: 'read-only' },
        { kanji: 'シャワー', meaning: 'shower', reading: 'シャワー', studyType: 'read-only' },
        { kanji: 'シャワーを浴びる', meaning: 'to take a shower', reading: 'シャワーをあびる', studyType: 'read-only' },
        { kanji: '出席', meaning: 'attendance', reading: 'しゅっせき', studyType: 'write' },
        { kanji: '信号', meaning: 'traffic light', reading: 'しんごう', studyType: 'read-only' },
        { kanji: '人口', meaning: 'population', reading: 'じんこう', studyType: 'write' },
        { kanji: 'すぐ', meaning: 'right away', reading: 'すぐ', studyType: 'read-only' },
        { kanji: '座る', meaning: 'to sit down', reading: 'すわる', studyType: 'read-only' },
        { kanji: '西洋', meaning: 'the West', reading: 'せいよう', studyType: 'write' },
        { kanji: '大使館', meaning: 'embassy', reading: 'たいしかん', studyType: 'write' },
        { kanji: '大変', meaning: 'tough (situation)', reading: 'たいへん（な）', studyType: 'read-only' },
        { kanji: '立つ', meaning: 'to stand up', reading: 'たつ', studyType: 'read-only' },
        { kanji: 'たばこを吸う', meaning: 'to smoke', reading: 'たばこをすう', studyType: 'read-only' },
        { kanji: '使う', meaning: 'to use', reading: 'つかう', studyType: 'read-only' },
        { kanji: '次', meaning: 'next', reading: 'つぎ', studyType: 'read-only' },
        { kanji: 'つける', meaning: 'to turn on', reading: 'つける', studyType: 'read-only' },
        { kanji: '連れてくる', meaning: 'to bring (a person)', reading: 'つれてくる', studyType: 'read-only' },
        { kanji: '手伝う', meaning: 'to help', reading: 'てつだう', studyType: 'read-only' },
        { kanji: '電気', meaning: 'electricity', reading: 'でんき', studyType: 'read-only' },
        { kanji: '電車', meaning: 'train', reading: 'でんしゃ', studyType: 'read-only' },
        { kanji: '電話をかける', meaning: 'to make a phone call', reading: 'でんわをかける', studyType: 'read-only' },
        { kanji: '東京', meaning: 'Tokyo', reading: 'とうきょう', studyType: 'write' },
        { kanji: '東洋', meaning: 'the East', reading: 'とうよう', studyType: 'write' },
        { kanji: '東南アジア', meaning: 'Southeast Asia', reading: 'とうなんアジア', studyType: 'write' },
        { kanji: '東北', meaning: 'Tohoku area', reading: 'とうほく', studyType: 'write' },
        { kanji: '南東', meaning: 'southeast', reading: 'なんとう', studyType: 'write' },
        { kanji: '南極', meaning: 'Antarctica', reading: 'なんきょく', studyType: 'write' },
        { kanji: '西', meaning: 'west', reading: 'にし', studyType: 'read-only' },
        { kanji: '西口', meaning: 'west exit', reading: 'にしぐち', studyType: 'write' },
        { kanji: '荷物', meaning: 'baggage', reading: 'にもつ', studyType: 'read-only' },
        { kanji: '入る', meaning: 'to enter', reading: 'はいる', studyType: 'read-only' },
        { kanji: 'パソコン', meaning: 'personal computer', reading: 'パソコン', studyType: 'read-only' },
        { kanji: '東', meaning: 'east', reading: 'ひがし', studyType: 'read-only' },
        { kanji: '東口', meaning: 'east exit', reading: 'ひがしぐち', studyType: 'write' },
        { kanji: '左側', meaning: 'left side', reading: 'ひだりがわ', studyType: 'read-only' },
        { kanji: '左利き', meaning: 'left-handed', reading: 'ひだりきき', studyType: 'write' },
        { kanji: '左手', meaning: 'left hand', reading: 'ひだりて', studyType: 'write' },
        { kanji: '一つ目', meaning: 'first', reading: 'ひとつめ', studyType: 'read-only' },
        { kanji: '二つ目', meaning: 'second', reading: 'ふたつめ', studyType: 'read-only' },
        { kanji: '風呂', meaning: 'bath', reading: 'ふろ', studyType: 'read-only' },
        { kanji: '風呂に入る', meaning: 'to take a bath', reading: 'ふろにはいる', studyType: 'read-only' },
        { kanji: 'ページ', meaning: 'page', reading: 'ページ', studyType: 'read-only' },
        { kanji: '北西', meaning: 'northwest', reading: 'ほくせい', studyType: 'write' },
        { kanji: '北海道', meaning: 'Hokkaido', reading: 'ほっかいどう', studyType: 'write' },
        { kanji: '北極', meaning: 'North Pole', reading: 'ほっきょく', studyType: 'write' },
        { kanji: '本当ですか', meaning: 'Really?', reading: 'ほんとうですか', studyType: 'read-only' },
        { kanji: '曲がる', meaning: 'to turn (right/left)', reading: 'まがる', studyType: 'read-only' },
        { kanji: 'まっすぐ', meaning: 'straight', reading: 'まっすぐ', studyType: 'read-only' },
        { kanji: '窓', meaning: 'window', reading: 'まど', studyType: 'read-only' },
        { kanji: '学ぶ', meaning: 'to study', reading: 'まなぶ', studyType: 'write' },
        { kanji: '右側', meaning: 'right side', reading: 'みぎがわ', studyType: 'read-only' },
        { kanji: '右手', meaning: 'right hand', reading: 'みぎて', studyType: 'write' },
        { kanji: '南', meaning: 'south', reading: 'みなみ', studyType: 'read-only' },
        { kanji: '南口', meaning: 'south exit', reading: 'みなみぐち', studyType: 'write' },
        { kanji: '持つ', meaning: 'to carry; to hold', reading: 'もつ', studyType: 'read-only' },
        { kanji: '持ってくる', meaning: 'to bring (a thing)', reading: 'もってくる', studyType: 'read-only' },
        { kanji: '休む', meaning: 'to be absent (from); to rest', reading: 'やすむ', studyType: 'read-only' },
        { kanji: '輸出', meaning: 'export', reading: 'ゆしゅつ', studyType: 'write' },
        { kanji: 'ゆっくり', meaning: 'slowly; leisurely; unhurriedly', reading: 'ゆっくり', studyType: 'read-only' },
        { kanji: '夜', meaning: 'night', reading: 'よる', studyType: 'read-only' },
        { kanji: '来週', meaning: 'next week', reading: 'らいしゅう', studyType: 'read-only' },
        { kanji: '来年', meaning: 'next year', reading: 'らいねん', studyType: 'read-only' },
        { kanji: '分ける', meaning: 'to divide', reading: 'わける', studyType: 'write' },
        { kanji: '忘れる', meaning: 'to forget; to leave behind', reading: 'わすれる', studyType: 'read-only' },
        { kanji: '渡る', meaning: 'to cross', reading: 'わたる', studyType: 'read-only' },
      ] },
      ch7: { label: 'Chapter 7', cards: [
        { kanji: '足', meaning: 'leg; foot', reading: 'あし', studyType: 'read-only' },
        { kanji: '頭', meaning: 'head', reading: 'あたま', studyType: 'read-only' },
        { kanji: '頭がいい', meaning: 'bright; smart; clever', reading: 'あたまがいい', studyType: 'read-only' },
        { kanji: '姉', meaning: '(my) older sister', reading: 'あね', studyType: 'read-only' },
        { kanji: 'アパート', meaning: 'apartment', reading: 'アパート', studyType: 'read-only' },
        { kanji: '妹', meaning: 'younger sister', reading: 'いもうと', studyType: 'read-only' },
        { kanji: '歌', meaning: 'song', reading: 'うた', studyType: 'read-only' },
        { kanji: '歌う', meaning: 'to sing', reading: 'うたう', studyType: 'read-only' },
        { kanji: 'おじいさん', meaning: 'grandfather; old man', reading: 'おじいさん', studyType: 'read-only' },
        { kanji: 'お尻', meaning: 'bottom; buttocks', reading: 'おしり', studyType: 'read-only' },
        { kanji: '男の人', meaning: 'man', reading: 'おとこのひと', studyType: 'read-only' },
        { kanji: 'おなか', meaning: 'stomach', reading: 'おなか', studyType: 'read-only' },
        { kanji: 'お兄さん', meaning: 'older brother', reading: 'おにいさん', studyType: 'read-only' },
        { kanji: 'お姉さん', meaning: 'older sister', reading: 'おねえさん', studyType: 'read-only' },
        { kanji: 'おばあさん', meaning: 'grandmother; old woman', reading: 'おばあさん', studyType: 'read-only' },
        { kanji: '女の人', meaning: 'woman', reading: 'おんなのひと', studyType: 'read-only' },
        { kanji: '～が', meaning: '...,but', reading: '～が', studyType: 'read-only' },
        { kanji: '会社', meaning: 'company', reading: 'かいしゃ', studyType: 'read-only' },
        { kanji: '帰り', meaning: 'return', reading: 'かえり', studyType: 'write' },
        { kanji: '顔', meaning: 'face', reading: 'かお', studyType: 'read-only' },
        { kanji: 'かける（めがねを）', meaning: 'to put on (glasses)', reading: 'かける（めがねを）', studyType: 'read-only' },
        { kanji: '家族', meaning: 'family', reading: 'かぞく', studyType: 'read-only' },
        { kanji: '肩', meaning: 'shoulder', reading: 'かた', studyType: 'read-only' },
        { kanji: 'かぶる', meaning: 'to put on (a hat)', reading: 'かぶる', studyType: 'read-only' },
        { kanji: '髪', meaning: 'hair', reading: 'かみ', studyType: 'read-only' },
        { kanji: 'かわいい', meaning: 'cute', reading: 'かわいい', studyType: 'read-only' },
        { kanji: '帰国', meaning: 'returning to one\'s country', reading: 'きこく', studyType: 'write' },
        { kanji: '帰宅', meaning: 'returning home', reading: 'きたく', studyType: 'write' },
        { kanji: '教会', meaning: 'church', reading: 'きょうかい', studyType: 'write' },
        { kanji: '兄弟', meaning: 'siblings; brothers and sisters; brothers', reading: 'きょうだい', studyType: 'read-only' },
        { kanji: '京都', meaning: 'Kyoto', reading: 'きょうと', studyType: 'write' },
        { kanji: '着る', meaning: 'to wear; to put on (clothes above your waist)', reading: 'きる', studyType: 'read-only' },
        { kanji: '口', meaning: 'mouth', reading: 'くち', studyType: 'read-only' },
        { kanji: '国', meaning: 'country; place of origin', reading: 'くに', studyType: 'read-only' },
        { kanji: '首', meaning: 'neck', reading: 'くび', studyType: 'read-only' },
        { kanji: '車', meaning: 'car', reading: 'くるま', studyType: 'read-only' },
        { kanji: 'ゲーム', meaning: 'game', reading: 'ゲーム', studyType: 'read-only' },
        { kanji: '結婚する', meaning: 'to get married', reading: 'けっこんする', studyType: 'read-only' },
        { kanji: 'コンビニ', meaning: 'convenience store', reading: 'コンビニ', studyType: 'read-only' },
        { kanji: 'サークル', meaning: 'club activity', reading: 'サークル', studyType: 'read-only' },
        { kanji: '最高', meaning: 'the best', reading: 'さいこう', studyType: 'write' },
        { kanji: '知っています', meaning: 'I know', reading: 'しっています', studyType: 'read-only' },
        { kanji: '上京する', meaning: 'to go to the capital', reading: 'じょうきょうする', studyType: 'write' },
        { kanji: '食堂', meaning: 'cafeteria; dining commons', reading: 'しょくどう', studyType: 'read-only' },
        { kanji: 'しり', meaning: 'buttocks', reading: 'しり', studyType: 'read-only' },
        { kanji: '知りません', meaning: 'I do not know', reading: 'しりません', studyType: 'read-only' },
        { kanji: '知る', meaning: 'to know', reading: 'しる', studyType: 'read-only' },
        { kanji: '親切', meaning: 'kind', reading: 'しんせつ（な）', studyType: 'read-only' },
        { kanji: '住む', meaning: 'to live', reading: 'すむ', studyType: 'read-only' },
        { kanji: '背が高い', meaning: 'tall (stature)', reading: 'せがたかい', studyType: 'read-only' },
        { kanji: '背が低い', meaning: 'short (stature)', reading: 'せがひくい', studyType: 'read-only' },
        { kanji: '背中', meaning: 'back (body)', reading: 'せなか', studyType: 'read-only' },
        { kanji: '祖父', meaning: 'grandfather', reading: 'そふ', studyType: 'write' },
        { kanji: '祖母', meaning: 'grandmother', reading: 'そぼ', studyType: 'write' },
        { kanji: '父', meaning: '(my) father', reading: 'ちち', studyType: 'read-only' },
        { kanji: '中学校', meaning: 'junior high school', reading: 'ちゅうがっこう', studyType: 'write' },
        { kanji: '勤める', meaning: 'to work for', reading: 'つとめる', studyType: 'read-only' },
        { kanji: '手', meaning: 'hand; arm', reading: 'て', studyType: 'read-only' },
        { kanji: 'ディーブイディー', meaning: 'DVD', reading: 'ディーブイディー', studyType: 'read-only' },
        { kanji: '東京スカイツリー', meaning: 'Tokyo Skytree', reading: 'とうきょうスカイツリー', studyType: 'read-only' },
        { kanji: '長い', meaning: 'long', reading: 'ながい', studyType: 'read-only' },
        { kanji: '何も', meaning: 'not...anything (with neg. verbs)', reading: 'なにも', studyType: 'read-only' },
        { kanji: '入社', meaning: 'entry to a company', reading: 'にゅうしゃ', studyType: 'write' },
        { kanji: '～人', meaning: 'counter for people', reading: '～にん', studyType: 'read-only' },
        { kanji: '歯', meaning: 'tooth', reading: 'は', studyType: 'read-only' },
        { kanji: 'はく', meaning: 'to put on (items below your waist)', reading: 'はく', studyType: 'read-only' },
        { kanji: '鼻', meaning: 'nose', reading: 'はな', studyType: 'read-only' },
        { kanji: '母', meaning: '(my) mother', reading: 'はは', studyType: 'read-only' },
        { kanji: '速い', meaning: 'fast', reading: 'はやい', studyType: 'read-only' },
        { kanji: '一人', meaning: 'one person', reading: 'ひとり', studyType: 'read-only' },
        { kanji: '二人', meaning: 'two people', reading: 'ふたり', studyType: 'read-only' },
        { kanji: '太っています', meaning: 'to be on the heavy side', reading: 'ふとっています', studyType: 'read-only' },
        { kanji: '太る', meaning: 'to gain weight', reading: 'ふとる', studyType: 'read-only' },
        { kanji: '父母', meaning: 'father and mother', reading: 'ふぼ', studyType: 'write' },
        { kanji: '別に', meaning: 'nothing in particular', reading: 'べつに', studyType: 'read-only' },
        { kanji: '便利', meaning: 'convenient', reading: 'べんり（な）', studyType: 'read-only' },
        { kanji: '母語', meaning: 'mother tongue', reading: 'ぼご', studyType: 'write' },
        { kanji: '毎年', meaning: 'every year', reading: 'まい(ねん/とし)', studyType: 'write' },
        { kanji: '眉毛', meaning: 'eyebrows', reading: 'まゆげ', studyType: 'read-only' },
        { kanji: '短い', meaning: 'short (length)', reading: 'みじかい', studyType: 'read-only' },
        { kanji: '耳', meaning: 'ear', reading: 'みみ', studyType: 'read-only' },
        { kanji: '胸', meaning: 'chest; breast', reading: 'むね', studyType: 'read-only' },
        { kanji: '目', meaning: 'eye', reading: 'め', studyType: 'read-only' },
        { kanji: '眼鏡', meaning: 'glasses', reading: 'めがね', studyType: 'read-only' },
        { kanji: 'もしもし', meaning: 'Hello? (used on the phone)', reading: 'もしもし', studyType: 'read-only' },
        { kanji: 'もちろん', meaning: 'of course', reading: 'もちろん', studyType: 'read-only' },
        { kanji: 'やせています', meaning: 'to be thin', reading: 'やせています', studyType: 'read-only' },
        { kanji: 'やせる', meaning: 'to lose weight', reading: 'やせる', studyType: 'read-only' },
        { kanji: '輸入', meaning: 'import', reading: 'ゆにゅう', studyType: 'write' },
        { kanji: '指', meaning: 'finger', reading: 'ゆび', studyType: 'read-only' },
        { kanji: 'よかったら', meaning: 'if you like', reading: 'よかったら', studyType: 'read-only' },
      ] },
      ch8: { label: 'Chapter 8', cards: [
        { kanji: '明後日', meaning: 'the day after tomorrow', reading: 'あさって', studyType: 'read-only' },
        { kanji: 'アボカド', meaning: 'avocado', reading: 'アボカド', studyType: 'read-only' },
        { kanji: '雨', meaning: 'rain', reading: 'あめ', studyType: 'read-only' },
        { kanji: '雨が降る', meaning: 'it rains', reading: 'あめがふる', studyType: 'read-only' },
        { kanji: '洗う', meaning: 'to wash', reading: 'あらう', studyType: 'read-only' },
        { kanji: 'アレルギー', meaning: 'allergy', reading: 'アレルギー', studyType: 'read-only' },
        { kanji: '言う', meaning: 'to say', reading: 'いう', studyType: 'read-only' },
        { kanji: 'いつも', meaning: 'always', reading: 'いつも', studyType: 'read-only' },
        { kanji: '要る', meaning: 'to need', reading: 'いる', studyType: 'read-only' },
        { kanji: 'ううん', meaning: 'uh-uh; no', reading: 'ううん', studyType: 'read-only' },
        { kanji: 'うん', meaning: 'uh-huh; yes', reading: 'うん', studyType: 'read-only' },
        { kanji: '運転する', meaning: 'to drive', reading: 'うんてんする', studyType: 'read-only' },
        { kanji: '海老', meaning: 'prawn; shrimp; lobster; crayfish', reading: 'えび', studyType: 'read-only' },
        { kanji: '海老フライ', meaning: 'deep-fried prawns/shrimp', reading: 'えびフライ', studyType: 'read-only' },
        { kanji: 'おかず', meaning: 'side dish', reading: 'おかず', studyType: 'read-only' },
        { kanji: 'お好み焼き', meaning: 'okonomikayki; savory pancake containing meat or seafood and vegetables', reading: 'おこのみやき', studyType: 'read-only' },
        { kanji: '遅くなる', meaning: 'to be late', reading: 'おそくなる', studyType: 'read-only' },
        { kanji: '思う', meaning: 'to think', reading: 'おもう', studyType: 'read-only' },
        { kanji: '会員', meaning: 'member', reading: 'かいいん', studyType: 'write' },
        { kanji: '会社員', meaning: 'office worker', reading: 'かいしゃいん', studyType: 'read-only' },
        { kanji: 'カメラ', meaning: 'camera', reading: 'カメラ', studyType: 'read-only' },
        { kanji: 'カラオケ', meaning: 'karaoke', reading: 'カラオケ', studyType: 'read-only' },
        { kanji: 'カレーライス', meaning: 'rice and curry; curry rice', reading: 'カレーライス', studyType: 'read-only' },
        { kanji: '乾杯', meaning: 'Cheers! (a toast)', reading: 'かんぱい', studyType: 'read-only' },
        { kanji: 'キャベツ', meaning: 'cabbage', reading: 'キャベツ', studyType: 'read-only' },
        { kanji: '休日', meaning: 'holiday', reading: 'きゅうじつ', studyType: 'write' },
        { kanji: '牛丼', meaning: 'beef rice bowl; rice covered with beef and vegetables', reading: 'ぎゅうどん', studyType: 'read-only' },
        { kanji: 'きゅうり', meaning: 'cucumber', reading: 'きゅうり', studyType: 'read-only' },
        { kanji: '餃子', meaning: 'gyoza; pot sticker; dumplings', reading: 'ぎょうざ', studyType: 'read-only' },
        { kanji: '切る', meaning: 'to cut', reading: 'きる', studyType: 'read-only' },
        { kanji: '空気', meaning: 'air', reading: 'くうき', studyType: 'read-only' },
        { kanji: '車いす', meaning: 'wheel chair', reading: 'くるまいす', studyType: 'write' },
        { kanji: '今朝', meaning: 'this morning', reading: 'けさ', studyType: 'read-only' },
        { kanji: '言語学', meaning: 'linguistics', reading: 'げんごがく', studyType: 'write' },
        { kanji: '黒板', meaning: 'blackboard', reading: 'こくばん', studyType: 'read-only' },
        { kanji: '今月', meaning: 'this month', reading: 'こんげつ', studyType: 'read-only' },
        { kanji: '作者', meaning: 'author', reading: 'さくしゃ', studyType: 'write' },
        { kanji: '残念ですね', meaning: 'That\'s too bad.', reading: 'ざんねんですね', studyType: 'read-only' },
        { kanji: '次回', meaning: 'next time', reading: 'じかい', studyType: 'write' },
        { kanji: '仕返し', meaning: 'revenge', reading: 'しかえし', studyType: 'write' },
        { kanji: '仕事', meaning: 'job; work; occupation', reading: 'しごと', studyType: 'read-only' },
        { kanji: '次女', meaning: 'second daughter', reading: 'じじょ', studyType: 'write' },
        { kanji: 'じゃがいも', meaning: 'potato', reading: 'じゃがいも', studyType: 'read-only' },
        { kanji: '上手', meaning: 'skillful; good at...', reading: 'じょうず（な）', studyType: 'read-only' },
        { kanji: 'じろじろ見る', meaning: 'to stare (at)', reading: 'じろじろみる', studyType: 'read-only' },
        { kanji: '新鮮', meaning: 'fresh', reading: 'しんせん（な）', studyType: 'write' },
        { kanji: 'すいか', meaning: 'watermelon', reading: 'すいか', studyType: 'read-only' },
        { kanji: '捨てる', meaning: 'to throw away', reading: 'すてる', studyType: 'read-only' },
        { kanji: '洗濯する', meaning: 'to do laundry', reading: 'せんたくする', studyType: 'read-only' },
        { kanji: '掃除する', meaning: 'to clean', reading: 'そうじする', studyType: 'read-only' },
        { kanji: '大学生', meaning: 'college student', reading: 'だいがくせい', studyType: 'read-only' },
        { kanji: '卵', meaning: 'egg; eggs; spawn; roe', reading: 'たまご', studyType: 'read-only' },
        { kanji: 'たまねぎ', meaning: 'onion', reading: 'たまねぎ', studyType: 'read-only' },
        { kanji: '駐車場', meaning: 'parking lot', reading: 'ちゅうしゃじょう', studyType: 'write' },
        { kanji: '仕える', meaning: 'to serve; to work under', reading: 'つかえる', studyType: 'write' },
        { kanji: '作る', meaning: 'to make', reading: 'つくる', studyType: 'read-only' },
        { kanji: '定食', meaning: 'set meal; special (of the day)', reading: 'ていしょく', studyType: 'read-only' },
        { kanji: '店員', meaning: 'store clerk', reading: 'てんいん', studyType: 'write' },
        { kanji: '天気予報', meaning: 'weather forecast', reading: 'てんきよほう', studyType: 'read-only' },
        { kanji: '電子レンジ', meaning: 'microwave oven', reading: 'でんしレンジ', studyType: 'write' },
        { kanji: '電話する', meaning: 'to call', reading: 'でんわする', studyType: 'read-only' },
        { kanji: '所', meaning: 'place', reading: 'ところ', studyType: 'read-only' },
        { kanji: 'トマト', meaning: 'tomato', reading: 'トマト', studyType: 'read-only' },
        { kanji: '鶏肉', meaning: 'chicken meat', reading: 'とりにく', studyType: 'read-only' },
        { kanji: 'なす', meaning: 'eggplant', reading: 'なす', studyType: 'read-only' },
        { kanji: '夏', meaning: 'summer', reading: 'なつ', studyType: 'read-only' },
        { kanji: '何か', meaning: 'something', reading: 'なにか', studyType: 'read-only' },
        { kanji: '何時', meaning: 'what time', reading: 'なんじ', studyType: 'write' },
        { kanji: '何人', meaning: 'how many people', reading: 'なんにん', studyType: 'write' },
        { kanji: '～について', meaning: 'about...; concerning...', reading: '～について', studyType: 'read-only' },
        { kanji: 'にんじん', meaning: 'carrot', reading: 'にんじん', studyType: 'read-only' },
        { kanji: 'パーティー', meaning: 'party', reading: 'パーティー', studyType: 'read-only' },
        { kanji: 'バーベキュー', meaning: 'barbecue', reading: 'バーベキュー', studyType: 'read-only' },
        { kanji: 'はし', meaning: 'chopsticks', reading: 'はし', studyType: 'read-only' },
        { kanji: '始める', meaning: 'to begin', reading: 'はじめる', studyType: 'read-only' },
        { kanji: 'ピーナッツ', meaning: 'peanuts', reading: 'ピーナッツ', studyType: 'read-only' },
        { kanji: '袋', meaning: 'sack; plastic/paper bag', reading: 'ふくろ', studyType: 'read-only' },
        { kanji: '不思議', meaning: 'mysterious', reading: 'ふしぎ（な）', studyType: 'write' },
        { kanji: 'ぶどう', meaning: 'grapes', reading: 'ぶどう', studyType: 'read-only' },
        { kanji: '冬', meaning: 'winter', reading: 'ふゆ', studyType: 'read-only' },
        { kanji: '下手', meaning: 'clumsy; poor at...', reading: 'へた（な）', studyType: 'read-only' },
        { kanji: 'ホームステイ', meaning: 'homestay; living with a local family', reading: 'ホームステイ', studyType: 'read-only' },
        { kanji: '毎週', meaning: 'every week', reading: 'まいしゅう', studyType: 'read-only' },
        { kanji: 'まだ', meaning: 'still; not...yet (with neg. verb)', reading: 'まだ', studyType: 'read-only' },
        { kanji: '味噌汁', meaning: 'miso soup', reading: 'みそしる', studyType: 'read-only' },
        { kanji: 'みんなで', meaning: 'all (of the people) together', reading: 'みんなで', studyType: 'read-only' },
        { kanji: '目次', meaning: 'table of contents', reading: 'もくじ', studyType: 'write' },
        { kanji: '持っていく', meaning: 'to take (a thing)', reading: 'もっていく', studyType: 'read-only' },
        { kanji: 'もも', meaning: 'peach', reading: 'もも', studyType: 'read-only' },
        { kanji: '焼き魚', meaning: 'grilled fish; broiled fish', reading: 'やきざかな', studyType: 'read-only' },
        { kanji: '有名', meaning: 'famous', reading: 'ゆうめい（な）', studyType: 'read-only' },
        { kanji: 'ヨーグルト', meaning: 'yogurt', reading: 'ヨーグルト', studyType: 'read-only' },
        { kanji: '読み物', meaning: 'reading matter; reading material', reading: 'よみもの', studyType: 'write' },
        { kanji: '来月', meaning: 'next month', reading: 'らいげつ', studyType: 'read-only' },
        { kanji: '料理する', meaning: 'to cook', reading: 'りょうりする', studyType: 'read-only' },
      ] },
      ch9: { label: 'Chapter 9', cards: [
        { kanji: '青い', meaning: 'blue', reading: 'あおい', studyType: 'read-only' },
        { kanji: '赤い', meaning: 'red', reading: 'あかい', studyType: 'read-only' },
        { kanji: 'いい子', meaning: 'good child', reading: 'いいこ', studyType: 'read-only' },
        { kanji: '意地悪', meaning: 'mean-spirited', reading: 'いじわる（な）', studyType: 'read-only' },
        { kanji: '一週間', meaning: 'one week', reading: 'いっしゅうかん', studyType: 'write' },
        { kanji: '五つ', meaning: 'five', reading: 'いつつ', studyType: 'read-only' },
        { kanji: '色', meaning: 'color', reading: 'いろ', studyType: 'read-only' },
        { kanji: '雨期', meaning: 'rainy season', reading: 'うき', studyType: 'write' },
        { kanji: '運動する', meaning: 'to do physical exercises', reading: 'うんどうする', studyType: 'read-only' },
        { kanji: '踊る', meaning: 'to dance', reading: 'おどる', studyType: 'read-only' },
        { kanji: 'お弁当', meaning: 'boxed lunch', reading: 'おべんとう', studyType: 'read-only' },
        { kanji: '覚える', meaning: 'to memorize', reading: 'おぼえる', studyType: 'read-only' },
        { kanji: '終わる', meaning: 'to come to an end; (something) ends', reading: 'おわる', studyType: 'read-only' },
        { kanji: '会話', meaning: 'conversation', reading: 'かいわ', studyType: 'write' },
        { kanji: '顔が青い', meaning: 'to look pale', reading: 'かおがあおい', studyType: 'read-only' },
        { kanji: '華道', meaning: 'flower arrangement', reading: 'かどう', studyType: 'read-only' },
        { kanji: '家内', meaning: 'my wife', reading: 'かない', studyType: 'write' },
        { kanji: '歌舞伎', meaning: 'Kabuki; traditional Japanese theatrical art', reading: 'かぶき', studyType: 'read-only' },
        { kanji: '～から', meaning: 'because...; from...', reading: '～から', studyType: 'read-only' },
        { kanji: '黄色い', meaning: 'yellow', reading: 'きいろい', studyType: 'read-only' },
        { kanji: 'ギター', meaning: 'guitar', reading: 'ギター', studyType: 'read-only' },
        { kanji: '去年', meaning: 'last year', reading: 'きょねん', studyType: 'read-only' },
        { kanji: '金色', meaning: 'gold', reading: 'きんいろ', studyType: 'read-only' },
        { kanji: '銀色', meaning: 'silver', reading: 'ぎんいろ', studyType: 'read-only' },
        { kanji: '金髪', meaning: 'blonde hair', reading: 'きんぱつ', studyType: 'read-only' },
        { kanji: '薬', meaning: 'medicine', reading: 'くすり', studyType: 'read-only' },
        { kanji: '薬を飲む', meaning: 'to take medicine', reading: 'くすりをのむ', studyType: 'read-only' },
        { kanji: 'グリーン', meaning: 'green', reading: 'グリーン', studyType: 'read-only' },
        { kanji: 'グレー', meaning: 'gray', reading: 'グレー', studyType: 'read-only' },
        { kanji: '黒い', meaning: 'black', reading: 'くろい', studyType: 'read-only' },
        { kanji: '剣道', meaning: 'kendo; Japanese fencing; way of the sword', reading: 'けんどう', studyType: 'read-only' },
        { kanji: 'ゴールド', meaning: 'gold', reading: 'ゴールド', studyType: 'read-only' },
        { kanji: '九つ', meaning: 'nine', reading: 'ここのつ', studyType: 'read-only' },
        { kanji: '古代', meaning: 'ancient times', reading: 'こだい', studyType: 'write' },
        { kanji: 'コンサート', meaning: 'concert', reading: 'コンサート', studyType: 'read-only' },
        { kanji: '今度', meaning: 'this time; next time; near future', reading: 'こんど', studyType: 'read-only' },
        { kanji: '作文', meaning: 'essay; composition', reading: 'さくぶん', studyType: 'read-only' },
        { kanji: '茶道', meaning: 'tea ceremony; Way of Tea', reading: 'さどう', studyType: 'read-only' },
        { kanji: '寂しい', meaning: 'lonely', reading: 'さびしい', studyType: 'read-only' },
        { kanji: '散歩する', meaning: 'to take a walk', reading: 'さんぽする', studyType: 'read-only' },
        { kanji: '試験', meaning: 'exam', reading: 'しけん', studyType: 'read-only' },
        { kanji: '氏名', meaning: 'full name', reading: 'しめい', studyType: 'write' },
        { kanji: '正午', meaning: 'noon', reading: 'しょうご', studyType: 'write' },
        { kanji: '少女', meaning: 'girl', reading: 'しょうじょ', studyType: 'write' },
        { kanji: '少々', meaning: 'a few seconds; a little', reading: 'しょうしょう', studyType: 'write' },
        { kanji: '少年', meaning: 'boy', reading: 'しょうねん', studyType: 'write' },
        { kanji: '知り合い', meaning: 'acquaintance', reading: 'しりあい', studyType: 'write' },
        { kanji: 'シルバー', meaning: 'silver', reading: 'シルバー', studyType: 'read-only' },
        { kanji: '白', meaning: 'white color', reading: 'しろ', studyType: 'write' },
        { kanji: '白い', meaning: 'white', reading: 'しろい', studyType: 'read-only' },
        { kanji: '白黒', meaning: 'black and white', reading: 'しろくろ', studyType: 'read-only' },
        { kanji: 'スキー', meaning: 'ski', reading: 'スキー', studyType: 'read-only' },
        { kanji: '相撲', meaning: 'sumo wrestling', reading: 'すもう', studyType: 'read-only' },
        { kanji: '是非', meaning: 'by all means', reading: 'ぜひ', studyType: 'read-only' },
        { kanji: '先月', meaning: 'last month', reading: 'せんげつ', studyType: 'read-only' },
        { kanji: '単語', meaning: 'word; vocabulary', reading: 'たんご', studyType: 'read-only' },
        { kanji: '知人', meaning: 'friend; acquaintance', reading: 'ちじん', studyType: 'write' },
        { kanji: '地名', meaning: 'place name', reading: 'ちめい', studyType: 'write' },
        { kanji: '茶色い', meaning: 'brown', reading: 'ちゃいろい', studyType: 'read-only' },
        { kanji: '中古', meaning: 'secondhand', reading: 'ちゅうこ', studyType: 'write' },
        { kanji: '梅雨', meaning: 'rainy season (in Japan usually from early June to mid-July); East Asian rainy season', reading: 'つゆ', studyType: 'write' },
        { kanji: '出る', meaning: 'to exit; to appear; to attend', reading: 'でる', studyType: 'read-only' },
        { kanji: '十', meaning: 'ten', reading: '(とお/じゅう)', studyType: 'read-only' },
        { kanji: 'ところで', meaning: 'by the way', reading: 'ところで', studyType: 'read-only' },
        { kanji: '七つ', meaning: 'seven', reading: 'ななつ', studyType: 'read-only' },
        { kanji: '二時間', meaning: 'two hours', reading: 'にじかん', studyType: 'write' },
        { kanji: '人気がある', meaning: 'to be popular', reading: 'にんきがある', studyType: 'read-only' },
        { kanji: '～の後', meaning: 'after...', reading: '～のあと', studyType: 'write' },
        { kanji: '能', meaning: 'Noh theater; masked musical drama', reading: 'のう', studyType: 'read-only' },
        { kanji: '灰色', meaning: 'gray', reading: 'はいいろ', studyType: 'read-only' },
        { kanji: '白紙', meaning: 'blank sheet', reading: 'はくし', studyType: 'write' },
        { kanji: '白鳥', meaning: 'swan', reading: 'はくちょう', studyType: 'write' },
        { kanji: '始まる', meaning: '(something) begins', reading: 'はじまる', studyType: 'read-only' },
        { kanji: 'ピアノ', meaning: 'piano', reading: 'ピアノ', studyType: 'read-only' },
        { kanji: '弾く', meaning: 'to play (a string instrument or piano)', reading: 'ひく', studyType: 'read-only' },
        { kanji: 'ピザ', meaning: 'pizza', reading: 'ピザ', studyType: 'read-only' },
        { kanji: '一つ', meaning: 'one', reading: 'ひとつ', studyType: 'read-only' },
        { kanji: '病気', meaning: 'illness; sickness', reading: 'びょうき', studyType: 'read-only' },
        { kanji: 'ピンク', meaning: 'pink', reading: 'ピンク', studyType: 'read-only' },
        { kanji: '二つ', meaning: 'two', reading: 'ふたつ', studyType: 'read-only' },
        { kanji: '文楽', meaning: 'Japanese puppet theater; bunraku', reading: 'ぶんらく', studyType: 'read-only' },
        { kanji: '弁当', meaning: 'boxed lunch', reading: 'べんとう', studyType: 'read-only' },
        { kanji: '前売り', meaning: 'advance sale', reading: 'まえうり', studyType: 'write' },
        { kanji: '水色', meaning: 'light blue', reading: 'みずいろ', studyType: 'read-only' },
        { kanji: '三つ', meaning: 'three', reading: 'みっつ', studyType: 'read-only' },
        { kanji: '緑', meaning: 'green', reading: 'みどり', studyType: 'read-only' },
        { kanji: 'みんな', meaning: 'all', reading: 'みんな', studyType: 'read-only' },
        { kanji: '六つ', meaning: 'six', reading: 'むっつ', studyType: 'read-only' },
        { kanji: '紫', meaning: 'purple', reading: 'むらさき', studyType: 'read-only' },
        { kanji: '名刺', meaning: 'name card', reading: 'めいし', studyType: 'write' },
        { kanji: 'もう', meaning: 'already', reading: 'もう', studyType: 'read-only' },
        { kanji: 'もらう', meaning: 'to get (from somebody)', reading: 'もらう', studyType: 'read-only' },
        { kanji: '八つ', meaning: 'eight', reading: 'やっつ', studyType: 'read-only' },
        { kanji: '友情', meaning: 'friendship', reading: 'ゆうじょう', studyType: 'write' },
        { kanji: '四つ', meaning: 'four', reading: 'よっつ', studyType: 'read-only' },
        { kanji: '来日', meaning: 'arrival in Japan; visit to Japan', reading: 'らいにち', studyType: 'write' },
        { kanji: '若い', meaning: 'young', reading: 'わかい', studyType: 'read-only' },
      ] },
      ch10: { label: 'Chapter 10', cards: [
        { kanji: '秋', meaning: 'fall', reading: 'あき', studyType: 'read-only' },
        { kanji: '暖かい', meaning: 'warm', reading: 'あたたかい', studyType: 'read-only' },
        { kanji: '歩いて', meaning: 'on foot', reading: 'あるいて', studyType: 'read-only' },
        { kanji: '～行き', meaning: 'bound for...', reading: '～いき', studyType: 'read-only' },
        { kanji: '医者', meaning: 'doctor', reading: 'いしゃ', studyType: 'read-only' },
        { kanji: '移住する', meaning: 'to immigrate', reading: 'いじゅうする', studyType: 'write' },
        { kanji: '一番', meaning: 'the first; best; most', reading: 'いちばん', studyType: 'read-only' },
        { kanji: '一番後ろ', meaning: 'last car; tail end', reading: 'いちばんうしろ', studyType: 'read-only' },
        { kanji: '一番前', meaning: 'first car; front end', reading: 'いちばんまえ', studyType: 'read-only' },
        { kanji: '入口', meaning: 'entrance', reading: 'いりぐち', studyType: 'read-only' },
        { kanji: '駅', meaning: 'station', reading: 'えき', studyType: 'read-only' },
        { kanji: '老い', meaning: 'old; old age; old person', reading: 'おい', studyType: 'read-only' },
        { kanji: '往復', meaning: 'round trip', reading: 'おうふく', studyType: 'read-only' },
        { kanji: 'お金持ち', meaning: 'rich person', reading: 'おかねもち', studyType: 'read-only' },
        { kanji: '遅い', meaning: 'slow; late', reading: 'おそい', studyType: 'read-only' },
        { kanji: '～か～', meaning: 'or', reading: '～か～', studyType: 'read-only' },
        { kanji: '改札', meaning: 'gate', reading: 'かいさつ', studyType: 'read-only' },
        { kanji: '回数券', meaning: 'coupons', reading: 'かいすうけん', studyType: 'read-only' },
        { kanji: '階段', meaning: 'stairs', reading: 'かいだん', studyType: 'read-only' },
        { kanji: '顔', meaning: 'face', reading: 'かお', studyType: 'read-only' },
        { kanji: 'かかる', meaning: 'to take (amount of time/money)', reading: 'かかる', studyType: 'read-only' },
        { kanji: '学割', meaning: 'student discount', reading: 'がくわり', studyType: 'read-only' },
        { kanji: '～か月', meaning: 'for...months', reading: '～かげつ', studyType: 'read-only' },
        { kanji: '片道', meaning: 'one way', reading: 'かたみち', studyType: 'read-only' },
        { kanji: '金持ち', meaning: 'rich person', reading: 'かねもち', studyType: 'read-only' },
        { kanji: '簡単', meaning: 'easy; simple', reading: 'かんたん（な）', studyType: 'read-only' },
        { kanji: '季節', meaning: 'season', reading: 'きせつ', studyType: 'read-only' },
        { kanji: '北山長', meaning: 'Kitayama town', reading: 'きたやまちょう', studyType: 'write' },
        { kanji: '切符売り場', meaning: 'ticket vending area', reading: 'きっぷうりば', studyType: 'read-only' },
        { kanji: '決める', meaning: 'to decide', reading: 'きめる', studyType: 'read-only' },
        { kanji: '急行', meaning: 'express', reading: 'きゅうこう', studyType: 'read-only' },
        { kanji: '牛乳', meaning: 'milk', reading: 'ぎゅうにゅう', studyType: 'read-only' },
        { kanji: '禁煙車', meaning: 'nonsmoking car', reading: 'きんえんしゃ', studyType: 'read-only' },
        { kanji: 'クレジットカード', meaning: 'credit card', reading: 'クレジットカード', studyType: 'read-only' },
        { kanji: 'ケーキ', meaning: 'cake', reading: 'ケーキ', studyType: 'read-only' },
        { kanji: '～後', meaning: 'in...time; after...', reading: '～ご', studyType: 'read-only' },
        { kanji: '国立大学', meaning: 'national university', reading: 'こくりつだいがく', studyType: 'write' },
        { kanji: '今年', meaning: 'this year', reading: 'ことし', studyType: 'read-only' },
        { kanji: 'このごろ', meaning: 'these days', reading: 'このごろ', studyType: 'read-only' },
        { kanji: 'ごろごろする', meaning: 'to chill out at home; to stay home and do nothing', reading: 'ごろごろする', studyType: 'read-only' },
        { kanji: '今夜', meaning: 'tonight', reading: 'こんや', studyType: 'write' },
        { kanji: 'サッカー', meaning: 'soccer', reading: 'サッカー', studyType: 'read-only' },
        { kanji: '指定席', meaning: 'reserved seat', reading: 'していせき', studyType: 'read-only' },
        { kanji: '自動車', meaning: 'automobile', reading: 'じどうしゃ', studyType: 'write' },
        { kanji: '自動販売機', meaning: 'vending machine', reading: 'じどうはんばいき', studyType: 'write' },
        { kanji: '次発', meaning: 'departing second', reading: 'じはつ', studyType: 'read-only' },
        { kanji: 'シャツ', meaning: 'shirt', reading: 'シャツ', studyType: 'read-only' },
        { kanji: '～週間', meaning: 'for...weeks', reading: '～しゅうかん', studyType: 'read-only' },
        { kanji: '住所', meaning: 'address', reading: 'じゅうしょ', studyType: 'write' },
        { kanji: '自由席', meaning: 'general administration seat', reading: 'じゆうせき', studyType: 'read-only' },
        { kanji: '終電', meaning: 'last train', reading: 'しゅうでん', studyType: 'read-only' },
        { kanji: '柔道', meaning: 'judo', reading: 'じゅうどう', studyType: 'write' },
        { kanji: '乗車券', meaning: '(boarding) ticket', reading: 'じょうしゃけん', studyType: 'read-only' },
        { kanji: '所持品', meaning: 'belongings', reading: 'しょじひん', studyType: 'write' },
        { kanji: '書道', meaning: 'calligraphy', reading: 'しょどう', studyType: 'write' },
        { kanji: '私立高校', meaning: 'private high school', reading: 'しりつこうこう', studyType: 'write' },
        { kanji: '新幹線', meaning: 'Bullet Train', reading: 'しんかんせん', studyType: 'read-only' },
        { kanji: '新雪', meaning: 'new snow', reading: 'しんせつ', studyType: 'write' },
        { kanji: 'すし', meaning: 'sushi', reading: 'すし', studyType: 'read-only' },
        { kanji: '涼しい', meaning: 'cool (weather)', reading: 'すずしい', studyType: 'read-only' },
        { kanji: '正解', meaning: 'correct answer', reading: 'せいかい', studyType: 'write' },
        { kanji: '生活', meaning: 'life; living', reading: 'せいかつ', studyType: 'read-only' },
        { kanji: '世界', meaning: 'world', reading: 'せかい', studyType: 'read-only' },
        { kanji: '先発', meaning: 'departing first', reading: 'せんぱつ', studyType: 'read-only' },
        { kanji: '正しい', meaning: 'right', reading: 'ただしい', studyType: 'write' },
        { kanji: '地下鉄', meaning: 'subway', reading: 'ちかてつ', studyType: 'read-only' },
        { kanji: '町長', meaning: 'mayor of a town', reading: 'ちょうちょう', studyType: 'write' },
        { kanji: '長男', meaning: 'the eldest son', reading: 'ちょうなん', studyType: 'write' },
        { kanji: 'ツアー', meaning: 'tour', reading: 'ツアー', studyType: 'read-only' },
        { kanji: '次は～', meaning: 'next (stop),...', reading: 'つぎは～', studyType: 'read-only' },
        { kanji: '冷たい', meaning: 'cold (things/people)', reading: 'つめたい', studyType: 'read-only' },
        { kanji: 'つもり', meaning: 'intention; plan', reading: 'つもり', studyType: 'read-only' },
        { kanji: '～で', meaning: 'by (means of transportation); with (a tool)', reading: '～で', studyType: 'read-only' },
        { kanji: '定期券', meaning: 'commuter\'s pass', reading: 'ていきけん', studyType: 'read-only' },
        { kanji: '出口', meaning: 'exit', reading: 'でぐち', studyType: 'read-only' },
        { kanji: '手袋', meaning: 'gloves', reading: 'てぶくろ', studyType: 'read-only' },
        { kanji: '天ぷら', meaning: 'tempura', reading: 'てんぷら', studyType: 'read-only' },
        { kanji: 'どうやって', meaning: 'how; by what means', reading: 'どうやって', studyType: 'read-only' },
        { kanji: '床屋', meaning: 'barber\'s', reading: 'とこや', studyType: 'read-only' },
        { kanji: 'どちら', meaning: 'which; where (polite)', reading: 'どちら', studyType: 'read-only' },
        { kanji: '特急', meaning: 'super express', reading: 'とっきゅう', studyType: 'read-only' },
        { kanji: 'どっち', meaning: 'which', reading: 'どっち', studyType: 'read-only' },
        { kanji: 'どのぐらい', meaning: 'how much; how long', reading: 'どのぐらい', studyType: 'read-only' },
        { kanji: '泊まる', meaning: 'to stay (at a hotel, etc.)', reading: 'とまる', studyType: 'read-only' },
        { kanji: 'なる', meaning: 'to become', reading: 'なる', studyType: 'read-only' },
        { kanji: '眠い', meaning: 'sleepy', reading: 'ねむい', studyType: 'read-only' },
        { kanji: '～年', meaning: '...years', reading: '～ねん', studyType: 'read-only' },
        { kanji: '乗り換え', meaning: 'transfer', reading: 'のりかえ', studyType: 'read-only' },
        { kanji: '売店', meaning: 'shop; stand; kiosk', reading: 'ばいてん', studyType: 'read-only' },
        { kanji: '売買', meaning: 'selling and buying', reading: 'ばいばい', studyType: 'write' },
        { kanji: '早く／速く', meaning: '(do something) early; fast', reading: 'はやく', studyType: 'read-only' },
        { kanji: '払う', meaning: 'to pay', reading: 'はらう', studyType: 'read-only' },
        { kanji: '春', meaning: 'spring', reading: 'はる', studyType: 'read-only' },
        { kanji: '～番線', meaning: 'track number...', reading: '～ばんせん', studyType: 'read-only' },
        { kanji: 'パンツ', meaning: 'pants; underpants', reading: 'パンツ', studyType: 'read-only' },
        { kanji: '美容院', meaning: 'beauty parlor', reading: 'びよういん', studyType: 'read-only' },
        { kanji: '便', meaning: 'flight', reading: 'びん', studyType: 'read-only' },
        { kanji: '普通', meaning: 'local (train)', reading: 'ふつう', studyType: 'read-only' },
        { kanji: '船', meaning: 'ship; boat', reading: 'ふね', studyType: 'read-only' },
        { kanji: '～方面', meaning: 'serving...areas', reading: '～ほうめん', studyType: 'read-only' },
        { kanji: 'ホーム', meaning: 'platform', reading: 'ホーム', studyType: 'read-only' },
        { kanji: '野球', meaning: 'baseball', reading: 'やきゅう', studyType: 'read-only' },
        { kanji: '有名人', meaning: 'celebrity', reading: 'ゆうめいじん', studyType: 'read-only' },
        { kanji: '雪だるま', meaning: 'snowman', reading: 'ゆきだるま', studyType: 'write' },
        { kanji: '夜明け', meaning: 'dawn', reading: 'よあけ', studyType: 'write' },
        { kanji: '夜中', meaning: 'midnight', reading: 'よなか', studyType: 'write' },
        { kanji: '予約', meaning: 'reservation', reading: 'よやく', studyType: 'read-only' },
        { kanji: '来学期', meaning: 'next semester', reading: 'らいがっき', studyType: 'read-only' },
        { kanji: '旅行する', meaning: 'to travel', reading: 'りょこうする', studyType: 'read-only' },
        { kanji: 'りんご', meaning: 'apple', reading: 'りんご', studyType: 'read-only' },
        { kanji: '練習する', meaning: 'to practice', reading: 'れんしゅうする', studyType: 'read-only' },
      ] },
      ch11: { label: 'Chapter 11', cards: [
        { kanji: '後', meaning: 'after (e.g. an event); the rest', reading: 'あと', studyType: 'read-only' },
        { kanji: '有る', meaning: 'to exist', reading: 'ある', studyType: 'write' },
        { kanji: '市場', meaning: 'market', reading: 'いちば', studyType: 'write' },
        { kanji: '意味', meaning: 'meaning', reading: 'いみ', studyType: 'read-only' },
        { kanji: 'いろいろな所', meaning: 'various places', reading: 'いろいろなところ', studyType: 'write' },
        { kanji: 'うそをつく', meaning: 'to tell a lie', reading: 'うそをつく', studyType: 'read-only' },
        { kanji: '宇宙飛行士', meaning: 'astronaut', reading: 'うちゅうひこうし', studyType: 'read-only' },
        { kanji: '映る', meaning: 'to be reflected', reading: 'うつる', studyType: 'write' },
        { kanji: 'オーストラリア', meaning: 'Australia', reading: 'オーストラリア', studyType: 'read-only' },
        { kanji: 'お菓子', meaning: 'snack; sweets', reading: 'おかし', studyType: 'read-only' },
        { kanji: 'お正月', meaning: 'New Year\'s', reading: 'おしょうがつ', studyType: 'read-only' },
        { kanji: '男の子', meaning: 'boy', reading: 'おとこのこ', studyType: 'read-only' },
        { kanji: 'おなかがすく', meaning: 'to become hungry', reading: 'おなかがすく', studyType: 'read-only' },
        { kanji: 'お祭り', meaning: 'festival', reading: 'おまつり', studyType: 'read-only' },
        { kanji: 'おもちゃ', meaning: 'toy', reading: 'おもちゃ', studyType: 'read-only' },
        { kanji: '折り紙', meaning: 'origami', reading: 'おりがみ', studyType: 'write' },
        { kanji: '温泉', meaning: 'spa; hot spring', reading: 'おんせん', studyType: 'read-only' },
        { kanji: '女の子', meaning: 'girl', reading: 'おんなのこ', studyType: 'read-only' },
        { kanji: '外国', meaning: 'foreign country', reading: 'がいこく', studyType: 'read-only' },
        { kanji: '飼う', meaning: 'to own (a pet)', reading: 'かう', studyType: 'read-only' },
        { kanji: '画家', meaning: 'painter', reading: 'がか', studyType: 'write' },
        { kanji: '菓子', meaning: 'snacks; sweets', reading: 'かし', studyType: 'read-only' },
        { kanji: '歌詞', meaning: 'lyrics', reading: 'かし', studyType: 'write' },
        { kanji: '歌手', meaning: 'singer', reading: 'かしゅ', studyType: 'read-only' },
        { kanji: 'かたい言い方', meaning: 'bookish exp.', reading: 'かたいいいかた', studyType: 'read-only' },
        { kanji: '片仮名', meaning: 'katakana; angular Japanese syllabary used primarily for loanwords', reading: 'かたかな／カタカナ', studyType: 'read-only' },
        { kanji: 'かっこ', meaning: 'parenthesis', reading: 'かっこ', studyType: 'read-only' },
        { kanji: '川', meaning: 'river', reading: 'かわ', studyType: 'read-only' },
        { kanji: '川口市', meaning: 'Kawaguchi City', reading: 'かわぐちし', studyType: 'write' },
        { kanji: '看護師', meaning: 'nurse', reading: 'かんごし', studyType: 'read-only' },
        { kanji: 'キャンプ', meaning: 'camp', reading: 'キャンプ', studyType: 'read-only' },
        { kanji: '急病', meaning: 'sudden illness', reading: 'きゅうびょう', studyType: 'write' },
        { kanji: '～行目', meaning: 'line number...', reading: '～ぎょうめ', studyType: 'read-only' },
        { kanji: '強力', meaning: 'powerful', reading: 'きょうりょく（な）', studyType: 'write' },
        { kanji: '勤勉', meaning: 'diligent', reading: 'きんべん（な）', studyType: 'write' },
        { kanji: 'くだけた言い方', meaning: 'colloquial exp.', reading: 'くだけたいいかた', studyType: 'read-only' },
        { kanji: '計画', meaning: 'plan', reading: 'けいかく', studyType: 'write' },
        { kanji: '警察官', meaning: 'police officer', reading: 'けいさつかん', studyType: 'read-only' },
        { kanji: 'けんかする', meaning: 'to have a fight; to quarrel', reading: 'けんかする', studyType: 'read-only' },
        { kanji: '好意', meaning: 'good will', reading: 'こうい', studyType: 'write' },
        { kanji: '強情', meaning: 'obstinate', reading: 'ごうじょう（な）', studyType: 'write' },
        { kanji: '強盗', meaning: 'robbery', reading: 'ごうとう', studyType: 'write' },
        { kanji: '好物', meaning: 'favorite food', reading: 'こうぶつ', studyType: 'write' },
        { kanji: '答え', meaning: 'answer', reading: 'こたえ', studyType: 'read-only' },
        { kanji: 'こちら', meaning: 'this way (polite); this person (polite)', reading: 'こちら', studyType: 'read-only' },
        { kanji: '国歌', meaning: 'national anthem', reading: 'こっか', studyType: 'write' },
        { kanji: '好み', meaning: 'liking; taste', reading: 'このみ', studyType: 'write' },
        { kanji: '今学期', meaning: 'this semester', reading: 'こんがっき', studyType: 'read-only' },
        { kanji: '作家', meaning: 'writer', reading: 'さっか', studyType: 'read-only' },
        { kanji: 'サボる', meaning: 'to cut (classes)', reading: 'サボる', studyType: 'read-only' },
        { kanji: '市長', meaning: 'mayor', reading: 'しちょう', studyType: 'write' },
        { kanji: '質問', meaning: 'question', reading: 'しつもん', studyType: 'read-only' },
        { kanji: '締め切り', meaning: 'deadline', reading: 'しめきり', studyType: 'read-only' },
        { kanji: 'ジャーナリスト', meaning: 'journalist', reading: 'ジャーナリスト', studyType: 'read-only' },
        { kanji: '市役所', meaning: 'city hall', reading: 'しやくしょ', studyType: 'write' },
        { kanji: '社長', meaning: 'president of a company', reading: 'しゃちょう', studyType: 'read-only' },
        { kanji: '重病', meaning: 'serious illness', reading: 'じゅうびょう', studyType: 'write' },
        { kanji: '授業', meaning: 'class', reading: 'じゅぎょう', studyType: 'read-only' },
        { kanji: '宿題', meaning: 'homework', reading: 'しゅくだい', studyType: 'read-only' },
        { kanji: '出身', meaning: 'coming from', reading: 'しゅっしん', studyType: 'read-only' },
        { kanji: '手話', meaning: 'sign language', reading: 'しゅわ', studyType: 'write' },
        { kanji: '紹介する', meaning: 'to introduce', reading: 'しょうかいする', studyType: 'read-only' },
        { kanji: '正月', meaning: 'New Year\'s', reading: 'しょうがつ', studyType: 'read-only' },
        { kanji: '消防士', meaning: 'firefighter', reading: 'しょうぼうし', studyType: 'read-only' },
        { kanji: '将来', meaning: 'future', reading: 'しょうらい', studyType: 'read-only' },
        { kanji: '女優', meaning: 'actress', reading: 'じょゆう', studyType: 'read-only' },
        { kanji: '神社', meaning: 'shrine', reading: 'じんじゃ', studyType: 'read-only' },
        { kanji: '説明', meaning: 'explanation', reading: 'せつめい', studyType: 'write' },
        { kanji: 'そして', meaning: 'and then', reading: 'そして', studyType: 'read-only' },
        { kanji: 'ダイエットする', meaning: 'to go on a diet', reading: 'ダイエットする', studyType: 'read-only' },
        { kanji: '大統領', meaning: 'president of a country', reading: 'だいとうりょう', studyType: 'read-only' },
        { kanji: '台所', meaning: 'kitchen', reading: 'だいどころ', studyType: 'write' },
        { kanji: '～だけ', meaning: 'just...; only...', reading: '～だけ', studyType: 'read-only' },
        { kanji: '例えば', meaning: 'for example', reading: 'たとえば', studyType: 'read-only' },
        { kanji: '遅刻する', meaning: 'to be late (for an appointment)', reading: 'ちこくする', studyType: 'read-only' },
        { kanji: '中近東', meaning: 'the Middle and Near East', reading: 'ちゅうきんとう', studyType: 'write' },
        { kanji: '疲れる', meaning: 'to get tired', reading: 'つかれる', studyType: 'read-only' },
        { kanji: '勉める', meaning: 'to try hard', reading: 'つとめる', studyType: 'write' },
        { kanji: 'つり', meaning: 'fishing', reading: 'つり', studyType: 'read-only' },
        { kanji: 'ていねいな言い方', meaning: 'polite exp.', reading: 'ていねいないいかた', studyType: 'read-only' },
        { kanji: '～点', meaning: '...points', reading: '～てん', studyType: 'read-only' },
        { kanji: 'ドライブ', meaning: 'drive', reading: 'ドライブ', studyType: 'read-only' },
        { kanji: '取る', meaning: 'to take (a class); to get (a grade)', reading: 'とる', studyType: 'read-only' },
        { kanji: '習う', meaning: 'to learn', reading: 'ならう', studyType: 'read-only' },
        { kanji: '登る', meaning: 'to climb', reading: 'のぼる', studyType: 'read-only' },
        { kanji: '俳優', meaning: 'actor; actress', reading: 'はいゆう', studyType: 'read-only' },
        { kanji: '働く', meaning: 'to work', reading: 'はたらく', studyType: 'read-only' },
        { kanji: '×', meaning: 'wrong', reading: 'ばつ', studyType: 'read-only' },
        { kanji: '発音', meaning: 'pronunciation', reading: 'はつおん', studyType: 'read-only' },
        { kanji: '発明', meaning: 'invention', reading: 'はつめい', studyType: 'write' },
        { kanji: '～番', meaning: 'number...', reading: '～ばん', studyType: 'read-only' },
        { kanji: 'ビール', meaning: 'beer', reading: 'ビール', studyType: 'read-only' },
        { kanji: '久しぶり', meaning: 'it has been a long time', reading: 'ひさしぶり', studyType: 'read-only' },
        { kanji: '美術館', meaning: 'art museum', reading: 'びじゅつかん', studyType: 'read-only' },
        { kanji: '一人旅', meaning: 'traveling alone', reading: 'ひとりたび', studyType: 'write' },
        { kanji: '表紙', meaning: 'front cover; cover page', reading: 'ひょうし', studyType: 'write' },
        { kanji: '標準語', meaning: 'standard Japanese', reading: 'ひょうじゅんご', studyType: 'read-only' },
        { kanji: '二人ずつ', meaning: 'two people each', reading: 'ふたりずつ', studyType: 'read-only' },
        { kanji: '文法', meaning: 'grammar', reading: 'ぶんぽう', studyType: 'read-only' },
        { kanji: '文明', meaning: 'civilization', reading: 'ぶんめい', studyType: 'write' },
        { kanji: '～ページ', meaning: 'page number...', reading: '～ページ', studyType: 'read-only' },
        { kanji: '方言', meaning: 'dialect', reading: 'ほうげん', studyType: 'read-only' },
        { kanji: 'ほかに', meaning: 'anything else', reading: 'ほかに', studyType: 'read-only' },
        { kanji: 'ホストファミリー', meaning: 'host family', reading: 'ホストファミリー', studyType: 'read-only' },
        { kanji: 'まあまあ', meaning: 'okay; so-so', reading: 'まあまあ', studyType: 'read-only' },
        { kanji: '祭り', meaning: 'festival', reading: 'まつり', studyType: 'read-only' },
        { kanji: '〇', meaning: 'correct', reading: 'まる', studyType: 'read-only' },
        { kanji: '漫画家', meaning: 'cartoonist', reading: 'まんがか', studyType: 'read-only' },
        { kanji: '湖', meaning: 'lake', reading: 'みずうみ', studyType: 'read-only' },
        { kanji: 'もっと', meaning: 'more', reading: 'もっと', studyType: 'read-only' },
        { kanji: '野球選手', meaning: 'baseball player', reading: 'やきゅうせんしゅ', studyType: 'read-only' },
        { kanji: '山', meaning: 'mountain', reading: 'やま', studyType: 'read-only' },
        { kanji: 'やめる', meaning: 'to quit', reading: 'やめる', studyType: 'read-only' },
        { kanji: '有能', meaning: 'talented', reading: 'ゆうのう（な）', studyType: 'write' },
        { kanji: '有料', meaning: 'toll; fee', reading: 'ゆうりょう', studyType: 'write' },
        { kanji: '夢', meaning: 'dream', reading: 'ゆめ', studyType: 'read-only' },
        { kanji: '留学する', meaning: 'to study abroad', reading: 'りゅうがくする', studyType: 'read-only' },
        { kanji: '旅券', meaning: 'passport', reading: 'りょけん', studyType: 'write' },
        { kanji: 'ルームメート／ルームメイト', meaning: 'roommate', reading: 'ルームメート／ルームメイト', studyType: 'read-only' },
        { kanji: '例', meaning: 'example', reading: 'れい', studyType: 'read-only' },
        { kanji: '練習', meaning: 'practice; exercise', reading: 'れんしゅう', studyType: 'read-only' },
        { kanji: '和紙', meaning: 'Japanese paper', reading: 'わし', studyType: 'write' },
      ] },
      ch12: { label: 'Chapter 12', cards: [
        { kanji: '青', meaning: 'blue color', reading: 'あお', studyType: 'write' },
        { kanji: '青信号', meaning: 'green light', reading: 'あおしんごう', studyType: 'write' },
        { kanji: '青空', meaning: 'blue sky', reading: 'あおぞら', studyType: 'write' },
        { kanji: '赤', meaning: 'red color', reading: 'あか', studyType: 'write' },
        { kanji: '足', meaning: 'leg; foot', reading: 'あし', studyType: 'read-only' },
        { kanji: '甘い', meaning: 'sweet', reading: 'あまい', studyType: 'read-only' },
        { kanji: '歩く', meaning: 'to walk', reading: 'あるく', studyType: 'read-only' },
        { kanji: '痛い', meaning: 'hurt; painful', reading: 'いたい', studyType: 'read-only' },
        { kanji: '一度', meaning: 'once', reading: 'いちど', studyType: 'write' },
        { kanji: '意味', meaning: 'meaning', reading: 'いみ', studyType: 'read-only' },
        { kanji: 'インフルエンザ', meaning: 'influenza; flu', reading: 'インフルエンザ', studyType: 'read-only' },
        { kanji: '多い', meaning: 'many; there are many...', reading: 'おおい', studyType: 'read-only' },
        { kanji: '大昔', meaning: 'ancient times', reading: 'おおむかし', studyType: 'write' },
        { kanji: 'お大事に', meaning: 'Get well soon.', reading: 'おだいじに', studyType: 'read-only' },
        { kanji: 'お使い', meaning: 'errand', reading: 'おつかい', studyType: 'write' },
        { kanji: 'お手洗い', meaning: 'restroom', reading: 'おてあらい', studyType: 'read-only' },
        { kanji: 'おなか', meaning: 'stomach', reading: 'おなか', studyType: 'read-only' },
        { kanji: '温度', meaning: 'temperature', reading: 'おんど', studyType: 'write' },
        { kanji: '風邪', meaning: 'cold', reading: 'かぜ', studyType: 'read-only' },
        { kanji: '風邪をひく', meaning: 'to catch a cold', reading: 'かぜをひく', studyType: 'read-only' },
        { kanji: '彼女', meaning: 'she; her; girlfriend', reading: 'かのじょ', studyType: 'read-only' },
        { kanji: '彼', meaning: 'he; him; boyfriend', reading: 'かれ', studyType: 'read-only' },
        { kanji: '眼科医／目医者', meaning: 'ophthalmologist', reading: 'がんかい／めいしゃ', studyType: 'read-only' },
        { kanji: '気温', meaning: 'temperature (weather)', reading: 'きおん', studyType: 'read-only' },
        { kanji: '喫茶店', meaning: 'cafe', reading: 'きっさてん', studyType: 'read-only' },
        { kanji: '牛肉', meaning: 'beef', reading: 'ぎゅうにく', studyType: 'write' },
        { kanji: '興味がある', meaning: 'to be interested (in)', reading: 'きょうみがある', studyType: 'read-only' },
        { kanji: '起立する', meaning: 'to stand up', reading: 'きりつする', studyType: 'write' },
        { kanji: '緊張する', meaning: 'to get nervous', reading: 'きんちょうする', studyType: 'read-only' },
        { kanji: '曇り', meaning: 'cloudy weather', reading: 'くもり', studyType: 'read-only' },
        { kanji: 'けが', meaning: 'injury', reading: 'けが', studyType: 'read-only' },
        { kanji: '外科医', meaning: 'surgeon', reading: 'げかい', studyType: 'read-only' },
        { kanji: '元気がない', meaning: 'don\'t look well', reading: 'げんきがない', studyType: 'read-only' },
        { kanji: '子牛', meaning: 'calf; veal', reading: 'こうし', studyType: 'write' },
        { kanji: '抗生物質', meaning: 'antibiotic', reading: 'こうせいぶっしつ', studyType: 'read-only' },
        { kanji: '神戸市', meaning: 'Kobe City', reading: 'こうべし', studyType: 'write' },
        { kanji: '国連', meaning: 'United Nations', reading: 'こくれん', studyType: 'write' },
        { kanji: '再起動', meaning: 'reboot; restart', reading: 'さいきどう', studyType: 'write' },
        { kanji: '差別', meaning: 'discrimination', reading: 'さべつ', studyType: 'write' },
        { kanji: '三十度', meaning: 'thirty degrees', reading: 'さんじゅうど', studyType: 'write' },
        { kanji: '産婦人科医', meaning: 'obstetrician and gynecologist', reading: 'さんふじんかい', studyType: 'read-only' },
        { kanji: '試合', meaning: 'match; game', reading: 'しあい', studyType: 'read-only' },
        { kanji: '歯科医', meaning: 'dentist', reading: 'しかい', studyType: 'read-only' },
        { kanji: '耳鼻科医', meaning: 'otorhinolaryngologist; ENT doctor', reading: 'じびかい', studyType: 'read-only' },
        { kanji: 'ジュース', meaning: 'juice', reading: 'ジュース', studyType: 'read-only' },
        { kanji: '手術', meaning: 'operation', reading: 'しゅじゅつ', studyType: 'read-only' },
        { kanji: '使用中', meaning: '"Occupied"', reading: 'しようちゅう', studyType: 'write' },
        { kanji: '神道', meaning: 'Shinto religion', reading: 'しんとう', studyType: 'write' },
        { kanji: '心配する', meaning: 'to worry', reading: 'しんぱいする', studyType: 'read-only' },
        { kanji: '素敵', meaning: 'nice', reading: 'すてき（な）', studyType: 'read-only' },
        { kanji: '整形外科医', meaning: 'orthopedic surgeon', reading: 'せいけいげかい', studyType: 'read-only' },
        { kanji: '政治', meaning: 'politics', reading: 'せいじ', studyType: 'read-only' },
        { kanji: '成績', meaning: 'grade (on a test, etc.)', reading: 'せいせき', studyType: 'read-only' },
        { kanji: '青年', meaning: 'youth; young man', reading: 'せいねん', studyType: 'write' },
        { kanji: 'せき', meaning: 'cough', reading: 'せき', studyType: 'read-only' },
        { kanji: 'せきが出る', meaning: 'to cough', reading: 'せきがでる', studyType: 'read-only' },
        { kanji: '赤十字', meaning: 'the Red Cross', reading: 'せきじゅうじ', studyType: 'write' },
        { kanji: '赤道', meaning: 'the equator', reading: 'せきどう', studyType: 'write' },
        { kanji: '狭い', meaning: 'narrow; not spacious', reading: 'せまい', studyType: 'read-only' },
        { kanji: '早朝', meaning: 'early morning', reading: 'そうちょう', studyType: 'write' },
        { kanji: '体温計', meaning: 'thermometer', reading: 'たいおんけい', studyType: 'read-only' },
        { kanji: '大使', meaning: 'ambassador', reading: 'たいし', studyType: 'write' },
        { kanji: '態度', meaning: 'attitude', reading: 'たいど', studyType: 'write' },
        { kanji: '多分', meaning: 'probably; maybe', reading: 'たぶん', studyType: 'read-only' },
        { kanji: '注射', meaning: 'injection', reading: 'ちゅうしゃ', studyType: 'read-only' },
        { kanji: '都合が悪い', meaning: 'inconvenient; to have a scheduling conflict', reading: 'つごうがわるい', studyType: 'read-only' },
        { kanji: 'できるだけ', meaning: 'as much as possible', reading: 'できるだけ', studyType: 'read-only' },
        { kanji: '～でしょう', meaning: 'probably; ...,right?', reading: '～でしょう', studyType: 'read-only' },
        { kanji: '点滴', meaning: 'intravenous feeding; IV', reading: 'てんてき', studyType: 'read-only' },
        { kanji: '～度', meaning: '...degrees (temperature)', reading: '～ど', studyType: 'read-only' },
        { kanji: '特色', meaning: 'characteristic', reading: 'とくしょく', studyType: 'write' },
        { kanji: '特別', meaning: 'special', reading: 'とくべつ（な）', studyType: 'write' },
        { kanji: '共働き', meaning: 'both husband and wife working', reading: 'ともばたらき', studyType: 'write' },
        { kanji: '内科医', meaning: 'physician; internal medicine', reading: 'ないかい', studyType: 'read-only' },
        { kanji: 'なくす', meaning: 'to lose', reading: 'なくす', studyType: 'read-only' },
        { kanji: '二三日', meaning: 'for two to three days', reading: 'にさんにち', studyType: 'read-only' },
        { kanji: '熱がある', meaning: 'to have a fever', reading: 'ねつがある', studyType: 'read-only' },
        { kanji: '～ので', meaning: 'because...', reading: '～ので', studyType: 'read-only' },
        { kanji: 'のど', meaning: 'throat', reading: 'のど', studyType: 'read-only' },
        { kanji: 'のどが渇く', meaning: 'to become thirsty', reading: 'のどがかわく', studyType: 'read-only' },
        { kanji: '歯', meaning: 'tooth', reading: 'は', studyType: 'read-only' },
        { kanji: '初めて', meaning: 'for the first time', reading: 'はじめて', studyType: 'read-only' },
        { kanji: '花', meaning: 'flower', reading: 'はな', studyType: 'read-only' },
        { kanji: '早起きする', meaning: 'to get up early', reading: 'はやおきする', studyType: 'write' },
        { kanji: '晴れ', meaning: 'sunny weather', reading: 'はれ', studyType: 'read-only' },
        { kanji: '皮膚科医', meaning: 'dermatologist', reading: 'ひふかい', studyType: 'read-only' },
        { kanji: '病気', meaning: 'illness; sickness', reading: 'びょうき', studyType: 'read-only' },
        { kanji: '服', meaning: 'clothes', reading: 'ふく', studyType: 'read-only' },
        { kanji: '二日酔い', meaning: 'hangover', reading: 'ふつかよい', studyType: 'read-only' },
        { kanji: 'プレゼント', meaning: 'present', reading: 'プレゼント', studyType: 'read-only' },
        { kanji: '別々に', meaning: 'separately', reading: 'べつべつに', studyType: 'write' },
        { kanji: 'ホームシック', meaning: 'homesickness', reading: 'ホームシック', studyType: 'read-only' },
        { kanji: 'マイナス', meaning: 'minus', reading: 'マイナス', studyType: 'read-only' },
        { kanji: '昔話', meaning: 'old tale', reading: 'むかしばなし', studyType: 'write' },
        { kanji: 'もうすぐ', meaning: 'very soon; in a few moments/days', reading: 'もうすぐ', studyType: 'read-only' },
        { kanji: '物', meaning: 'thing (concrete object)', reading: 'もの', studyType: 'read-only' },
        { kanji: '雪', meaning: 'snow', reading: 'ゆき', studyType: 'read-only' },
        { kanji: '用事', meaning: 'business to take care of', reading: 'ようじ', studyType: 'read-only' },
        { kanji: '連休', meaning: 'consecutive holidays', reading: 'れんきゅう', studyType: 'write' },
        { kanji: 'レントゲン', meaning: 'X-ray', reading: 'レントゲン', studyType: 'read-only' },
        { kanji: '労働', meaning: 'labor', reading: 'ろうどう', studyType: 'write' },
        { kanji: '別れる', meaning: 'to break up; to separate', reading: 'わかれる', studyType: 'read-only' },
        { kanji: '悪い', meaning: 'bad', reading: 'わるい', studyType: 'read-only' },
      ] },
    },
  },
  genki2: {
    label: 'Genki II',
    chapters: {
ch13: { label: 'Chapter 13', cards: [
        { kanji: "おとな", meaning: "adult", reading: "おとな", studyType: 'read-only' },
        { kanji: "べんごし", meaning: "lawyer", reading: "べんごし", studyType: 'read-only' },
        { kanji: "わたくし", meaning: "I (formal)", reading: "わたくし", studyType: 'read-only' },
        { kanji: "カレー", meaning: "curry", reading: "カレー", studyType: 'read-only' },
        { kanji: "こうちゃ", meaning: "black tea", reading: "こうちゃ", studyType: 'read-only' },
        { kanji: "きもの", meaning: "kimono; Japanese traditional dress", reading: "きもの", studyType: 'read-only' },
        { kanji: "セーター", meaning: "sweater", reading: "セーター", studyType: 'read-only' },
        { kanji: "がっき", meaning: "musical instrument", reading: "がっき", studyType: 'read-only' },
        { kanji: "からて", meaning: "karate", reading: "からて", studyType: 'read-only' },
        { kanji: "ゴルフ", meaning: "golf", reading: "ゴルフ", studyType: 'read-only' },
        { kanji: "バイク", meaning: "motorcycle", reading: "バイク", studyType: 'read-only' },
        { kanji: "ぞう", meaning: "elephant", reading: "ぞう", studyType: 'read-only' },
        { kanji: "からだ", meaning: "body", reading: "からだ", studyType: 'read-only' },
        { kanji: "がいこくご", meaning: "foreign language", reading: "がいこくご", studyType: 'read-only' },
        { kanji: "ことば", meaning: "language", reading: "ことば", studyType: 'read-only' },
        { kanji: "ぶんぽう", meaning: "grammar", reading: "ぶんぽう", studyType: 'read-only' },
        { kanji: "アプリ", meaning: "application", reading: "アプリ", studyType: 'read-only' },
        { kanji: "アパート", meaning: "apartment; smaller apartment building", reading: "アパート", studyType: 'read-only' },
        { kanji: "マンション", meaning: "larger apartment building; condominium", reading: "マンション", studyType: 'read-only' },
        { kanji: "くうこう", meaning: "airport", reading: "くうこう", studyType: 'read-only' },
        { kanji: "みせ", meaning: "shop; store", reading: "みせ", studyType: 'read-only' },
        { kanji: "ぶっか", meaning: "consumer prices", reading: "ぶっか", studyType: 'read-only' },
        { kanji: "こうこく", meaning: "advertisement", reading: "こうこく", studyType: 'read-only' },
        { kanji: "ぼしゅう", meaning: "recruitment", reading: "ぼしゅう", studyType: 'read-only' },
        { kanji: "やくそく", meaning: "promise; appointment", reading: "やくそく", studyType: 'read-only' },
        { kanji: "うれしい", meaning: "glad", reading: "うれしい", studyType: 'read-only' },
        { kanji: "かなしい", meaning: "sad", reading: "かなしい", studyType: 'read-only' },
        { kanji: "きびしい", meaning: "strict", reading: "きびしい", studyType: 'read-only' },
        { kanji: "きぶんがわるい", meaning: "to feel sick", reading: "きぶんがわるい", studyType: 'read-only' },
        { kanji: "からい", meaning: "hot and spicy; salty", reading: "からい", studyType: 'read-only' },
        { kanji: "すごい", meaning: "incredible; awesome", reading: "すごい", studyType: 'read-only' },
        { kanji: "ちかい", meaning: "close; near", reading: "ちかい", studyType: 'read-only' },
        { kanji: "いろいろ（な）", meaning: "various; different kinds of", reading: "いろいろ（な）", studyType: 'read-only' },
        { kanji: "しあわせ（な）", meaning: "happy (lasting happiness)", reading: "しあわせ（な）", studyType: 'read-only' },
        { kanji: "だめ（な）", meaning: "no good", reading: "だめ（な）", studyType: 'read-only' },
        { kanji: "あむ", meaning: "to knit", reading: "あむ", studyType: 'read-only' },
        { kanji: "がんばる", meaning: "to do one's best; to try hard", reading: "がんばる", studyType: 'read-only' },
        { kanji: "なく", meaning: "to cry", reading: "なく", studyType: 'read-only' },
        { kanji: "みがく", meaning: "to brush (teeth); to polish", reading: "みがく", studyType: 'read-only' },
        { kanji: "やくそくをまもる", meaning: "to keep a promise", reading: "やくそくをまもる", studyType: 'read-only' },
        { kanji: "かんどうする", meaning: "to be moved/touched (by . . . )", reading: "かんどうする", studyType: 'read-only' },
        { kanji: "～かい", meaning: ". . . times", reading: "～かい", studyType: 'read-only' },
        { kanji: "～キロ", meaning: ". . . kilometers; . . . kilograms", reading: "～キロ", studyType: 'read-only' },
        { kanji: "ぜんぶ", meaning: "all", reading: "ぜんぶ", studyType: 'read-only' },
        { kanji: "～ともうします", meaning: "my name is . . .", reading: "～ともうします", studyType: 'read-only' },
        { kanji: "とくに", meaning: "especially", reading: "とくに", studyType: 'read-only' },
        { kanji: "いちにち", meaning: "one day", reading: "いちにち", studyType: 'read-only' },
        { kanji: "ふつか", meaning: "two days", reading: "ふつか", studyType: 'read-only' },
        { kanji: "みっか", meaning: "three days", reading: "みっか", studyType: 'read-only' },
        { kanji: "よっか", meaning: "four days", reading: "よっか", studyType: 'read-only' },
        { kanji: "いつか", meaning: "five days", reading: "いつか", studyType: 'read-only' },
        { kanji: "むいか", meaning: "six days", reading: "むいか", studyType: 'read-only' },
        { kanji: "なのか", meaning: "seven days", reading: "なのか", studyType: 'read-only' },
        { kanji: "ようか", meaning: "eight days", reading: "ようか", studyType: 'read-only' },
        { kanji: "ここのか", meaning: "nine days", reading: "ここのか", studyType: 'read-only' },
        { kanji: "とおか", meaning: "ten days", reading: "とおか", studyType: 'read-only' },
        { kanji: "食べ物", meaning: "たべもの", reading: "たべもの", studyType: 'write' },
        { kanji: "飲み物", meaning: "のみもの", reading: "のみもの", studyType: 'write' },
        { kanji: "物", meaning: "もの", reading: "もの", studyType: 'write' },
        { kanji: "買い物", meaning: "かいもの", reading: "かいもの", studyType: 'write' },
        { kanji: "鳥", meaning: "とり", reading: "とり", studyType: 'write' },
        { kanji: "料理", meaning: "りょうり", reading: "りょうり", studyType: 'write' },
        { kanji: "特に", meaning: "とくに", reading: "とくに", studyType: 'write' },
        { kanji: "安い", meaning: "やすい", reading: "やすい", studyType: 'write' },
        { kanji: "ご飯", meaning: "ごはん", reading: "ごはん", studyType: 'write' },
        { kanji: "朝ご飯", meaning: "あさごはん", reading: "あさごはん", studyType: 'write' },
        { kanji: "昼ご飯", meaning: "ひるごはん", reading: "ひるごはん", studyType: 'write' },
        { kanji: "肉", meaning: "にく", reading: "にく", studyType: 'write' },
        { kanji: "悪い", meaning: "わるい", reading: "わるい", studyType: 'write' },
        { kanji: "気分が悪い", meaning: "きぶんがわるい", reading: "きぶんがわるい", studyType: 'write' },
        { kanji: "体", meaning: "からだ", reading: "からだ", studyType: 'write' },
        { kanji: "同じ", meaning: "おなじ", reading: "おなじ", studyType: 'write' },
        { kanji: "着く", meaning: "つく", reading: "つく", studyType: 'write' },
        { kanji: "着る", meaning: "きる", reading: "きる", studyType: 'write' },
        { kanji: "着物", meaning: "きもの", reading: "きもの", studyType: 'write' },
        { kanji: "水着", meaning: "みずぎ", reading: "みずぎ", studyType: 'write' },
        { kanji: "空港", meaning: "くうこう", reading: "くうこう", studyType: 'write' },
        { kanji: "昼", meaning: "ひる", reading: "ひる", studyType: 'write' },
        { kanji: "海", meaning: "うみ", reading: "うみ", studyType: 'write' },
      ] },
      ch14: { label: 'Chapter 14', cards: [
        { kanji: "おくさん", meaning: "(your/someone's) wife", reading: "おくさん", studyType: 'read-only' },
        { kanji: "ごしゅじん", meaning: "(your/someone's) husband", reading: "ごしゅじん", studyType: 'read-only' },
        { kanji: "パートナー", meaning: "partner", reading: "パートナー", studyType: 'read-only' },
        { kanji: "おじさん", meaning: "uncle; middle-aged man", reading: "おじさん", studyType: 'read-only' },
        { kanji: "おばさん", meaning: "aunt; middle-aged woman", reading: "おばさん", studyType: 'read-only' },
        { kanji: "りょうしん", meaning: "parents", reading: "りょうしん", studyType: 'read-only' },
        { kanji: "おおやさん", meaning: "landlord; landlady", reading: "おおやさん", studyType: 'read-only' },
        { kanji: "みなさん", meaning: "everyone; all of you", reading: "みなさん", studyType: 'read-only' },
        { kanji: "チョコレート", meaning: "chocolate", reading: "チョコレート", studyType: 'read-only' },
        { kanji: "みかん", meaning: "mandarin orange", reading: "みかん", studyType: 'read-only' },
        { kanji: "トレーナー", meaning: "sweatshirt", reading: "トレーナー", studyType: 'read-only' },
        { kanji: "シャツ", meaning: "shirt", reading: "シャツ", studyType: 'read-only' },
        { kanji: "ネクタイ", meaning: "necktie", reading: "ネクタイ", studyType: 'read-only' },
        { kanji: "マフラー", meaning: "winter scarf", reading: "マフラー", studyType: 'read-only' },
        { kanji: "ゆびわ", meaning: "ring", reading: "ゆびわ", studyType: 'read-only' },
        { kanji: "えんぴつ", meaning: "pencil", reading: "えんぴつ", studyType: 'read-only' },
        { kanji: "ぬいぐるみ", meaning: "stuffed animal (e.g., teddy bear)", reading: "ぬいぐるみ", studyType: 'read-only' },
        { kanji: "まんが", meaning: "comic book", reading: "まんが", studyType: 'read-only' },
        { kanji: "けしょうひん", meaning: "cosmetics", reading: "けしょうひん", studyType: 'read-only' },
        { kanji: "ラジオ", meaning: "radio", reading: "ラジオ", studyType: 'read-only' },
        { kanji: "おさら", meaning: "plate; dish", reading: "おさら", studyType: 'read-only' },
        { kanji: "おかえし", meaning: "return (as a token of gratitude)", reading: "おかえし", studyType: 'read-only' },
        { kanji: "りれきしょ", meaning: "résumé", reading: "りれきしょ", studyType: 'read-only' },
        { kanji: "クリスマス", meaning: "Christmas", reading: "クリスマス", studyType: 'read-only' },
        { kanji: "バレンタインデー", meaning: "Valentine's Day", reading: "バレンタインデー", studyType: 'read-only' },
        { kanji: "ホワイトデー", meaning: "\"White Day\" (yet another gift-giving day)", reading: "ホワイトデー", studyType: 'read-only' },
        { kanji: "ほしい", meaning: "to want", reading: "ほしい", studyType: 'read-only' },
        { kanji: "おしゃれ（な）", meaning: "fashionable; stylish", reading: "おしゃれ（な）", studyType: 'read-only' },
        { kanji: "けち（な）", meaning: "stingy; cheap", reading: "けち（な）", studyType: 'read-only' },
        { kanji: "おくる", meaning: "to send", reading: "おくる", studyType: 'read-only' },
        { kanji: "にあう", meaning: "to look good (on somebody)", reading: "にあう", studyType: 'read-only' },
        { kanji: "あきらめる", meaning: "to give up", reading: "あきらめる", studyType: 'read-only' },
        { kanji: "あげる", meaning: "to give (to others)", reading: "あげる", studyType: 'read-only' },
        { kanji: "くれる", meaning: "to give (me)", reading: "くれる", studyType: 'read-only' },
        { kanji: "できる", meaning: "to come into existence; to be made", reading: "できる", studyType: 'read-only' },
        { kanji: "そうだんする", meaning: "to consult", reading: "そうだんする", studyType: 'read-only' },
        { kanji: "ちゅういする", meaning: "to give warning; to watch out", reading: "ちゅういする", studyType: 'read-only' },
        { kanji: "プロポーズする", meaning: "to propose marriage", reading: "プロポーズする", studyType: 'read-only' },
        { kanji: "～くん", meaning: "Mr./Ms. . . . (casual)", reading: "～くん", studyType: 'read-only' },
        { kanji: "～たち", meaning: "(makes a noun plural)", reading: "～たち", studyType: 'read-only' },
        { kanji: "わたしたち", meaning: "we", reading: "わたしたち", studyType: 'read-only' },
        { kanji: "こんな～", meaning: ". . . like this; this kind of . . .", reading: "こんな～", studyType: 'read-only' },
        { kanji: "きゅうに", meaning: "suddenly", reading: "きゅうに", studyType: 'read-only' },
        { kanji: "ちょうど", meaning: "exactly", reading: "ちょうど", studyType: 'read-only' },
        { kanji: "よく", meaning: "well", reading: "よく", studyType: 'read-only' },
        { kanji: "さあ", meaning: "I am not sure . . .", reading: "さあ", studyType: 'read-only' },
        { kanji: "どうしたらいい", meaning: "what should one do", reading: "どうしたらいい", studyType: 'read-only' },
        { kanji: "～こ", meaning: "(generic counter for smaller items)", reading: "～こ", studyType: 'read-only' },
        { kanji: "～さつ", meaning: "(counter for bound volumes)", reading: "～さつ", studyType: 'read-only' },
        { kanji: "～だい", meaning: "(counter for equipment)", reading: "～だい", studyType: 'read-only' },
        { kanji: "～ひき", meaning: "(counter for smaller animals)", reading: "～ひき", studyType: 'read-only' },
        { kanji: "～ほん", meaning: "(counter for long objects)", reading: "～ほん", studyType: 'read-only' },
        { kanji: "彼", meaning: "かれ", reading: "かれ", studyType: 'write' },
        { kanji: "彼女", meaning: "かのじょ", reading: "かのじょ", studyType: 'write' },
        { kanji: "時代", meaning: "じだい", reading: "じだい", studyType: 'write' },
        { kanji: "留学生", meaning: "りゅうがくせい", reading: "りゅうがくせい", studyType: 'write' },
        { kanji: "留学する", meaning: "りゅうがくする", reading: "りゅうがくする", studyType: 'write' },
        { kanji: "家族", meaning: "かぞく", reading: "かぞく", studyType: 'write' },
        { kanji: "父親", meaning: "ちちおや", reading: "ちちおや", studyType: 'write' },
        { kanji: "親切な", meaning: "しんせつな", reading: "しんせつな", studyType: 'write' },
        { kanji: "切る", meaning: "きる", reading: "きる", studyType: 'write' },
        { kanji: "英語", meaning: "えいご", reading: "えいご", studyType: 'write' },
        { kanji: "店", meaning: "みせ", reading: "みせ", studyType: 'write' },
        { kanji: "去年", meaning: "きょねん", reading: "きょねん", studyType: 'write' },
        { kanji: "急に", meaning: "きゅうに", reading: "きゅうに", studyType: 'write' },
        { kanji: "急ぐ", meaning: "いそぐ", reading: "いそぐ", studyType: 'write' },
        { kanji: "乗る", meaning: "のる", reading: "のる", studyType: 'write' },
        { kanji: "本当に", meaning: "ほんとうに", reading: "ほんとうに", studyType: 'write' },
        { kanji: "音楽", meaning: "おんがく", reading: "おんがく", studyType: 'write' },
        { kanji: "楽しい", meaning: "たのしい", reading: "たのしい", studyType: 'write' },
        { kanji: "医者", meaning: "いしゃ", reading: "いしゃ", studyType: 'write' },
      ] },
      ch15: { label: 'Chapter 15', cards: [
        { kanji: "がいこくじん", meaning: "foreigner", reading: "がいこくじん", studyType: 'read-only' },
        { kanji: "そば", meaning: "soba; Japanese buckwheat noodles", reading: "そば", studyType: 'read-only' },
        { kanji: "え", meaning: "painting; picture; drawing", reading: "え", studyType: 'read-only' },
        { kanji: "ちず", meaning: "map", reading: "ちず", studyType: 'read-only' },
        { kanji: "じしょ", meaning: "dictionary", reading: "じしょ", studyType: 'read-only' },
        { kanji: "かぐ", meaning: "furniture", reading: "かぐ", studyType: 'read-only' },
        { kanji: "でんち", meaning: "battery", reading: "でんち", studyType: 'read-only' },
        { kanji: "ジャケット", meaning: "jacket", reading: "ジャケット", studyType: 'read-only' },
        { kanji: "ペット", meaning: "pet", reading: "ペット", studyType: 'read-only' },
        { kanji: "わりびきけん", meaning: "discount coupon", reading: "わりびきけん", studyType: 'read-only' },
        { kanji: "インターネット", meaning: "internet", reading: "インターネット", studyType: 'read-only' },
        { kanji: "じしん", meaning: "earthquake", reading: "じしん", studyType: 'read-only' },
        { kanji: "ほけん", meaning: "insurance", reading: "ほけん", studyType: 'read-only' },
        { kanji: "ぜいきん", meaning: "tax", reading: "ぜいきん", studyType: 'read-only' },
        { kanji: "きょうしつ", meaning: "classroom", reading: "きょうしつ", studyType: 'read-only' },
        { kanji: "たてもの", meaning: "building", reading: "たてもの", studyType: 'read-only' },
        { kanji: "プール", meaning: "swimming pool", reading: "プール", studyType: 'read-only' },
        { kanji: "えいがかん", meaning: "movie theater", reading: "えいがかん", studyType: 'read-only' },
        { kanji: "りょかん", meaning: "Japanese inn", reading: "りょかん", studyType: 'read-only' },
        { kanji: "にわ", meaning: "garden", reading: "にわ", studyType: 'read-only' },
        { kanji: "ボランティア", meaning: "volunteer", reading: "ボランティア", studyType: 'read-only' },
        { kanji: "かつどう", meaning: "activity", reading: "かつどう", studyType: 'read-only' },
        { kanji: "けいけん", meaning: "experience", reading: "けいけん", studyType: 'read-only' },
        { kanji: "しゅうかん", meaning: "custom", reading: "しゅうかん", studyType: 'read-only' },
        { kanji: "しめきり", meaning: "deadline", reading: "しめきり", studyType: 'read-only' },
        { kanji: "よてい", meaning: "schedule; plan", reading: "よてい", studyType: 'read-only' },
        { kanji: "そつぎょうしき", meaning: "graduation ceremony", reading: "そつぎょうしき", studyType: 'read-only' },
        { kanji: "けっこんしき", meaning: "wedding", reading: "けっこんしき", studyType: 'read-only' },
        { kanji: "うる", meaning: "to sell", reading: "うる", studyType: 'read-only' },
        { kanji: "おろす", meaning: "to withdraw (money)", reading: "おろす", studyType: 'read-only' },
        { kanji: "かく", meaning: "to draw; to paint", reading: "かく", studyType: 'read-only' },
        { kanji: "さがす", meaning: "to look for", reading: "さがす", studyType: 'read-only' },
        { kanji: "さそう", meaning: "to invite", reading: "さそう", studyType: 'read-only' },
        { kanji: "しゃべる", meaning: "to chat", reading: "しゃべる", studyType: 'read-only' },
        { kanji: "つきあう", meaning: "to date (someone); to keep company", reading: "つきあう", studyType: 'read-only' },
        { kanji: "つく", meaning: "to arrive", reading: "つく", studyType: 'read-only' },
        { kanji: "ほけんにはいる", meaning: "to buy insurance", reading: "ほけんにはいる", studyType: 'read-only' },
        { kanji: "きをつける", meaning: "to be cautious/careful", reading: "きをつける", studyType: 'read-only' },
        { kanji: "しらべる", meaning: "to look into (a matter)", reading: "しらべる", studyType: 'read-only' },
        { kanji: "みえる", meaning: "to be visible", reading: "みえる", studyType: 'read-only' },
        { kanji: "（～に）する", meaning: "to decide on (an item)", reading: "（～に）する", studyType: 'read-only' },
        { kanji: "かんこうする", meaning: "to do sightseeing", reading: "かんこうする", studyType: 'read-only' },
        { kanji: "よやくする", meaning: "to reserve", reading: "よやくする", studyType: 'read-only' },
        { kanji: "さんかする", meaning: "to participate", reading: "さんかする", studyType: 'read-only' },
        { kanji: "そつぎょうする", meaning: "to graduate (from . . . )", reading: "そつぎょうする", studyType: 'read-only' },
        { kanji: "はっぴょうする", meaning: "to make a presentation; to make public", reading: "はっぴょうする", studyType: 'read-only' },
        { kanji: "～けど", meaning: ". . . , but; . . . , so", reading: "～けど", studyType: 'read-only' },
        { kanji: "～め", meaning: "-th", reading: "～め", studyType: 'read-only' },
        { kanji: "いちにちめ", meaning: "first day", reading: "いちにちめ", studyType: 'read-only' },
        { kanji: "いちにちじゅう", meaning: "all day long", reading: "いちにちじゅう", studyType: 'read-only' },
        { kanji: "さいきん", meaning: "recently", reading: "さいきん", studyType: 'read-only' },
        { kanji: "もういちど", meaning: "one more time", reading: "もういちど", studyType: 'read-only' },
        { kanji: "たのしみです", meaning: "cannot wait; to look forward to it", reading: "たのしみです", studyType: 'read-only' },
        { kanji: "死ぬ", meaning: "しぬ", reading: "しぬ", studyType: 'write' },
        { kanji: "意味", meaning: "いみ", reading: "いみ", studyType: 'write' },
        { kanji: "注意する", meaning: "ちゅういする", reading: "ちゅういする", studyType: 'write' },
        { kanji: "夏", meaning: "なつ", reading: "なつ", studyType: 'write' },
        { kanji: "夏休み", meaning: "なつやすみ", reading: "なつやすみ", studyType: 'write' },
        { kanji: "魚", meaning: "さかな", reading: "さかな", studyType: 'write' },
        { kanji: "お寺", meaning: "おてら", reading: "おてら", studyType: 'write' },
        { kanji: "広い", meaning: "ひろい", reading: "ひろい", studyType: 'write' },
        { kanji: "足", meaning: "あし", reading: "あし", studyType: 'write' },
        { kanji: "自転車", meaning: "じてんしゃ", reading: "じてんしゃ", studyType: 'write' },
        { kanji: "借りる", meaning: "かりる", reading: "かりる", studyType: 'write' },
        { kanji: "走る", meaning: "はしる", reading: "はしる", studyType: 'write' },
        { kanji: "場所", meaning: "ばしょ", reading: "ばしょ", studyType: 'write' },
        { kanji: "建物", meaning: "たてもの", reading: "たてもの", studyType: 'write' },
        { kanji: "地下", meaning: "ちか", reading: "ちか", studyType: 'write' },
        { kanji: "通る", meaning: "とおる", reading: "とおる", studyType: 'write' },
      ] },
      ch16: { label: 'Chapter 16', cards: [
        { kanji: "えきいん（さん）", meaning: "station attendant", reading: "えきいん（さん）", studyType: 'read-only' },
        { kanji: "おや", meaning: "parent", reading: "おや", studyType: 'read-only' },
        { kanji: "しんせき", meaning: "relatives", reading: "しんせき", studyType: 'read-only' },
        { kanji: "ごみ", meaning: "garbage", reading: "ごみ", studyType: 'read-only' },
        { kanji: "さとう", meaning: "sugar", reading: "さとう", studyType: 'read-only' },
        { kanji: "ファイル", meaning: "(file) folder; portfolio; file", reading: "ファイル", studyType: 'read-only' },
        { kanji: "おおきさ", meaning: "size", reading: "おおきさ", studyType: 'read-only' },
        { kanji: "みち", meaning: "way; road; directions", reading: "みち", studyType: 'read-only' },
        { kanji: "きまつしけん", meaning: "final examination", reading: "きまつしけん", studyType: 'read-only' },
        { kanji: "けんきゅう", meaning: "research", reading: "けんきゅう", studyType: 'read-only' },
        { kanji: "だいがくいん", meaning: "graduate school", reading: "だいがくいん", studyType: 'read-only' },
        { kanji: "しょうがくきん", meaning: "scholarship", reading: "しょうがくきん", studyType: 'read-only' },
        { kanji: "すいせんじょう", meaning: "letter of recommendation", reading: "すいせんじょう", studyType: 'read-only' },
        { kanji: "たいふう", meaning: "typhoon", reading: "たいふう", studyType: 'read-only' },
        { kanji: "ぶんか", meaning: "culture", reading: "ぶんか", studyType: 'read-only' },
        { kanji: "へんじ", meaning: "reply", reading: "へんじ", studyType: 'read-only' },
        { kanji: "ひ", meaning: "day", reading: "ひ", studyType: 'read-only' },
        { kanji: "きたない", meaning: "dirty", reading: "きたない", studyType: 'read-only' },
        { kanji: "おこす", meaning: "to wake (someone) up", reading: "おこす", studyType: 'read-only' },
        { kanji: "おごる", meaning: "to treat (someone) to a meal", reading: "おごる", studyType: 'read-only' },
        { kanji: "わらう", meaning: "to laugh", reading: "わらう", studyType: 'read-only' },
        { kanji: "おちこむ", meaning: "to get depressed", reading: "おちこむ", studyType: 'read-only' },
        { kanji: "こまる", meaning: "to have difficulty", reading: "こまる", studyType: 'read-only' },
        { kanji: "だす", meaning: "to take (something) out; to hand in (something)", reading: "だす", studyType: 'read-only' },
        { kanji: "なおす", meaning: "to correct; to fix", reading: "なおす", studyType: 'read-only' },
        { kanji: "みつかる", meaning: "to be found", reading: "みつかる", studyType: 'read-only' },
        { kanji: "やくす", meaning: "to translate", reading: "やくす", studyType: 'read-only' },
        { kanji: "かす", meaning: "to lend", reading: "かす", studyType: 'read-only' },
        { kanji: "つれていく", meaning: "to take (someone) to (a place)", reading: "つれていく", studyType: 'read-only' },
        { kanji: "みちにまよう", meaning: "to become lost; to lose one's way", reading: "みちにまよう", studyType: 'read-only' },
        { kanji: "むかえにいく", meaning: "to go to pick up", reading: "むかえにいく", studyType: 'read-only' },
        { kanji: "あつめる", meaning: "to collect", reading: "あつめる", studyType: 'read-only' },
        { kanji: "いれる", meaning: "to put (something) in", reading: "いれる", studyType: 'read-only' },
        { kanji: "みせる", meaning: "to show", reading: "みせる", studyType: 'read-only' },
        { kanji: "のりおくれる", meaning: "to miss (a train, bus, etc.)", reading: "のりおくれる", studyType: 'read-only' },
        { kanji: "アイロンをかける", meaning: "to iron (clothes)", reading: "アイロンをかける", studyType: 'read-only' },
        { kanji: "あさねぼうする", meaning: "to oversleep", reading: "あさねぼうする", studyType: 'read-only' },
        { kanji: "あんないする", meaning: "to show (someone) around", reading: "あんないする", studyType: 'read-only' },
        { kanji: "せつめいする", meaning: "to explain", reading: "せつめいする", studyType: 'read-only' },
        { kanji: "むかえにくる", meaning: "to come to pick up", reading: "むかえにくる", studyType: 'read-only' },
        { kanji: "きょうじゅうに", meaning: "by the end of today", reading: "きょうじゅうに", studyType: 'read-only' },
        { kanji: "じゅぎょうちゅうに", meaning: "in class; during the class", reading: "じゅぎょうちゅうに", studyType: 'read-only' },
        { kanji: "このあいだ", meaning: "the other day", reading: "このあいだ", studyType: 'read-only' },
        { kanji: "これから", meaning: "from now on", reading: "これから", studyType: 'read-only' },
        { kanji: "このぐらい", meaning: "about this much", reading: "このぐらい", studyType: 'read-only' },
        { kanji: "じぶんで", meaning: "(do something) by oneself", reading: "じぶんで", studyType: 'read-only' },
        { kanji: "ほかの", meaning: "other", reading: "ほかの", studyType: 'read-only' },
        { kanji: "ええと", meaning: "well . . . ; let me see . . .", reading: "ええと", studyType: 'read-only' },
        { kanji: "じつは", meaning: "actually; in fact", reading: "じつは", studyType: 'read-only' },
        { kanji: "～いがい", meaning: "other than . . .", reading: "～いがい", studyType: 'read-only' },
        { kanji: "ごめん", meaning: "I'm sorry. (casual)", reading: "ごめん", studyType: 'read-only' },
        { kanji: "しつれいします", meaning: "Excuse me.; Sorry to interrupt you.", reading: "しつれいします", studyType: 'read-only' },
        { kanji: "子供", meaning: "こども", reading: "こども", studyType: 'write' },
        { kanji: "世界", meaning: "せかい", reading: "せかい", studyType: 'write' },
        { kanji: "全部", meaning: "ぜんぶ", reading: "ぜんぶ", studyType: 'write' },
        { kanji: "部屋", meaning: "へや", reading: "へや", studyType: 'write' },
        { kanji: "始まる", meaning: "はじまる", reading: "はじまる", studyType: 'write' },
        { kanji: "始める", meaning: "はじめる", reading: "はじめる", studyType: 'write' },
        { kanji: "毎週", meaning: "まいしゅう", reading: "まいしゅう", studyType: 'write' },
        { kanji: "先週", meaning: "せんしゅう", reading: "せんしゅう", studyType: 'write' },
        { kanji: "一週間", meaning: "いっしゅうかん", reading: "いっしゅうかん", studyType: 'write' },
        { kanji: "考える", meaning: "かんがえる", reading: "かんがえる", studyType: 'write' },
        { kanji: "開ける", meaning: "あける", reading: "あける", studyType: 'write' },
        { kanji: "本屋", meaning: "ほんや", reading: "ほんや", studyType: 'write' },
        { kanji: "味方", meaning: "みかた", reading: "みかた", studyType: 'write' },
        { kanji: "運動", meaning: "うんどう", reading: "うんどう", studyType: 'write' },
        { kanji: "運転", meaning: "うんてん", reading: "うんてん", studyType: 'write' },
        { kanji: "教える", meaning: "おしえる", reading: "おしえる", studyType: 'write' },
        { kanji: "教室", meaning: "きょうしつ", reading: "きょうしつ", studyType: 'write' },
        { kanji: "〜以外", meaning: "〜いがい", reading: "〜いがい", studyType: 'write' },
      ] },
      ch17: { label: 'Chapter 17', cards: [
        { kanji: "あかちゃん", meaning: "baby", reading: "あかちゃん", studyType: 'read-only' },
        { kanji: "おきゃくさん", meaning: "guest; visitor; client; customer", reading: "おきゃくさん", studyType: 'read-only' },
        { kanji: "しゅしょう", meaning: "prime minister", reading: "しゅしょう", studyType: 'read-only' },
        { kanji: "サラリーマン", meaning: "salaryman; office worker", reading: "サラリーマン", studyType: 'read-only' },
        { kanji: "きゅうりょう", meaning: "salary", reading: "きゅうりょう", studyType: 'read-only' },
        { kanji: "ざんぎょう", meaning: "overtime work", reading: "ざんぎょう", studyType: 'read-only' },
        { kanji: "パンダ", meaning: "panda", reading: "パンダ", studyType: 'read-only' },
        { kanji: "コンタクト（レンズ）", meaning: "contact lenses", reading: "コンタクト（レンズ）", studyType: 'read-only' },
        { kanji: "ひげ", meaning: "beard", reading: "ひげ", studyType: 'read-only' },
        { kanji: "ブーツ", meaning: "boots", reading: "ブーツ", studyType: 'read-only' },
        { kanji: "かぎ", meaning: "lock; key", reading: "かぎ", studyType: 'read-only' },
        { kanji: "たからくじ", meaning: "lottery", reading: "たからくじ", studyType: 'read-only' },
        { kanji: "かみ", meaning: "paper", reading: "かみ", studyType: 'read-only' },
        { kanji: "スプーン", meaning: "spoon", reading: "スプーン", studyType: 'read-only' },
        { kanji: "おゆ", meaning: "hot water", reading: "おゆ", studyType: 'read-only' },
        { kanji: "でんしレンジ", meaning: "microwave oven", reading: "でんしレンジ", studyType: 'read-only' },
        { kanji: "ヒーター", meaning: "heater", reading: "ヒーター", studyType: 'read-only' },
        { kanji: "ニュース", meaning: "news", reading: "ニュース", studyType: 'read-only' },
        { kanji: "かじ", meaning: "fire", reading: "かじ", studyType: 'read-only' },
        { kanji: "りょこうがいしゃ", meaning: "travel agency", reading: "りょこうがいしゃ", studyType: 'read-only' },
        { kanji: "ショッピングモール", meaning: "shopping mall", reading: "ショッピングモール", studyType: 'read-only' },
        { kanji: "りょう", meaning: "dormitory", reading: "りょう", studyType: 'read-only' },
        { kanji: "ちがい", meaning: "difference", reading: "ちがい", studyType: 'read-only' },
        { kanji: "ひみつ", meaning: "secret", reading: "ひみつ", studyType: 'read-only' },
        { kanji: "じゅんび", meaning: "preparation", reading: "じゅんび", studyType: 'read-only' },
        { kanji: "じぶん", meaning: "oneself", reading: "じぶん", studyType: 'read-only' },
        { kanji: "あぶない", meaning: "dangerous", reading: "あぶない", studyType: 'read-only' },
        { kanji: "うらやましい", meaning: "envious", reading: "うらやましい", studyType: 'read-only' },
        { kanji: "すくない", meaning: "a little; a few", reading: "すくない", studyType: 'read-only' },
        { kanji: "つごうがわるい", meaning: "inconvenient; to have a scheduling conflict", reading: "つごうがわるい", studyType: 'read-only' },
        { kanji: "つよい", meaning: "strong", reading: "つよい", studyType: 'read-only' },
        { kanji: "さいあく（な）", meaning: "the worst", reading: "さいあく（な）", studyType: 'read-only' },
        { kanji: "えらぶ", meaning: "to choose; to select", reading: "えらぶ", studyType: 'read-only' },
        { kanji: "おゆをわかす", meaning: "to boil water", reading: "おゆをわかす", studyType: 'read-only' },
        { kanji: "かみをとかす", meaning: "to comb one's hair", reading: "かみをとかす", studyType: 'read-only' },
        { kanji: "ひげをそる", meaning: "to shave one's beard", reading: "ひげをそる", studyType: 'read-only' },
        { kanji: "ぬぐ", meaning: "to take off (clothes)", reading: "ぬぐ", studyType: 'read-only' },
        { kanji: "こむ", meaning: "to get crowded", reading: "こむ", studyType: 'read-only' },
        { kanji: "たからくじにあたる", meaning: "to win a lottery", reading: "たからくじにあたる", studyType: 'read-only' },
        { kanji: "いれる", meaning: "to make tea, coffee, etc.", reading: "いれる", studyType: 'read-only' },
        { kanji: "うまれる", meaning: "to be born", reading: "うまれる", studyType: 'read-only' },
        { kanji: "かぎをかける", meaning: "to lock", reading: "かぎをかける", studyType: 'read-only' },
        { kanji: "たりる", meaning: "to be sufficient; to be enough", reading: "たりる", studyType: 'read-only' },
        { kanji: "なれる", meaning: "to get used to . . .", reading: "なれる", studyType: 'read-only' },
        { kanji: "おいのりする", meaning: "to pray", reading: "おいのりする", studyType: 'read-only' },
        { kanji: "けしょうする", meaning: "to put makeup on", reading: "けしょうする", studyType: 'read-only' },
        { kanji: "しゅうしょくする", meaning: "to get a full-time job (at . . . )", reading: "しゅうしょくする", studyType: 'read-only' },
        { kanji: "りこんする", meaning: "to get a divorce", reading: "りこんする", studyType: 'read-only' },
        { kanji: "する", meaning: "to wear small items (necktie, watch, etc.)", reading: "する", studyType: 'read-only' },
        { kanji: "ずいぶん", meaning: "very", reading: "ずいぶん", studyType: 'read-only' },
        { kanji: "たとえば", meaning: "for example", reading: "たとえば", studyType: 'read-only' },
        { kanji: "～にくらべて", meaning: "compared with . . .", reading: "～にくらべて", studyType: 'read-only' },
        { kanji: "～によると", meaning: "according to . . .", reading: "～によると", studyType: 'read-only' },
        { kanji: "まえ", meaning: "before . . .", reading: "まえ", studyType: 'read-only' },
        { kanji: "やっぱり", meaning: "after all", reading: "やっぱり", studyType: 'read-only' },
        { kanji: "～かな（あ）", meaning: "I wonder . . . (casual)", reading: "～かな（あ）", studyType: 'read-only' },
        { kanji: "そうか", meaning: "I see. (casual)", reading: "そうか", studyType: 'read-only' },
        { kanji: "おめでとうございます", meaning: "Congratulations!", reading: "おめでとうございます", studyType: 'read-only' },
        { kanji: "分野", meaning: "ぶんや", reading: "ぶんや", studyType: 'write' },
        { kanji: "小野さん", meaning: "おのさん", reading: "おのさん", studyType: 'write' },
        { kanji: "長野", meaning: "ながの", reading: "ながの", studyType: 'write' },
        { kanji: "習う", meaning: "ならう", reading: "ならう", studyType: 'write' },
        { kanji: "主に", meaning: "おもに", reading: "おもに", studyType: 'write' },
        { kanji: "ご主人", meaning: "ごしゅじん", reading: "ごしゅじん", studyType: 'write' },
        { kanji: "二十五歳", meaning: "にじゅうごさい", reading: "にじゅうごさい", studyType: 'write' },
        { kanji: "集める", meaning: "あつめる", reading: "あつめる", studyType: 'write' },
        { kanji: "発表する", meaning: "はっぴょうする", reading: "はっぴょうする", studyType: 'write' },
        { kanji: "作品", meaning: "さくひん", reading: "さくひん", studyType: 'write' },
        { kanji: "写真", meaning: "しゃしん", reading: "しゃしん", studyType: 'write' },
        { kanji: "写す", meaning: "うつす", reading: "うつす", studyType: 'write' },
        { kanji: "文字", meaning: "もじ", reading: "もじ", studyType: 'write' },
        { kanji: "活動", meaning: "かつどう", reading: "かつどう", studyType: 'write' },
        { kanji: "生活", meaning: "せいかつ", reading: "せいかつ", studyType: 'write' },
        { kanji: "結婚する", meaning: "けっこんする", reading: "けっこんする", studyType: 'write' },
        { kanji: "歩く", meaning: "あるく", reading: "あるく", studyType: 'write' },
      ] },
      ch18: { label: 'Chapter 18', cards: [
        { kanji: "カーテン", meaning: "curtain", reading: "カーテン", studyType: 'read-only' },
        { kanji: "ソファ", meaning: "sofa", reading: "ソファ", studyType: 'read-only' },
        { kanji: "れいぞうこ", meaning: "refrigerator", reading: "れいぞうこ", studyType: 'read-only' },
        { kanji: "スイッチ", meaning: "switch", reading: "スイッチ", studyType: 'read-only' },
        { kanji: "しょうゆ", meaning: "soy sauce", reading: "しょうゆ", studyType: 'read-only' },
        { kanji: "スープ", meaning: "soup", reading: "スープ", studyType: 'read-only' },
        { kanji: "バナナ", meaning: "banana", reading: "バナナ", studyType: 'read-only' },
        { kanji: "ポップコーン", meaning: "popcorn", reading: "ポップコーン", studyType: 'read-only' },
        { kanji: "シャンプー", meaning: "shampoo", reading: "シャンプー", studyType: 'read-only' },
        { kanji: "ろうそく", meaning: "candle", reading: "ろうそく", studyType: 'read-only' },
        { kanji: "タオル", meaning: "towel", reading: "タオル", studyType: 'read-only' },
        { kanji: "スカート", meaning: "skirt", reading: "スカート", studyType: 'read-only' },
        { kanji: "にっき", meaning: "diary", reading: "にっき", studyType: 'read-only' },
        { kanji: "けいたい（でんわ）", meaning: "cell phone", reading: "けいたい（でんわ）", studyType: 'read-only' },
        { kanji: "さくら", meaning: "cherry blossom", reading: "さくら", studyType: 'read-only' },
        { kanji: "むし", meaning: "insect", reading: "むし", studyType: 'read-only' },
        { kanji: "やちん", meaning: "rent", reading: "やちん", studyType: 'read-only' },
        { kanji: "そと", meaning: "outside", reading: "そと", studyType: 'read-only' },
        { kanji: "あと", meaning: "the rest", reading: "あと", studyType: 'read-only' },
        { kanji: "ゆうがた", meaning: "evening", reading: "ゆうがた", studyType: 'read-only' },
        { kanji: "あかるい", meaning: "bright", reading: "あかるい", studyType: 'read-only' },
        { kanji: "くらい", meaning: "dark", reading: "くらい", studyType: 'read-only' },
        { kanji: "はずかしい", meaning: "embarrassing; to feel embarrassed", reading: "はずかしい", studyType: 'read-only' },
        { kanji: "たいせつ（な）", meaning: "precious; important", reading: "たいせつ（な）", studyType: 'read-only' },
        { kanji: "ふあん（な）", meaning: "anxious; worried", reading: "ふあん（な）", studyType: 'read-only' },
        { kanji: "むり（な）", meaning: "impossible", reading: "むり（な）", studyType: 'read-only' },
        { kanji: "あく", meaning: "(something) opens", reading: "あく", studyType: 'read-only' },
        { kanji: "しまる", meaning: "(something) closes", reading: "しまる", studyType: 'read-only' },
        { kanji: "あやまる", meaning: "to apologize", reading: "あやまる", studyType: 'read-only' },
        { kanji: "おす", meaning: "to press; to push", reading: "おす", studyType: 'read-only' },
        { kanji: "おとす", meaning: "to drop (something)", reading: "おとす", studyType: 'read-only' },
        { kanji: "おゆがわく", meaning: "water boils", reading: "おゆがわく", studyType: 'read-only' },
        { kanji: "ころぶ", meaning: "to fall down", reading: "ころぶ", studyType: 'read-only' },
        { kanji: "こわす", meaning: "to break (something)", reading: "こわす", studyType: 'read-only' },
        { kanji: "さく", meaning: "to bloom", reading: "さく", studyType: 'read-only' },
        { kanji: "たすかる", meaning: "to be saved; to be helped", reading: "たすかる", studyType: 'read-only' },
        { kanji: "たのむ", meaning: "to ask (a favor)", reading: "たのむ", studyType: 'read-only' },
        { kanji: "つく", meaning: "(something) turns on", reading: "つく", studyType: 'read-only' },
        { kanji: "よごす", meaning: "to make dirty", reading: "よごす", studyType: 'read-only' },
        { kanji: "おちる", meaning: "(something) drops", reading: "おちる", studyType: 'read-only' },
        { kanji: "かたづける", meaning: "to tidy up", reading: "かたづける", studyType: 'read-only' },
        { kanji: "かんがえる", meaning: "to think (about); to consider", reading: "かんがえる", studyType: 'read-only' },
        { kanji: "きえる", meaning: "(something) goes off", reading: "きえる", studyType: 'read-only' },
        { kanji: "こわれる", meaning: "(something) breaks", reading: "こわれる", studyType: 'read-only' },
        { kanji: "よごれる", meaning: "to become dirty", reading: "よごれる", studyType: 'read-only' },
        { kanji: "ちゅうもんする", meaning: "to place an order", reading: "ちゅうもんする", studyType: 'read-only' },
        { kanji: "いますぐ", meaning: "right away", reading: "いますぐ", studyType: 'read-only' },
        { kanji: "～までに", meaning: "by (time/date)", reading: "～までに", studyType: 'read-only' },
        { kanji: "ほんとうに", meaning: "really", reading: "ほんとうに", studyType: 'read-only' },
        { kanji: "まず", meaning: "first of all", reading: "まず", studyType: 'read-only' },
        { kanji: "おかげで", meaning: "thanks to . . .", reading: "おかげで", studyType: 'read-only' },
        { kanji: "どうしよう", meaning: "What should I/we do?", reading: "どうしよう", studyType: 'read-only' },
        { kanji: "～（ん）だろう", meaning: "short form of ～（ん）でしょう", reading: "～（ん）だろう", studyType: 'read-only' },
        { kanji: "おさきにしつれいします", meaning: "See you. (lit., I'm leaving ahead of you.)", reading: "おさきにしつれいします", studyType: 'read-only' },
        { kanji: "おつかれさま（でした）", meaning: "You must be tired after working so hard. (greeting between friends and coworkers)", reading: "おつかれさま（でした）", studyType: 'read-only' },
        { kanji: "目的", meaning: "もくてき", reading: "もくてき", studyType: 'write' },
        { kanji: "目", meaning: "め", reading: "め", studyType: 'write' },
        { kanji: "洋服", meaning: "ようふく", reading: "ようふく", studyType: 'write' },
        { kanji: "服", meaning: "ふく", reading: "ふく", studyType: 'write' },
        { kanji: "食堂", meaning: "しょくどう", reading: "しょくどう", studyType: 'write' },
        { kanji: "力仕事", meaning: "ちからしごと", reading: "ちからしごと", studyType: 'write' },
        { kanji: "授業", meaning: "じゅぎょう", reading: "じゅぎょう", studyType: 'write' },
        { kanji: "試験", meaning: "しけん", reading: "しけん", studyType: 'write' },
        { kanji: "貸す", meaning: "かす", reading: "かす", studyType: 'write' },
        { kanji: "図書館", meaning: "としょかん", reading: "としょかん", studyType: 'write' },
        { kanji: "地図", meaning: "ちず", reading: "ちず", studyType: 'write' },
        { kanji: "旅館", meaning: "りょかん", reading: "りょかん", studyType: 'write' },
        { kanji: "映画館", meaning: "えいがかん", reading: "えいがかん", studyType: 'write' },
        { kanji: "終わる", meaning: "おわる", reading: "おわる", studyType: 'write' },
        { kanji: "宿題", meaning: "しゅくだい", reading: "しゅくだい", studyType: 'write' },
      ] },
      ch19: { label: 'Chapter 19', cards: [
        { kanji: "おくさま", meaning: "(your/someone's) wife (polite)", reading: "おくさま", studyType: 'read-only' },
        { kanji: "おこさん", meaning: "(your/someone's) child (polite)", reading: "おこさん", studyType: 'read-only' },
        { kanji: "ちゅうがくせい", meaning: "junior high school student", reading: "ちゅうがくせい", studyType: 'read-only' },
        { kanji: "ぶちょう", meaning: "department manager", reading: "ぶちょう", studyType: 'read-only' },
        { kanji: "しゅっちょう", meaning: "business trip", reading: "しゅっちょう", studyType: 'read-only' },
        { kanji: "けいご", meaning: "honorific language", reading: "けいご", studyType: 'read-only' },
        { kanji: "こちら", meaning: "this way (polite)", reading: "こちら", studyType: 'read-only' },
        { kanji: "どちら", meaning: "where (polite)", reading: "どちら", studyType: 'read-only' },
        { kanji: "おれい", meaning: "expression of gratitude", reading: "おれい", studyType: 'read-only' },
        { kanji: "しゅるい", meaning: "a kind; a sort", reading: "しゅるい", studyType: 'read-only' },
        { kanji: "はなし", meaning: "talk; story", reading: "はなし", studyType: 'read-only' },
        { kanji: "なやみ", meaning: "worry", reading: "なやみ", studyType: 'read-only' },
        { kanji: "まちがい", meaning: "mistake", reading: "まちがい", studyType: 'read-only' },
        { kanji: "せいかく", meaning: "personality", reading: "せいかく", studyType: 'read-only' },
        { kanji: "なまけもの", meaning: "lazy person", reading: "なまけもの", studyType: 'read-only' },
        { kanji: "はずかしがりや", meaning: "shy person", reading: "はずかしがりや", studyType: 'read-only' },
        { kanji: "なかがいい", meaning: "be on good/close terms; to get along well", reading: "なかがいい", studyType: 'read-only' },
        { kanji: "まじめ（な）", meaning: "serious; sober; diligent", reading: "まじめ（な）", studyType: 'read-only' },
        { kanji: "いらっしゃる", meaning: "(honorific expression for いく, くる, and いる)", reading: "いらっしゃる", studyType: 'read-only' },
        { kanji: "めしあがる", meaning: "(honorific expression for たべる and のむ)", reading: "めしあがる", studyType: 'read-only' },
        { kanji: "くださる", meaning: "(honorific expression for くれる)", reading: "くださる", studyType: 'read-only' },
        { kanji: "なさる", meaning: "(honorific expression for する)", reading: "なさる", studyType: 'read-only' },
        { kanji: "おやすみになる", meaning: "(honorific expression for ねる)", reading: "おやすみになる", studyType: 'read-only' },
        { kanji: "ごらんになる", meaning: "(honorific expression for みる)", reading: "ごらんになる", studyType: 'read-only' },
        { kanji: "おっしゃる", meaning: "(honorific expression for いう)", reading: "おっしゃる", studyType: 'read-only' },
        { kanji: "～ていらっしゃる", meaning: "(honorific expression for ～ている)", reading: "～ていらっしゃる", studyType: 'read-only' },
        { kanji: "おくる", meaning: "to walk/drive (someone)", reading: "おくる", studyType: 'read-only' },
        { kanji: "おこる", meaning: "to get angry", reading: "おこる", studyType: 'read-only' },
        { kanji: "きまる", meaning: "to be decided", reading: "きまる", studyType: 'read-only' },
        { kanji: "しりあう", meaning: "to get acquainted with", reading: "しりあう", studyType: 'read-only' },
        { kanji: "よぶ", meaning: "to call (one's name); to invite", reading: "よぶ", studyType: 'read-only' },
        { kanji: "ひっこす", meaning: "to move (to another place to live)", reading: "ひっこす", studyType: 'read-only' },
        { kanji: "よる", meaning: "to stop by", reading: "よる", studyType: 'read-only' },
        { kanji: "おくれる", meaning: "to become late", reading: "おくれる", studyType: 'read-only' },
        { kanji: "かける", meaning: "to sit down", reading: "かける", studyType: 'read-only' },
        { kanji: "もてる", meaning: "to be popular (in terms of romantic interest)", reading: "もてる", studyType: 'read-only' },
        { kanji: "はれる", meaning: "to become sunny", reading: "はれる", studyType: 'read-only' },
        { kanji: "ごちそうする", meaning: "to treat/invite (someone) to a meal", reading: "ごちそうする", studyType: 'read-only' },
        { kanji: "えんりょする", meaning: "to hold back for the time being; to refrain from", reading: "えんりょする", studyType: 'read-only' },
        { kanji: "しょうたいする", meaning: "to invite someone (to an event/a place)", reading: "しょうたいする", studyType: 'read-only' },
        { kanji: "はなしをする", meaning: "to have a talk", reading: "はなしをする", studyType: 'read-only' },
        { kanji: "おととい", meaning: "the day before yesterday", reading: "おととい", studyType: 'read-only' },
        { kanji: "まいあさ", meaning: "every morning", reading: "まいあさ", studyType: 'read-only' },
        { kanji: "それで", meaning: "then; therefore", reading: "それで", studyType: 'read-only' },
        { kanji: "なぜ", meaning: "why", reading: "なぜ", studyType: 'read-only' },
        { kanji: "ほんとうは", meaning: "in fact; originally", reading: "ほんとうは", studyType: 'read-only' },
        { kanji: "まだ", meaning: "still", reading: "まだ", studyType: 'read-only' },
        { kanji: "しょうしょう", meaning: "a few seconds", reading: "しょうしょう", studyType: 'read-only' },
        { kanji: "～めいさま", meaning: "party of . . . people", reading: "～めいさま", studyType: 'read-only' },
        { kanji: "ようこそ", meaning: "Welcome.", reading: "ようこそ", studyType: 'read-only' },
        { kanji: "よろしくおつたえください", meaning: "Please give my best regards (to . . . ).", reading: "よろしくおつたえください", studyType: 'read-only' },
        { kanji: "春", meaning: "はる", reading: "はる", studyType: 'write' },
        { kanji: "秋", meaning: "あき", reading: "あき", studyType: 'write' },
        { kanji: "冬", meaning: "ふゆ", reading: "ふゆ", studyType: 'write' },
        { kanji: "冬休み", meaning: "ふゆやすみ", reading: "ふゆやすみ", studyType: 'write' },
        { kanji: "花", meaning: "はな", reading: "はな", studyType: 'write' },
        { kanji: "〜様", meaning: "〜さま", reading: "〜さま", studyType: 'write' },
        { kanji: "不安な", meaning: "ふあんな", reading: "ふあんな", studyType: 'write' },
        { kanji: "姉", meaning: "あね", reading: "あね", studyType: 'write' },
        { kanji: "お姉さん", meaning: "おねえさん", reading: "おねえさん", studyType: 'write' },
        { kanji: "兄", meaning: "あに", reading: "あに", studyType: 'write' },
        { kanji: "お兄さん", meaning: "おにいさん", reading: "おにいさん", studyType: 'write' },
        { kanji: "漢字", meaning: "かんじ", reading: "かんじ", studyType: 'write' },
        { kanji: "卒業する", meaning: "そつぎょうする", reading: "そつぎょうする", studyType: 'write' },
        { kanji: "工学", meaning: "こうがく", reading: "こうがく", studyType: 'write' },
        { kanji: "研究", meaning: "けんきゅう", reading: "けんきゅう", studyType: 'write' },
        { kanji: "質問", meaning: "しつもん", reading: "しつもん", studyType: 'write' },
        { kanji: "多い", meaning: "おおい", reading: "おおい", studyType: 'write' },
      ] },
      ch20: { label: 'Chapter 20', cards: [
        { kanji: "アニメ", meaning: "animation", reading: "アニメ", studyType: 'read-only' },
        { kanji: "しょうせつ", meaning: "novel", reading: "しょうせつ", studyType: 'read-only' },
        { kanji: "しゅみ", meaning: "hobby; pastime", reading: "しゅみ", studyType: 'read-only' },
        { kanji: "つき", meaning: "moon", reading: "つき", studyType: 'read-only' },
        { kanji: "うちゅうじん", meaning: "space alien", reading: "うちゅうじん", studyType: 'read-only' },
        { kanji: "せんす", meaning: "(hand) fan", reading: "せんす", studyType: 'read-only' },
        { kanji: "スニーカー", meaning: "sneakers", reading: "スニーカー", studyType: 'read-only' },
        { kanji: "ヘッドホン", meaning: "headphones", reading: "ヘッドホン", studyType: 'read-only' },
        { kanji: "おにぎり", meaning: "rice ball", reading: "おにぎり", studyType: 'read-only' },
        { kanji: "どうぶつ", meaning: "animal", reading: "どうぶつ", studyType: 'read-only' },
        { kanji: "あちら", meaning: "that way (polite)", reading: "あちら", studyType: 'read-only' },
        { kanji: "かかりのもの", meaning: "our person in charge", reading: "かかりのもの", studyType: 'read-only' },
        { kanji: "おたく", meaning: "(someone's) home/house", reading: "おたく", studyType: 'read-only' },
        { kanji: "～や", meaning: ". . . shop", reading: "～や", studyType: 'read-only' },
        { kanji: "してん", meaning: "branch office", reading: "してん", studyType: 'read-only' },
        { kanji: "ドイツ", meaning: "Germany", reading: "ドイツ", studyType: 'read-only' },
        { kanji: "しんごう", meaning: "traffic light", reading: "しんごう", studyType: 'read-only' },
        { kanji: "かど", meaning: "corner", reading: "かど", studyType: 'read-only' },
        { kanji: "じ", meaning: "letter; character", reading: "じ", studyType: 'read-only' },
        { kanji: "おと", meaning: "sound", reading: "おと", studyType: 'read-only' },
        { kanji: "おもい", meaning: "heavy; serious (illness)", reading: "おもい", studyType: 'read-only' },
        { kanji: "かるい", meaning: "light", reading: "かるい", studyType: 'read-only' },
        { kanji: "ふしぎ（な）", meaning: "mysterious", reading: "ふしぎ（な）", studyType: 'read-only' },
        { kanji: "おる", meaning: "(extra-modest expression for いる)", reading: "おる", studyType: 'read-only' },
        { kanji: "まいる", meaning: "(extra-modest expression for いく and くる)", reading: "まいる", studyType: 'read-only' },
        { kanji: "もうす", meaning: "(extra-modest expression for いう)", reading: "もうす", studyType: 'read-only' },
        { kanji: "いたす", meaning: "(extra-modest expression for する)", reading: "いたす", studyType: 'read-only' },
        { kanji: "いただく", meaning: "(extra-modest expression for たべる and のむ)", reading: "いただく", studyType: 'read-only' },
        { kanji: "ござる", meaning: "(extra-modest expression for ある)", reading: "ござる", studyType: 'read-only' },
        { kanji: "～ておる", meaning: "(extra-modest expression for ～ている)", reading: "～ておる", studyType: 'read-only' },
        { kanji: "～でござる", meaning: "(extra-modest expression for です)", reading: "～でござる", studyType: 'read-only' },
        { kanji: "いただく", meaning: "(humble expression for もらう)", reading: "いただく", studyType: 'read-only' },
        { kanji: "うかがう", meaning: "to humbly visit; to humbly ask", reading: "うかがう", studyType: 'read-only' },
        { kanji: "まがる", meaning: "to turn (right/left)", reading: "まがる", studyType: 'read-only' },
        { kanji: "もどる", meaning: "to return; to come back", reading: "もどる", studyType: 'read-only' },
        { kanji: "さしあげる", meaning: "(humble expression for あげる)", reading: "さしあげる", studyType: 'read-only' },
        { kanji: "きこえる", meaning: "to be audible", reading: "きこえる", studyType: 'read-only' },
        { kanji: "つたえる", meaning: "to convey message", reading: "つたえる", studyType: 'read-only' },
        { kanji: "またせる", meaning: "to keep (someone) waiting", reading: "またせる", studyType: 'read-only' },
        { kanji: "つづける", meaning: "to continue", reading: "つづける", studyType: 'read-only' },
        { kanji: "こうかんする", meaning: "to exchange", reading: "こうかんする", studyType: 'read-only' },
        { kanji: "へんぴんする", meaning: "to return (merchandise)", reading: "へんぴんする", studyType: 'read-only' },
        { kanji: "せいかつする", meaning: "to lead a life", reading: "せいかつする", studyType: 'read-only' },
        { kanji: "～かい", meaning: ". . . th floor", reading: "～かい", studyType: 'read-only' },
        { kanji: "いっかい", meaning: "first floor", reading: "いっかい", studyType: 'read-only' },
        { kanji: "～みたいな", meaning: "like . . .", reading: "～みたいな", studyType: 'read-only' },
        { kanji: "また", meaning: "again", reading: "また", studyType: 'read-only' },
        { kanji: "では", meaning: "well then (polite)", reading: "では", studyType: 'read-only' },
        { kanji: "できれば", meaning: "if possible", reading: "できれば", studyType: 'read-only' },
        { kanji: "まことに", meaning: "really (very polite)", reading: "まことに", studyType: 'read-only' },
        { kanji: "よろしかったら", meaning: "if it is okay (polite)", reading: "よろしかったら", studyType: 'read-only' },
        { kanji: "かしこまりました", meaning: "Certainly.", reading: "かしこまりました", studyType: 'read-only' },
        { kanji: "しつれいしました", meaning: "I'm very sorry.", reading: "しつれいしました", studyType: 'read-only' },
        { kanji: "もうしわけありません", meaning: "You have my apologies. (polite)", reading: "もうしわけありません", studyType: 'read-only' },
      ] },
      ch21: { label: 'Chapter 21', cards: [
        { kanji: "ちかん", meaning: "groper; pervert", reading: "ちかん", studyType: 'read-only' },
        { kanji: "どろぼう", meaning: "thief; burglar", reading: "どろぼう", studyType: 'read-only' },
        { kanji: "はんにん", meaning: "criminal", reading: "はんにん", studyType: 'read-only' },
        { kanji: "どうりょう", meaning: "colleague", reading: "どうりょう", studyType: 'read-only' },
        { kanji: "かいぎ", meaning: "business meeting; conference", reading: "かいぎ", studyType: 'read-only' },
        { kanji: "スピーチ", meaning: "speech", reading: "スピーチ", studyType: 'read-only' },
        { kanji: "か", meaning: "mosquito", reading: "か", studyType: 'read-only' },
        { kanji: "ガソリン", meaning: "gasoline", reading: "ガソリン", studyType: 'read-only' },
        { kanji: "ポスター", meaning: "poster", reading: "ポスター", studyType: 'read-only' },
        { kanji: "もんく", meaning: "complaint", reading: "もんく", studyType: 'read-only' },
        { kanji: "るす", meaning: "absence; not at home", reading: "るす", studyType: 'read-only' },
        { kanji: "けいさつ", meaning: "police; police station", reading: "けいさつ", studyType: 'read-only' },
        { kanji: "せいふ", meaning: "government", reading: "せいふ", studyType: 'read-only' },
        { kanji: "じゅぎょうりょう", meaning: "tuition", reading: "じゅぎょうりょう", studyType: 'read-only' },
        { kanji: "こうじょう", meaning: "factory", reading: "こうじょう", studyType: 'read-only' },
        { kanji: "かんきょう", meaning: "environment", reading: "かんきょう", studyType: 'read-only' },
        { kanji: "しゅうでん", meaning: "last train (of the day)", reading: "しゅうでん", studyType: 'read-only' },
        { kanji: "こと", meaning: "things; matters", reading: "こと", studyType: 'read-only' },
        { kanji: "むかし", meaning: "old days; past", reading: "むかし", studyType: 'read-only' },
        { kanji: "とおい", meaning: "far (away)", reading: "とおい", studyType: 'read-only' },
        { kanji: "ひどい", meaning: "awful", reading: "ひどい", studyType: 'read-only' },
        { kanji: "あんぜん（な）", meaning: "safe", reading: "あんぜん（な）", studyType: 'read-only' },
        { kanji: "めちゃくちゃ（な）", meaning: "messy; disorganized", reading: "めちゃくちゃ（な）", studyType: 'read-only' },
        { kanji: "へん（な）", meaning: "strange; unusual", reading: "へん（な）", studyType: 'read-only' },
        { kanji: "おく", meaning: "to put; to lay; to place", reading: "おく", studyType: 'read-only' },
        { kanji: "つつむ", meaning: "to wrap; to cover", reading: "つつむ", studyType: 'read-only' },
        { kanji: "はる", meaning: "to post; to stick", reading: "はる", studyType: 'read-only' },
        { kanji: "やく", meaning: "to bake; to burn; to grill", reading: "やく", studyType: 'read-only' },
        { kanji: "やる", meaning: "to give (to pets, plants, younger siblings, etc.)", reading: "やる", studyType: 'read-only' },
        { kanji: "ける", meaning: "to kick", reading: "ける", studyType: 'read-only' },
        { kanji: "なぐる", meaning: "to strike; to hit; to punch", reading: "なぐる", studyType: 'read-only' },
        { kanji: "ふむ", meaning: "to step on", reading: "ふむ", studyType: 'read-only' },
        { kanji: "さす", meaning: "to bite", reading: "さす", studyType: 'read-only' },
        { kanji: "ぬすむ", meaning: "to steal; to rob", reading: "ぬすむ", studyType: 'read-only' },
        { kanji: "さわる", meaning: "to touch", reading: "さわる", studyType: 'read-only' },
        { kanji: "つかまる", meaning: "to be arrested; to be caught", reading: "つかまる", studyType: 'read-only' },
        { kanji: "きがつく", meaning: "to notice", reading: "きがつく", studyType: 'read-only' },
        { kanji: "ふる", meaning: "to turn down (somebody); to reject; to jilt", reading: "ふる", studyType: 'read-only' },
        { kanji: "もんくをいう", meaning: "to complain", reading: "もんくをいう", studyType: 'read-only' },
        { kanji: "いじめる", meaning: "to bully", reading: "いじめる", studyType: 'read-only' },
        { kanji: "ほめる", meaning: "to praise; to say nice things", reading: "ほめる", studyType: 'read-only' },
        { kanji: "きがえる", meaning: "to change clothes", reading: "きがえる", studyType: 'read-only' },
        { kanji: "しんじる", meaning: "to believe", reading: "しんじる", studyType: 'read-only' },
        { kanji: "ためる", meaning: "to save money", reading: "ためる", studyType: 'read-only' },
        { kanji: "まちがえる", meaning: "to make a mistake", reading: "まちがえる", studyType: 'read-only' },
        { kanji: "みつける", meaning: "to find", reading: "みつける", studyType: 'read-only' },
        { kanji: "くらべる", meaning: "to compare", reading: "くらべる", studyType: 'read-only' },
        { kanji: "ばかにする", meaning: "to insult; to make a fool of . . .", reading: "ばかにする", studyType: 'read-only' },
        { kanji: "びっくりする", meaning: "to be surprised", reading: "びっくりする", studyType: 'read-only' },
        { kanji: "ひるねをする", meaning: "to take a nap", reading: "ひるねをする", studyType: 'read-only' },
        { kanji: "れんらくする", meaning: "to contact", reading: "れんらくする", studyType: 'read-only' },
        { kanji: "ごぜんちゅう", meaning: "in the morning", reading: "ごぜんちゅう", studyType: 'read-only' },
        { kanji: "〜ころ", meaning: "time of . . . ; when . . .", reading: "〜ころ", studyType: 'read-only' },
        { kanji: "すこし", meaning: "a little", reading: "すこし", studyType: 'read-only' },
        { kanji: "とにかく", meaning: "anyhow; anyway", reading: "とにかく", studyType: 'read-only' },
        { kanji: "信じる", meaning: "しんじる", reading: "しんじる", studyType: 'write' },
        { kanji: "経験", meaning: "けいけん", reading: "けいけん", studyType: 'write' },
        { kanji: "台風", meaning: "たいふう", reading: "たいふう", studyType: 'write' },
        { kanji: "二台", meaning: "にだい", reading: "にだい", studyType: 'write' },
        { kanji: "犬", meaning: "いぬ", reading: "いぬ", studyType: 'write' },
        { kanji: "重い", meaning: "おもい", reading: "おもい", studyType: 'write' },
        { kanji: "初めは", meaning: "はじめは", reading: "はじめは", studyType: 'write' },
        { kanji: "初めて", meaning: "はじめて", reading: "はじめて", studyType: 'write' },
        { kanji: "若い", meaning: "わかい", reading: "わかい", studyType: 'write' },
        { kanji: "若者", meaning: "わかもの", reading: "わかもの", studyType: 'write' },
        { kanji: "送る", meaning: "おくる", reading: "おくる", studyType: 'write' },
        { kanji: "幸せな", meaning: "しあわせな", reading: "しあわせな", studyType: 'write' },
        { kanji: "時計", meaning: "とけい", reading: "とけい", studyType: 'write' },
        { kanji: "遅れる", meaning: "おくれる", reading: "おくれる", studyType: 'write' },
        { kanji: "乗り遅れる", meaning: "のりおくれる", reading: "のりおくれる", studyType: 'write' },
        { kanji: "遅い", meaning: "おそい", reading: "おそい", studyType: 'write' },
        { kanji: "心配な", meaning: "しんぱいな", reading: "しんぱいな", studyType: 'write' },
        { kanji: "弟", meaning: "おとうと", reading: "おとうと", studyType: 'write' },
        { kanji: "兄弟", meaning: "きょうだい", reading: "きょうだい", studyType: 'write' },
        { kanji: "妹", meaning: "いもうと", reading: "いもうと", studyType: 'write' },
      ] },
      ch22: { label: 'Chapter 22', cards: [
        { kanji: "かぜ", meaning: "wind", reading: "かぜ", studyType: 'read-only' },
        { kanji: "き", meaning: "tree", reading: "き", studyType: 'read-only' },
        { kanji: "ボール", meaning: "ball", reading: "ボール", studyType: 'read-only' },
        { kanji: "さる", meaning: "monkey", reading: "さる", studyType: 'read-only' },
        { kanji: "めんきょ", meaning: "license", reading: "めんきょ", studyType: 'read-only' },
        { kanji: "よしゅう", meaning: "preparation of a lesson", reading: "よしゅう", studyType: 'read-only' },
        { kanji: "ふくしゅう", meaning: "review of a lesson", reading: "ふくしゅう", studyType: 'read-only' },
        { kanji: "じゅく", meaning: "cram school", reading: "じゅく", studyType: 'read-only' },
        { kanji: "えいかいわ", meaning: "English conversation", reading: "えいかいわ", studyType: 'read-only' },
        { kanji: "あいて", meaning: "partner; the other person", reading: "あいて", studyType: 'read-only' },
        { kanji: "おじょうさん", meaning: "(someone's) daughter (polite)", reading: "おじょうさん", studyType: 'read-only' },
        { kanji: "かみさま", meaning: "God", reading: "かみさま", studyType: 'read-only' },
        { kanji: "せんぱい", meaning: "senior member of a group", reading: "せんぱい", studyType: 'read-only' },
        { kanji: "こうはい", meaning: "junior member of a group", reading: "こうはい", studyType: 'read-only' },
        { kanji: "ぶか", meaning: "subordinate", reading: "ぶか", studyType: 'read-only' },
        { kanji: "うけつけ", meaning: "reception desk", reading: "うけつけ", studyType: 'read-only' },
        { kanji: "しょるい", meaning: "document", reading: "しょるい", studyType: 'read-only' },
        { kanji: "プロジェクト", meaning: "project", reading: "プロジェクト", studyType: 'read-only' },
        { kanji: "かじ", meaning: "housework", reading: "かじ", studyType: 'read-only' },
        { kanji: "ヨーロッパ", meaning: "Europe", reading: "ヨーロッパ", studyType: 'read-only' },
        { kanji: "ひとりぐらし", meaning: "living alone", reading: "ひとりぐらし", studyType: 'read-only' },
        { kanji: "じゆう", meaning: "freedom", reading: "じゆう", studyType: 'read-only' },
        { kanji: "むだづかい", meaning: "waste (money)", reading: "むだづかい", studyType: 'read-only' },
        { kanji: "うるさい", meaning: "noisy; annoying", reading: "うるさい", studyType: 'read-only' },
        { kanji: "しんぱい（な）", meaning: "worried about", reading: "しんぱい（な）", studyType: 'read-only' },
        { kanji: "びんぼう（な）", meaning: "poor", reading: "びんぼう（な）", studyType: 'read-only' },
        { kanji: "ぺらぺら（な）", meaning: "fluent", reading: "ぺらぺら（な）", studyType: 'read-only' },
        { kanji: "らく（な）", meaning: "easy; comfortable", reading: "らく（な）", studyType: 'read-only' },
        { kanji: "かぜがふく", meaning: "the wind blows", reading: "かぜがふく", studyType: 'read-only' },
        { kanji: "コピーをとる", meaning: "to make a photocopy", reading: "コピーをとる", studyType: 'read-only' },
        { kanji: "はこぶ", meaning: "to carry", reading: "はこぶ", studyType: 'read-only' },
        { kanji: "ひろう", meaning: "to pick up (something)", reading: "ひろう", studyType: 'read-only' },
        { kanji: "ほ（う）っておく", meaning: "to leave (someone/something) alone; to neglect", reading: "ほ（う）っておく", studyType: 'read-only' },
        { kanji: "まにあう", meaning: "to be in time", reading: "まにあう", studyType: 'read-only' },
        { kanji: "かつ", meaning: "to win", reading: "かつ", studyType: 'read-only' },
        { kanji: "うける", meaning: "to take (an examination)", reading: "うける", studyType: 'read-only' },
        { kanji: "けいかくをたてる", meaning: "to make a plan", reading: "けいかくをたてる", studyType: 'read-only' },
        { kanji: "そだてる", meaning: "to raise; to bring up", reading: "そだてる", studyType: 'read-only' },
        { kanji: "たすける", meaning: "to help; to rescue", reading: "たすける", studyType: 'read-only' },
        { kanji: "まける", meaning: "to lose (a match)", reading: "まける", studyType: 'read-only' },
        { kanji: "おねがいする", meaning: "to request help", reading: "おねがいする", studyType: 'read-only' },
        { kanji: "さんせいする", meaning: "to agree", reading: "さんせいする", studyType: 'read-only' },
        { kanji: "はんたいする", meaning: "to oppose; to object to", reading: "はんたいする", studyType: 'read-only' },
        { kanji: "しっぱいする", meaning: "to fail; to be unsuccessful", reading: "しっぱいする", studyType: 'read-only' },
        { kanji: "てつやする", meaning: "to stay up all night", reading: "てつやする", studyType: 'read-only' },
        { kanji: "ほんやくする", meaning: "to translate", reading: "ほんやくする", studyType: 'read-only' },
        { kanji: "こんなふう", meaning: "like this", reading: "こんなふう", studyType: 'read-only' },
        { kanji: "じゆうに", meaning: "freely", reading: "じゆうに", studyType: 'read-only' },
        { kanji: "ずっと", meaning: "for a long time; all the time", reading: "ずっと", studyType: 'read-only' },
        { kanji: "ぜったいに", meaning: "definitely", reading: "ぜったいに", studyType: 'read-only' },
        { kanji: "なんども", meaning: "many times", reading: "なんども", studyType: 'read-only' },
        { kanji: "もうすこし", meaning: "a little more", reading: "もうすこし", studyType: 'read-only' },
        { kanji: "～とか", meaning: ". . . for example", reading: "～とか", studyType: 'read-only' },
        { kanji: "そんなこと（は）ない", meaning: "I don't think so.", reading: "そんなこと（は）ない", studyType: 'read-only' },
        { kanji: "～ちゃん", meaning: "(suffix for names of children)", reading: "～ちゃん", studyType: 'read-only' },
        { kanji: "おおくの～", meaning: "many . . .", reading: "おおくの～", studyType: 'read-only' },
        { kanji: "日記", meaning: "にっき", reading: "にっき", studyType: 'write' },
        { kanji: "銀行", meaning: "ぎんこう", reading: "ぎんこう", studyType: 'write' },
        { kanji: "一回", meaning: "いっかい", reading: "いっかい", studyType: 'write' },
        { kanji: "夕方", meaning: "ゆうがた", reading: "ゆうがた", studyType: 'write' },
        { kanji: "黒木さん", meaning: "くろきさん", reading: "くろきさん", studyType: 'write' },
        { kanji: "黒い", meaning: "くろい", reading: "くろい", studyType: 'write' },
        { kanji: "用事", meaning: "ようじ", reading: "ようじ", studyType: 'write' },
        { kanji: "週末", meaning: "しゅうまつ", reading: "しゅうまつ", studyType: 'write' },
        { kanji: "待つ", meaning: "まつ", reading: "まつ", studyType: 'write' },
        { kanji: "残業", meaning: "ざんぎょう", reading: "ざんぎょう", studyType: 'write' },
        { kanji: "残す", meaning: "のこす", reading: "のこす", studyType: 'write' },
        { kanji: "駅", meaning: "えき", reading: "えき", studyType: 'write' },
        { kanji: "東京駅", meaning: "とうきょうえき", reading: "とうきょうえき", studyType: 'write' },
        { kanji: "駅員", meaning: "えきいん", reading: "えきいん", studyType: 'write' },
        { kanji: "一番", meaning: "いちばん", reading: "いちばん", studyType: 'write' },
        { kanji: "説明する", meaning: "せつめいする", reading: "せつめいする", studyType: 'write' },
        { kanji: "小説", meaning: "しょうせつ", reading: "しょうせつ", studyType: 'write' },
        { kanji: "案内する", meaning: "あんないする", reading: "あんないする", studyType: 'write' },
        { kanji: "忘れる", meaning: "わすれる", reading: "わすれる", studyType: 'write' },
        { kanji: "守る", meaning: "まもる", reading: "まもる", studyType: 'write' },
        { kanji: "留守", meaning: "るす", reading: "るす", studyType: 'write' },
        { kanji: "お守り", meaning: "おまもり", reading: "おまもり", studyType: 'write' },
      ] },
      ch23: { label: 'Chapter 23', cards: [
        { kanji: "くつした", meaning: "socks", reading: "くつした", studyType: 'read-only' },
        { kanji: "ふくろ", meaning: "sack; plastic/paper bag", reading: "ふくろ", studyType: 'read-only' },
        { kanji: "ただ", meaning: "free of charge", reading: "ただ", studyType: 'read-only' },
        { kanji: "ゆうしょく", meaning: "dinner", reading: "ゆうしょく", studyType: 'read-only' },
        { kanji: "ばしょ", meaning: "place", reading: "ばしょ", studyType: 'read-only' },
        { kanji: "かいだん", meaning: "stairs", reading: "かいだん", studyType: 'read-only' },
        { kanji: "しょうがっこう", meaning: "elementary school", reading: "しょうがっこう", studyType: 'read-only' },
        { kanji: "めんせつ", meaning: "interview", reading: "めんせつ", studyType: 'read-only' },
        { kanji: "けんこう", meaning: "health", reading: "けんこう", studyType: 'read-only' },
        { kanji: "りそう", meaning: "ideal", reading: "りそう", studyType: 'read-only' },
        { kanji: "るすばん", meaning: "looking after a house during someone's absence", reading: "るすばん", studyType: 'read-only' },
        { kanji: "メッセージ", meaning: "message; text", reading: "メッセージ", studyType: 'read-only' },
        { kanji: "きゅうこう", meaning: "class cancellation", reading: "きゅうこう", studyType: 'read-only' },
        { kanji: "かいがいりょこう", meaning: "trip to a foreign country", reading: "かいがいりょこう", studyType: 'read-only' },
        { kanji: "ぼんおどり", meaning: "Bon dance (Japanese traditional dance)", reading: "ぼんおどり", studyType: 'read-only' },
        { kanji: "おもいで", meaning: "memory", reading: "おもいで", studyType: 'read-only' },
        { kanji: "しゃかい", meaning: "society", reading: "しゃかい", studyType: 'read-only' },
        { kanji: "けっか", meaning: "result", reading: "けっか", studyType: 'read-only' },
        { kanji: "ちょうさ", meaning: "survey", reading: "ちょうさ", studyType: 'read-only' },
        { kanji: "まずい", meaning: "(food is) terrible", reading: "まずい", studyType: 'read-only' },
        { kanji: "かわいそう（な）", meaning: "pitiful; feel sorry for; poor thing", reading: "かわいそう（な）", studyType: 'read-only' },
        { kanji: "あめがやむ", meaning: "the rain stops", reading: "あめがやむ", studyType: 'read-only' },
        { kanji: "ちがう", meaning: "to be different; to be wrong", reading: "ちがう", studyType: 'read-only' },
        { kanji: "なくなる", meaning: "to be lost; to disappear", reading: "なくなる", studyType: 'read-only' },
        { kanji: "いなくなる", meaning: "(someone) is gone; to disappear", reading: "いなくなる", studyType: 'read-only' },
        { kanji: "おせわになる", meaning: "to be in someone's care", reading: "おせわになる", studyType: 'read-only' },
        { kanji: "おなかをこわす", meaning: "to have a stomachache", reading: "おなかをこわす", studyType: 'read-only' },
        { kanji: "きにいる", meaning: "to find something agreeable", reading: "きにいる", studyType: 'read-only' },
        { kanji: "わるぐちをいう", meaning: "to talk behind someone's back", reading: "わるぐちをいう", studyType: 'read-only' },
        { kanji: "こたえる", meaning: "to answer", reading: "こたえる", studyType: 'read-only' },
        { kanji: "はなれる", meaning: "(something/someone) separates; parts from", reading: "はなれる", studyType: 'read-only' },
        { kanji: "がっかりする", meaning: "to be disappointed", reading: "がっかりする", studyType: 'read-only' },
        { kanji: "がまんする", meaning: "to be tolerant/patient", reading: "がまんする", studyType: 'read-only' },
        { kanji: "どうじょうする", meaning: "to sympathize", reading: "どうじょうする", studyType: 'read-only' },
        { kanji: "～かおをする", meaning: "to look . . . (facial expression)", reading: "～かおをする", studyType: 'read-only' },
        { kanji: "カンニングする", meaning: "to cheat in an exam", reading: "カンニングする", studyType: 'read-only' },
        { kanji: "チェックする", meaning: "to check", reading: "チェックする", studyType: 'read-only' },
        { kanji: "せわをする", meaning: "to take care of . . .", reading: "せわをする", studyType: 'read-only' },
        { kanji: "ゆうしょうする", meaning: "to win a championship", reading: "ゆうしょうする", studyType: 'read-only' },
        { kanji: "もどってくる", meaning: "(something/someone) comes back", reading: "もどってくる", studyType: 'read-only' },
        { kanji: "そんな～", meaning: "such . . . ; that kind of . . .", reading: "そんな～", studyType: 'read-only' },
        { kanji: "～ために", meaning: "for . . . ; for the sake of . . .", reading: "～ために", studyType: 'read-only' },
        { kanji: "ものすごく", meaning: "extremely", reading: "ものすごく", studyType: 'read-only' },
        { kanji: "そろそろ", meaning: "it is about time to . . .", reading: "そろそろ", studyType: 'read-only' },
        { kanji: "さいごに", meaning: "finally", reading: "さいごに", studyType: 'read-only' },
        { kanji: "げんきでね", meaning: "Take care of yourself.", reading: "げんきでね", studyType: 'read-only' },
        { kanji: "そうそう", meaning: "You are right.", reading: "そうそう", studyType: 'read-only' },
        { kanji: "顔", meaning: "かお", reading: "かお", studyType: 'write' },
        { kanji: "顔文字", meaning: "かおもじ", reading: "かおもじ", studyType: 'write' },
        { kanji: "悲しい", meaning: "かなしい", reading: "かなしい", studyType: 'write' },
        { kanji: "怒る", meaning: "おこる", reading: "おこる", studyType: 'write' },
        { kanji: "違う", meaning: "ちがう", reading: "ちがう", studyType: 'write' },
        { kanji: "違い", meaning: "ちがい", reading: "ちがい", studyType: 'write' },
        { kanji: "間違える", meaning: "まちがえる", reading: "まちがえる", studyType: 'write' },
        { kanji: "変な", meaning: "へんな", reading: "へんな", studyType: 'write' },
        { kanji: "大変な", meaning: "たいへんな", reading: "たいへんな", studyType: 'write' },
        { kanji: "比べる", meaning: "くらべる", reading: "くらべる", studyType: 'write' },
        { kanji: "表情", meaning: "ひょうじょう", reading: "ひょうじょう", studyType: 'write' },
        { kanji: "同情する", meaning: "どうじょうする", reading: "どうじょうする", studyType: 'write' },
        { kanji: "感情", meaning: "かんじょう", reading: "かんじょう", studyType: 'write' },
        { kanji: "感動する", meaning: "かんどうする", reading: "かんどうする", studyType: 'write' },
        { kanji: "調査", meaning: "ちょうさ", reading: "ちょうさ", studyType: 'write' },
        { kanji: "調べる", meaning: "しらべる", reading: "しらべる", studyType: 'write' },
        { kanji: "結果", meaning: "けっか", reading: "けっか", studyType: 'write' },
        { kanji: "果物", meaning: "くだもの", reading: "くだもの", studyType: 'write' },
        { kanji: "文化", meaning: "ぶんか", reading: "ぶんか", studyType: 'write' },
        { kanji: "横", meaning: "よこ", reading: "よこ", studyType: 'write' },
        { kanji: "相手", meaning: "あいて", reading: "あいて", studyType: 'write' },
        { kanji: "答える", meaning: "こたえる", reading: "こたえる", studyType: 'write' },
        { kanji: "答え/答", meaning: "こたえ", reading: "こたえ", studyType: 'write' },
      ] },
    },
  },
  quartet1: {
    label: 'Quartet I',
    chapters: {
      ch1: { label: 'Chapter 1', cards: [
        { kanji: 'いつまでも', meaning: 'forever', reading: 'いつまでも', studyType: 'read-only' },
        { kanji: '生まれ', meaning: 'birthplace; born in...', reading: 'うまれ', studyType: 'read-only' },
        { kanji: '映画祭', meaning: 'film festival', reading: 'えいがさい', studyType: 'read-only' },
        { kanji: '老いる', meaning: 'to grow old', reading: 'おいる', studyType: 'write' },
        { kanji: '開花', meaning: 'flowers budding; blooming', reading: 'かいか', studyType: 'read-only' },
        { kanji: '絵画', meaning: 'picture', reading: 'かいが', studyType: 'write' },
        { kanji: '学生時代', meaning: 'school days', reading: 'がくせいじだい', studyType: 'read-only' },
        { kanji: 'かたい', meaning: 'hard; firm', reading: 'かたい', studyType: 'read-only' },
        { kanji: '監督', meaning: 'director', reading: 'かんとく', studyType: 'read-only' },
        { kanji: '口紅', meaning: 'lipstick', reading: 'くちべに', studyType: 'write' },
        { kanji: '結果を出す', meaning: 'to achieve results', reading: 'けっかをだす', studyType: 'read-only' },
        { kanji: '決心する', meaning: 'to make up one\'s mind; to determine', reading: 'けっしんする', studyType: 'read-only' },
        { kanji: '芸術的(な)', meaning: 'artistic', reading: 'げいじゅつてき(な)', studyType: 'read-only' },
        { kanji: '県境', meaning: 'prefectural border', reading: 'けんざかい', studyType: 'write' },
        { kanji: '郊外', meaning: 'suburbs', reading: 'こうがい', studyType: 'write' },
        { kanji: 'コーヒー豆', meaning: 'coffee beans', reading: 'コーヒーまめ', studyType: 'read-only' },
        { kanji: '国際学部', meaning: 'department of international studies', reading: 'こくさいがくぶ', studyType: 'read-only' },
        { kanji: 'ゴム', meaning: 'rubber', reading: 'ゴム', studyType: 'read-only' },
        { kanji: 'サマーコース', meaning: 'summer course', reading: 'サマーコース', studyType: 'read-only' },
        { kanji: '若干名', meaning: 'a few people; small number of people', reading: 'じゃっかんめい', studyType: 'write' },
        { kanji: '出品する', meaning: 'to submit (one\'s work to ~)', reading: 'しゅっぴんする', studyType: 'read-only' },
        { kanji: '救う', meaning: 'to save; to cure', reading: 'すくう', studyType: 'read-only' },
        { kanji: 'すまん', meaning: 'I\'m sorry', reading: 'すまん', studyType: 'read-only' },
        { kanji: '姓名', meaning: 'full name', reading: 'せいめい', studyType: 'write' },
        { kanji: '大したものじゃないんだけど…', meaning: 'it\'s nothing special but', reading: 'たいしたものじゃないんだけど…', studyType: 'read-only' },
        { kanji: 'たった', meaning: 'only; merely', reading: 'たった', studyType: 'read-only' },
        { kanji: 'ちなみに', meaning: 'by the way; incidentally; for your information', reading: 'ちなみに', studyType: 'read-only' },
        { kanji: '手帳', meaning: 'pocket diary; notebook', reading: 'てちょう', studyType: 'write' },
        { kanji: '凍結', meaning: 'freezing', reading: 'とうけつ', studyType: 'write' },
        { kanji: '尊い', meaning: 'precious; noble', reading: 'とうとい', studyType: 'write' },
        { kanji: '夏祭り', meaning: 'summer festival', reading: 'なつまつり', studyType: 'write' },
        { kanji: '働き始める', meaning: 'to start working', reading: 'はたらきはじめる', studyType: 'read-only' },
        { kanji: '晩', meaning: 'evening; night', reading: 'ばん', studyType: 'read-only' },
        { kanji: '秒', meaning: 'second', reading: 'びょう', studyType: 'read-only' },
        { kanji: '標準', meaning: 'standard', reading: 'ひょうじゅん', studyType: 'write' },
        { kanji: '氷点', meaning: 'freezing point', reading: 'ひょうてん', studyType: 'write' },
        { kanji: '縁', meaning: 'frame (of glasses)', reading: 'ふち', studyType: 'read-only' },
        { kanji: '変な顔をする', meaning: 'to have a puzzled look', reading: 'へんなかおをする', studyType: 'read-only' },
        { kanji: '干す', meaning: 'to dry', reading: 'ほす', studyType: 'write' },
        { kanji: 'ほど', meaning: 'about...', reading: 'ほど', studyType: 'read-only' },
        { kanji: 'ほとんど～ない', meaning: 'rarely; hardly', reading: 'ほとんど～ない', studyType: 'read-only' },
        { kanji: '本格的に', meaning: 'genuinely; on a full scale; in full swing', reading: 'ほんかくてきに', studyType: 'write' },
        { kanji: '招く', meaning: 'to invite', reading: 'まねく', studyType: 'write' },
        { kanji: 'むし暑い', meaning: 'humid; muggy', reading: 'むしあつい', studyType: 'read-only' },
        { kanji: '名誉賞', meaning: 'honorary award', reading: 'めいよしょう', studyType: 'read-only' },
        { kanji: '毛髪', meaning: 'hair (on the head)', reading: 'もうはつ', studyType: 'write' },
        { kanji: 'もしかして', meaning: 'by any chance; perhaps', reading: 'もしかして', studyType: 'read-only' },
      ] },
      ch2: { label: 'Chapter 2', cards: [
        { kanji: '宛先', meaning: 'address', reading: 'あてさき', studyType: 'read-only' },
        { kanji: '居酒屋', meaning: 'Japanese-style pub', reading: 'いざかや', studyType: 'read-only' },
        { kanji: '一億', meaning: 'one hundred million', reading: 'いちおく', studyType: 'write' },
        { kanji: '異文化', meaning: 'different culture', reading: 'いぶんか', studyType: 'read-only' },
        { kanji: 'イベント', meaning: 'event', reading: 'イベント', studyType: 'read-only' },
        { kanji: 'インターンシップ', meaning: 'internship', reading: 'インターンシップ', studyType: 'read-only' },
        { kanji: '遠慮なく', meaning: 'without hesitation', reading: 'えんりょなく', studyType: 'read-only' },
        { kanji: '公', meaning: 'public', reading: 'おおやけ', studyType: 'write' },
        { kanji: 'お忙しい所', meaning: 'while you are busy', reading: 'おいそがしいところ', studyType: 'read-only' },
        { kanji: 'おせち料理', meaning: 'traditional Japanese New Year dishes', reading: 'おせちりょうり', studyType: 'read-only' },
        { kanji: '寒暖', meaning: 'hot and cold', reading: 'かんだん', studyType: 'write' },
        { kanji: '居住地', meaning: 'settlement', reading: 'きょじゅうち', studyType: 'write' },
        { kanji: '敬具', meaning: 'sincerely yours [a closing greeting in letters]', reading: 'けいぐ', studyType: 'read-only' },
        { kanji: '件名', meaning: 'subject', reading: 'けんめい', studyType: 'read-only' },
        { kanji: '降下', meaning: 'descent', reading: 'こうか', studyType: 'write' },
        { kanji: '合流', meaning: 'confluence; joining', reading: 'こうりゅう', studyType: 'write' },
        { kanji: '国際交流課', meaning: 'International Relations Division', reading: 'こくさいこうりゅうか', studyType: 'write' },
        { kanji: '異なる', meaning: 'to differ', reading: 'ことなる', studyType: 'read-only' },
        { kanji: 'コミュニティセンター', meaning: 'community center', reading: 'コミュニティセンター', studyType: 'read-only' },
        { kanji: '残暑', meaning: 'heat of late summer', reading: 'ざんしょ', studyType: 'write' },
        { kanji: '参拝', meaning: 'visiting a shrine/temple', reading: 'さんぱい', studyType: 'write' },
        { kanji: '上旬', meaning: 'early in the month', reading: 'じょうじゅん', studyType: 'read-only' },
        { kanji: '申告', meaning: 'declaration', reading: 'しんこく', studyType: 'write' },
        { kanji: '吹奏楽', meaning: 'wind(instrument) music', reading: 'すいそうがく', studyType: 'write' },
        { kanji: '健やか(な)', meaning: 'healthy', reading: 'すこやか(な)', studyType: 'write' },
        { kanji: '先日', meaning: 'the other day', reading: 'せんじつ', studyType: 'read-only' },
        { kanji: '備える', meaning: 'to prepare', reading: 'そなえる', studyType: 'write' },
        { kanji: 'その代わり', meaning: 'instead', reading: 'そのかわり', studyType: 'read-only' },
        { kanji: 'その節', meaning: 'at that time; on that occasion', reading: 'そのせつ', studyType: 'read-only' },
        { kanji: 'つまらないものですが…', meaning: 'it\'s nothing, but...', reading: 'つまらないものですが…', studyType: 'read-only' },
        { kanji: '停まる', meaning: 'to stop', reading: 'とまる', studyType: 'write' },
        { kanji: '和む', meaning: 'to feel relaxed; to calm down', reading: 'なごむ', studyType: 'write' },
        { kanji: '二倍', meaning: 'twice; double', reading: 'にばい', studyType: 'write' },
        { kanji: '拝啓', meaning: 'Dear Sir/Madam [a letter salutation]', reading: 'はいけい', studyType: 'read-only' },
        { kanji: '花園', meaning: 'flower garden', reading: 'はなぞの', studyType: 'write' },
        { kanji: '花屋か(な)', meaning: 'showy; brilliant', reading: 'はなやか(な)', studyType: 'read-only' },
        { kanji: '無事に', meaning: 'without any problems; peacefully; safely', reading: 'ぶじに', studyType: 'read-only' },
        { kanji: 'プログラム', meaning: 'program', reading: 'プログラム', studyType: 'read-only' },
        { kanji: 'ボランティア', meaning: 'volunteer', reading: 'ボランティア', studyType: 'read-only' },
        { kanji: 'ほんのお礼の気持ち', meaning: 'a token of gratitude', reading: 'ほんのおれいのきもち', studyType: 'read-only' },
        { kanji: '交える', meaning: 'to include; to exchange', reading: 'まじえる', studyType: 'write' },
        { kanji: '満開', meaning: 'full bloom', reading: 'まんかい', studyType: 'read-only' },
        { kanji: 'やっと', meaning: 'at last; finally', reading: 'やっと', studyType: 'read-only' },
        { kanji: '誘惑', meaning: 'temptation', reading: 'ゆうわく', studyType: 'write' },
        { kanji: '冷水', meaning: 'cold water', reading: 'れいすい', studyType: 'write' },
      ] },
      ch3: { label: 'Chapter 3', cards: [
        { kanji: '足を運ぶ', meaning: 'to go to; to visit', reading: 'あしをはこぶ', studyType: 'read-only' },
        { kanji: '集まり', meaning: 'gathering', reading: 'あつまり', studyType: 'read-only' },
        { kanji: '息抜き', meaning: 'breather; relaxation', reading: 'いきぬき', studyType: 'read-only' },
        { kanji: '一生', meaning: 'whole life; lifetime', reading: 'いっしょう', studyType: 'read-only' },
        { kanji: '飲食店', meaning: 'restaurant', reading: 'いんしょくてん', studyType: 'read-only' },
        { kanji: '打ち上げ', meaning: 'party celebrating the finish of a project, event, etc.', reading: 'うちあげ', studyType: 'read-only' },
        { kanji: '熟れる', meaning: 'to ripen', reading: 'うれる', studyType: 'write' },
        { kanji: '枝豆', meaning: 'boiled young soybeans', reading: 'えだまめ', studyType: 'read-only' },
        { kanji: '汚染', meaning: 'pollution; contamination', reading: 'おせん', studyType: 'write' },
        { kanji: 'おつまみ', meaning: 'snacks to go with alcohol', reading: 'おつまみ', studyType: 'read-only' },
        { kanji: '会社帰り', meaning: 'on one\'s way home from work', reading: 'かいしゃがえり', studyType: 'read-only' },
        { kanji: '解消', meaning: 'to relieve (stress); cancellation', reading: 'かいしょう', studyType: 'read-only' },
        { kanji: '会を開く', meaning: 'to hold a party', reading: 'かいをひらく', studyType: 'read-only' },
        { kanji: '家族連れ', meaning: 'family; taking the family along', reading: 'かぞくづれ', studyType: 'read-only' },
        { kanji: '唐揚げ', meaning: 'fried chicken', reading: 'からあげ', studyType: 'read-only' },
        { kanji: '変わらない', meaning: 'to be no different; constant; unchanged', reading: 'かわらない', studyType: 'read-only' },
        { kanji: '岩石', meaning: 'stones and rocks', reading: 'がんせき', studyType: 'write' },
        { kanji: '求人', meaning: 'recruitment; job offer', reading: 'きゅうじん', studyType: 'write' },
        { kanji: '休息', meaning: 'rest; repose', reading: 'きゅうそく', studyType: 'write' },
        { kanji: '下山', meaning: 'to go down a mountain; descending (mountain)', reading: 'げざん', studyType: 'read-only' },
        { kanji: '好印象', meaning: 'good impression', reading: 'こういんしょう', studyType: 'write' },
        { kanji: '国籍', meaning: 'nationality', reading: 'こくせき', studyType: 'write' },
        { kanji: '個室', meaning: 'private room', reading: 'こしつ', studyType: 'read-only' },
        { kanji: 'ご来光', meaning: 'rising sun; sunrise viewed from the top of a high mountain', reading: 'ごらいこう', studyType: 'read-only' },
        { kanji: 'ゴミ', meaning: 'trash', reading: 'ゴミ', studyType: 'read-only' },
        { kanji: 'ゴミ箱', meaning: 'trash can', reading: 'ゴミばこ', studyType: 'read-only' },
        { kanji: '再検査', meaning: 're-examination', reading: 'さいけんさ', studyType: 'write' },
        { kanji: '札', meaning: 'bill; note', reading: 'さつ', studyType: 'read-only' },
        { kanji: '山頂', meaning: 'summit', reading: 'さんちょう', studyType: 'read-only' },
        { kanji: '時間内', meaning: 'within a time frame', reading: 'じかんない', studyType: 'read-only' },
        { kanji: '書籍化', meaning: 'compiling into book format; novelizing', reading: 'しょせきか', studyType: 'write' },
        { kanji: '新年会', meaning: 'New Year party', reading: 'しんねんかい', studyType: 'read-only' },
        { kanji: '好きなだけ', meaning: 'as much as one likes', reading: 'すきなだけ', studyType: 'read-only' },
        { kanji: '世界文化遺産', meaning: 'World\'s Cultural Heritage (site)', reading: 'せかいぶんかいさん', studyType: 'read-only' },
        { kanji: '席に着く', meaning: 'to have a seat', reading: 'せきにつく', studyType: 'read-only' },
        { kanji: '全額', meaning: 'total; full amount', reading: 'ぜんがく', studyType: 'write' },
        { kanji: '像', meaning: 'elephant', reading: 'ぞう', studyType: 'write' },
        { kanji: 'ソフトドリンク', meaning: 'non-alcholic drinks', reading: 'ソフトドリンク', studyType: 'read-only' },
        { kanji: 'ダウンジャケット', meaning: 'down jacket', reading: 'ダウンジャケット', studyType: 'read-only' },
        { kanji: '仲介', meaning: 'intermediation; agency', reading: 'ちゅうかい', studyType: 'write' },
        { kanji: 'チェーン', meaning: 'chain', reading: 'チェーン', studyType: 'read-only' },
        { kanji: 'チューハイ', meaning: 'shochu-based highball', reading: 'チューハイ', studyType: 'read-only' },
        { kanji: '点', meaning: 'point', reading: 'てん', studyType: 'read-only' },
        { kanji: '登山客', meaning: 'mountain climber', reading: 'とざんきゃく', studyType: 'read-only' },
        { kanji: '登山靴', meaning: 'hiking boots', reading: 'とざんぐつ', studyType: 'read-only' },
        { kanji: '仲良くなる', meaning: 'to make friends with', reading: 'なかよくなる', studyType: 'read-only' },
        { kanji: '年始', meaning: 'beginning of the year', reading: 'ねし', studyType: 'read-only' },
        { kanji: '値札', meaning: 'price tag', reading: 'ねふだ', studyType: 'write' },
        { kanji: '飲み会', meaning: 'drinking party', reading: 'のみかい', studyType: 'read-only' },
        { kanji: '飲み放題', meaning: 'all you can drink', reading: 'のみほうだい', studyType: 'read-only' },
        { kanji: 'ば', meaning: 'place', reading: 'ば', studyType: 'read-only' },
        { kanji: '泊', meaning: 'counter for nights of a stay', reading: 'はく', studyType: 'write' },
        { kanji: '抜群', meaning: 'outstanding', reading: 'ばつぐん', studyType: 'write' },
        { kanji: '筆者', meaning: 'author; writer', reading: 'ひっしゃ', studyType: 'write' },
        { kanji: '独り', meaning: 'alone', reading: 'ひとり', studyType: 'write' },
        { kanji: '日の出', meaning: 'sunrise', reading: 'ひので', studyType: 'read-only' },
        { kanji: '疲労', meaning: 'fatigue', reading: 'ひろう', studyType: 'write' },
        { kanji: '筆', meaning: 'writing brush; paintbrush', reading: 'ふで', studyType: 'write' },
        { kanji: '包装紙', meaning: 'wrapping paper', reading: 'ほうそうし', studyType: 'write' },
        { kanji: '未熟', meaning: 'immature; unripe', reading: 'みじゅく', studyType: 'write' },
        { kanji: '難しさ', meaning: 'difficulty', reading: 'むずかしさ', studyType: 'read-only' },
        { kanji: '無糖', meaning: 'sugarless; unsweetened', reading: 'むとう', studyType: 'write' },
        { kanji: '持ち帰る', meaning: 'to bring back; to take home', reading: 'もちかえる', studyType: 'read-only' },
        { kanji: '安さ', meaning: 'cheapness', reading: 'やすさ', studyType: 'read-only' },
        { kanji: '山小屋', meaning: 'mountain lodge', reading: 'やまごや', studyType: 'read-only' },
        { kanji: '装う', meaning: 'to pretend', reading: 'よそおう', studyType: 'write' },
        { kanji: 'ルート', meaning: 'route; path', reading: 'ルート', studyType: 'read-only' },
        { kanji: 'わいわい', meaning: 'noisily', reading: 'わいわい', studyType: 'read-only' },
      ] },
      ch4: { label: 'Chapter 4', cards: [
        { kanji: '憧れる', meaning: 'to long for; yearn for', reading: 'あこがれる', studyType: 'read-only' },
        { kanji: '以前は', meaning: 'back in the day', reading: 'いぜんは', studyType: 'read-only' },
        { kanji: '労わる', meaning: 'to take good care of', reading: 'いたわる', studyType: 'write' },
        { kanji: '一面', meaning: 'one side/surface; an aspect', reading: 'いちめん', studyType: 'read-only' },
        { kanji: 'エスエヌエス', meaning: 'social networking service; social media', reading: 'SNS', studyType: 'read-only' },
        { kanji: '遠距離', meaning: 'long distance', reading: 'えんきょり', studyType: 'write' },
        { kanji: '重なる', meaning: 'to overlap; to be piled up', reading: 'かさなる', studyType: 'read-only' },
        { kanji: '片付け', meaning: 'cleaning up', reading: 'かたづけ', studyType: 'write' },
        { kanji: '価値観', meaning: 'values', reading: 'かちかん', studyType: 'read-only' },
        { kanji: '含有', meaning: 'contain', reading: 'がんゆう', studyType: 'write' },
        { kanji: '着替え', meaning: 'change of clothes', reading: 'きがえ', studyType: 'write' },
        { kanji: '気軽に', meaning: 'freely; readily', reading: 'きがるに', studyType: 'write' },
        { kanji: '企業', meaning: 'company', reading: 'きぎょう', studyType: 'read-only' },
        { kanji: '着付け', meaning: 'dressing (esp. in kimono); fitting', reading: 'きつけ', studyType: 'read-only' },
        { kanji: '軌道に乗る', meaning: 'to be on track', reading: 'きどうにのる', studyType: 'read-only' },
        { kanji: '驚異', meaning: 'honorable defeat', reading: 'きょうい', studyType: 'write' },
        { kanji: '極める', meaning: 'to master', reading: 'きわめる', studyType: 'write' },
        { kanji: '位', meaning: 'grade; rank', reading: 'くらい', studyType: 'write' },
        { kanji: '詳しく', meaning: 'in detail', reading: 'くわしく', studyType: 'read-only' },
        { kanji: '企てる', meaning: 'to plot; to scheme', reading: 'くわだてる', studyType: 'write' },
        { kanji: '経験を積む', meaning: 'to gain experience', reading: 'けいけんをつむ', studyType: 'read-only' },
        { kanji: '交替', meaning: 'change; taking turns', reading: 'こうたい', studyType: 'write' },
        { kanji: '告白', meaning: 'confession; indictment', reading: 'こくはく', studyType: 'write' },
        { kanji: '応える', meaning: 'to respond; to answer', reading: 'こたえる', studyType: 'write' },
        { kanji: '在学', meaning: 'attending (school, college, etc.); being a student', reading: 'ざいがく', studyType: 'read-only' },
        { kanji: '採用', meaning: 'employment; recruitment; hiring', reading: 'さいよう', studyType: 'read-only' },
        { kanji: '先', meaning: 'one\'s destination', reading: 'さき', studyType: 'read-only' },
        { kanji: '実感', meaning: 'real feeling; realization', reading: 'じっかん', studyType: 'read-only' },
        { kanji: '時間を過ごす', meaning: 'to spend time', reading: 'じかんをすごす', studyType: 'read-only' },
        { kanji: '自身', meaning: '(one\'s) self; oneself', reading: 'じしん', studyType: 'read-only' },
        { kanji: '自信がつく', meaning: 'to gain confidence in', reading: 'じしんがつく', studyType: 'read-only' },
        { kanji: '事前に', meaning: 'in advance', reading: 'じぜんに', studyType: 'read-only' },
        { kanji: '自然に', meaning: 'naturally; effortlessly', reading: 'しぜんに', studyType: 'read-only' },
        { kanji: '視点', meaning: 'viewpoint; opinion', reading: 'してん', studyType: 'write' },
        { kanji: '自分自身', meaning: 'oneself; myself', reading: 'じぶんじしん', studyType: 'read-only' },
        { kanji: '視野を広げる', meaning: 'to broaden one\'s perspective', reading: 'しやをひろげる', studyType: 'read-only' },
        { kanji: '重視', meaning: 'regarding as important; emphasis', reading: 'じゅうし', studyType: 'write' },
        { kanji: '星座', meaning: 'constellation; zodiac sign', reading: 'せいざ', studyType: 'write' },
        { kanji: '晴天', meaning: 'fine weather (i.e. little or no clouds)', reading: 'せいてん', studyType: 'write' },
        { kanji: '接客', meaning: 'service; reception', reading: 'せっきゃく', studyType: 'write' },
        { kanji: '絶叫', meaning: 'shout; scream; shriek', reading: 'ぜっきょう', studyType: 'write' },
        { kanji: '積極的に', meaning: 'actively', reading: 'せっきょくてきに', studyType: 'read-only' },
        { kanji: '接触', meaning: 'contact; touch', reading: 'せっしょく', studyType: 'write' },
        { kanji: '相談に乗る', meaning: 'to give advice; counsel', reading: 'そうだんにのる', studyType: 'read-only' },
        { kanji: '体験', meaning: 'hands-on experience', reading: 'たいけん', studyType: 'read-only' },
        { kanji: '対応', meaning: 'serve; respond', reading: 'たいおう', studyType: 'read-only' },
        { kanji: '断片', meaning: 'fragment; scrap', reading: 'だんぺん', studyType: 'write' },
        { kanji: '治安', meaning: 'public peace and order', reading: 'ちあん', studyType: 'write' },
        { kanji: 'チャイム', meaning: 'chime; bell', reading: 'チャイム', studyType: 'read-only' },
        { kanji: '費やす', meaning: 'to spend; to waste', reading: 'ついやす', studyType: 'write' },
        { kanji: '通じて', meaning: 'through; via', reading: 'つうじて', studyType: 'read-only' },
        { kanji: '告げる', meaning: 'to notice; to inform', reading: 'つげる', studyType: 'write' },
        { kanji: '手を拭く', meaning: 'to wipe one\'s hands', reading: 'てをふく', studyType: 'read-only' },
        { kanji: 'どうりで', meaning: 'it\'s no wonder; indeed', reading: 'どうりで', studyType: 'read-only' },
        { kanji: '時には', meaning: 'sometimes; at times', reading: 'ときには', studyType: 'read-only' },
        { kanji: '採る', meaning: 'to employ; to adopt; to gather; to take', reading: 'とる', studyType: 'write' },
        { kanji: '曇天', meaning: 'cloudy weather', reading: 'どんてん', studyType: 'write' },
        { kanji: '何よりも', meaning: 'more than anything', reading: 'なによりも', studyType: 'read-only' },
        { kanji: '成る', meaning: 'to become', reading: 'なる', studyType: 'write' },
        { kanji: '日常生活', meaning: 'daily life', reading: 'にちじょうせいかつ', studyType: 'write' },
        { kanji: '非常に', meaning: 'very; greatly; extremely', reading: 'ひじょうに', studyType: 'read-only' },
        { kanji: 'ぴったり', meaning: 'perfectly (suited); fitting', reading: 'ぴったり', studyType: 'read-only' },
        { kanji: '触れる', meaning: 'to touch; to encounter', reading: 'ふれる', studyType: 'read-only' },
        { kanji: 'プロ意識', meaning: 'professionalism', reading: 'ぷろいしき', studyType: 'write' },
        { kanji: 'ホームシックになる', meaning: 'to get homesick', reading: 'ホームシックになる', studyType: 'read-only' },
        { kanji: 'ホール', meaning: 'hall; hole', reading: 'ホール', studyType: 'read-only' },
        { kanji: 'ホールに出す', meaning: 'to let someone serve customers', reading: 'ホールに出す', studyType: 'read-only' },
        { kanji: '無駄にする', meaning: 'to waste', reading: 'むだにする', studyType: 'read-only' },
        { kanji: 'メリット', meaning: 'merit; advantage', reading: 'メリット', studyType: 'read-only' },
        { kanji: '迷惑がかかる', meaning: 'to bother someone', reading: 'めいわくがかかる', studyType: 'read-only' },
        { kanji: 'やる価値(が)ある', meaning: 'worth doing; worthwhile', reading: 'やるかち(が)ある', studyType: 'read-only' },
        { kanji: '有意義(な)', meaning: 'significant; meaningful', reading: 'ゆういぎ(な)', studyType: 'read-only' },
        { kanji: '優先的に', meaning: 'preferentially', reading: 'ゆうせんてきに', studyType: 'read-only' },
      ] },
      ch5: { label: 'Chapter 5', cards: [
        { kanji: 'アク', meaning: 'scum', reading: 'アク', studyType: 'read-only' },
        { kanji: '油', meaning: 'oil', reading: 'あぶら', studyType: 'write' },
        { kanji: '甘辛い', meaning: 'sweet and salty', reading: 'あまからい', studyType: 'read-only' },
        { kanji: '余る', meaning: 'to remain', reading: 'あまる', studyType: 'read-only' },
        { kanji: '一巻', meaning: 'the first volume; one roll', reading: 'いっかん', studyType: 'write' },
        { kanji: '一旦', meaning: 'once; for a moment', reading: 'いったん', studyType: 'read-only' },
        { kanji: '炒める', meaning: 'to (stir-)fry', reading: 'いためる', studyType: 'read-only' },
        { kanji: '移転', meaning: 'moving', reading: 'いてん', studyType: 'read-only' },
        { kanji: '薄切り', meaning: 'thin slice', reading: 'うすぎり', studyType: 'read-only' },
        { kanji: '薄く', meaning: 'thinly', reading: 'うすく', studyType: 'read-only' },
        { kanji: 'うまみ', meaning: 'umami; savoriness', reading: 'うまみ', studyType: 'read-only' },
        { kanji: '押収', meaning: 'seizure; confiscation', reading: 'おうしゅう', studyType: 'write' },
        { kanji: 'お口直し', meaning: 'palate cleanser', reading: 'おくちなおし', studyType: 'read-only' },
        { kanji: '大匙', meaning: 'tablespoon', reading: 'おおさじ', studyType: 'read-only' },
        { kanji: 'カウンター席', meaning: 'counter seat', reading: 'カウンターせき', studyType: 'read-only' },
        { kanji: '革命', meaning: 'revolution', reading: 'かくめい', studyType: 'write' },
        { kanji: '書き順', meaning: 'stroke order', reading: 'かきじゅん', studyType: 'write' },
        { kanji: '鰹節', meaning: 'shaved dried bonito', reading: 'かつおぶし', studyType: 'read-only' },
        { kanji: '家庭料理', meaning: 'home cooking', reading: 'かていりょうり', studyType: 'read-only' },
        { kanji: 'ガリ', meaning: 'pickled ginger', reading: 'ガリ', studyType: 'read-only' },
        { kanji: '軽く', meaning: 'lightly', reading: 'かるく', studyType: 'read-only' },
        { kanji: 'カレールー', meaning: 'curry roux', reading: 'カレールー', studyType: 'read-only' },
        { kanji: '革', meaning: 'leather', reading: 'かわ', studyType: 'write' },
        { kanji: '皮', meaning: 'skin; coat', reading: 'かわ', studyType: 'read-only' },
        { kanji: '変わった', meaning: 'different; unusual; strange', reading: 'かわった', studyType: 'read-only' },
        { kanji: '甘味料', meaning: 'sweetener', reading: 'かんみりょう', studyType: 'write' },
        { kanji: '玉砕', meaning: 'wonder; miracle', reading: 'ぎょくさい', studyType: 'write' },
        { kanji: '繰り上げる', meaning: 'to move up; to advance', reading: 'くりあげる', studyType: 'read-only' },
        { kanji: '繰り返す', meaning: 'to repeat', reading: 'くりかえす', studyType: 'read-only' },
        { kanji: '携帯電話', meaning: 'mobile phone', reading: 'けいたいでんわ', studyType: 'write' },
        { kanji: '現地集合', meaning: 'meeting spot; meet at the destination', reading: 'げんちしゅうごう', studyType: 'read-only' },
        { kanji: '限定', meaning: 'limited; ~ only [when used as suffix]', reading: 'げんてい', studyType: 'read-only' },
        { kanji: '号泣', meaning: 'wailing; crying aloud', reading: 'ごうきゅう', studyType: 'write' },
        { kanji: '香辛料', meaning: 'spice', reading: 'こうしんりょう', studyType: 'write' },
        { kanji: '焦げる', meaning: 'to get burned', reading: 'こげる', studyType: 'read-only' },
        { kanji: 'ごとに', meaning: 'every; one by one; each', reading: 'ごとに', studyType: 'read-only' },
        { kanji: '粉', meaning: 'flour; powder', reading: 'こな', studyType: 'write' },
        { kanji: '昆布', meaning: 'kelp', reading: 'こんぶ', studyType: 'read-only' },
        { kanji: 'サイドメニュー', meaning: 'side menu', reading: 'サイドメニュー', studyType: 'read-only' },
        { kanji: '材料', meaning: 'ingredients; materials', reading: 'ざいりょう', studyType: 'read-only' },
        { kanji: '定める', meaning: 'to set; to define; to establish', reading: 'さだめる', studyType: 'write' },
        { kanji: 'サラダ油', meaning: 'salad oil', reading: 'サラダゆ／あぶら', studyType: 'read-only' },
        { kanji: '時間帯', meaning: 'period of time (in a day)', reading: 'じかんたい', studyType: 'read-only' },
        { kanji: '四捨五入', meaning: 'rounding off a number', reading: 'ししゃごにゅう', studyType: 'write' },
        { kanji: 'しばらくすると', meaning: 'after a little while', reading: 'しばらくすると', studyType: 'read-only' },
        { kanji: '煮沸', meaning: 'boiling', reading: 'じゃふつ', studyType: 'write' },
        { kanji: '縦断', meaning: 'crossing vertically/longitudinally', reading: 'じゅうだん', studyType: 'write' },
        { kanji: '順番に', meaning: 'in order/turns', reading: 'じゅんばんに', studyType: 'read-only' },
        { kanji: '汁', meaning: 'soup; juice', reading: 'しる', studyType: 'read-only' },
        { kanji: '酢漬け', meaning: 'pickles; pickling', reading: 'すづけ', studyType: 'read-only' },
        { kanji: 'スライス', meaning: '(to) slice', reading: 'スライス', studyType: 'read-only' },
        { kanji: '聖歌', meaning: 'hymn; sacred song', reading: 'せいか', studyType: 'write' },
        { kanji: '正門', meaning: 'main/front gate', reading: 'せいもん', studyType: 'write' },
        { kanji: '鮮度', meaning: '(degree of) freshness', reading: 'せんど', studyType: 'write' },
        { kanji: '銭湯', meaning: 'public bath; bathhouse', reading: 'せんとう', studyType: 'write' },
        { kanji: '全幅', meaning: 'full width; wholehearted; full', reading: 'ぜんぷく', studyType: 'write' },
        { kanji: '専門書', meaning: 'techinical/specialized book', reading: 'せんもんしょ', studyType: 'write' },
        { kanji: '出汁', meaning: 'soup; stock', reading: 'だし', studyType: 'read-only' },
        { kanji: 'タッチパネル', meaning: 'touchscreen', reading: 'タッチパネル', studyType: 'read-only' },
        { kanji: '縦に', meaning: 'vertically', reading: 'たてに', studyType: 'read-only' },
        { kanji: '為', meaning: 'benefit; sake; advantage', reading: 'ため', studyType: 'write' },
        { kanji: '便り', meaning: 'letter; news', reading: 'たより', studyType: 'write' },
        { kanji: '抽象的', meaning: 'abstract', reading: 'ちゅうしょうてき', studyType: 'write' },
        { kanji: '抽出', meaning: 'extraction', reading: 'ちゅうしゅつ', studyType: 'write' },
        { kanji: '中火', meaning: 'medium heat', reading: 'ちゅうび', studyType: 'read-only' },
        { kanji: '注文品', meaning: 'ordered goods', reading: 'ちゅうもんひん', studyType: 'read-only' },
        { kanji: '調整', meaning: 'adjustment', reading: 'ちょうせい', studyType: 'read-only' },
        { kanji: '通常', meaning: 'usually; normally', reading: 'つうじょう', studyType: 'read-only' },
        { kanji: '定番', meaning: 'standard; regular; staple', reading: 'ていばん', studyType: 'read-only' },
        { kanji: 'ティーバッグ', meaning: 'tea bag', reading: 'ティーバッグ', studyType: 'read-only' },
        { kanji: '添付', meaning: 'attachment', reading: 'てんぷ', studyType: 'write' },
        { kanji: '整える', meaning: 'to put in order; to arrange', reading: 'ととのえる', studyType: 'write' },
        { kanji: '流れてくる', meaning: 'to come down (revolving conveyor belt carries plates of sushi to) [すしが]', reading: 'ながれてくる', studyType: 'read-only' },
        { kanji: '苦笑い', meaning: 'bitter smile', reading: 'にがわらい', studyType: 'read-only' },
        { kanji: '握り', meaning: 'hand-pressed sushi; gripping', reading: 'にぎり', studyType: 'read-only' },
        { kanji: '握る', meaning: 'to grasp/grip', reading: 'にぎる', studyType: 'read-only' },
        { kanji: '肉じゃが', meaning: 'nikujaga (simmered meat, potatoes and onions); meat and potato stew', reading: 'にくじゃが', studyType: 'read-only' },
        { kanji: '煮込む', meaning: 'to simmer; to stew', reading: 'にこむ', studyType: 'read-only' },
        { kanji: '煮出す', meaning: 'to extract the flavor of ~ by boiling', reading: 'にだす', studyType: 'read-only' },
        { kanji: '入門', meaning: 'introduction (to); beginning training', reading: 'にゅうもん', studyType: 'read-only' },
        { kanji: '入力', meaning: 'to enter (text); to input', reading: 'にゅうりょく', studyType: 'read-only' },
        { kanji: '煮る', meaning: 'to boil; to simmer', reading: 'にる', studyType: 'read-only' },
        { kanji: '人数', meaning: 'number of people', reading: 'にんずう', studyType: 'read-only' },
        { kanji: 'ネタ', meaning: 'ingredient (for sushi)', reading: 'ネタ', studyType: 'read-only' },
        { kanji: 'ノズル', meaning: 'nozzle; faucet', reading: 'ノズル', studyType: 'read-only' },
        { kanji: '薄情', meaning: 'cruel; heatless', reading: 'はくじょう', studyType: 'write' },
        { kanji: '幅', meaning: 'width', reading: 'はば', studyType: 'read-only' },
        { kanji: '貼り紙', meaning: 'poster', reading: 'はりがみ', studyType: 'read-only' },
        { kanji: '反対の橋', meaning: 'opposite end', reading: 'はんたいのはし', studyType: 'read-only' },
        { kanji: '一味違う', meaning: 'to be somewhat different', reading: 'ひとあじちがう', studyType: 'read-only' },
        { kanji: '一房', meaning: 'a bunch', reading: 'ひとふさ', studyType: 'write' },
        { kanji: '悲鳴', meaning: 'scream; shriek', reading: 'ひめい', studyType: 'write' },
        { kanji: '粉末', meaning: 'powder', reading: 'ふんまつ', studyType: 'read-only' },
        { kanji: 'ボックス席', meaning: 'booth seat', reading: 'ボックスせき', studyType: 'read-only' },
        { kanji: '本場', meaning: 'the home (of); the best place', reading: 'ほんば', studyType: 'read-only' },
        { kanji: '前もって', meaning: 'in advance; beforehand', reading: 'まえもって', studyType: 'read-only' },
        { kanji: '巻物', meaning: 'sushi roll; scroll', reading: 'まきもの', studyType: 'read-only' },
        { kanji: '道なりに', meaning: 'along the road', reading: 'みちなりに', studyType: 'read-only' },
        { kanji: 'みりん', meaning: 'sweet rice wine for cooking', reading: 'みりん', studyType: 'read-only' },
        { kanji: '面倒', meaning: 'troublesome; bother', reading: 'めんどう', studyType: 'read-only' },
        { kanji: '湯のみ', meaning: 'Japanese teacup', reading: 'ゆのみ', studyType: 'read-only' },
        { kanji: '様子を見る', meaning: 'to watch; to see how it goes', reading: 'ようすをみる', studyType: 'read-only' },
        { kanji: '余分', meaning: 'extra; surplus', reading: 'よぶん', studyType: 'write' },
        { kanji: '弱火', meaning: 'low heat', reading: 'よわび', studyType: 'read-only' },
        { kanji: '冷凍庫', meaning: 'freezer', reading: 'れいとうこ', studyType: 'read-only' },
        { kanji: 'わさび', meaning: 'wasabi', reading: 'わさび', studyType: 'read-only' },
      ] },
      ch6: { label: 'Chapter 6', cards: [
        { kanji: '誤る', meaning: 'to make a mistake', reading: 'あやまる', studyType: 'write' },
        { kanji: '意思', meaning: 'will; volition; intention; wish', reading: 'いし', studyType: 'read-only' },
        { kanji: 'いやいや', meaning: 'unwillingly; reluctantly', reading: 'いやいや', studyType: 'read-only' },
        { kanji: '嫌がる', meaning: 'to dislike; to be unwilling to do', reading: 'いやがる', studyType: 'write' },
        { kanji: '嫌な思いをする', meaning: 'to be offended', reading: 'いやなおもいをする', studyType: 'read-only' },
        { kanji: '英語嫌い(な)', meaning: 'English-averse', reading: 'えいごきらい(な)', studyType: 'read-only' },
        { kanji: '躍る', meaning: 'to leap; to hop', reading: 'おどる', studyType: 'write' },
        { kanji: '化', meaning: 'change to ~; ~ization', reading: 'か', studyType: 'read-only' },
        { kanji: '係の人', meaning: 'person in charge', reading: 'かかりのひと', studyType: 'write' },
        { kanji: '過剰(な)', meaning: 'excessive', reading: 'かじょう(な)', studyType: 'read-only' },
        { kanji: '紙袋', meaning: 'paper bag', reading: 'かみぶくろ', studyType: 'read-only' },
        { kanji: '関わり', meaning: 'involvement', reading: 'かわり', studyType: 'write' },
        { kanji: '考え直す', meaning: 'to reconsider', reading: 'かんがえなおす', studyType: 'read-only' },
        { kanji: '管理人', meaning: 'caretaker for an apartment; manager', reading: 'かんりにん', studyType: 'read-only' },
        { kanji: '気遣い', meaning: 'concern; consideration', reading: 'きづかい', studyType: 'read-only' },
        { kanji: '金属', meaning: 'metal', reading: 'きんぞく', studyType: 'read-only' },
        { kanji: '訓練', meaning: 'training; drill', reading: 'くんれん', studyType: 'write' },
        { kanji: '結局', meaning: 'after all; eventually', reading: 'けっきょく', studyType: 'read-only' },
        { kanji: '嫌悪', meaning: 'hate; disgust', reading: 'けんお', studyType: 'write' },
        { kanji: '国際感覚', meaning: 'cosmopolitan outlook; feeling for the wider world', reading: 'こくさいかんかく', studyType: 'read-only' },
        { kanji: 'ゴミ収集車', meaning: 'garbage wagon', reading: 'ゴミしゅうしゅうしゃ', studyType: 'read-only' },
        { kanji: 'ゴミ捨て場', meaning: 'a garbage collection site', reading: 'ゴミすてば', studyType: 'read-only' },
        { kanji: 'ご迷惑をおかけしてすみません', meaning: 'I\'m sorry for causing you trouble', reading: 'ごめいわくをおかけしてすみません', studyType: 'read-only' },
        { kanji: 'コンビ', meaning: 'pair', reading: 'コンビ', studyType: 'read-only' },
        { kanji: '資源ゴミ', meaning: 'recyclable waste', reading: 'しげんゴミ', studyType: 'read-only' },
        { kanji: '自国', meaning: 'one\'s home country', reading: 'じこく', studyType: 'read-only' },
        { kanji: '習得', meaning: 'learning; acquisition (of a skill, knowledge, etc.)', reading: 'しゅうとく', studyType: 'read-only' },
        { kanji: '羞恥心', meaning: 'sense of shame', reading: 'しゅうちしん', studyType: 'write' },
        { kanji: '述語', meaning: 'predicate', reading: 'じゅつご', studyType: 'write' },
        { kanji: '退く', meaning: 'to retreat; to withdraw', reading: 'しりぞく', studyType: 'write' },
        { kanji: 'シンク', meaning: 'kitchen sink', reading: 'シンク', studyType: 'read-only' },
        { kanji: '吸い上げる', meaning: 'to suck up', reading: 'すいあげる', studyType: 'write' },
        { kanji: 'ずつ', meaning: 'each; apiece; at a time', reading: 'ずつ', studyType: 'read-only' },
        { kanji: 'スポンジ', meaning: 'sponge', reading: 'スポンジ', studyType: 'read-only' },
        { kanji: '全国的(な)', meaning: 'nationwide', reading: 'ぜんこくてき(な)', studyType: 'read-only' },
        { kanji: '早期', meaning: 'early (stage)', reading: 'そうき', studyType: 'read-only' },
        { kanji: '粗大ごみ', meaning: 'bulky garbage', reading: 'そだいごみ', studyType: 'read-only' },
        { kanji: '超特急', meaning: 'super express', reading: 'ちょうとっきゅう', studyType: 'write' },
        { kanji: '抵抗感', meaning: 'reluctance; resistance', reading: 'ていこうかん', studyType: 'read-only' },
        { kanji: 'てっきり', meaning: 'I thought for sure', reading: 'てっきり', studyType: 'read-only' },
        { kanji: '投書', meaning: 'letter to a newspaper', reading: 'とうしょ', studyType: 'read-only' },
        { kanji: '逃走', meaning: 'escape', reading: 'とうそう', studyType: 'write' },
        { kanji: 'どちらも', meaning: 'both', reading: 'どちらも', studyType: 'read-only' },
        { kanji: '内乱', meaning: 'civil war', reading: 'ないらん', studyType: 'write' },
        { kanji: '張る', meaning: 'to stretch', reading: 'はる', studyType: 'write' },
        { kanji: 'びしょびしょになる', meaning: 'to get water-soaked', reading: 'びしょびしょになる', studyType: 'read-only' },
        { kanji: '人のことは言えない', meaning: 'I am in no position to criticize', reading: 'ひとのことはいえない', studyType: 'read-only' },
        { kanji: 'ビニール', meaning: 'plastic; vinyl', reading: 'ビニール', studyType: 'read-only' },
        { kanji: '不十分', meaning: 'deficient; insufficient; inadequate', reading: 'ふじゅうぶん', studyType: 'read-only' },
        { kanji: 'フライパン', meaning: 'frying pan', reading: 'フライパン', studyType: 'read-only' },
        { kanji: '分別', meaning: 'separation; sorting', reading: 'ぶんべつ', studyType: 'read-only' },
        { kanji: 'ペットボトル', meaning: 'plastic bottle', reading: 'ペットボトル', studyType: 'read-only' },
        { kanji: '本気で', meaning: 'seriously', reading: 'ほんきで', studyType: 'read-only' },
        { kanji: 'ますます', meaning: 'more and more; increasingly', reading: 'ますます', studyType: 'read-only' },
        { kanji: '源', meaning: 'source', reading: 'みなもと', studyType: 'write' },
        { kanji: '燃えるゴミ', meaning: 'burnable waste', reading: 'もえるゴミ', studyType: 'read-only' },
        { kanji: 'やりすぎ', meaning: 'overkill; overdone', reading: 'やりすぎ', studyType: 'read-only' },
        { kanji: '床', meaning: 'floor', reading: 'ゆか', studyType: 'read-only' },
        { kanji: 'リサイクル', meaning: 'recycle', reading: 'リサイクル', studyType: 'read-only' },
        { kanji: '論理的', meaning: 'logical', reading: 'ろんりてき', studyType: 'read-only' },
        { kanji: '分れる', meaning: 'to get separated; to split', reading: 'わかれる', studyType: 'read-only' },
      ] },
    },
  },
  quartet2: {
    label: 'Quartet II',
    chapters: {
      ch7: { label: 'Chapter 7', cards: [
        { kanji: '壁', meaning: 'wall; barrier', reading: 'かべ', studyType: 'write' },
        { kanji: '文化の壁', meaning: 'cultural barrier', reading: 'ぶんかのかべ', studyType: 'read-only' },
        { kanji: '隣', meaning: 'next door; next to', reading: 'となり', studyType: 'read-only' },
        { kanji: '部屋', meaning: 'room', reading: 'へや', studyType: 'read-only' },
        { kanji: '薄い', meaning: 'thin', reading: 'うすい', studyType: 'read-only' },
        { kanji: '聞こえる', meaning: 'to be heard', reading: 'きこえる', studyType: 'read-only' },
        { kanji: '眠い', meaning: 'sleepy', reading: 'ねむい', studyType: 'read-only' },
        { kanji: '眠かったので', meaning: 'because (I) was sleepy', reading: 'ねむかったので', studyType: 'read-only' },
        { kanji: '辛い', meaning: 'painful; hard', reading: 'つらい', studyType: 'write' },
        { kanji: '濃い', meaning: 'strong; dark; concentrated', reading: 'こい', studyType: 'write' },
        { kanji: '早く', meaning: 'early; quickly', reading: 'はやく', studyType: 'read-only' },
        { kanji: '速く', meaning: 'fast', reading: 'はやく', studyType: 'write' },
        { kanji: '開ける', meaning: 'to open', reading: 'あける', studyType: 'read-only' },
        { kanji: '急ぐ', meaning: 'to hurry', reading: 'いそぐ', studyType: 'read-only' },
        { kanji: '遅れる', meaning: 'to be late', reading: 'おくれる', studyType: 'write' },
        { kanji: '焦る', meaning: 'to panic; to feel pressed', reading: 'あせる', studyType: 'read-only' },
        { kanji: '落ち着く', meaning: 'to calm down; to settle down', reading: 'おちつく', studyType: 'write' },
        { kanji: '緊張(する)', meaning: 'to be nervous; tension', reading: 'きんちょう(する)', studyType: 'read-only' },
        { kanji: '余裕', meaning: 'composure; leeway', reading: 'よゆう', studyType: 'read-only' },
        { kanji: '準備(する)', meaning: 'to prepare', reading: 'じゅんび(する)', studyType: 'read-only' },
      ] },
      ch8: { label: 'Chapter 8', cards: [
        { kanji: '伝統', meaning: 'tradition', reading: 'でんとう', studyType: 'write' },
        { kanji: '受け継ぐ', meaning: 'to inherit; to hand down', reading: 'うけつぐ', studyType: 'write' },
        { kanji: '祭り', meaning: 'festival', reading: 'まつり', studyType: 'read-only' },
        { kanji: '地域', meaning: 'region; local area', reading: 'ちいき', studyType: 'read-only' },
        { kanji: '世代', meaning: 'generation', reading: 'せだい', studyType: 'read-only' },
        { kanji: '昔ながらの', meaning: 'old-fashioned; traditional', reading: 'むかしながらの', studyType: 'read-only' },
        { kanji: '職人', meaning: 'craftsperson', reading: 'しょくにん', studyType: 'write' },
        { kanji: '技術', meaning: 'technique; technology', reading: 'ぎじゅつ', studyType: 'write' },
        { kanji: '工夫(する)', meaning: 'to devise; ingenuity', reading: 'くふう(する)', studyType: 'read-only' },
        { kanji: '暮らし', meaning: 'daily life; livelihood', reading: 'くらし', studyType: 'read-only' },
        { kanji: '支える', meaning: 'to support', reading: 'ささえる', studyType: 'write' },
        { kanji: '身近な', meaning: 'familiar; close at hand', reading: 'みぢかな', studyType: 'read-only' },
        { kanji: '魅力', meaning: 'appeal; attraction', reading: 'みりょく', studyType: 'write' },
        { kanji: '価値', meaning: 'value', reading: 'かち', studyType: 'write' },
        { kanji: '見直す', meaning: 'to reconsider; to reappraise', reading: 'みなおす', studyType: 'read-only' },
        { kanji: '保存(する)', meaning: 'to preserve', reading: 'ほぞん(する)', studyType: 'write' },
        { kanji: '受け入れる', meaning: 'to accept', reading: 'うけいれる', studyType: 'read-only' },
        { kanji: '広まる', meaning: 'to spread', reading: 'ひろまる', studyType: 'read-only' },
        { kanji: '現代', meaning: 'the present age; modern times', reading: 'げんだい', studyType: 'read-only' },
        { kanji: '失われる', meaning: 'to be lost', reading: 'うしなわれる', studyType: 'write' },
      ] },
      ch9: {
        label: 'Chapter 9',
        cards: [
          { kanji: '静かな', meaning: 'calm; quiet', reading: 'しずかな', studyType: 'read-only' },
          { kanji: '黙る', meaning: 'to become silent; to shut up', reading: 'だまる', studyType: 'read-only' },
          { kanji: '時刻', meaning: 'time', reading: 'じこく', studyType: 'read-only' },
          { kanji: '想像(する)', meaning: 'to imagine', reading: 'そうぞう(する)', studyType: 'read-only' },
          { kanji: '真っ暗な', meaning: 'completely dark', reading: 'まっくらな', studyType: 'read-only' },
          { kanji: '針', meaning: 'clock hand; needle', reading: 'はり', studyType: 'read-only' },
          { kanji: '刻む', meaning: 'to tick', reading: 'きざむ', studyType: 'read-only' },
          { kanji: '隔てる', meaning: 'to part; to separate', reading: 'へだてる', studyType: 'read-only' },
          { kanji: '引き離す', meaning: 'to pull apart; to separate', reading: 'ひきはなす', studyType: 'read-only' },
          { kanji: '存在(する)', meaning: 'to exist', reading: 'そんざい(する)', studyType: 'read-only' },
          { kanji: '鉄道', meaning: 'railway', reading: 'てつどう', studyType: 'read-only' },
          { kanji: '線路', meaning: 'rail track', reading: 'せんろ', studyType: 'read-only' },
          { kanji: '海面', meaning: 'sea surface', reading: 'かいめん', studyType: 'read-only' },
          { kanji: '[〜へ／〜に]向けて', meaning: 'toward ~', reading: 'むけて', studyType: 'read-only' },
          { kanji: '[〜が]浮かび上がる', meaning: 'to come to the surface', reading: 'うかびあがる', studyType: 'read-only' },
          { kanji: '[〜が]浮かぶ', meaning: 'to float', reading: 'うかぶ', studyType: 'read-only' },
          { kanji: '君', meaning: 'you (friendly)', reading: 'きみ', studyType: 'read-only' },
          { kanji: '恐怖', meaning: 'fear', reading: 'きょうふ', studyType: 'read-only' },
          { kanji: '我が家', meaning: 'my home', reading: 'わがや', studyType: 'read-only' },
          { kanji: '飼う', meaning: 'to keep/raise (an animal)', reading: 'かう', studyType: 'read-only' },
          { kanji: '事件', meaning: 'incident', reading: 'じけん', studyType: 'read-only' },
          { kanji: '仲良くなる', meaning: 'to get along with', reading: 'なかよくなる', studyType: 'read-only' },
          { kanji: '寝る', meaning: 'to sleep', reading: 'ねる', studyType: 'read-only' },
          { kanji: '枕', meaning: 'pillow', reading: 'まくら', studyType: 'read-only' },
          { kanji: '翌朝', meaning: 'next morning', reading: 'よくあさ', studyType: 'read-only' },
          { kanji: '腕', meaning: 'arm', reading: 'うで', studyType: 'read-only' },
          { kanji: '[〜に]入りこむ', meaning: 'to get into', reading: 'はいりこむ', studyType: 'read-only' },
          { kanji: '首', meaning: 'neck', reading: 'くび', studyType: 'read-only' },
          { kanji: 'レバー', meaning: 'lever', reading: 'レバー', studyType: 'read-only' },
          { kanji: '本棚', meaning: 'bookshelf', reading: 'ほんだな', studyType: 'read-only' },
          { kanji: '[〜に]埋もれる', meaning: 'to be buried', reading: 'うもれる', studyType: 'read-only' },
          { kanji: '冷静に', meaning: 'calmly', reading: 'れいせいに', studyType: 'write' },
          { kanji: '棚', meaning: 'shelf', reading: 'たな', studyType: 'read-only' },
          { kanji: '地震', meaning: 'earthquake', reading: 'じしん', studyType: 'read-only' },
          { kanji: '[〜が]倒れる', meaning: 'to fall down', reading: 'たおれる', studyType: 'read-only' },
          { kanji: '細工(する)', meaning: 'to devise; to trick', reading: 'さいく(する)', studyType: 'read-only' },
          { kanji: '倒す', meaning: 'to knock down', reading: 'たおす', studyType: 'read-only' },
          { kanji: '奇跡', meaning: 'miracle', reading: 'きせき', studyType: 'read-only' },
          { kanji: '不思議な', meaning: 'mysterious; strange', reading: 'ふしぎな', studyType: 'write' },
          { kanji: '洗濯物', meaning: 'laundry', reading: 'せんたくもの', studyType: 'read-only' },
        ],
      },
      ch10: {
        label: 'Chapter 10',
        sourceNote: 'Rebuilt from manually curated Chapter 10 study notes. Only the visible study entries were kept. studyType mapping used: ◆ = write, ◇ = read-only.',
        cards: [
          { kanji: '実施(する)', meaning: 'to carry out', reading: 'じっし(する)', studyType: 'read-only' },
          { kanji: '未婚者', meaning: 'unmarried person', reading: 'みこんしゃ', studyType: 'read-only' },
          { kanji: '未来', meaning: 'future', reading: 'みらい', studyType: 'read-only' },
          { kanji: '若年層', meaning: 'young people', reading: 'じゃくねんそう', studyType: 'read-only' },
          { kanji: '〜層', meaning: '(specific group of people)', reading: '〜そう', studyType: 'read-only' },
          { kanji: '夫婦', meaning: 'married couple', reading: 'ふうふ', studyType: 'read-only' },
          { kanji: '役割', meaning: 'role', reading: 'やくわり', studyType: 'write' },
          { kanji: '分担(する)', meaning: 'to share the load', reading: 'ぶんたん(する)', studyType: 'read-only' },
          { kanji: '夫', meaning: 'husband', reading: 'おっと', studyType: 'read-only' },
          { kanji: '低い', meaning: 'low', reading: 'ひくい', studyType: 'write' },
          { kanji: '7割', meaning: '70 percent', reading: 'ななわり', studyType: 'write' },
          { kanji: '幼い', meaning: 'very young; immature', reading: 'おさない', studyType: 'read-only' },
          { kanji: '占める', meaning: 'to occupy', reading: 'しめる', studyType: 'write' },
          { kanji: '低め', meaning: 'on the low side', reading: 'ひくめ', studyType: 'write' },
          { kanji: '負担感', meaning: 'sense of burden', reading: 'ふたんかん', studyType: 'write' },
          { kanji: '負担(する)', meaning: 'burden; load', reading: 'ふたん(する)', studyType: 'write' },
          { kanji: '反映(する)', meaning: 'to reflect', reading: 'はんえい(する)', studyType: 'read-only' },
          { kanji: '雇用(する)', meaning: 'to hire', reading: 'こよう(する)', studyType: 'write' },
          { kanji: '要因', meaning: 'factor', reading: 'よういん', studyType: 'write' },
          { kanji: '[〜に]尋ねる', meaning: 'to ask [vt.]', reading: 'たずねる', studyType: 'read-only' },
          { kanji: '挙げる', meaning: 'to raise; to give', reading: 'あげる', studyType: 'read-only' },
          { kanji: '育児休業(育休)', meaning: 'parental leave', reading: 'いくじきゅうぎょう(いくきゅう)', studyType: 'write' },
          { kanji: '取得率', meaning: 'acquisition rate', reading: 'しゅとくりつ', studyType: 'write' },
          { kanji: '取得(する)', meaning: 'to obtain', reading: 'しゅとく(する)', studyType: 'write' },
          { kanji: '〜率', meaning: '~ rate', reading: '〜りつ', studyType: 'write' },
          { kanji: '[〜が]浮き彫りになる', meaning: 'to come to surface [vi.]', reading: 'うきぼりになる', studyType: 'read-only' },
          { kanji: '条件', meaning: 'condition', reading: 'じょうけん', studyType: 'read-only' },
          { kanji: '結婚観', meaning: 'view of marriage', reading: 'けっこんかん', studyType: 'read-only' },
          { kanji: '正規', meaning: 'fulltime employment', reading: 'せいき', studyType: 'read-only' },
          { kanji: '平均', meaning: 'average', reading: 'へいきん', studyType: 'read-only' },
          { kanji: '政府', meaning: 'government', reading: 'せいふ', studyType: 'write' },
          { kanji: '[〜と]比較(する)', meaning: 'to compare', reading: 'ひかく(する)', studyType: 'write' },
          { kanji: '背景', meaning: 'background', reading: 'はいけい', studyType: 'read-only' },
          { kanji: '責任', meaning: 'responsibility', reading: 'せきにん', studyType: 'write' },
          { kanji: '失業率', meaning: 'unemployment rate', reading: 'しつぎょうりつ', studyType: 'write' },
          { kanji: '傾向', meaning: 'tendency', reading: 'けいこう', studyType: 'write' },
          { kanji: '低所得', meaning: 'low income', reading: 'ていしょとく', studyType: 'read-only' },
          { kanji: '援助(する)', meaning: 'to support; to assist', reading: 'えんじょ(する)', studyType: 'read-only' },
          { kanji: '割合', meaning: 'proportion', reading: 'わりあい', studyType: 'write' },
          { kanji: '支出(する)', meaning: 'to spend', reading: 'ししゅつ(する)', studyType: 'read-only' },
          { kanji: '〜主義', meaning: 'principle; -ism', reading: '〜しゅぎ', studyType: 'read-only' },
          { kanji: '公的負担', meaning: 'public expenditure', reading: 'こうてきふたん', studyType: 'write' },
          { kanji: '[〜が]顕在化(する)', meaning: 'to become obvious', reading: 'けんざいか(する)', studyType: 'read-only' },
          { kanji: '防犯', meaning: 'prevention of crime', reading: 'ぼうはん', studyType: 'read-only' },
          { kanji: '[〜に]設置(する)', meaning: 'to install', reading: 'せっち(する)', studyType: 'read-only' },
          { kanji: '犯罪', meaning: 'crime', reading: 'はんざい', studyType: 'read-only' },
          { kanji: '捜査(する)', meaning: 'to investigate', reading: 'そうさ(する)', studyType: 'read-only' },
          { kanji: '[〜が]欠かせない', meaning: 'indispensable', reading: 'かかせない', studyType: 'write' },
          { kanji: '比較的', meaning: 'relatively', reading: 'ひかくてき', studyType: 'write' },
          { kanji: '身近な', meaning: 'familiar', reading: 'みぢかな', studyType: 'read-only' },
          { kanji: '概観(する)', meaning: 'to review', reading: 'がいかん(する)', studyType: 'read-only' },
        ],
      },
      ch11: { label: 'Chapter 11', cards: [
        { kanji: '情報', meaning: 'information', reading: 'じょうほう', studyType: 'read-only' },
        { kanji: '検索(する)', meaning: 'to search', reading: 'けんさく(する)', studyType: 'write' },
        { kanji: '共有(する)', meaning: 'to share', reading: 'きょうゆう(する)', studyType: 'write' },
        { kanji: '発信(する)', meaning: 'to transmit; to post', reading: 'はっしん(する)', studyType: 'write' },
        { kanji: '受信(する)', meaning: 'to receive', reading: 'じゅしん(する)', studyType: 'write' },
        { kanji: '匿名', meaning: 'anonymous', reading: 'とくめい', studyType: 'write' },
        { kanji: '個人情報', meaning: 'personal information', reading: 'こじんじょうほう', studyType: 'read-only' },
        { kanji: '流出(する)', meaning: 'to leak; outflow', reading: 'りゅうしゅつ(する)', studyType: 'write' },
        { kanji: '信頼(する)', meaning: 'to trust', reading: 'しんらい(する)', studyType: 'read-only' },
        { kanji: '誤解(する)', meaning: 'to misunderstand', reading: 'ごかい(する)', studyType: 'write' },
        { kanji: '拡散(する)', meaning: 'to spread; diffuse', reading: 'かくさん(する)', studyType: 'write' },
        { kanji: '影響', meaning: 'influence; effect', reading: 'えいきょう', studyType: 'read-only' },
        { kanji: '依存(する)', meaning: 'to depend on', reading: 'いぞん(する)', studyType: 'write' },
        { kanji: '管理(する)', meaning: 'to manage', reading: 'かんり(する)', studyType: 'write' },
        { kanji: '制限(する)', meaning: 'to limit', reading: 'せいげん(する)', studyType: 'write' },
        { kanji: '便利な', meaning: 'convenient', reading: 'べんりな', studyType: 'read-only' },
        { kanji: '危険', meaning: 'danger; risk', reading: 'きけん', studyType: 'write' },
        { kanji: '注意(する)', meaning: 'to be careful; attention', reading: 'ちゅうい(する)', studyType: 'read-only' },
        { kanji: '現実', meaning: 'reality', reading: 'げんじつ', studyType: 'read-only' },
        { kanji: '仮想空間', meaning: 'virtual space', reading: 'かそうくうかん', studyType: 'write' },
      ] },
      ch12: { label: 'Chapter 12', cards: [
        { kanji: '幸福', meaning: 'happiness', reading: 'こうふく', studyType: 'write' },
        { kanji: '幸せ', meaning: 'happiness; fortunate', reading: 'しあわせ', studyType: 'read-only' },
        { kanji: '人生', meaning: 'life', reading: 'じんせい', studyType: 'read-only' },
        { kanji: '生き方', meaning: 'way of living', reading: 'いきかた', studyType: 'read-only' },
        { kanji: '価値観', meaning: 'values; sense of values', reading: 'かちかん', studyType: 'write' },
        { kanji: '選択(する)', meaning: 'to choose; choice', reading: 'せんたく(する)', studyType: 'write' },
        { kanji: '迷う', meaning: 'to hesitate; to be lost', reading: 'まよう', studyType: 'read-only' },
        { kanji: '悩む', meaning: 'to be troubled; to worry', reading: 'なやむ', studyType: 'write' },
        { kanji: '目標', meaning: 'goal', reading: 'もくひょう', studyType: 'write' },
        { kanji: '達成(する)', meaning: 'to accomplish', reading: 'たっせい(する)', studyType: 'write' },
        { kanji: '努力(する)', meaning: 'to make an effort', reading: 'どりょく(する)', studyType: 'write' },
        { kanji: '挑戦(する)', meaning: 'to challenge', reading: 'ちょうせん(する)', studyType: 'write' },
        { kanji: '失敗(する)', meaning: 'to fail; failure', reading: 'しっぱい(する)', studyType: 'write' },
        { kanji: '経験', meaning: 'experience', reading: 'けいけん', studyType: 'read-only' },
        { kanji: '成長(する)', meaning: 'to grow; growth', reading: 'せいちょう(する)', studyType: 'write' },
        { kanji: '支え', meaning: 'support', reading: 'ささえ', studyType: 'read-only' },
        { kanji: '感謝(する)', meaning: 'to appreciate; gratitude', reading: 'かんしゃ(する)', studyType: 'write' },
        { kanji: '人間関係', meaning: 'human relationships', reading: 'にんげんかんけい', studyType: 'read-only' },
        { kanji: '前向きな', meaning: 'positive; forward-looking', reading: 'まえむきな', studyType: 'read-only' },
        { kanji: '大切な', meaning: 'important; precious', reading: 'たいせつな', studyType: 'read-only' },
      ] },
    },
  },
};

const STORAGE_KEY = 'kanji-practice-progress-v6';
const DAY_MS = 24 * 60 * 60 * 1000;
const readingPassages = [
  {
    id: 'genki1-ch3-daily-life',
    sourceKey: 'genki1',
    chapterKey: 'ch3',
    title: 'A Day at School',
    level: 'Genki I / Chapter 3',
    translation: 'Mika goes to school in the morning, studies Japanese, talks with friends, and returns home at night.',
    lines: [
      [
        { type: 'word', surface: 'みかさん', reading: 'みかさん' },
        { type: 'text', text: 'は' },
        { type: 'word', surface: '朝', reading: 'あさ' },
        { type: 'text', text: '、' },
        { type: 'word', surface: '学校', reading: 'がっこう' },
        { type: 'text', text: 'へ' },
        { type: 'word', surface: '行', reading: 'い' },
        { type: 'text', text: 'きます。' },
      ],
      [
        { type: 'word', surface: '学校', reading: 'がっこう' },
        { type: 'text', text: 'で' },
        { type: 'word', surface: '日本語', reading: 'にほんご' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '勉強', reading: 'べんきょう' },
        { type: 'text', text: 'して、' },
        { type: 'word', surface: '友達', reading: 'ともだち' },
        { type: 'text', text: 'と' },
        { type: 'word', surface: '話', reading: 'はな' },
        { type: 'text', text: 'します。' },
      ],
      [
        { type: 'word', surface: '晩', reading: 'ばん' },
        { type: 'text', text: '、' },
        { type: 'word', surface: '家', reading: 'いえ' },
        { type: 'text', text: 'へ' },
        { type: 'word', surface: '帰', reading: 'かえ' },
        { type: 'text', text: 'って、' },
        { type: 'word', surface: '音楽', reading: 'おんがく' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '聞', reading: 'き' },
        { type: 'text', text: 'きます。' },
      ],
    ],
  },
  {
    id: 'quartet1-ch1-yoroshiku',
    sourceKey: 'quartet1',
    chapterKey: 'ch1',
    title: 'よろしく―日本語表と裏',
    level: 'Quartet I / Reading 1',
    translation: 'A cultural essay about how the Japanese expression 「よろしく」 sounds considerate on the surface, but can also shift the burden of judgment onto the listener.',
    lines: [
      [
        { type: 'word', surface: '日本人', reading: 'にほんじん' },
        { type: 'text', text: 'はいたるところで「よろしく」を' },
        { type: 'word', surface: '連発', reading: 'れんぱつ' },
        { type: 'text', text: 'する。' },
        { type: 'word', surface: '年賀状', reading: 'ねんがじょう' },
        { type: 'text', text: 'にはきまって「' },
        { type: 'word', surface: '本年', reading: 'ほんねん' },
        { type: 'text', text: 'もどうぞよろしく」と' },
        { type: 'word', surface: '書', reading: 'か' },
        { type: 'text', text: 'き、' },
        { type: 'word', surface: '知人', reading: 'ちじん' },
        { type: 'text', text: 'に' },
        { type: 'word', surface: '何', reading: 'なに' },
        { type: 'text', text: 'か' },
        { type: 'word', surface: '依頼', reading: 'いらい' },
        { type: 'text', text: 'する' },
        { type: 'word', surface: '時', reading: 'とき' },
        { type: 'text', text: 'にも、「よろしく」といって' },
        { type: 'word', surface: '頼', reading: 'たの' },
        { type: 'text', text: 'む。' },
      ],
      [
        { type: 'word', surface: '慣用語', reading: 'かんようご' },
        { type: 'text', text: '、あるいは' },
        { type: 'word', surface: '挨拶語', reading: 'あいさつご' },
        { type: 'text', text: 'みたいと' },
        { type: 'word', surface: '聞', reading: 'き' },
        { type: 'text', text: 'き' },
        { type: 'word', surface: '流', reading: 'なが' },
        { type: 'text', text: 'せばそれまでだが、そういわれて' },
        { type: 'word', surface: '誠', reading: 'まこと' },
        { type: 'text', text: 'に' },
        { type: 'word', surface: '相手', reading: 'あいて' },
        { type: 'text', text: 'の' },
        { type: 'word', surface: '依頼', reading: 'いらい' },
        { type: 'text', text: 'にこたえようとすると、「よろしく」の' },
        { type: 'word', surface: '意味', reading: 'いみ' },
        { type: 'text', text: 'がわからなくなる。' },
      ],
      [
        { type: 'text', text: '「よろしく」というのは、「よろしく」を' },
        { type: 'word', surface: '取', reading: 'と' },
        { type: 'text', text: 'り' },
        { type: 'word', surface: '計', reading: 'はか' },
        { type: 'text', text: 'って' },
        { type: 'word', surface: '欲', reading: 'ほ' },
        { type: 'text', text: 'しい」ということであろう。' },
        { type: 'word', surface: '頼', reading: 'たの' },
        { type: 'text', text: 'みごとをするほうは、' },
        { type: 'word', surface: '具体的', reading: 'ぐたいてき' },
        { type: 'text', text: 'な' },
        { type: 'word', surface: '要求', reading: 'ようきゅう' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '明示', reading: 'めいじ' },
        { type: 'text', text: 'して' },
        { type: 'word', surface: '頼', reading: 'たの' },
        { type: 'text', text: 'むと' },
        { type: 'word', surface: '相手', reading: 'あいて' },
        { type: 'text', text: 'が' },
        { type: 'word', surface: '迷惑', reading: 'めいわく' },
        { type: 'text', text: 'するだろうから、' },
      ],
      [
        { type: 'word', surface: '迷惑', reading: 'めいわく' },
        { type: 'text', text: 'をかからないように、' },
        { type: 'word', surface: '相手', reading: 'あいて' },
        { type: 'text', text: 'のでき' },
        { type: 'word', surface: '得', reading: 'う' },
        { type: 'text', text: 'る' },
        { type: 'word', surface: '範囲内', reading: 'はんいない' },
        { type: 'text', text: 'で' },
        { type: 'word', surface: '力', reading: 'ちから' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '貸', reading: 'か' },
        { type: 'text', text: 'して' },
        { type: 'word', surface: '欲', reading: 'ほ' },
        { type: 'text', text: 'しいと、その' },
        { type: 'word', surface: '範囲', reading: 'はんい' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '相手', reading: 'あいて' },
        { type: 'text', text: 'に' },
        { type: 'word', surface: '任', reading: 'まか' },
        { type: 'text', text: 'せているわけである。' },
      ],
      [
        { type: 'text', text: 'したがって、「よろしく」という' },
        { type: 'word', surface: '言葉', reading: 'ことば' },
        { type: 'text', text: 'の' },
        { type: 'word', surface: '意味', reading: 'いみ' },
        { type: 'text', text: 'は、「お' },
        { type: 'word', surface: '気', reading: 'き' },
        { type: 'text', text: 'だてしてください」ということにちがいない。しかし、そういわれると、' },
        { type: 'word', surface: '頼', reading: 'たの' },
        { type: 'text', text: 'まれた' },
        { type: 'word', surface: '相手', reading: 'あいて' },
        { type: 'text', text: 'は' },
        { type: 'word', surface: '具体的', reading: 'ぐたいてき' },
        { type: 'text', text: 'な' },
        { type: 'word', surface: '要求', reading: 'ようきゅう' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '出', reading: 'だ' },
        { type: 'text', text: 'されるよりもっと' },
        { type: 'word', surface: '迷惑', reading: 'めいわく' },
        { type: 'text', text: 'するのである。' },
      ],
      [
        { type: 'text', text: 'たとえば、' },
        { type: 'word', surface: '寄付', reading: 'きふ' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '乞', reading: 'こ' },
        { type: 'text', text: 'われた' },
        { type: 'word', surface: '場合', reading: 'ばあい' },
        { type: 'text', text: '、' },
        { type: 'word', surface: '一口', reading: 'ひとくち' },
        { type: 'text', text: 'いくらとあれば、' },
        { type: 'word', surface: '一口', reading: 'ひとくち' },
        { type: 'text', text: 'なり' },
        { type: 'word', surface: '二口', reading: 'ふたくち' },
        { type: 'text', text: 'なり、あるいはその' },
        { type: 'word', surface: '金額', reading: 'きんがく' },
        { type: 'text', text: 'によっては' },
        { type: 'word', surface: '断', reading: 'ことわ' },
        { type: 'text', text: 'るなりできるが、「お' },
        { type: 'word', surface: '気', reading: 'き' },
        { type: 'text', text: '」といわれると、どのていど' },
        { type: 'word', surface: '協力', reading: 'きょうりょく' },
        { type: 'text', text: 'すべきか' },
      ],
      [
        { type: 'word', surface: '思', reading: 'おも' },
        { type: 'text', text: 'い' },
        { type: 'word', surface: '悩', reading: 'なや' },
        { type: 'text', text: 'まねばならない。' },
        { type: 'word', surface: '相手', reading: 'あいて' },
        { type: 'text', text: 'に' },
        { type: 'word', surface: '判断', reading: 'はんだん' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '強', reading: 'し' },
        { type: 'text', text: 'い、' },
        { type: 'word', surface: '思', reading: 'おも' },
        { type: 'text', text: 'い' },
        { type: 'word', surface: '悩', reading: 'なや' },
        { type: 'text', text: 'ませるのは、' },
        { type: 'word', surface: '考', reading: 'かんが' },
        { type: 'text', text: 'えてみれば、ずいぶん' },
        { type: 'word', surface: '失礼', reading: 'しつれい' },
        { type: 'text', text: 'な' },
        { type: 'word', surface: '話', reading: 'はなし' },
        { type: 'text', text: 'ではないか。' },
      ],
      [
        { type: 'text', text: '（中略）' },
      ],
      [
        { type: 'word', surface: 'パリ', reading: 'パリ' },
        { type: 'text', text: 'に' },
        { type: 'word', surface: '半年', reading: 'はんとし' },
        { type: 'text', text: 'ほど' },
        { type: 'word', surface: '滞在', reading: 'たいざい' },
        { type: 'text', text: 'していた' },
        { type: 'word', surface: '時', reading: 'とき' },
        { type: 'text', text: 'のことである。ぼくの' },
        { type: 'word', surface: '知人', reading: 'ちじん' },
        { type: 'text', text: 'の' },
        { type: 'word', surface: '某氏', reading: 'ぼうし' },
        { type: 'text', text: 'が' },
        { type: 'word', surface: 'パリ', reading: 'パリ' },
        { type: 'text', text: 'へ' },
        { type: 'word', surface: '行', reading: 'い' },
        { type: 'text', text: 'く。よろしくという' },
        { type: 'word', surface: '手紙', reading: 'てがみ' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '友人', reading: 'ゆうじん' },
        { type: 'text', text: 'から' },
        { type: 'word', surface: '受', reading: 'う' },
        { type: 'text', text: 'けとったのである。' },
      ],
      [
        { type: 'word', surface: '私', reading: 'わたし' },
        { type: 'text', text: 'の' },
        { type: 'word', surface: '友人', reading: 'ゆうじん' },
        { type: 'text', text: 'は' },
        { type: 'word', surface: '気軽', reading: 'きがる' },
        { type: 'text', text: 'にそう' },
        { type: 'word', surface: '書', reading: 'か' },
        { type: 'text', text: 'いてよこしたのだが、いったい「よろしく」とは' },
        { type: 'word', surface: '何', reading: 'なに' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '要求', reading: 'ようきゅう' },
        { type: 'text', text: 'しているのか、こちらにはさっぱり' },
        { type: 'word', surface: '見当', reading: 'けんとう' },
        { type: 'text', text: 'がつかない。' },
      ],
      [
        { type: 'word', surface: '空港', reading: 'くうこう' },
        { type: 'text', text: 'まで' },
        { type: 'word', surface: '出迎', reading: 'でむか' },
        { type: 'text', text: 'えて' },
        { type: 'word', surface: '欲', reading: 'ほ' },
        { type: 'text', text: 'しい、というのか、' },
        { type: 'word', surface: 'ホテル', reading: 'ホテル' },
        { type: 'text', text: 'をとっておいてもらいたい、というのか、' },
        { type: 'word', surface: 'パリ', reading: 'パリ' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '案内', reading: 'あんない' },
        { type: 'text', text: 'してやってくれ、というのか、' },
        { type: 'word', surface: '一度', reading: 'いちど' },
        { type: 'text', text: 'ぐらい' },
        { type: 'word', surface: '食事', reading: 'しょくじ' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '共', reading: 'とも' },
        { type: 'text', text: 'にしてもらえまいか、というのか。' },
      ],
      [
        { type: 'word', surface: '私', reading: 'わたし' },
        { type: 'text', text: 'はさんざん' },
        { type: 'word', surface: '思', reading: 'おも' },
        { type: 'text', text: 'い' },
        { type: 'word', surface: '悩', reading: 'なや' },
        { type: 'text', text: 'んだすえ、' },
        { type: 'word', surface: '具体的', reading: 'ぐたいてき' },
        { type: 'text', text: 'な' },
        { type: 'word', surface: '依頼', reading: 'いらい' },
        { type: 'text', text: 'がないかぎり、' },
        { type: 'word', surface: '何', reading: 'なに' },
        { type: 'text', text: 'もしないことにした。' },
      ],
      [
        { type: 'text', text: 'そのような' },
        { type: 'word', surface: '判断', reading: 'はんだん' },
        { type: 'text', text: 'にまでこちらにさせるというのは、「' },
        { type: 'word', surface: '完璧', reading: 'かんぺき' },
        { type: 'text', text: '」ではない、あまりにも' },
        { type: 'word', surface: '甘', reading: 'あま' },
        { type: 'text', text: 'えすぎてあり、' },
        { type: 'word', surface: '虫', reading: 'むし' },
        { type: 'text', text: 'がよすぎる、と思ったからだ。' },
      ],
      [
        { type: 'text', text: '「よろしく」という' },
        { type: 'word', surface: '言葉', reading: 'ことば' },
        { type: 'text', text: 'は' },
        { type: 'word', surface: '一見', reading: 'いっけん' },
        { type: 'text', text: '、' },
        { type: 'word', surface: '相手', reading: 'あいて' },
        { type: 'text', text: 'の' },
        { type: 'word', surface: '意志', reading: 'いし' },
        { type: 'text', text: 'や' },
        { type: 'word', surface: '判断', reading: 'はんだん' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '尊重', reading: 'そんちょう' },
        { type: 'text', text: 'する' },
        { type: 'word', surface: '言', reading: 'い' },
        { type: 'text', text: 'い' },
        { type: 'word', surface: '方', reading: 'かた' },
        { type: 'text', text: 'のように' },
        { type: 'word', surface: '思', reading: 'おも' },
        { type: 'text', text: 'える。しかし、よく' },
        { type: 'word', surface: '考', reading: 'かんが' },
        { type: 'text', text: 'えてみると、それは' },
      ],
      [
        { type: 'word', surface: '責任', reading: 'せきにん' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '相手', reading: 'あいて' },
        { type: 'text', text: 'に' },
        { type: 'word', surface: '転嫁', reading: 'てんか' },
        { type: 'text', text: 'することによって、' },
        { type: 'word', surface: '自分', reading: 'じぶん' },
        { type: 'text', text: 'の' },
        { type: 'word', surface: '責任', reading: 'せきにん' },
        { type: 'text', text: 'をのがれようとする' },
        { type: 'word', surface: '呪文', reading: 'じゅもん' },
        { type: 'text', text: 'ではないか。どのようなことでも、' },
        { type: 'word', surface: '判断', reading: 'はんだん' },
        { type: 'text', text: 'をくだすということは、それなりに' },
        { type: 'word', surface: '努力', reading: 'どりょく' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '必要', reading: 'ひつよう' },
        { type: 'text', text: 'とする。' },
      ],
      [
        { type: 'text', text: 'あれこれ' },
        { type: 'word', surface: '考', reading: 'かんが' },
        { type: 'text', text: 'えることは、たいへん' },
        { type: 'word', surface: '面倒', reading: 'めんどう' },
        { type: 'text', text: 'なことなのである。その' },
        { type: 'word', surface: '面倒', reading: 'めんどう' },
        { type: 'text', text: 'な' },
        { type: 'word', surface: '思索', reading: 'しさく' },
        { type: 'text', text: 'を' },
        { type: 'word', surface: '放棄', reading: 'ほうき' },
        { type: 'text', text: 'して' },
        { type: 'word', surface: '相手', reading: 'あいて' },
        { type: 'text', text: 'に' },
        { type: 'word', surface: '押', reading: 'お' },
        { type: 'text', text: 'しつけることは、' },
        { type: 'word', surface: '時', reading: 'とき' },
        { type: 'text', text: 'には' },
        { type: 'word', surface: '無礼', reading: 'ぶれい' },
        { type: 'text', text: 'にもなりかねない。' },
      ],
      [
        { type: 'text', text: '「よろしく」とは、' },
        { type: 'word', surface: '別言', reading: 'べつげん' },
        { type: 'text', text: 'すれば、「よきにはからえ」ということである。「よきにはからえ」などというのは' },
        { type: 'word', surface: '殿様', reading: 'とのさま' },
        { type: 'text', text: 'が' },
        { type: 'word', surface: '家来', reading: 'けらい' },
        { type: 'text', text: 'に' },
        { type: 'word', surface: '対', reading: 'たい' },
        { type: 'text', text: 'して' },
        { type: 'word', surface: '命', reading: 'めい' },
        { type: 'text', text: 'じる' },
        { type: 'word', surface: '言葉', reading: 'ことば' },
        { type: 'text', text: 'であり、' },
        { type: 'word', surface: '横柄', reading: 'おうへい' },
        { type: 'text', text: 'な' },
        { type: 'word', surface: '要求', reading: 'ようきゅう' },
        { type: 'text', text: '以外の' },
        { type: 'word', surface: '何', reading: 'なに' },
        { type: 'text', text: 'ものでもないのである。' },
      ],
    ],
  },
];
const HOVER_REVEAL_MEDIA = '(hover: hover) and (pointer: fine)';

const state = {
  sourceKey: 'core',
  selectedChapters: [],
  activeTab: 'study',
  mode: 'flashcard',
  questionType: 'kanji-to-meaning',
  currentQuestionType: null,
  reviewFilter: 'all',
  cards: [],
  current: null,
  seen: 0,
  correct: 0,
  streak: 0,
  studyDays: [],
  progressByKanji: {},
  currentReadingPassageId: null,
  showAllReadings: false,
  revealedReadingTokens: {},
  section: 'home',
};

const els = {
  sourceSelect: document.getElementById('sourceSelect'),
  sourcePills: document.getElementById('sourcePills'),
  homeSectionBtn: document.getElementById('homeSectionBtn'),
  studySectionBtn: document.getElementById('studySectionBtn'),
  writeSectionBtn: document.getElementById('writeSectionBtn'),
  readingSectionBtn: document.getElementById('readingSectionBtn'),
  reviewSectionBtn: document.getElementById('reviewSectionBtn'),
  homePanel: document.getElementById('homePanel'),
  practicePanel: document.getElementById('practicePanel'),
  heroEyebrow: document.getElementById('heroEyebrow'),
  heroTitle: document.getElementById('heroTitle'),
  heroCopy: document.getElementById('heroCopy'),
  modeCards: document.getElementById('modeCards'),
  studyModePills: document.getElementById('studyModePills'),
  questionTypePills: document.getElementById('questionTypePills'),
  reviewFilterPills: document.getElementById('reviewFilterPills'),
  studyQuestionTypePills: document.getElementById('studyQuestionTypePills'),
  studyReviewFilterPills: document.getElementById('studyReviewFilterPills'),
  homeSourceSummary: document.getElementById('homeSourceSummary'),
  homeChapterSummary: document.getElementById('homeChapterSummary'),
  homeModeSummary: document.getElementById('homeModeSummary'),
  homeCardSummary: document.getElementById('homeCardSummary'),
  sessionSummaryLabel: document.getElementById('sessionSummaryLabel'),
  sessionSummaryCopy: document.getElementById('sessionSummaryCopy'),
  sessionProgressFill: document.getElementById('sessionProgressFill'),
  sessionProgressValue: document.getElementById('sessionProgressValue'),
  sessionDueSummary: document.getElementById('sessionDueSummary'),
  chapterList: document.getElementById('chapterList'),
  chapterSummary: document.getElementById('chapterSummary'),
  selectAllChaptersBtn: document.getElementById('selectAllChaptersBtn'),
  clearChaptersBtn: document.getElementById('clearChaptersBtn'),
  modeSelect: document.getElementById('modeSelect'),
  questionType: document.getElementById('questionType'),
  reviewFilter: document.getElementById('reviewFilter'),
  shuffleBtn: document.getElementById('shuffleBtn'),
  promptLabel: document.getElementById('promptLabel'),
  prompt: document.getElementById('prompt'),
  metaLine: document.getElementById('metaLine'),
  emptyState: document.getElementById('emptyState'),
  practiceContent: document.getElementById('practiceContent'),
  practiceStatus: document.getElementById('practiceStatus'),
  flashcardArea: document.getElementById('flashcardArea'),
  flashcardAnswer: document.getElementById('flashcardAnswer'),
  showAnswerBtn: document.getElementById('showAnswerBtn'),
  hardBtn: document.getElementById('hardBtn'),
  easyBtn: document.getElementById('easyBtn'),
  skipBtn: document.getElementById('skipBtn'),
  quizArea: document.getElementById('quizArea'),
  choices: document.getElementById('choices'),
  skipQuizBtn: document.getElementById('skipQuizBtn'),
  quizFeedback: document.getElementById('quizFeedback'),
  writingArea: document.getElementById('writingArea'),
  reviewArea: document.getElementById('reviewArea'),
  reviewAnswer: document.getElementById('reviewAnswer'),
  writingInput: document.getElementById('writingInput'),
  checkWritingBtn: document.getElementById('checkWritingBtn'),
  showWritingAnswerBtn: document.getElementById('showWritingAnswerBtn'),
  skipWritingBtn: document.getElementById('skipWritingBtn'),
  writingFeedback: document.getElementById('writingFeedback'),
  againBtn: document.getElementById('againBtn'),
  goodBtn: document.getElementById('goodBtn'),
  perfectBtn: document.getElementById('perfectBtn'),
  skipReviewBtn: document.getElementById('skipReviewBtn'),
  seenCount: document.getElementById('seenCount'),
  correctCount: document.getElementById('correctCount'),
  accuracy: document.getElementById('accuracy'),
  streak: document.getElementById('streak'),
  studyDays: document.getElementById('studyDays'),
  dueCount: document.getElementById('dueCount'),
  practiceArea: document.querySelector('.practice-area'),
  readingContent: document.getElementById('readingContent'),
  readingEmptyState: document.getElementById('readingEmptyState'),
  readingView: document.getElementById('readingView'),
  readingPassageTitle: document.getElementById('readingPassageTitle'),
  readingPassageMeta: document.getElementById('readingPassageMeta'),
  readingPassageList: document.getElementById('readingPassageList'),
  readingPassageBody: document.getElementById('readingPassageBody'),
  readingPassageGloss: document.getElementById('readingPassageGloss'),
  readingInstructions: document.getElementById('readingInstructions'),
  showAllReadingsToggle: document.getElementById('showAllReadingsToggle'),
};

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const todayKey = () => new Date().toISOString().slice(0, 10);
const currentSource = () => sources[state.sourceKey];
const currentChapterEntries = () => Object.entries(currentSource().chapters);
const supportsHoverReveal = () => window.matchMedia(HOVER_REVEAL_MEDIA).matches;

function ensureCardProgress(card) {
  if (!state.progressByKanji[card.kanji]) {
    state.progressByKanji[card.kanji] = { seen: 0, correct: 0, box: 1, dueAt: 0, lastResult: null };
  }
  return state.progressByKanji[card.kanji];
}

function loadProgress() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  state.seen = saved.seen || 0;
  state.correct = saved.correct || 0;
  state.streak = saved.streak || 0;
  state.studyDays = saved.studyDays || [];
  state.progressByKanji = saved.progressByKanji || {};
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    seen: state.seen,
    correct: state.correct,
    streak: state.streak,
    studyDays: state.studyDays,
    progressByKanji: state.progressByKanji,
  }));
}

function markStudyDay() {
  const today = todayKey();
  if (!state.studyDays.includes(today)) state.studyDays.push(today);
}

function dueCardsCount() {
  const now = Date.now();
  return Object.values(state.progressByKanji).filter(v => v.dueAt && v.dueAt <= now).length;
}

function updateStats() {
  els.seenCount.textContent = String(state.seen);
  els.correctCount.textContent = String(state.correct);
  els.accuracy.textContent = `${state.seen ? Math.round((state.correct / state.seen) * 100) : 0}%`;
  els.streak.textContent = String(state.streak);
  els.studyDays.textContent = String(state.studyDays.length);
  els.dueCount.textContent = String(dueCardsCount());
  updateSessionSummary();
}

function activeQuestionType() {
  if (state.questionType !== 'mixed') return state.questionType;
  const types = ['kanji-to-meaning', 'kanji-to-reading', 'meaning-to-kanji', 'reading-to-kanji'];
  return types[Math.floor(Math.random() * types.length)];
}

function promptFor(card) {
  const qType = state.currentQuestionType || activeQuestionType();
  switch (qType) {
    case 'kanji-to-meaning':
      return { label: 'What does this item mean?', value: card.kanji, answer: `${card.meaning} / ${card.reading}` };
    case 'kanji-to-reading':
      return { label: 'What is the reading?', value: card.kanji, answer: `${card.reading} (${card.meaning})` };
    case 'meaning-to-kanji':
      return { label: 'Which item matches this meaning?', value: card.meaning, answer: `${card.kanji} / ${card.reading}` };
    case 'reading-to-kanji':
      return { label: 'Which item matches this reading?', value: card.reading, answer: `${card.kanji} / ${card.meaning}` };
    default:
      return { label: '', value: '', answer: '' };
  }
}

function choiceValue(card) {
  const qType = state.currentQuestionType || state.questionType;
  if (qType === 'kanji-to-meaning') return card.meaning;
  if (qType === 'kanji-to-reading') return card.reading;
  return card.kanji;
}

function compareWritingInput(input, card) {
  const trimmed = input.trim();
  const qType = state.currentQuestionType || state.questionType;
  if (!trimmed) return false;
  if (qType === 'kanji-to-meaning') return card.meaning.toLowerCase().includes(trimmed.toLowerCase());
  if (qType === 'kanji-to-reading') return card.reading.includes(trimmed);
  return trimmed === card.kanji;
}

function scoreCard(card, success, bonusBox = 0) {
  const p = ensureCardProgress(card);
  p.seen += 1;
  if (success) {
    p.correct += 1;
    p.box = Math.min(5, p.box + 1 + bonusBox);
    p.lastResult = 'correct';
    state.correct += 1;
    state.streak += 1;
  } else {
    p.box = 1;
    p.lastResult = 'wrong';
    state.streak = 0;
  }
  const delays = [DAY_MS / 12, DAY_MS / 3, DAY_MS, DAY_MS * 3, DAY_MS * 7];
  p.dueAt = Date.now() + delays[p.box - 1];
  state.seen += 1;
  markStudyDay();
  updateStats();
  saveProgress();
}

function skipCard() {
  if (!state.current) return;
  state.cards.unshift(state.current);
  nextCard();
}

function selectedCards() {
  const cards = [];
  for (const key of state.selectedChapters) {
    const chapter = currentSource().chapters[key];
    if (chapter?.cards?.length) cards.push(...chapter.cards.map(card => ({ ...card, chapterKey: key })));
  }
  return state.activeTab === 'write' ? cards.filter(card => card.studyType === 'write') : cards;
}

function selectedReadingPassages() {
  return readingPassages.filter(passage =>
    passage.sourceKey === state.sourceKey && state.selectedChapters.includes(passage.chapterKey)
  );
}

function currentReadingPassage() {
  const passages = selectedReadingPassages();
  if (!passages.length) return null;
  return passages.find(passage => passage.id === state.currentReadingPassageId) || passages[0];
}

function resetReadingRevealState() {
  state.showAllReadings = false;
  state.revealedReadingTokens = {};
  els.showAllReadingsToggle.checked = false;
}

function setCurrentReadingPassage(passageId) {
  if (state.currentReadingPassageId === passageId) return;
  state.currentReadingPassageId = passageId;
  resetReadingRevealState();
}

function filteredCards() {
  const all = selectedCards();
  const now = Date.now();
  if (state.reviewFilter === 'all') return all;
  if (state.reviewFilter === 'due') {
    const due = all.filter(card => {
      const p = ensureCardProgress(card);
      return !p.dueAt || p.dueAt <= now;
    });
    return due.length ? due : all;
  }
  if (state.reviewFilter === 'new') {
    const fresh = all.filter(card => ensureCardProgress(card).seen < 2);
    return fresh.length ? fresh : all;
  }
  return all;
}

function refreshCards() {
  state.cards = shuffle(filteredCards());
  nextCard();
}

function nextCard() {
  if (!state.cards.length) state.cards = shuffle(filteredCards());
  state.current = state.cards.pop() || null;
  state.currentQuestionType = state.current ? activeQuestionType() : null;
  render();
}

function setMeta(card) {
  const p = ensureCardProgress(card);
  const chapterLabel = currentSource().chapters[card.chapterKey]?.label || 'Selected chapter';
  let hint = `Source: ${currentSource().label} / ${chapterLabel} / Review box: ${p.box}`;
  if (state.currentQuestionType === 'kanji-to-meaning' || state.currentQuestionType === 'meaning-to-kanji') hint += ` / Reading: ${card.reading}`;
  if (state.currentQuestionType === 'reading-to-kanji') hint += ` / Meaning: ${card.meaning}`;
  if (state.activeTab === 'write') hint += ' / Write item';
  els.metaLine.textContent = hint;
}

function updatePracticeStatus(card = state.current) {
  if (state.section === 'home' || !card) {
    els.practiceStatus.innerHTML = '';
    return;
  }

  const chapterLabel = currentSource().chapters[card.chapterKey]?.label || 'Selected chapter';
  const modeLabel = state.section === 'reading'
    ? 'Reading'
    : state.mode === 'quiz'
      ? 'Quiz'
      : state.mode === 'writing'
        ? 'Write focus'
        : state.mode === 'review'
          ? 'Review'
          : 'Flashcards';
  const chipData = [
    ['Mode', modeLabel],
    ['Deck', currentSource().label],
    ['Chapter', chapterLabel],
  ];

  if (state.section === 'reading') {
    chipData.push(['Passages', String(selectedReadingPassages().length)]);
  } else {
    const progress = ensureCardProgress(card);
    chipData.push(['Box', String(progress.box)]);
    const dueLabel = progress.dueAt && progress.dueAt > Date.now() ? 'Learning' : 'Due now';
    chipData.push(['Status', dueLabel]);
  }

  els.practiceStatus.innerHTML = chipData
    .map(([label, value]) => `<span class="practice-chip"><strong>${label}</strong><span>${value}</span></span>`)
    .join('');
}

function updateHomeSummary() {
  const chapterCount = state.selectedChapters.length;
  const itemCount = state.activeTab === 'reading' ? selectedReadingPassages().length : selectedCards().length;
  const modeLabel = state.activeTab === 'reading'
    ? 'Reading practice'
    : state.activeTab === 'write'
      ? 'Write focus'
      : state.mode === 'quiz'
        ? '4-choice quiz'
        : state.mode === 'review'
          ? 'Self-rated review'
          : state.mode === 'writing'
            ? 'Typing drill'
            : 'Flashcards';
  els.homeSourceSummary.textContent = currentSource().label;
  els.homeChapterSummary.textContent = chapterCount ? `${chapterCount} selected` : 'No chapters yet';
  els.homeModeSummary.textContent = modeLabel;
  els.homeCardSummary.textContent = state.activeTab === 'reading' ? `${itemCount} passage(s)` : `${itemCount} item(s)`;
  updateSessionSummary();
}

function updateSessionSummary() {
  const dueCount = dueCardsCount();
  const accuracy = state.seen ? Math.round((state.correct / state.seen) * 100) : 0;
  const selectedCount = state.activeTab === 'reading' ? selectedReadingPassages().length : selectedCards().length;
  const readiness = Math.max(8, Math.min(100, selectedCount === 0 ? 0 : Math.round((accuracy * 0.55) + (Math.min(state.streak, 10) * 4.5) + (selectedCount > 0 ? 18 : 0))));
  let label = 'Ready to start';
  let copy = 'Pick a lane, confirm your chapters, and jump in.';

  if (selectedCount === 0) {
    label = 'Selection needs input';
    copy = 'Choose a source or add chapters to build a session stack.';
  } else if (state.section === 'reading') {
    label = 'Reading lane is loaded';
    copy = `You have ${selectedCount} passage(s) ready with inline reading support.`;
  } else if (dueCount > 0) {
    label = 'Review pressure is building';
    copy = `${dueCount} card(s) are due now. Review mode will clear the queue fastest.`;
  } else if (state.streak >= 5) {
    label = 'You are in rhythm';
    copy = `Current streak: ${state.streak}. This is a good moment for a longer session.`;
  } else if (state.seen > 0) {
    label = 'Session is warmed up';
    copy = `Accuracy is ${accuracy}%. Shuffle or switch lanes to keep recall varied.`;
  }

  els.sessionSummaryLabel.textContent = label;
  els.sessionSummaryCopy.textContent = copy;
  els.sessionProgressFill.style.width = `${selectedCount === 0 ? 0 : readiness}%`;
  els.sessionProgressValue.textContent = `${selectedCount === 0 ? 0 : readiness}%`;
  els.sessionDueSummary.textContent = `${dueCount} due now`;
}

function updateChapterSummary() {
  if (state.activeTab === 'reading') {
    const count = selectedReadingPassages().length;
    els.chapterSummary.textContent = `${state.selectedChapters.length} chapter(s) selected • ${count} passage(s)`;
    return;
  }
  const count = selectedCards().length;
  const suffix = state.activeTab === 'write' ? 'write item(s)' : 'card(s)';
  els.chapterSummary.textContent = `${state.selectedChapters.length} chapter(s) selected • ${count} ${suffix}`;
}

function renderChapterList() {
  els.chapterList.innerHTML = '';
  currentChapterEntries().forEach(([key, chapter]) => {
    const total = chapter.cards.length;
    const writeCount = chapter.cards.filter(card => card.studyType === 'write').length;
    const readingCount = readingPassages.filter(
      passage => passage.sourceKey === state.sourceKey && passage.chapterKey === key
    ).length;
    const active = state.selectedChapters.includes(key);
    const count = state.activeTab === 'write' ? writeCount : state.activeTab === 'reading' ? readingCount : total;
    const suffix = state.activeTab === 'write' ? 'write' : state.activeTab === 'reading' ? 'passage' : 'cards';

    const btn = document.createElement('button');
    btn.className = `pill chapter-chip${active ? ' active' : ''}${count === 0 ? ' is-dim' : ''}`;
    btn.innerHTML = `<strong>${chapter.label}</strong><span>${count} ${suffix}${count === 1 || state.activeTab !== 'reading' ? '' : 's'}</span>`;
    btn.addEventListener('click', () => {
      state.selectedChapters = active
        ? state.selectedChapters.filter(k => k !== key)
        : [...new Set([...state.selectedChapters, key])];
      if (state.activeTab === 'reading') {
        const activePassage = currentReadingPassage();
        state.currentReadingPassageId = activePassage?.id || null;
        resetReadingRevealState();
      }
      renderChapterList();
      if (state.activeTab === 'reading') render();
      else refreshCards();
    });
    els.chapterList.appendChild(btn);
  });
  updateChapterSummary();
}

function renderSourcePills() {
  els.sourcePills.innerHTML = '';
  Object.entries(sources).forEach(([key, source]) => {
    const btn = document.createElement('button');
    btn.className = `pill${state.sourceKey === key ? ' active' : ''}`;
    btn.textContent = source.label;
    btn.addEventListener('click', () => {
      if (state.sourceKey === key) return;
      els.sourceSelect.value = key;
      els.sourceSelect.dispatchEvent(new Event('change'));
    });
    els.sourcePills.appendChild(btn);
  });
}

function renderChoicePills(container, options, currentValue, onSelect) {
  container.innerHTML = '';
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = `pill${currentValue === option.value ? ' active' : ''}`;
    btn.textContent = option.label;
    btn.addEventListener('click', () => onSelect(option.value));
    container.appendChild(btn);
  });
}

function renderModeCards() {
  const cards = [
    { key: 'flashcard', title: 'Flashcards', copy: 'Fast recognition and reveal with cute little reps.', icon: '🫧', tag: 'Quick reps', lane: 'Study lane' },
    { key: 'quiz', title: 'Quiz', copy: 'Multiple choice with instant feedback and momentum.', icon: '🎯', tag: 'Decision speed', lane: 'Study lane' },
    { key: 'writing', title: 'Write Focus', copy: 'Type the answer and lock in active recall.', icon: '✍️', tag: 'Production', lane: 'Write lane' },
    { key: 'review', title: 'Review', copy: 'Self-rate, clear due cards, and keep the streak cozy.', icon: '🌈', tag: 'Due-first', lane: 'Review lane' },
  ];
  els.modeCards.innerHTML = '';
  cards.forEach(card => {
    const btn = document.createElement('button');
    btn.className = `mode-card${state.mode === card.key ? ' active' : ''}`;
    btn.innerHTML = `
      <div class="mode-card-head">
        <span class="mode-card-icon" aria-hidden="true">${card.icon}</span>
        <span class="mode-card-status">${state.mode === card.key ? 'Current mode' : 'Available'}</span>
      </div>
      <div>
        <strong>${card.title}</strong>
        <p>${card.copy}</p>
      </div>
      <div class="mode-card-meta">
        <span class="mode-card-tag">${card.tag}</span>
        <span class="mode-card-lane">${card.lane}</span>
      </div>
    `;
    btn.addEventListener('click', () => {
      state.mode = card.key;
      els.modeSelect.value = card.key;
      if (card.key === 'writing') setSection('write');
      else if (card.key === 'review') setSection('review');
      else setSection('study');
      refreshCards();
    });
    els.modeCards.appendChild(btn);
  });
}

function syncHero() {
  const map = {
    home: ['Home', 'Pick your study vibe ✨', 'Bounce between quick recall, writing drills, reading passages, or a gentle review session.'],
    study: ['Study', 'Cute little study sprint', 'Use flashcards or quizzes with your current deck and chapter stack.'],
    write: ['Write Focus', 'Kanji production time', 'Surface the write-tagged items and keep the answer flow nice and snappy.'],
    reading: ['Reading', 'Passage practice', 'Read short passages, reveal readings when needed, and stay cozy in the same chapter lane.'],
    review: ['Review', 'Soft reset for due cards', 'Self-rate answers and clear the cards asking for a little extra love.'],
  };
  const [eyebrow, title, copy] = map[state.section];
  els.heroEyebrow.textContent = eyebrow;
  els.heroTitle.textContent = title;
  els.heroCopy.textContent = copy;
}

function syncSectionButtons() {
  const buttons = {
    home: els.homeSectionBtn,
    study: els.studySectionBtn,
    write: els.writeSectionBtn,
    reading: els.readingSectionBtn,
    review: els.reviewSectionBtn,
  };
  Object.entries(buttons).forEach(([key, button]) => button.classList.toggle('active', state.section === key));
  document.body.dataset.section = state.section;
  els.homePanel.classList.toggle('hidden', state.section !== 'home');
  els.practicePanel.classList.toggle('hidden', state.section === 'home');
}

function setSection(section) {
  state.section = section;
  if (section === 'study') state.activeTab = 'study';
  if (section === 'write') {
    state.activeTab = 'write';
    state.mode = 'writing';
    els.modeSelect.value = 'writing';
  }
  if (section === 'reading') state.activeTab = 'reading';
  if (section === 'review') {
    state.activeTab = 'study';
    state.mode = 'review';
    els.modeSelect.value = 'review';
  }
  syncSectionButtons();
  syncHero();
  updateTabButtons();
  updateHomeSummary();
}

function renderReadingPassageList(passages, activePassage) {
  els.readingPassageList.innerHTML = '';
  passages.forEach(passage => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `reading-passage-option${passage.id === activePassage.id ? ' active' : ''}`;
    button.innerHTML = `${passage.title}<small>${passage.level}</small>`;
    button.addEventListener('click', () => {
      setCurrentReadingPassage(passage.id);
      render();
    });
    els.readingPassageList.appendChild(button);
  });
}

function createReadingToken(token, tokenKey, isMobile) {
  if (token.type === 'text') return document.createTextNode(token.text);

  const button = document.createElement('button');
  button.type = 'button';
  button.className = `reading-token${token.reading ? ' has-reading' : ''}`;
  button.dataset.tokenKey = tokenKey;

  if (token.reading) {
    const ruby = document.createElement('ruby');
    ruby.append(document.createTextNode(token.surface));
    const rt = document.createElement('rt');
    rt.textContent = token.reading;
    ruby.appendChild(rt);
    button.appendChild(ruby);
  } else {
    button.textContent = token.surface;
  }

  if (token.reading && state.revealedReadingTokens[tokenKey]) {
    button.classList.add('is-revealed');
  }

  if (token.reading && isMobile) {
    button.addEventListener('click', () => {
      state.revealedReadingTokens[tokenKey] = !state.revealedReadingTokens[tokenKey];
      button.classList.toggle('is-revealed', Boolean(state.revealedReadingTokens[tokenKey]));
    });
  } else if (!token.reading) {
    button.disabled = true;
  }

  return button;
}

function renderReading() {
  const passages = selectedReadingPassages();
  const activePassage = currentReadingPassage();
  const hasPassage = Boolean(activePassage);
  const isMobile = !supportsHoverReveal();

  updatePracticeStatus(hasPassage ? { chapterKey: activePassage.chapterKey } : null);
  els.practiceArea.classList.add('reading-mode');
  els.emptyState.classList.add('hidden');
  els.practiceContent.classList.add('hidden');
  els.readingContent.classList.remove('hidden');
  els.readingEmptyState.classList.toggle('hidden', hasPassage);
  els.readingView.classList.toggle('hidden', !hasPassage);

  if (!hasPassage) return;

  els.readingView.classList.toggle('show-all', state.showAllReadings);
  els.readingView.classList.toggle('mobile', isMobile);
  els.readingPassageTitle.textContent = activePassage.title;
  els.readingPassageMeta.textContent = `${currentSource().label} / ${currentSource().chapters[activePassage.chapterKey]?.label || activePassage.level}`;
  els.readingInstructions.textContent = isMobile
    ? 'Tap individual words to toggle readings, or enable Show all readings.'
    : 'Hover words to reveal readings, or enable Show all readings.';
  els.readingPassageGloss.textContent = activePassage.translation;
  els.showAllReadingsToggle.checked = state.showAllReadings;

  renderReadingPassageList(passages, activePassage);

  els.readingPassageBody.innerHTML = '';
  activePassage.lines.forEach((line, lineIndex) => {
    const paragraph = document.createElement('p');
    paragraph.className = 'reading-line';
    line.forEach((token, tokenIndex) => {
      const tokenKey = `${activePassage.id}:${lineIndex}:${tokenIndex}`;
      paragraph.appendChild(createReadingToken(token, tokenKey, isMobile));
    });
    els.readingPassageBody.appendChild(paragraph);
  });
}

function renderFlashcard() {
  const info = promptFor(state.current);
  els.promptLabel.textContent = info.label;
  els.prompt.textContent = info.value;
  els.flashcardAnswer.textContent = info.answer;
  els.flashcardAnswer.classList.add('hidden');
  setMeta(state.current);
  els.flashcardArea.classList.remove('hidden');
  els.quizArea.classList.add('hidden');
  els.writingArea.classList.add('hidden');
  els.reviewArea.classList.add('hidden');
}

function renderQuiz() {
  const info = promptFor(state.current);
  els.promptLabel.textContent = info.label;
  els.prompt.textContent = info.value;
  setMeta(state.current);
  els.flashcardArea.classList.add('hidden');
  els.quizArea.classList.remove('hidden');
  els.writingArea.classList.add('hidden');
  els.reviewArea.classList.add('hidden');
  els.quizFeedback.textContent = '';

  const pool = shuffle(selectedCards().filter(c => c.kanji !== state.current.kanji)).slice(0, 3);
  const options = shuffle([state.current, ...pool]);
  els.choices.innerHTML = '';
  options.forEach(card => {
    const btn = document.createElement('button');
    btn.textContent = choiceValue(card);
    btn.addEventListener('click', () => {
      const ok = card.kanji === state.current.kanji;
      scoreCard(state.current, ok);
      btn.classList.add(ok ? 'correct' : 'wrong');
      els.quizFeedback.textContent = ok ? 'Correct ✨' : `Not quite — answer: ${choiceValue(state.current)}`;
      setTimeout(nextCard, 900);
    });
    els.choices.appendChild(btn);
  });
}

function renderWriting() {
  const info = promptFor(state.current);
  els.promptLabel.textContent = `${info.label} (type your answer)`;
  els.prompt.textContent = info.value;
  setMeta(state.current);
  els.flashcardArea.classList.add('hidden');
  els.quizArea.classList.add('hidden');
  els.writingArea.classList.remove('hidden');
  els.reviewArea.classList.add('hidden');
  els.writingInput.value = '';
  els.writingFeedback.textContent = '';
  els.writingInput.focus();
}

function renderReview() {
  const info = promptFor(state.current);
  els.promptLabel.textContent = `${info.label} (self-rated review)`;
  els.prompt.textContent = info.value;
  setMeta(state.current);
  els.reviewAnswer.textContent = info.answer;
  els.flashcardArea.classList.add('hidden');
  els.quizArea.classList.add('hidden');
  els.writingArea.classList.add('hidden');
  els.reviewArea.classList.remove('hidden');
}

function render() {
  updateChapterSummary();
  updateHomeSummary();
  renderSourcePills();
  renderModeCards();
  syncSectionButtons();
  syncHero();
  updatePracticeStatus();
  if (state.activeTab === 'reading' && state.section !== 'home') {
    renderReading();
    return;
  }
  els.practiceArea.classList.remove('reading-mode');
  els.readingContent.classList.add('hidden');
  const hasCard = Boolean(state.current);
  els.emptyState.classList.toggle('hidden', hasCard);
  els.practiceContent.classList.toggle('hidden', !hasCard);
  if (state.section === 'home') return;
  if (!hasCard) return;
  if (state.mode === 'flashcard') renderFlashcard();
  else if (state.mode === 'quiz') renderQuiz();
  else if (state.mode === 'writing') renderWriting();
  else renderReview();
}

function updateTabButtons() {
  const controlsDisabled = state.activeTab === 'reading';
  els.modeSelect.disabled = controlsDisabled;
  els.questionType.disabled = controlsDisabled;
  els.reviewFilter.disabled = controlsDisabled;
}

function initSourceSelector() {
  Object.entries(sources).forEach(([key, source]) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = source.label;
    els.sourceSelect.appendChild(opt);
  });
  els.sourceSelect.value = state.sourceKey;
  els.sourceSelect.addEventListener('change', e => {
    state.sourceKey = e.target.value;
    state.selectedChapters = currentChapterEntries().map(([key]) => key);
    if (state.activeTab === 'reading') {
      const activePassage = currentReadingPassage();
      state.currentReadingPassageId = activePassage?.id || null;
      resetReadingRevealState();
    }
    renderChapterList();
    if (state.activeTab === 'reading') render();
    else refreshCards();
  });
}

function initControls() {
  const studyModeOptions = [
    { value: 'flashcard', label: '🫧 Flashcards' },
    { value: 'quiz', label: '🎯 Quiz' },
    { value: 'writing', label: '✍️ Write focus' },
    { value: 'review', label: '🌈 Review' },
  ];
  const questionTypeOptions = [
    { value: 'kanji-to-meaning', label: 'Kanji → meaning' },
    { value: 'kanji-to-reading', label: 'Kanji → reading' },
    { value: 'meaning-to-kanji', label: 'Meaning → kanji' },
    { value: 'reading-to-kanji', label: 'Reading → kanji' },
    { value: 'mixed', label: 'Mixed' },
  ];
  const reviewFilterOptions = [
    { value: 'all', label: 'All cards' },
    { value: 'due', label: 'Review first' },
    { value: 'new', label: 'New first' },
  ];
  const rerenderChoicePills = () => {
    const onStudyModeSelect = value => {
      state.mode = value;
      els.modeSelect.value = value;
      if (value === 'writing') setSection('write');
      else if (value === 'review') setSection('review');
      else setSection('study');
      rerenderChoicePills();
      refreshCards();
    };
    const onQuestionTypeSelect = value => {
      state.questionType = value;
      els.questionType.value = value;
      rerenderChoicePills();
      nextCard();
    };
    const onReviewFilterSelect = value => {
      state.reviewFilter = value;
      els.reviewFilter.value = value;
      rerenderChoicePills();
      refreshCards();
    };
    renderChoicePills(els.studyModePills, studyModeOptions, state.mode, onStudyModeSelect);
    renderChoicePills(els.questionTypePills, questionTypeOptions, state.questionType, onQuestionTypeSelect);
    renderChoicePills(els.reviewFilterPills, reviewFilterOptions, state.reviewFilter, onReviewFilterSelect);
    renderChoicePills(els.studyQuestionTypePills, questionTypeOptions, state.questionType, onQuestionTypeSelect);
    renderChoicePills(els.studyReviewFilterPills, reviewFilterOptions, state.reviewFilter, onReviewFilterSelect);
  };

  els.modeSelect.addEventListener('change', e => { state.mode = e.target.value; renderModeCards(); nextCard(); });
  els.questionType.addEventListener('change', e => { state.questionType = e.target.value; rerenderChoicePills(); nextCard(); });
  els.reviewFilter.addEventListener('change', e => { state.reviewFilter = e.target.value; rerenderChoicePills(); refreshCards(); });
  els.shuffleBtn.addEventListener('click', () => {
    if (state.section === 'home') setSection('study');
    refreshCards();
  });

  [
    ['home', els.homeSectionBtn],
    ['study', els.studySectionBtn],
    ['write', els.writeSectionBtn],
    ['reading', els.readingSectionBtn],
    ['review', els.reviewSectionBtn],
  ].forEach(([section, button]) => {
    button.addEventListener('click', () => {
      setSection(section);
      state.cards = [];
      state.current = null;
      if (section === 'reading') {
        state.currentReadingPassageId = currentReadingPassage()?.id || null;
        resetReadingRevealState();
        renderChapterList();
        render();
        return;
      }
      renderChapterList();
      if (section === 'home') render();
      else refreshCards();
    });
  });

  els.selectAllChaptersBtn.addEventListener('click', () => {
    state.selectedChapters = currentChapterEntries().map(([key]) => key);
    if (state.activeTab === 'reading') {
      state.currentReadingPassageId = currentReadingPassage()?.id || null;
      resetReadingRevealState();
    }
    renderChapterList();
    if (state.activeTab === 'reading') render();
    else refreshCards();
  });

  els.clearChaptersBtn.addEventListener('click', () => {
    state.selectedChapters = [];
    if (state.activeTab === 'reading') {
      state.currentReadingPassageId = null;
      resetReadingRevealState();
    }
    renderChapterList();
    if (state.activeTab === 'reading') render();
    else refreshCards();
  });

  rerenderChoicePills();
}

els.showAnswerBtn.addEventListener('click', () => els.flashcardAnswer.classList.remove('hidden'));
els.hardBtn.addEventListener('click', () => { scoreCard(state.current, false); nextCard(); });
els.easyBtn.addEventListener('click', () => { scoreCard(state.current, true); nextCard(); });
els.skipBtn.addEventListener('click', skipCard);
els.skipQuizBtn.addEventListener('click', skipCard);
els.againBtn.addEventListener('click', () => { scoreCard(state.current, false); nextCard(); });
els.goodBtn.addEventListener('click', () => { scoreCard(state.current, true); nextCard(); });
els.perfectBtn.addEventListener('click', () => { scoreCard(state.current, true, 1); nextCard(); });
els.skipReviewBtn.addEventListener('click', skipCard);
els.checkWritingBtn.addEventListener('click', () => {
  const ok = compareWritingInput(els.writingInput.value, state.current);
  scoreCard(state.current, ok);
  els.writingFeedback.textContent = ok ? 'Correct ✨' : `Not quite — answer: ${promptFor(state.current).answer}`;
  setTimeout(nextCard, 1100);
});
els.showWritingAnswerBtn.addEventListener('click', () => {
  els.writingFeedback.textContent = `Answer: ${promptFor(state.current).answer}`;
});
els.skipWritingBtn.addEventListener('click', skipCard);
els.showAllReadingsToggle.addEventListener('change', e => {
  state.showAllReadings = e.target.checked;
  if (state.showAllReadings) state.revealedReadingTokens = {};
  render();
});
els.writingInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') els.checkWritingBtn.click();
});

loadProgress();
updateStats();
initSourceSelector();
initControls();
state.selectedChapters = currentChapterEntries().map(([key]) => key);
setSection('home');
renderChapterList();
render();
;
