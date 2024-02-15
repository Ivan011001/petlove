import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import PetsItem from "./pets-item";

import { IPet } from "@/types";

interface IPetsListProps {
  pets: IPet[];
}

const pets = [
  {
    id: 1,
    species: "dog",
    title: "Golden Retriever Puppies",
    name: "Max",
    birthday: "2022-01-10",
    sex: "male",
    imgURL: "https://ftp.goit.study/img/pets/1.webp",
  },
  {
    id: 2,
    species: "fish",
    title: "Colorful Betta Fish",
    name: "Splash",
    birthday: "2021-04-05",
    sex: "unknown",
    imgURL: "https://ftp.goit.study/img/pets/3.webp",
  },
];

const PetsList = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="text-zinc-800 text-base font-bold leading-tight">
          My pets
        </h3>

        <Button className="group flex justify-center items-center gap-x-1">
          <p className="group-hover:text-accent text-white text-sm font-medium leading-none duration-300 transition-all">
            Add pet
          </p>
          <Plus className="h-[18px] w-[18px] group-hover:stroke-accent" />
        </Button>
      </div>

      <ul className="w-full flex flex-col gap-[14px]">
        {pets.map((pet) => {
          return (
            <li key={pet.id}>
              <PetsItem pet={pet} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PetsList;
