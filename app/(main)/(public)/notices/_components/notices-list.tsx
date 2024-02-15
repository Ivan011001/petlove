import { INotice } from "@/types/notice";
import NoticesItem from "./notices-item";

interface INoticesListProps {
  notices: INotice[];
}

const NoticesList = ({ notices }: INoticesListProps) => {
  return (
    <ul className="flex flex-col items-center gap-5 md:flex-row md:flex-wrap lg:gap-x-8 lg:gap-y-10 justify-center">
      {notices.map((item) => (
        <li
          className="sm:w-[335px] md:w-[342px] lg:w-[363px] md:h-[444px]"
          key={item.id}
        >
          <NoticesItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default NoticesList;
