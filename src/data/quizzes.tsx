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
      {
        speaker: "hiori",
        text: "283プロに関する何かの頭文字かな",
      },
      { speaker: "meguru", text: "ユニット名の頭文字じゃないかな！？" },
      { speaker: "mano", text: "ユニットのカラーが関係しているよ" },
    ],
  },
  {
    id: 2,
    title: "Reminiscence",
    imageName: "riddle4.png",
    answer: "4443b07363c5402990b358b7400810f70a742a98d39e8d6bf705133bca449dce",
    answerLength: "かびん".length,
    hints: [
      {
        speaker: "meguru",
        text: "なんだか見覚えがある気がするんだけど・・・",
      },
      { speaker: "hiori", text: "位置関係が重要そうだね" },
      { speaker: "mano", text: "事務所の中を思い出してみよう・・・！" },
    ],
  },
  {
    id: 3,
    title: "Diagram",
    imageName: "q3.png",
    answer: "4f75c7738f7053232a7f5c268c73d2488b34e0b955a279e59464eb084628197b",
    answerLength: "あお".length,
    hints: [
      {
        speaker: "meguru",
        text: "色は283アイドルのカラーを表しているかも...？",
      },
      { speaker: "hiori", text: "真ん中は七草さんと愛依さんかな 共通点は..." },
      { speaker: "mano", text: "これは新幹線の路線図を表しているよ" },
    ],
  },
  {
    id: 4,
    title: "Simplification",
    imageName: "riddle3.png",
    answer: "8e8d612e419cbc402f31168553e5544a8b3a59ac38d99bdce09aec8eecbfcfe7",
    answerLength: "なつは".length,
    hints: [
      {
        speaker: "meguru",
        text: "何かの計算結果っぽい？",
      },
      { speaker: "mano", text: "うんっ 何かを「割り算」した結果だよ" },
      { speaker: "hiori", text: "冬優子さんは 12 / 4 ってことか" },
    ],
  },
];
