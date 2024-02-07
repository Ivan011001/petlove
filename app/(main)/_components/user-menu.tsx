import Link from "next/link";

const UserMenu = () => {
  return (
    <nav className="justify-start items-start gap-2 inline-flex">
      <Link
        href="/login"
        className="group hover:bg-yellow-50 transition-all duration-300 px-9 py-3.5 bg-amber-400 rounded-3xl justify-center items-center gap-2.5 inline-flex"
      >
        <p className="group-hover:text-amber-400 transition-all duration-300 text-white text-base font-bold uppercase leading-tight">
          Log In
        </p>
      </Link>

      <Link
        href="/register"
        className="group px-5 py-3.5 bg-yellow-50 rounded-3xl justify-center items-center gap-2.5 inline-flex transition-all duration-300 hover:bg-amber-400"
      >
        <p className="transition-all duration-300 group-hover:text-white text-amber-400 text-base font-bold uppercase leading-tight">
          Registration
        </p>
      </Link>
    </nav>
  );
};

export default UserMenu;
