"use client";

import StoreProvider from "@/providers/store-provider";

import Header from "../_components/header";

export default function Home() {
  return (
    <>
      <section className="bg-amber-400 px-5 pb-[50px] lg:pb-8 rounded-3xl">
        <StoreProvider>
          <Header light />
        </StoreProvider>

        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-20">
          <h1 className="text-white max-w-80 md:max-w-full text-5xl md:text-7xl lg:text-8xl font-bold leading-10 mb-6 lg:mb-0">
            Take good{" "}
            <span className="opacity-40 text-5xl md:text-7xl lg:text-8xl font-bold">
              care
            </span>{" "}
            of your small pets
          </h1>
          <div className="flex md:justify-end ">
            <p className="max-w-80 md:max-w-70 lg:max-w-[455px] text-white text-sm md:text-lg font-medium leading-5 md:leading-snug">
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
        </div>
      </section>
      <section
        className="flex-grow rounded-3xl w-auto h-[335px] bg-cover bg-no-repeat bg-center relative"
        style={{
          backgroundImage: `url(/images/home.jpg), linear-gradient(135deg, rgb(255, 168, 168) 10%, rgb(252, 255, 0) 100%)`,
        }}
      ></section>
    </>
  );
}
