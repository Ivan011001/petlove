import Title from "@/components/title";
import ViewPagination from "../_components/page-pagination";

import NewsList from "./_components/news-list";
import NewsSearch from "./_components/news-search";
import NewsNotFound from "./_components/news-not-found";

import { getNews } from "@/data";

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

  const { data, meta } = await getNews(page, search);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5 mb-6 md:mb-[44px] lg:mb-[60px]">
        <Title>News</Title>
        <NewsSearch />
      </div>

      <section className="h-full">
        {data.length === 0 ? (
          <NewsNotFound />
        ) : (
          <section>
            <div className="mb-[44px] md:mb-[60px]">
              <NewsList news={data} />
            </div>

            <div className="flex justify-center items-center">
              <ViewPagination meta={meta} />
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default NewsPage;
