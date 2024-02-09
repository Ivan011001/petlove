import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="container min-h-full flex flex-col lg:flex-row gap-2.5 md:gap-4 lg:gap-8 pb-5">
      <section className="flex-grow rounded-3xl md:rounded-[60px] bg-accent w-full h-auto lg:h-full"></section>
      <section className="flex items-center justify-center rounded-3xl md:rounded-[60px] bg-white w-full h-auto lg:h-full py-[60px] md:py-[70px] lg:py-[118px] px-5">
        <div className="lg:max-w-[424px]">
          <h2 className="text-neutral-800 text-3xl md:text-5xl font-bold leading-7 md:leading-10 mb-3 md:mb-4">
            Log in
          </h2>
          <p className="text-neutral-800 text-sm md:text-lg font-medium leading-none md:leading-snug mb-6">
            Welcome! Please enter your credentials to login to the platform:
          </p>

          <form className="flex flex-col gap-10 lg:gap-[64px] mb-3 md:mb-4">
            <div className="flex flex-col gap-2.5">
              <input className="bg-red-200 py-3 " type="text" name="" id="" />
              <input className="bg-red-200 py-3 " type="text" name="" id="" />
            </div>
            <Button className="uppercase py-3">Log In</Button>
          </form>

          <p className="text-center text-neutral-800 text-opacity-50 text-xs md:text-sm font-medium leading-none md:leading-tight">
            Don&apos;t have an account?{" "}
            <Link
              className="text-accent text-xs md:text-sm font-bold underline leading-none md:leading-tight transition-all duration-300 hover:text-neutral-800/50"
              href="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
