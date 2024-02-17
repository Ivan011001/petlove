"use client";

import PrivateRoute from "@/providers/private-route";
import StoreProvider from "@/providers/store-provider";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <PrivateRoute>{children}</PrivateRoute>
    </StoreProvider>
  );
};

export default ProfileLayout;
