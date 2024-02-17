"use client";
import StoreProvider from "@/providers/store-provider";

const NoticesLayout = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default NoticesLayout;
