import { selectUserViewed } from "@/state/auth/authSelectors";
import { useAppSelector } from "@/state/hooks";
import NoticesItem from "../../(public)/notices/_components/notices-item";

const ViewedList = () => {
  const viewed = useAppSelector(selectUserViewed);

  return (
    <ul className="flex flex-col gap-5 md:flex-row md:flex-wrap items-center justify-center md:gap-5 lg:justify-start lg:gap-6 lg:max-h-[900px] lg:overflow-scroll">
      {viewed?.map((viewed) => {
        return (
          <li key={viewed.id} className="sm:w-[335px] md:w-[342px]">
            <NoticesItem item={viewed} />
          </li>
        );
      })}
    </ul>
  );
};

export default ViewedList;
