"use client";

import { Button } from "@/components/ui/button";

import { useAppDispatch } from "@/state/hooks";
import { logout } from "@/state/auth/authOperations";

import { toast } from "sonner";

const LogOutButton = () => {
  const dispatch = useAppDispatch();

  const onHandleLogOut = async () => {
    await dispatch(logout());
    toast.error("You have successfully logged out", { duration: 2000 });
  };

  return (
    <Button
      className="uppercase py-4 px-[28px] md:px-9 md:py-3.5"
      variant="outline"
      onClick={onHandleLogOut}
    >
      Log Out
    </Button>
  );
};

export default LogOutButton;
