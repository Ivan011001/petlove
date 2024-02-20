"use client";

import PrivateRoute from "@/providers/private-route";
import StoreProvider from "@/providers/store-provider";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <PrivateRoute>
        <div className="pb-[80px] lg:pb-10 mx-auto">{children}</div>
      </PrivateRoute>
    </StoreProvider>
  );
};

export default ProfileLayout;
