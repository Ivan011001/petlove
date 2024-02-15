import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { INotice } from "@/types";
import { renderStars } from "@/utils/renderStart";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface NoticeProps {
  item: INotice;
}

const LearnMoreModal = ({ item }: NoticeProps) => {
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

  const stars = renderStars(popularity);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="py-[14px] flex-grow text-sm font-inherit font-medium w-[231px]">
          Learn more
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white px-5 py-10 md:py-[60px] md:px-[60px] max-w-[335px] md:max-w-[466px] flex flex-col">
        <DialogHeader className="items-center">
          <div className="relative">
            <Image
              width={120}
              height={120}
              src={imgURL}
              alt={title}
              className="rounded-[100px] mb-2.5 md:w-[150px] md:h-[150px]"
            />
            <div className="absolute bg-[#FFF4DF] w-12 flex justify-center h-[32px] items-center rounded-[30px] left-0 top-0 md:w-[52px] md:h-[34px]">
              <span className="text-xs text-[#F6B83D] md:text-sm">
                {category}
              </span>
            </div>
          </div>
          <DialogTitle className="text-base text-[#2B2B2A] md:text-lg">
            {title}
          </DialogTitle>
          <div className="flex items-center mt-2.5">
            {stars.map((star, i) => (
              <StarIcon key={i} fill={star.fillColor} />
            ))}
            <span className="text-sm text-[#2B2B2A]">{popularity}</span>
          </div>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <div className="flex flex-col mb-4 md:h-[30px] w-full overflow-hidden items-center">
            <ul className="flex gap-[14px] lg:gap-[27px]">
              <li>
                <p className="text-[10px] text-[rgba(38,38,38,0.5)]">Name</p>
                <p className="text-xs text-[#262626]">{name}</p>
              </li>

              <li>
                <p className="text-[10px] text-[rgba(38,38,38,0.5)]">
                  Birthday
                </p>
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
                <p className="text-[10px] text-[rgba(38,38,38,0.5)]">
                  Category
                </p>
                <p className="text-xs text-[#262626]">{category}</p>
              </li>
            </ul>
          </div>
          <p className="text-sm text-[#2B2B2A] font-medium mb-6 md-8">
            {comment}
          </p>
        </div>
        <DialogFooter className="flex gap-2.5 items-center">
          <Button className="flex-grow group font-medium">
            Add to
            <svg className="group-hover:fill-muted-foreground group-hover:stroke-muted-foreground w-[18px] h-[18px] stroke-[#FFFFFF] fill-transparent transition-all duration-300 ml-2">
              <use xlinkHref="/sprite.svg#icon-heart"></use>
            </svg>
          </Button>
          <Button className="flex-grow py-4 font-medium" variant="outline">
            Contact
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LearnMoreModal;
