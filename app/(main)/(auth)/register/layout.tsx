"use client";
import StoreProvider from "@/providers/store-provider";

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default RegisterLayout;
