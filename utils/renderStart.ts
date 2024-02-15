export const renderStars = (popularity: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const fill = i < popularity;
    const fillColor = fill ? "#FFC531" : "rgba(26,26,26, 0.5%)";

    stars.push({ fill, fillColor });
  }
  return stars;
};
