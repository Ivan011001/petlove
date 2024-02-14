import PageContainer from "@/components/page-container";
import Title from "@/components/title";

import NoticesFilters from "./_components/notices-filters";

const NoticesPage = () => {
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
