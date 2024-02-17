"use client";

import { useAppSelector } from "@/state/hooks";
import { selectIsLoggedIn } from "@/state/auth/authSelectors";

import { redirect } from "next/navigation";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return redirect("/login");
  }

  return children;
};

export default PrivateRoute;
