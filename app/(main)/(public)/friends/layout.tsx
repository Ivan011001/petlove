import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Friends",
};

const FriendLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default FriendLayout;
