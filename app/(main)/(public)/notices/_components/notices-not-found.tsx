import Link from "next/link";

const NoticesNotFound = () => {
  return (
    <section className="flex-grow flex flex-col justify-center items-center bg-accent gap-5 rounded-3xl px-5 py-20">
      <p className="text-white text-base md:text-2xl font-bold leading-tight md:leading-7 text-center">
        Ooops! There are no pets matching your search:(
      </p>

      <Link
        href="/notices"
        className="px-8 md:px-12 py-3 md:py-4 rounded-3xl text-sm md:text-base font-bold leading-none md:leading-tight bg-muted-foreground hover:bg-accent text-accent hover:text-muted-foreground transiton-all duration-300"
      >
        All pets
      </Link>
    </section>
  );
};

export default NoticesNotFound;
