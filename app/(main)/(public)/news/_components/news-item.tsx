import Image from "next/image";
import { News } from "@/types";
import { convertDate } from "@/utils";

interface INewsItemProps {
  newsItem: News;
}

const NewsItem = ({ newsItem }: INewsItemProps) => {
  return (
    <div className="max-w-[335px] md:w-[340px] md:max-w-auto flex flex-col justify-start gap-5">
      <div className="w-full h-[190px] md:h-[226px]">
        <Image
          className="rounded-2xl w-full h-full object-cover"
          src={newsItem.imgUrl}
          alt={newsItem.title}
          width={335}
          height={190}
          priority
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="h-[52px] text-neutral-800 text-base md:text-xl font-bold leading-tight">
          {newsItem.title}
        </h3>
        <p className="h-[80px] text-neutral-800 text-sm md:text-base font-medium leading-none md:leading-tight">
          {newsItem.text}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-neutral-800 text-opacity-50 text-sm font-medium leading-none">
          {convertDate(newsItem.date)}
        </p>
        <a
          href={newsItem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent text-sm font-medium underline leading-none"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
