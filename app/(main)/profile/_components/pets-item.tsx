"use client";

import StoreProvider from "@/providers/store-provider";

import Image from "next/image";

import { IPet } from "@/types";

import { capitalizeWord, shortenWord } from "@/utils";

import DeletePet from "./delete-pet";

interface IPetsItemProps {
  pet: IPet;
}

const PetsItem = ({ pet }: IPetsItemProps) => {
  const { name, title, birthday, sex, species, imgURL, id } = pet;

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
    <div className="w-full relative p-4 pr-[46px] md:py-[22px] md:pl-4 md:pr-[27px] lg:py-[20px] lg:pl-[20px] lg:pr-[62px] border rounded-2xl md:rounded-[20px] border-neutral-800 border-opacity-10">
      <StoreProvider>
        <DeletePet id={id} />
      </StoreProvider>

      <div className="flex lg:items-center gap-[14px] lg:gap-[25px]">
        <div className="w-[66px] h-[66px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px] flex-shrink-0">
          <Image
            className="rounded-full"
            src={imgURL}
            alt={title}
            width={90}
            height={90}
          />
        </div>

        <div className="flex flex-col gap-2 md:gap-3 min-w-[153px]">
          <h4 className="text-zinc-800 text-sm font-bold leading-none">
            {shortenWord(title, 18)}
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
