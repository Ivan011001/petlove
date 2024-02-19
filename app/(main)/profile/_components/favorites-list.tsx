"use client";

import NoticesItem from "../../(public)/notices/_components/notices-item";
import { selectUserFavorites } from "@/state/auth/authSelectors";
import { useAppSelector } from "@/state/hooks";

const FavoritesList = () => {
  const favorites = useAppSelector(selectUserFavorites);
  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap items-center justify-center md:gap-5 lg:justify-start lg:gap-6">
      {favorites?.map((favorite) => {
        return (
          <li key={favorite.id} className="md:w-[342px] lg:w-[320px]">
            <NoticesItem item={favorite} />
          </li>
        );
      })}
    </ul>
  );
};

export default FavoritesList;
