export function shortenWord(word: string, quantity: number): string {
  if (word.length <= quantity) {
    return word;
  }

  const shortWord = word.slice(0, quantity) + "...";

  return shortWord;
}
