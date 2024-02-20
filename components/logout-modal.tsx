"use client";

import { useAppDispatch } from "@/state/hooks";
import { logout } from "@/state/auth/authOperations";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";

interface ILogoutModalProps {
  variant?: "outline" | "default";
  mobile?: boolean;
}

const LogoutModal = ({
  variant = "default",
  mobile = false,
}: ILogoutModalProps) => {
  const dispatch = useAppDispatch();

  const onLogoutHandle = async () => {
    await dispatch(logout());
    toast.error("You have successfully logged out!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant={variant}
          className={cn(
            "uppercase px-7 py-3 md:px-9 md:py-3.5",
            mobile && "w-full py-4"
          )}
        >
          Log Out
        </Button>
      </DialogTrigger>
      <DialogContent className="container px-5 py-10 md:py-[60px] md:px-[60px] max-w-[335px] md:max-w-[466px] flex flex-col gap-0">
        <DialogHeader className="mb-[28px]">
          <div className="flex justify-center mb-5">
            <div className="h-[80px] w-[80px] bg-yellow-50 rounded-full flex justify-center items-center">
              <div className=" text-5xl font-extrabold leading-10">🐈</div>
              {/* <Image src="/images/dog.png" alt="Dog" width={44} height={44} /> */}
            </div>
          </div>
          <DialogTitle className="text-neutral-800 text-xl md:text-2xl font-bold leading-tight text-center md:leading-7 m-0">
            Already leaving?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex gap-2 items-center m-0">
          <Button
            className="flex-grow py-4"
            type="button"
            onClick={onLogoutHandle}
          >
            Yes
          </Button>
          <DialogClose asChild>
            <Button
              className="flex-grow py-4 bg-neutral-800 bg-opacity-5 text-neutral-800 hover:bg-accent hover:text-yellow-50 "
              variant="outline"
              type="button"
            >
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModal;
