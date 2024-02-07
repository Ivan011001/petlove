import Link from "next/link";

const UserMenu = () => {
  return (
    <nav className="justify-start items-start gap-2 inline-flex">
      <Link
        href="/login"
        className="px-[35px] py-[15px] bg-amber-400 rounded-[30px] justify-center items-center gap-2.5 inline-flex"
      >
        <p className="text-white text-base font-bold  uppercase leading-tight">Log In</p>
      </Link>

      <Link
        href="/register"
        className="px-5 py-[15px] bg-yellow-50 rounded-[30px] justify-center items-center gap-2.5 inline-flex"
      >
        <div className="text-amber-400 text-base font-bold  uppercase leading-tight">
          Registration
        </div>
      </Link>
    </nav>
  );
};

export default UserMenu;
