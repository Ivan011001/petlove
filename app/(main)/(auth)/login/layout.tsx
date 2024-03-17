import PublicRoute from "@/providers/public-route";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <PublicRoute>{children}</PublicRoute>;
};

export default LoginLayout;
