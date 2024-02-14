import { axiosInstance } from "@/services";

import type { News, IMetaPagination } from "@/types";

import Title from "@/components/title";

import NewsList from "./_components/news-list";
import NewsSearch from "./_components/news-search";
import ViewPagination from "../_components/page-pagination";

const getAllNews = async ({
  page = 1,
  search,
}: {
  page?: number;
  search?: string;
}): Promise<{
  data: News[];
  meta: IMetaPagination;
}> => {
  try {
    const response = await axiosInstance.get(
      `/news?page=${page}&search=${search}`
    );

    return response.data;
  } catch (error: any) {
    return error.message;
  }
};

const NewsPage = async ({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    page?: string;
  };
}) => {
  const search = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;

  const { data: news, meta } = await getAllNews({ page, search });

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5 mb-6 md:mb-[44px] lg:mb-[60px]">
        <Title>News</Title>
        <NewsSearch />
      </div>

      <section>
        <div className="mb-[44px] md:mb-[60px]">
          <NewsList news={news} />
        </div>

        <div className="flex justify-center items-center">
          <ViewPagination meta={meta} />
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
