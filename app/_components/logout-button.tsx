"use client";

import { useAppDispatch } from "@/state/hooks";
import { logout } from "@/state/auth/authOperations";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const onHandleLogOut = async () => {
    await dispatch(logout());
    toast.error("You have successfully logged out", { duration: 2000 });
  };

  return (
    <Button
      className="uppercase w-full py-4 md:w-[136px] md:px-[35px] lg:py-[15px]"
      onClick={onHandleLogOut}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
