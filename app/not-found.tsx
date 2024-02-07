import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <main className="flex justify-center container">
      <div className="w-full px-72 py-28 bg-amber-400 rounded-3xl justify-center items-center inline-flex">
        <div className="self-stretch flex-col justify-start items-center gap-10 inline-flex">
          <div className="justify-center items-center inline-flex">
            <p className="text-white text-[300px] font-extrabold leading-10">4</p>
            <div className="w-72 h-72 bg-white bg-opacity-10 rounded-full justify-end items-center flex">
              <Image
                className="w-72 h-72 rounded-full"
                src="/not-found.png"
                alt="Sad cat"
                width={72}
                height={72}
                priority
              />
            </div>
            <p className="text-white text-[300px] font-extrabold leading-10">4</p>
          </div>
          <div className="flex-col justify-start items-center gap-5 flex">
            <p className="text-white text-2xl font-bold leading-7">
              Ooops! This page not found :(
            </p>

            <Link
              href="/"
              className="px-7 py-3.5 bg-yellow-50 rounded-3xl justify-center items-center gap-2.5 inline-flex"
            >
              <p className="text-amber-400 text-base font-bold leading-tight">
                To home page
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
