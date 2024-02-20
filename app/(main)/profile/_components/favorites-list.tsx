"use client";

import NoticesItem from "../../(public)/notices/_components/notices-item";
import { selectUserFavorites } from "@/state/auth/authSelectors";
import { useAppSelector } from "@/state/hooks";

const FavoritesList = () => {
  const favorites = useAppSelector(selectUserFavorites);
  return (
    <div>
      <ul className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-5 lg:justify-start lg:gap-6 lg:max-h-[900px] lg:overflow-scroll">
        {favorites?.map((favorite) => {
          return (
            <li key={favorite.id} className="sm:w-[335px] md:w-[342px]">
              <NoticesItem item={favorite} />
            </li>
          );
        })}
      </ul>
      {favorites.length === 0 && (
        <div className="mt-[60px] flex text-center pb-[60px] md:pb-[100px] px-[155px] md:mt-[160px] lg:px-[135px]">
          <p className="text-[#262626] text-sm md:text-base">
            Oops,{" "}
            <span className="text-[#F6B83D] text-sm font-bold">
              looks like there aren&apos;t any furries
            </span>{" "}
            on our adorable page yet. Do not worry! View your pets on the
            &quot;find your favorite pet&quot; page and add them to your
            favorites.
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
