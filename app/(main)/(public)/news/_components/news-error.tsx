import { Button } from "@/components/ui/button";
import Link from "next/link";

const NewsError = () => {
  return (
    <section className="flex-grow flex flex-col justify-center items-center bg-accent gap-5 rounded-3xl">
      <p className="text-white text-base md:text-2xl font-bold leading-tight md:leading-7">
        Ooops! Something went wrong :(
      </p>
      <Button variant="outline" className="px-7 py-3 md:py-3.5">
        <Link href="/news">Try again</Link>
      </Button>
    </section>
  );
};

export default NewsError;
