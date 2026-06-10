export const STAGE_INTRO = 0;
export const STAGE_STORY = 998;
export const STAGE_CLEAR = 999;

export interface Hint {
  speaker: "mano" | "hiori" | "meguru"; // あとで画像ファイル名や名前に変換するため
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
    title: "Q1",
    imageName: "q1.png",
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
    title: "Q2",
    imageName: "q2.png",
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
    title: "Q3",
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
];
