"use client";

import { useState, useEffect, useTransition } from "react";
import { useSearchParams } from "next/navigation";

import Title from "@/components/title";
import ViewPagination from "../_components/page-pagination";

import NoticesFilters from "./_components/notices-filters";
import NoticesList from "./_components/notices-list";
import NoticesNotFound from "./_components/notices-not-found";

import { getNotices } from "@/data";
import { IMetaPagination, INotice } from "@/types";

const NoticesPage = () => {
  const [isPending, setTransition] = useTransition();

  const [notices, setNotices] = useState<INotice[]>([]);
  const [meta, setMeta] = useState<IMetaPagination | null>(null);

  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const gender = searchParams.get("gender") || "all";
  const type = searchParams.get("type") || "";
  const location = searchParams.get("location") || "";
  const popular = Boolean(searchParams.get("popular")) || false;
  const unpopular = Boolean(searchParams.get("unpopular")) || false;
  const cheap = Boolean(searchParams.get("cheap")) || false;
  const expensive = Boolean(searchParams.get("expensive")) || false;

  useEffect(() => {
    const fetch = async () => {
      setTransition(async () => {
        const { data, meta } = await getNotices({
          page,
          search,
          category,
          gender,
          type,
          location,
          popular,
          unpopular,
          cheap,
          expensive,
        });

        setNotices(data);
        setMeta(meta);
      });
    };

    fetch();
  }, [
    page,
    search,
    category,
    gender,
    type,
    location,
    popular,
    unpopular,
    cheap,
    expensive,
  ]);

  return (
    <div>
      <div className="mb-10 md:mb-11 lg:mb-11">
        <Title>Find your favorite pet</Title>
      </div>
      <section className="p-5 md:py-10 md:px-8 lg:px-10 rounded-3xl bg-[#FFF4DF] mb-10 md:mb-8 lg:mb-10">
        <NoticesFilters />
      </section>

      {!isPending && (
        <>
          {notices.length === 0 ? (
            <NoticesNotFound />
          ) : (
            <>
              <div className="mb-11 md:mb-[60px] mt-10 md:mt-8 lg:mt-8">
                <NoticesList notices={notices} />
              </div>
              <ViewPagination meta={meta} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default NoticesPage;
