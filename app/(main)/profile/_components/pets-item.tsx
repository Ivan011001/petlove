import Image from "next/image";

import { IPet } from "@/types";

import { Trash2 } from "lucide-react";

import { capitalizeWord } from "@/utils";

interface IPetsItemProps {
  pet: IPet;
}

const PetsItem = ({ pet }: IPetsItemProps) => {
  const { name, title, birthday, sex, species, imgURL } = pet;

  const description = [
    {
      title: "Name",
      value: capitalizeWord(name),
    },
    {
      title: "Birthday",
      value: birthday,
    },
    {
      title: "Sex",
      value: capitalizeWord(sex),
    },
    {
      title: "Species",
      value: capitalizeWord(species),
    },
  ];

  return (
    <div className="w-full relative p-4 border rounded-2xl border-neutral-800 border-opacity-10">
      <button className="group absolute top-3 right-3 w-[30px] h-[30px] p-[7px] bg-yellow-50 rounded-3xl flex justify-center items-center hover:bg-accent transition-all duration-300">
        <Trash2 className="h-4 w-4 stroke-accent group-hover:stroke-yellow-50 transition-all duration-300" />
      </button>

      <div className="flex gap-[14px]">
        <div className="w-[66px] h-[66px] flex-shrink-0">
          <Image
            className="rounded-full"
            src={imgURL}
            alt={title}
            width={90}
            height={90}
          />
        </div>

        <div className="flex flex-col gap-2 min-w-[153px]">
          <h4 className="w-36 text-zinc-800 text-sm font-bold leading-none overflow-ellipsis">
            {title}
          </h4>

          <ul className="flex gap-2.5 flex-wrap">
            {description.map(({ value, title }) => {
              return (
                <li key={title} className="flex flex-col items-start gap-1">
                  <p className="text-neutral-800 text-opacity-50 text-xs font-medium leading-none">
                    {title}
                  </p>
                  <p className="text-neutral-800 text-xs font-medium leading-none">
                    {value}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PetsItem;
