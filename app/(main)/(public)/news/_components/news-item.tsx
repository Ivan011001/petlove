import Image from "next/image";
import { INews } from "@/types";
import { convertDate } from "@/utils";

interface INewsItemProps {
  newsItem: INews;
}

const NewsItem = ({ newsItem }: INewsItemProps) => {
  const { imgUrl, title, text, date, url } = newsItem;

  return (
    <div className="w-[335px] md:w-[340px] lg:w-[361px] flex flex-col justify-start gap-5">
      <div className="w-full h-[190px] md:h-[226px]">
        <Image
          className="rounded-2xl w-[335px] h-[190px] md:w-[340px] md:h-[226px] lg:w-[361px] object-cover"
          src={imgUrl}
          alt={title}
          width={335}
          height={190}
          priority
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="h-[40px] md:h-[52px] text-neutral-800 text-base md:text-xl font-bold leading-tight md:leading-snug overflow-hidden">
          {title}
        </h3>
        <p className="h-[80px] text-neutral-800 text-sm md:text-base font-medium leading-none md:leading-tight overflow-hidden">
          {text}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-neutral-800 text-opacity-50 text-sm md:text-base font-medium leading-none md:leading-tight">
          {convertDate(date)}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent text-sm md:text-base font-medium underline leading-none md:leading-tight"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
