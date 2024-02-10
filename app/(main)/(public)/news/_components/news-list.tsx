import { News } from "@/types";

import NewsItem from "./news-item";

interface INewsListProps {
  news: News[];
}

const NewsList = ({ news }: INewsListProps) => {
  return (
    <ul className="flex flex-col md:flex-row flex-wrap">
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
