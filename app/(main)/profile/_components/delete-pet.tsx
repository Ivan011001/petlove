"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/state/hooks";
import { deletePet } from "@/state/pets/petsOperations";

import { Trash2 } from "lucide-react";

import { toast } from "sonner";

interface IDeletePetProps {
  id: string;
}

const DeletePet = ({ id }: IDeletePetProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onDeleteHandle = async (id: string) => {
    await dispatch(deletePet(id));
    toast.error("You have deleted pet", { duration: 2000 });
    router.refresh();
  };

  return (
    <button
      onClick={() => onDeleteHandle(id)}
      className="group absolute top-3 right-3 w-[30px] h-[30px] md:w-8 md:h-8 lg:h-[38px] lg:w-[38px] bg-yellow-50 rounded-3xl flex justify-center items-center hover:bg-accent transition-all duration-300"
    >
      <Trash2 className="h-4 w-4 stroke-accent group-hover:stroke-yellow-50 transition-all duration-300" />
    </button>
  );
};

export default DeletePet;
