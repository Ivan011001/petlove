import { IMetaPagination, INotice } from "@/types";

import { axiosInstance } from "@/services";

import Title from "@/components/title";
import ViewPagination from "../_components/page-pagination";

import NoticesFilters from "./_components/notices-filters";
import NoticesList from "./_components/notices-list";

interface INoticesSearchProp {
  page?: number;
  search?: string;
  category?: string;
  gender?: string;
  type?: string;
  location?: string;
  popular?: boolean;
  unpopular?: boolean;
  cheap?: boolean;
  expensive?: boolean;
}

const getAllNotices = async ({
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
}: INoticesSearchProp): Promise<{
  data: INotice[];
  meta: IMetaPagination;
}> => {
  try {
    const response = await axiosInstance(
      `/notices?page=${page}&location=${location}&search=${search}&category=${category}&type=${type}&gender=${gender}&unpopular=${unpopular}&popular=${popular}&cheap=${cheap}&expensive=${expensive}`
    );

    return response.data;
  } catch (error: any) {
    return error.message;
  }
};

const NoticesPage = async ({
  searchParams,
}: {
  searchParams?: {
    page?: number;
    search?: string;
    category?: string;
    gender?: string;
    type?: string;
    location?: string;
    popular?: string;
    unpopular?: string;
    cheap?: string;
    expensive?: string;
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

  const { data, meta } = await getAllNotices({
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
      <div className="mb-11 md:mb-[60px] mt-10 md:mt-8 lg:mt-8">
        <NoticesList notices={data} />
      </div>
      <ViewPagination meta={meta} />
    </div>
  );
};

export default NoticesPage;
