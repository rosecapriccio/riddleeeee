export const STAGE_INTRO = 0;
export const STAGE_STORY = 997;
export const STAGE_LOADING = 998;
export const STAGE_CLEAR = 999;

export interface Hint {
  speaker: "mano" | "hiori" | "meguru";
  text: string;
}

export interface QuizData {
  id: number;
  title: string;
  imageName: string;
  answer: string;
  answerLength: number;
  hints: Hint[];
}

export const QUIZ_LIST: QuizData[] = [
  {
    id: 1,
    title: "Subtractive",
    imageName: "riddle1.png",
    answer: "5a742a1142b8ad7c5c53a11a58265130539443ad582de2938ab0a4535b994d90",
    answerLength: "ほ".length,
    hints: [
      { speaker: "meguru", text: "ユニット名の頭文字じゃないかな！？" },
      { speaker: "mano", text: "ユニットのカラーが関係しているよ" },
      {
        speaker: "hiori",
        text: "「＋」はカラーが混ざるという意味...？",
      },
    ],
  },
  {
    id: 2,
    title: "All things in nature",
    imageName: "riddle2.png",
    answer: "2fde599afc6a9a253595e79db8244acd2a0b7ba98e25605d2f0d35a2fafda9d5",
    answerLength: "えんじん".length,
    hints: [
      {
        speaker: "hiori",
        text: "ストローという文字が①〜④に入るのかな",
      },
      { speaker: "mano", text: "四角と丸数字には何かの「歌詞」が入るよ" },
      { speaker: "meguru", text: "Q1... KAWAIIとは..." },
    ],
  },
  // {
  //   id: 3,
  //   title: "Reminiscence",
  //   imageName: "riddle4.png",
  //   answer: "4443b07363c5402990b358b7400810f70a742a98d39e8d6bf705133bca449dce",
  //   answerLength: "かびん".length,
  //   hints: [
  //     {
  //       speaker: "meguru",
  //       text: "なんだか見覚えがある気がするんだけど...",
  //     },
  //     { speaker: "hiori", text: "位置関係が重要そうだね" },
  //     { speaker: "mano", text: "事務所の中を思い出してみよう...！" },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Simplification",
  //   imageName: "riddle3.png",
  //   answer: "8e8d612e419cbc402f31168553e5544a8b3a59ac38d99bdce09aec8eecbfcfe7",
  //   answerLength: "なつは".length,
  //   hints: [
  //     {
  //       speaker: "meguru",
  //       text: "何かの計算結果っぽい？",
  //     },
  //     { speaker: "mano", text: "うんっ 何かを「割り算」した結果だよ" },
  //     { speaker: "hiori", text: "冬優子さんは 12 / 4 ってことか" },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Diagram",
  //   imageName: "riddle5.png",
  //   answer: "752c59f43ebac301df0a7333ae16ff6be99c79b1ca61665a24d73c5435593f32",
  //   answerLength: "ゆいか".length,
  //   hints: [
  //     {
  //       speaker: "meguru",
  //       text: "色は283アイドルのカラーを表しているかも...？",
  //     },
  //     { speaker: "hiori", text: "真ん中は七草さんと愛依さんかな 共通点は..." },
  //     { speaker: "mano", text: "これは新幹線の路線図を表しているよ" },
  //   ],
  // },
];
