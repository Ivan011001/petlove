"use client";

import { useEffect, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

import Title from "@/components/title";
import ViewPagination from "../_components/page-pagination";

import NewsList from "./_components/news-list";
import NewsSearch from "./_components/news-search";
import NewsNotFound from "./_components/news-not-found";

import { getNews } from "@/data";
import { IMetaPagination, INews } from "@/types";

const NewsPage = () => {
  const [isPending, setTransition] = useTransition();

  const [news, setNews] = useState<INews[]>([]);
  const [meta, setMeta] = useState<IMetaPagination | null>(null);

  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetch = () => {
      setTransition(async () => {
        const { data: news, meta } = await getNews(page, search);

        setNews(news);
        setMeta(meta);
      });
    };

    fetch();
  }, [page, search]);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5 mb-6 md:mb-[44px] lg:mb-[60px]">
        <Title>News</Title>
        <NewsSearch />
      </div>

      {!isPending && (
        <section className="h-full">
          {news.length === 0 ? (
            <NewsNotFound />
          ) : (
            <section>
              <div className="mb-[44px] md:mb-[60px]">
                <NewsList news={news} />
              </div>

              <div className="flex justify-center items-center">
                <ViewPagination meta={meta} />
              </div>
            </section>
          )}
        </section>
      )}
    </div>
  );
};

export default NewsPage;
