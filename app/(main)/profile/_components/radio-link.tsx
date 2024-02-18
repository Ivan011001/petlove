import Link from "next/link";
import { usePathname } from "next/navigation";

const RadioLink = ({ message, path }: { message: string; path: string }) => {
  const location = usePathname();
  const isChecked = location === path;
  const handleChange = () => {};
  return (
    <Link href={path}>
      <label className="text-white bg-[#F6B83D] py-3 rounded-[30px]">
        {message}
        <input
          type="radio"
          name="profile"
          checked={isChecked}
          className="hidden"
          onChange={handleChange}
        />
      </label>
    </Link>
  );
};

export default RadioLink;
