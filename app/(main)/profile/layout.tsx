import PrivateRoute from "@/providers/private-route";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivateRoute>
      <div className="pb-[80px] lg:pb-10 mx-auto">{children}</div>
    </PrivateRoute>
  );
};

export default ProfileLayout;
