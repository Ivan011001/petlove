import { axiosInstance } from "@/services";

import Title from "@/components/title";
import NewsList from "./_components/news-list";

import { News } from "@/types";

const getAllNews = async (): Promise<News[]> => {
  const response = await axiosInstance.get("/news");
  return response.data;
};

const NewsPage = async () => {
  const news = await getAllNews();

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-6 md:mb-[44px] lg:mb-[60px]">
        <Title>News</Title>
        <input className="w-full md:w-[230px] bg-red-500" type="text" />
      </div>

      <NewsList news={news} />
    </div>
  );
};

export default NewsPage;
