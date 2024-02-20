export const renderStars = (popularity: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const fill = i < popularity;
    const fillColor = fill ? "#FFC531" : "#1A1A1A0D";

    stars.push({ fill, fillColor });
  }
  return stars;
};
