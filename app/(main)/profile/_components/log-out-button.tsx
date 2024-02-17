"use client";

import { Button } from "@/components/ui/button";

import { useAppDispatch } from "@/state/hooks";
import { logout } from "@/state/auth/authOperations";

const LogOutButton = () => {
  const dispatch = useAppDispatch();

  const onHandleClick = () => {
    dispatch(logout());
  };

  return (
    <Button
      className="uppercase py-4 px-[28px] md:px-9 md:py-3.5"
      variant="outline"
      onClick={onHandleClick}
    >
      Log Out
    </Button>
  );
};

export default LogOutButton;
