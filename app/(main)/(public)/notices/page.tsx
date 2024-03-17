import Title from "@/components/title";
import ViewPagination from "../_components/page-pagination";

import NoticesFilters from "./_components/notices-filters";
import NoticesList from "./_components/notices-list";
import NoticesNotFound from "./_components/notices-not-found";

import { getNotices } from "@/data";

const NoticesPage = async ({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    page?: number;
    category?: string;
    gender?: string;
    type?: string;
    location?: string;
    popular?: boolean;
    unpopular?: boolean;
    cheap?: boolean;
    expensive?: boolean;
  };
}) => {
  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";
  const category = searchParams?.category || "";
  const gender = searchParams?.gender || "all";
  const type = searchParams?.type || "";
  const location = searchParams?.location || "";
  const popular = Boolean(searchParams?.popular) || false;
  const unpopular = Boolean(searchParams?.unpopular) || false;
  const cheap = Boolean(searchParams?.cheap) || false;
  const expensive = Boolean(searchParams?.expensive) || false;

  const { data: notices, meta } = await getNotices({
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

  return (
    <div>
      <div className="mb-10 md:mb-11 lg:mb-11">
        <Title>Find your favorite pet</Title>
      </div>
      <section className="p-5 md:py-10 md:px-8 lg:px-10 rounded-3xl bg-[#FFF4DF] mb-10 md:mb-8 lg:mb-10">
        <NoticesFilters />
      </section>

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
    </div>
  );
};

export default NoticesPage;
