import { useAppDispatch } from "@/state/hooks";
import { logout } from "@/state/auth/authOperations";

import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const onHandleClick = () => {
    dispatch(logout());
  };

  return (
    <Button
      className="uppercase w-full py-4 md:w-[136px] md:px-[35px] lg:py-[15px]"
      onClick={onHandleClick}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
