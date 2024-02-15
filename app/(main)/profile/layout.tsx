import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="container">{children}</main>;
};

export default ProfileLayout;
