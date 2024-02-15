export function capitalizeWord(word: string | null): string | undefined {
  if (!word) {
    return undefined;
  }

  if (word.length === 0) {
    return word;
  }

  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

  return capitalizedWord;
}
