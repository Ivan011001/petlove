import Image from "next/image";

import { News } from "@/types";

import { convertDate } from "@/utils";

interface INewsItemProps {
  newsItem: News;
}

const NewsItem = ({ newsItem }: INewsItemProps) => {
  return (
    <div className="w-[335px] flex flex-col gap-5">
      <div>
        <Image
          className="rounded-2xl"
          src={newsItem.imgUrl}
          alt={newsItem.title}
          width={335}
          height={190}
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-neutral-800 text-base font-bold leading-tight">
          {newsItem.title}
        </h3>
        <p className="text-neutral-800 text-sm font-medium leading-none">
          {newsItem.text}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-neutral-800 text-opacity-50 text-sm font-medium leading-none">
          {convertDate(newsItem.date)}
        </p>
        <a className="text-accent text-sm font-medium underline leading-none">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
