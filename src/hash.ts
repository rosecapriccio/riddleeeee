// 入力された文字をハッシュ（SHA-256）に変える
export async function convertToHash(text: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(text); // 文字列をバイトデータに変換
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // ブラウザの機能でSHA-256暗号化
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // バッファを配列に変換
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // 16進数の文字列に変換
  return hashHex;
}
