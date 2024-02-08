"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import Header from "./_components/header";

import Image from "next/image";

const NotFound = () => {
  const router = useRouter();

  const onHandleRedirect = () => {
    router.replace("/");
  };

  return (
    <>
      <Header />
      <main className="flex container pb-5">
        <div className="container bg-accent rounded-3xl flex flex-col justify-center items-center">
          <div className="flex flex-col justify-start items-center gap-5 ">
            <div className="flex justify-center items-center gap-2">
              <div className="text-white text-9xl md:text-[300px] font-extrabold leading-10">
                4
              </div>
              <div className="flex bg-white bg-opacity-10 rounded-full justify-end items-center">
                <Image
                  className="h-25 w-25 md:h-72 md:w-72"
                  src="/not-found.png"
                  alt="Not Found"
                  width={100}
                  height={100}
                />
              </div>
              <div className="text-white text-9xl md:text-[300px] font-extrabold leading-10">
                4
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-5 flex">
              <p className="text-white text-base md:text-2xl font-bold leading-tight md:leading-7">
                Ooops! This page not found :(
              </p>
              <Button
                className="md:px-7 md:py-3.5"
                variant="outline"
                onClick={onHandleRedirect}
              >
                To home page
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
