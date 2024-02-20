import Image from "next/image";
import { ComponentProps } from "react";

const RectangleImage = ({
  className,
  src = "",
  alt = "",
  width = 0,
  height = 0,
}: ComponentProps<"img">) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={+width}
      height={+height}
    />
  );
};

export default RectangleImage;
