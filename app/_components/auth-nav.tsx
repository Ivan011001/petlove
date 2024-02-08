"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const AuthNav = () => {
  const router = useRouter();

  const onHandleRedirect = (link: string) => {
    router.push(link);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-center gap-2">
      <Button
        variant="default"
        className="uppercase lg:px-9"
        onClick={() => onHandleRedirect("/login")}
      >
        Log In
      </Button>

      <Button
        variant="outline"
        className="uppercase lg:px-5"
        onClick={() => onHandleRedirect("/register")}
      >
        Registration
      </Button>
    </nav>
  );
};

export default AuthNav;
