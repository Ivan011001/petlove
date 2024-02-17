"use client";

import StoreProvider from "@/providers/store-provider";
import PublicRoute from "@/providers/public-route";

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <PublicRoute>{children}</PublicRoute>
    </StoreProvider>
  );
};

export default RegisterLayout;
