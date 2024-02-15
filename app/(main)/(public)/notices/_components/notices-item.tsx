"use client";

import { Button } from "@/components/ui/button";
import { INotice } from "@/types";
import Image from "next/image";
import LearnMoreModal from "./learn-more-modal";

interface NoticeProps {
  item: INotice;
}

const NoticesItem = ({ item }: NoticeProps) => {
  const {
    imgURL,
    title,
    popularity,
    name,
    birthday,
    sex,
    species,
    category,
    comment,
  } = item;

  return (
    <div className="flex flex-col bg-white p-6 rounded-2xl box-border">
      <Image
        src={imgURL}
        alt={title}
        className="mb-6 w-[287px] h-[178px] object-cover md:w-[294px] lg:w-[315px] rounded-2xl"
        width={315}
        height={294}
        priority
      />
      <div className="flex justify-between mb-2 items-center">
        <h3 className="text-xl text-[#2B2B2A] font-bold">{title}</h3>
        <div className="flex items-center">
          <svg className="w-[16px] h-[16px] fill-[#FFC531]">
            <use xlinkHref="/sprite.svg#icon-star"></use>
          </svg>
          <span className="text-sm text-[#2B2B2A]">{popularity}</span>
        </div>
      </div>
      <div className="flex flex-col mb-4 md:h-[30px] w-full overflow-hidden">
        <ul className="flex gap-[14px]">
          <li>
            <p className="text-[10px] text-[rgba(38,38,38,0.5)]">Name</p>
            <p className="text-xs text-[#262626]">{name}</p>
          </li>

          <li>
            <p className="text-[10px] text-[rgba(38,38,38,0.5)]">Birthday</p>
            <p className="text-xs text-[#262626]">{birthday}</p>
          </li>
          <li>
            <p className="text-[10px] text-[rgba(38,38,38,0.5)]">Sex</p>
            <p className="text-xs text-[#262626]">{sex}</p>
          </li>
          <li>
            <p className="text-[10px] text-[rgba(38,38,38,0.5)]">Species</p>
            <p className="text-xs text-[#262626]">{species}</p>
          </li>
          <li>
            <p className="text-[10px] text-[rgba(38,38,38,0.5)]">Category</p>
            <p className="text-xs text-[#262626]">{category}</p>
          </li>
        </ul>
      </div>
      <p className="text-sm text-[#2B2B2A] font-medium mb-6 md-8 md:h-[36px]">
        {comment}
      </p>
      <div className="flex gap-2.5">
        <LearnMoreModal item={item} />
        <Button
          type="button"
          className="group w-[46px] h-[46px]"
          variant="outline"
        >
          <svg className="group-hover:fill-muted-foreground group-hover:stroke-muted-foreground w-[18px] h-[18px] stroke-[#F6B83D] fill-transparent transition-all duration-300">
            <use xlinkHref="/sprite.svg#icon-heart"></use>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default NoticesItem;
