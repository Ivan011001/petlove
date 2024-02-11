import { News } from "@/types";

import NewsItem from "./news-item";

interface INewsListProps {
  news: News[];
}

const NewsList = ({ news }: INewsListProps) => {
  return (
    <ul className="flex flex-col items-center md:flex-row md:justify-center flex-wrap gap-6 md:gap-x-6 md:gap-y-8 lg:gap-x-[35px] lg:gap-y-[40px]">
      {news.map((item) => {
        return (
          <li key={item._id}>
            <NewsItem newsItem={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
