import { axiosInstance } from "@/services";

import Title from "@/components/title";

const NewsPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <Title>News</Title>
        <input className="w-full bg-red-500" type="text" name="" id="" />
      </div>
    </div>
  );
};

export default NewsPage;
