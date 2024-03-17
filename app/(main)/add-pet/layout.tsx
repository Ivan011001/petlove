import PrivateRoute from "@/providers/private-route";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add pet",
};

const AddPetLayout = ({ children }: { children: React.ReactNode }) => {
  return <PrivateRoute>{children}</PrivateRoute>;
};

export default AddPetLayout;
