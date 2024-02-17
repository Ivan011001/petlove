"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { selectIsLoggedIn } from "@/state/auth/authSelectors";

import { current } from "@/state/auth/authOperations";

import { redirect } from "next/navigation";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  if (isLoggedIn) {
    redirect("/profile");
  } else {
    return children;
  }
};

export default PublicRoute;
