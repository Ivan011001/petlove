import Link from "next/link";

const UserNav = () => {
  return (
    <nav className="justify-start items-start gap-2.5 inline-flex">
      <Link
        className="hover:border-amber-400 transition-all duration-300 px-5 py-[15px] rounded-[30px] border border-neutral-800 border-opacity-20 justify-center items-center gap-2.5 inline-flex"
        href="/news"
      >
        <p className="text-neutral-800 text-base font-medium leading-tight">News</p>
      </Link>

      <Link
        className=" hover:border-amber-400 transition-all duration-300 px-5 py-[15px] rounded-[30px] border border-neutral-800 border-opacity-20 justify-center items-center gap-2.5 inline-flex"
        href="/news"
      >
        <p className="text-neutral-800 text-base font-medium leading-tight">Find Pet</p>
      </Link>

      <Link
        className="hover:border-amber-400 transition-all duration-300 px-5 py-[15px] rounded-[30px] border border-neutral-800 border-opacity-20 justify-center items-center gap-2.5 inline-flex"
        href="/news"
      >
        <p className="text-neutral-800 text-base font-medium leading-tight">
          Our Friends
        </p>
      </Link>
    </nav>
  );
};

export default UserNav;
