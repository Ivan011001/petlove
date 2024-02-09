import Link from "next/link";

import LoginImage from "./_components/login-image";
import LoginForm from "./_components/login-form";

const LoginPage = () => {
  return (
    <div className="container min-h-full flex flex-col lg:flex-row gap-2.5 md:gap-4 lg:gap-8 pb-5">
      <section className="flex-grow rounded-3xl md:rounded-[60px] bg-accent w-full min-h-[280px] md:min-h-[302px] h-auto lg:h-full">
        <LoginImage />
      </section>
      <section className="flex items-center justify-center rounded-3xl md:rounded-[60px] bg-white w-full h-auto lg:h-full py-[60px] md:py-[70px] px-5">
        <div className="lg:max-w-[424px]">
          <h2 className="text-neutral-800 text-3xl md:text-5xl font-bold leading-7 md:leading-10 mb-3 md:mb-4">
            Log in
          </h2>
          <p className="text-neutral-800 text-sm md:text-lg font-medium leading-none md:leading-snug mb-6">
            Welcome! Please enter your credentials to login to the platform:
          </p>

          <div className="mb-3 md:mb-4">
            <LoginForm />
          </div>

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
