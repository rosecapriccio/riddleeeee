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
    speaker: "mano",
    face: 1,
    text: "この前の学園祭で謎解きカフェをやったときに、謎を考えるのにハマっちゃって・・・",
  },
  {
    speaker: "mano",
    face: 2,
    text: "283プロの謎を考えたんだ よければやってみない？",
  },
  {
    speaker: "hiori",
    face: 1,
    text: "へぇ・・・すごいね真乃",
  },
  {
    speaker: "meguru",
    face: 2,
    text: "面白そう！解いてみたい！」",
  },
  {
    speaker: "mano",
    face: 1,
    text: "うん！ふつつかものですがよければ・・・",
  },
  {
    speaker: "hiori",
    face: 2,
    text: "それちょっと違くない？",
  },
  {
    speaker: "meguru",
    face: 1,
    text: "難しそうだなあ",
  },
  {
    speaker: "meguru",
    face: 2,
    text: "協力形式でいいよね？灯織",
  },
  {
    speaker: "hiori",
    face: 3,
    text: "いいよ がんばろう",
  },
  {
    speaker: "mano",
    face: 1,
    text: "全部で５問あるんだ 難しかったらヒントもあるからね",
  },
];
