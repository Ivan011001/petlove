const StarIcon = ({ fillColor }: { fillColor: string }) => {
  return (
    <svg className="w-[16px] h-[16px] stroke-[#F4F4F4]" fill={fillColor}>
      <use xlinkHref="/sprite.svg#icon-star"></use>
    </svg>
  );
};

export default StarIcon;
