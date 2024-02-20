export function shortenName(name: string): string {
  if (name.length < 8) {
    return name;
  }

  const shortName = name.slice(0, 8) + "...";

  return shortName;
}
