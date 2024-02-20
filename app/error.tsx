"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <main className="min-h-screen w-full bg-[#f9f9f9] flex flex-col gap-4 justify-center items-center">
      <p className="text-white text-base md:text-2xl font-bold leading-tight md:leading-7 text-center">
        Something went wrong... Please try again!
      </p>
      <Link
        className="px-4 py-3 md:px-7 md:py-3.5 rounded-3xl text-sm md:text-base font-bold leading-none md:leading-tight bg-muted-foreground hover:bg-accent text-accent hover:text-muted-foreground transiton-all duration-300"
        href="/"
      >
        To home page
      </Link>
    </main>
  );
};

export default ErrorPage;
