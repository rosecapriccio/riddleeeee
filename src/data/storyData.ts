export interface DialogueLine {
  speaker: "mano" | "hiori" | "meguru" | "none";
  text: string;
}

export const PROLOGUE_STORY: DialogueLine[] = [
  {
    speaker: "none",
    text: "〜283プロのレッスンルーム〜",
  },
  {
    speaker: "mano",
    text: "この前の学園祭で謎解きカフェをやったときに、謎を考えるのにハマっちゃって・・・",
  },
  {
    speaker: "mano",
    text: "283プロの謎を考えたんだ　よければやってみない？",
  },
  {
    speaker: "hiori",
    text: "へぇ・・・すごいね真乃",
  },
  {
    speaker: "meguru",
    text: "面白そう！解いてみたい！」",
  },
  {
    speaker: "mano",
    text: "うん！ふつつかものですがよければ・・・",
  },
  {
    speaker: "hiori",
    text: "それちょっと違くない？",
  },
  {
    speaker: "meguru",
    text: "よーし　協力形式でいいよね？灯織",
  },
  {
    speaker: "mano",
    text: "全部で５問あるんだ　難しかったらヒントもあるからね",
  },
];
