import { selectUserViewed } from "@/state/auth/authSelectors";
import { useAppSelector } from "@/state/hooks";
import NoticesItem from "../../(public)/notices/_components/notices-item";

const ViewedList = () => {
  const viewed = useAppSelector(selectUserViewed);

  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap items-center justify-center md:gap-5 lg:justify-start lg:gap-6">
      {viewed?.map((viewed) => {
        return (
          <li key={viewed.id} className="md:w-[342px] lg:w-[320px]">
            <NoticesItem item={viewed} />
          </li>
        );
      })}
    </ul>
  );
};

export default ViewedList;
