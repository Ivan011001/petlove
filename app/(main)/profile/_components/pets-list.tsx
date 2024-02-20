"use client";

import { useAppSelector } from "@/state/hooks";
import { selectPets } from "@/state/pets/petsSelectors";

import Link from "next/link";

import { Plus } from "lucide-react";

import PetsItem from "./pets-item";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PetsList = () => {
  const pets = useAppSelector(selectPets);

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-zinc-800 text-base md:text-lg font-bold leading-tight md:leading-normal">
          My pets
        </h3>

        <Link
          href="/add-pet"
          className="bg-accent rounded-3xl group px-4 py-2.5 md:px-5 md:py-2.5 flex justify-center items-center gap-1 hover:bg-yellow-50 duration-300 transition-all"
        >
          <p className="group-hover:text-accent text-white text-sm font-medium leading-none duration-300 transition-all">
            Add pet
          </p>
          <Plus className="stroke-white h-[18px] w-[18px] group-hover:stroke-accent duration-300 transition-all" />
        </Link>
      </div>
      {pets.length <= 1 ? (
        <>
          <ul className="w-full flex flex-col justify-center md:flex-row md:flex-wrap lg:flex-col lg:flex-nowrap gap-[14px]">
            {pets.map((pet) => {
              return (
                <li
                  key={pet.id}
                  className="md:max-w-[305px] md:flex-grow lg:max-w-full"
                >
                  <PetsItem pet={pet} />
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <ScrollArea className="h-[260px] md:h-[150px] lg:h-[290px] w-full px-3">
          <ul className="w-full flex flex-col justify-center md:flex-row md:flex-wrap lg:flex-col lg:flex-nowrap gap-[14px]">
            {pets.map((pet) => {
              return (
                <li
                  key={pet.id}
                  className="md:max-w-[305px] md:flex-grow lg:max-w-full"
                >
                  <PetsItem pet={pet} />
                </li>
              );
            })}
          </ul>
          <ScrollBar />
        </ScrollArea>
      )}
    </div>
  );
};

export default PetsList;
