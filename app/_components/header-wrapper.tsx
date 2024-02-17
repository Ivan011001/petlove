"use client";

import StoreProvider from "@/providers/store-provider";

import Header from "./header";

const HeaderWrapper = () => {
  return (
    <StoreProvider>
      <Header />
    </StoreProvider>
  );
};

export default HeaderWrapper;
