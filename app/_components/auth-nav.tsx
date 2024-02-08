"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const AuthNav = () => {
  const router = useRouter();

  const onHandleRedirect = (link: string) => {
    router.push(link);
  };

  return (
    <nav className="flex flex-col md:flex-row md:w-full justify-center md:justify-between gap-2">
      <Button
        variant="default"
        className="uppercase py-4 md:w-full lg:px-9 lg:py-3.5"
        onClick={() => onHandleRedirect("/login")}
      >
        Log In
      </Button>

      <Button
        variant="outline"
        className="uppercase py-4 md:w-full lg:px-5 lg:py-3.5"
        onClick={() => onHandleRedirect("/register")}
      >
        Registration
      </Button>
    </nav>
  );
};

export default AuthNav;
