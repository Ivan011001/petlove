"use client";

import StoreProvider from "@/providers/store-provider";
import PublicRoute from "@/providers/public-route";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Login",
// };

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <PublicRoute>{children}</PublicRoute>
    </StoreProvider>
  );
};

export default LoginLayout;
