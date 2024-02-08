import Link from "next/link";

const UserNav = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-center items-start gap-2.5">
      <Link
        className="w-28 lg:w-auto hover:border-amber-400 transition-all duration-300 py-[15px] lg:px-5 rounded-3xl border border-neutral-800 border-opacity-20 justify-center items-center gap-2.5 inline-flex"
        href="/news"
      >
        <p className="text-neutral-800 text-sm md:text-base font-medium leading-none md:leading-tight">
          News
        </p>
      </Link>

      <Link
        className="w-28 lg:w-auto hover:border-amber-400 transition-all duration-300 py-[15px] lg:px-5 rounded-3xl border border-neutral-800 border-opacity-20 justify-center items-center gap-2.5 inline-flex"
        href="/findpet"
      >
        <p className="text-neutral-800 text-sm md:text-base font-medium leading-none md:leading-tight">
          Find Pet
        </p>
      </Link>

      <Link
        className="w-28 lg:w-auto hover:border-amber-400 transition-all duration-300  py-[15px] lg:px-5 rounded-3xl border border-neutral-800 border-opacity-20 justify-center items-center gap-2.5 inline-flex"
        href="/friends"
      >
        <p className="text-neutral-800 text-sm md:text-base font-medium leading-none md:leading-tight ">
          Our Friends
        </p>
      </Link>
    </nav>
  );
};

export default UserNav;
