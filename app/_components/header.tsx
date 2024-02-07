import UserNav from "./user-nav";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-5 m-auto px-[60px] ">
      <div>Logo</div>

      <UserNav />

      <UserMenu />
    </header>
  );
};

export default Header;
