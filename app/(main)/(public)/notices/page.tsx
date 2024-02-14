import Title from "@/components/title";

import NoticesFilters from "./_components/notices-filters";

const fetchNotices = async ({}: {
  search: string;
  categoty: string;
  gender: string;
  type: string;
  location: string;
  popular: boolean;
  unpopular: boolean;
  cheap: boolean;
  expensive: boolean;
}) => {
  try {
  } catch (error) {}
};

const NoticesPage = async () => {
  return (
    <div>
      <Title>Find your favorite pet</Title>
      {/* sm:w-[335px] h-[378px] */}
      <div className="p-5 md:py-10 md:px-8 lg:px-10 rounded-3xl bg-[#FFF4DF]">
        <NoticesFilters />
      </div>
    </div>
  );
};

export default NoticesPage;
