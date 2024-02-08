import UserBar from "./user-bar";
import LogoutButton from "./logout-button";

interface IUserNavProps {
  light?: boolean;
}

const UserNav = ({ light }: IUserNavProps) => {
  return (
    <div className="flex items-center">
      {/* <LogoutButton /> */}
      <UserBar />
    </div>
  );
};

export default UserNav;
