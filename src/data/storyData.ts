export interface DialogueLine {
  speaker: "mano" | "hiori" | "meguru" | "none";
  face?: number;
  text: string;
}

export const PROLOGUE_STORY: DialogueLine[] = [
  {
    speaker: "none",
    text: "〜283プロのレッスンルーム〜",
  },
  {
    speaker: "hiori",
    face: 1,
    text: "えっ 謎解き？",
  },
  {
    speaker: "mano",
    face: 2,
    text: "う、うんっ",
  },
  {
    speaker: "mano",
    face: 1,
    text: "この前の学園祭で謎解きカフェをやってから 謎解きを考えるのにハマっちゃって...",
  },
  {
    speaker: "mano",
    face: 2,
    text: "それでね、283プロの謎解きも何問か考えたんだ",
  },
  {
    speaker: "hiori",
    face: 3,
    text: "へぇ... すごいね真乃",
  },
  {
    speaker: "meguru",
    face: 2,
    text: "面白そう！ やってみたい！",
  },
  {
    speaker: "mano",
    face: 2,
    text: "うんっ これなんだけど...",
  },
  {
    speaker: "meguru",
    face: 2,
    text: "よーし灯織！どっちが先に解けるか勝負しよう！",
  },
  {
    speaker: "mano",
    face: 1,
    text: "もしかしたら結構難しいのもあるかも...",
  },
  {
    speaker: "meguru",
    face: 1,
    text: "灯織...！ 協力しよう...！",
  },
  {
    speaker: "hiori",
    face: 2,
    text: "・・・",
  },
  {
    speaker: "mano",
    face: 1,
    text: "難しかったらヒントもあるからね",
  },
];
