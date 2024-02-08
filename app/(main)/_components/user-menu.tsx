import Link from "next/link";

const UserMenu = () => {
  return (
    <div className="flex gap-2 items-center">
      <p>USER</p>
      <p className="hidden md:block">name</p>
    </div>
  );
};

export default UserMenu;
