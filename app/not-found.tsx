import Link from "next/link";
import Image from "next/image";
import Header from "./_components/header";


const NotFound = () => {
  return (
    <>
      <Header/>
      <main className="flex container pb-5">
        <div className="container bg-accent rounded-3xl flex flex-col justify-center items-center px-[33px]">
          <div className="flex flex-col justify-start items-center gap-5 ">
            <div className="flex justify-center items-center gap-2">
              <div className="text-white text-7xl sm:text-9xl md:text-[300px] font-extrabold leading-[120px]">
                4
              </div>
              <div className="flex bg-white bg-opacity-10 rounded-full justify-end items-center h-[80px] w-[80px] sm:h-[110px] sm:w-[110px] md:h-[280px] md:w-[280px]">
                <Image
                  className="h-[80px] w-[80px] sm:h-[110px] sm:w-[110px] md:h-[280px] md:w-[280px]"
                  src="/images/not-found.png"
                  alt="Not Found"
                  width={280}
                  height={280}
                  priority
                />
              </div>
              <div className="text-white text-7xl sm:text-9xl md:text-[300px] font-extrabold leading-[120px]">
                4
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-5 flex">
              <p className="text-white text-base md:text-2xl font-bold leading-tight md:leading-7 text-center">
                Ooops! This page not found :(
              </p>
              <Link
                href="/"
                className="px-4 py-3 md:px-7 md:py-3.5 rounded-3xl text-sm md:text-base font-bold leading-none md:leading-tight bg-muted-foreground hover:bg-accent text-accent hover:text-muted-foreground transiton-all duration-300"
              >
                To home page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
