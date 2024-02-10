import { axiosInstance } from "@/services";

import Title from "@/components/title";
import NewsList from "./_components/news-list";

import { News } from "@/types";

const getAllNews = async (): Promise<News[]> => {
  const response = await axiosInstance.get("/news");
  return response.data;
};

const NewsPage = async () => {
  // const news = await getAllNews();
  const news = [
    {
      _id: "658b694505a6bcd9b9379466",
      imgUrl:
        "https://www.nytimes.com/images/2023/04/16/magazine/16mag-LOR/16mag-LOR-blog480.jpg",
      title: "What I Learned Dogsitting for New York City’s Opulent Elite",
      text: "In a city of yawning class inequality, some side hustles let you glimpse how the other half lives.",
      date: "2023-04-11T09:00:18+0000",
      url: "https://www.nytimes.com/2023/04/11/magazine/dogsitting-rich-new-york.html",
      link: "nyt://article/8d29f1fc-d146-509d-8ceb-5a5b17d7886b",
    },
    {
      _id: "658b694505a6bcd9b9379467",
      imgUrl:
        "https://www.nytimes.com/images/2023/04/04/multimedia/00VIRTUAL-VETS-01b-fmzk/00VIRTUAL-VETS-01b-fmzk-blog480.jpg",
      title: "The Virtual Vet Will See You Meow",
      text: "Veterinary telemedicine could help more pet owners access much-needed care and put anxious animals at ease, but challenges remain.",
      date: "2023-04-07T09:00:46+0000",
      url: "https://www.nytimes.com/2023/04/07/health/vet-pet-health-telemedicine.html",
      link: "nyt://article/992f2f7f-793c-5553-b722-348625f53a4b",
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-6 md:mb-[44px] lg:mb-[60px]">
        <Title>News</Title>
        <input className="w-full md:w-[230px] bg-red-500" type="text" />
      </div>

      <NewsList news={news} />
    </div>
  );
};

export default NewsPage;
