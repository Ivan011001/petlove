"use client";

import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { selectIsLoggedIn } from "@/state/auth/authSelectors";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { current } from "@/state/auth/authOperations";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(current());
    } else {
      return redirect("/login");
    }
  }, [dispatch, isLoggedIn]);

  return children;
};

export default PrivateRoute;
