import { axiosInstance } from "@/services";

import type { News, IMetaPagination } from "@/types";

import Title from "@/components/title";
import NewsList from "./_components/news-list";
import NewsPagination from "./_components/news-pagination";

const getAllNews = async ({
  page = "1",
}: {
  page?: string;
}): Promise<{
  data: News[];
  meta: IMetaPagination;
}> => {
  try {
    const response = await axiosInstance.get(`/news?page=${page}`);

    return response.data;
  } catch (error: any) {
    return error.message;
  }
};

const NewsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { page } = searchParams;
  const { data: news, meta } = await getAllNews({ page });

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-6 md:mb-[44px] lg:mb-[60px]">
        <Title>News</Title>
        <div className="relative">
          <input
            className="w-full py-3 px-3 lg:py-4 lg:px-4 bg-transparent border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent placeholder:text-sm md:placeholder:text-base"
            id="search"
            name="search"
            placeholder="Search"
          />

          <button
            type="button"
            className="group absolute right-3 md:right-4 top-[50%] translate-y-[-50%]"
          >
            <svg className="h-[18px] md:h-[22px] w-[18px] md:w-[22px] stroke-neutral-800 fill-none group-hover:stroke-accent transition-all duration-300">
              <use xlinkHref="/sprite.svg#icon-search"></use>
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-[44px] md:mb-[60px]">
        <NewsList news={news} />
      </div>

      <div className="flex justify-center items-center">
        <NewsPagination meta={meta} />
      </div>
    </div>
  );
};

export default NewsPage;
