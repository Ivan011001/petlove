import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AttentionModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Learn more</Button>
      </DialogTrigger>
      <DialogContent className="container px-5 py-10 md:py-[60px] md:px-[60px] max-w-[335px] md:max-w-[466px]">
        <DialogHeader>
          <div className="flex justify-center mb-5">
            <div className="h-[80px] w-[80px] bg-yellow-50 rounded-full flex justify-center items-center">
              <div className=" text-5xl font-extrabold leading-10">🐶</div>
              {/* <Image src="/images/dog.png" alt="Dog" width={44} height={44} /> */}
            </div>
          </div>
          <DialogTitle className="text-accent text-xl md:text-2xl font-bold leading-tight text-center md:leading-7">
            Attention
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center mb-[24px] md:mb-[28px] m-0">
          <p className="w-72 md:w-80 text-center text-zinc-800 text-sm font-medium leading-none">
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
        </div>
        <DialogFooter className="flex gap-2 items-center m-0">
          <Button className="flex-grow py-4" type="submit">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="flex-grow py-4" variant="outline" type="submit">
            <Link href="/register">Registration</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AttentionModal;
