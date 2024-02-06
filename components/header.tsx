import { ModeToggle } from "./ui/modde-toggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex py-5 m-auto px-[60px]">
      <div className="flex gap-2 items-center">
        <Link className="hover:text-primary" href="/">
          Home
        </Link>
        <Link className="hover:text-primary" href="/register">
          Register
        </Link>
        <Link className="hover:text-primary" href="/login">
          Login
        </Link>
      </div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
