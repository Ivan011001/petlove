import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default NewsLayout;
