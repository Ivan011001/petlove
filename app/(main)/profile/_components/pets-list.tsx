import Link from "next/link";

import { Plus } from "lucide-react";

import PetsItem from "./pets-item";

import { IPet } from "@/types";
import { axiosInstance } from "@/services";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const getPets = async (): Promise<IPet[]> => {
  try {
    const response = await axiosInstance.get("/pets");

    return response.data;
  } catch (error: any) {
    return error.message;
  }
};

const PetsList = async () => {
  const pets: IPet[] = await getPets();

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
      {pets.length > 0 ? (
        <ScrollArea className="h-[260px] md:h-[150px] lg:h-[290px] w-full px-3">
          <ul className="w-full flex flex-col justify-center md:flex-row md:flex-wrap lg:flex-col lg:flex-nowrap gap-[14px] lg:h-[290px]">
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
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PetsList;

//  {
//    pets.length > 0 ? (
//      <ScrollArea className="h-[260px] md:h-[150px] lg:h-[290px] w-full px-3">
//        <ul className="w-full flex flex-col justify-center md:flex-row md:flex-wrap lg:flex-col lg:flex-nowrap gap-[14px] lg:h-[290px]">
//          {pets.map((pet) => {
//            return (
//              <li
//                key={pet.id}
//                className="md:max-w-[305px] md:flex-grow lg:max-w-full"
//              >
//                <PetsItem pet={pet} />
//              </li>
//            );
//          })}
//        </ul>
//        <ScrollBar />
//      </ScrollArea>
//    ) : (
//      <div></div>
//    );
//  }
