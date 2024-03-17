import PublicRoute from "@/providers/public-route";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return <PublicRoute>{children}</PublicRoute>;
};

export default RegisterLayout;
