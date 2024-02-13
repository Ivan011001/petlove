import Link from "next/link";

import RegistrationImage from "./_components/registration-image";
import RegistrationForm from "./_components/registration-form";

const LoginPage = () => {
  return (
    <div className="container min-h-full flex flex-col lg:flex-row gap-2.5 md:gap-4 lg:gap-8 pb-5">
      <section className="flex-grow rounded-3xl md:rounded-[60px] bg-accent w-full h-[280px] sm:max-w-[335px] md:h-[302px] md:max-w-[704px] lg:h-full mx-auto">
        <RegistrationImage />
      </section>
      <section className="flex items-center justify-center rounded-3xl md:rounded-[60px] bg-white w-full h-auto lg:h-full py-[40px] px-5 sm:max-w-[335px] mx-auto md:max-w-[704px]">
        <div className="lg:w-[424px]">
          <h2 className="text-neutral-800 text-3xl md:text-5xl font-bold leading-7 md:leading-10 mb-3 md:mb-4">
            Registration
          </h2>
          <p className="text-neutral-800 text-sm md:text-lg font-medium leading-none md:leading-snug mb-6">
            Thank you for your interest in our platform.
          </p>

          <div className="mb-3 md:mb-4">
            <RegistrationForm />
          </div>

          <p className="text-center text-neutral-800 text-opacity-50 text-xs md:text-sm font-medium leading-none md:leading-tight">
            Already have an account??{" "}
            <Link
              className="text-accent text-xs md:text-sm font-bold underline leading-none md:leading-tight transition-all duration-300 hover:text-neutral-800/50"
              href="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
