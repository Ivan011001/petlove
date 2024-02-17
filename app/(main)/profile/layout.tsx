"use client";

import StoreProvider from "@/providers/store-provider";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Profile",
// };

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default ProfileLayout;
