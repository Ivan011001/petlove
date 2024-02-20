"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useAppDispatch } from "@/state/hooks";
import { deletePet } from "@/state/pets/petsOperations";

import { Trash2 } from "lucide-react";
import Image from "next/image";

import { toast } from "sonner";

interface IDeletePetProps {
  id: string;
  imgURL: string;
}

const DeletePet = ({ id, imgURL }: IDeletePetProps) => {
  const dispatch = useAppDispatch();

  const onDeleteHandle = async (id: string) => {
    await dispatch(deletePet(id));
    toast.error("You have deleted pet", { duration: 2000 });
  };

  const isAvatar = imgURL.length > 0;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group absolute top-3 right-3 w-[30px] h-[30px] md:w-8 md:h-8 lg:h-[38px] lg:w-[38px] bg-yellow-50 rounded-3xl flex justify-center items-center hover:bg-accent transition-all duration-300">
          <Trash2 className="h-4 w-4 stroke-accent group-hover:stroke-yellow-50 transition-all duration-300" />
        </button>
      </DialogTrigger>
      <DialogContent className="container px-5 py-10 md:py-[60px] md:px-[60px] max-w-[335px] md:max-w-[466px] flex flex-col gap-0">
        <DialogHeader className="mb-[28px]">
          <div className="flex justify-center mb-5">
            <div className="h-[80px] w-[80px] bg-yellow-50 rounded-full flex justify-center items-center">
              {isAvatar ? (
                <Image
                  className="rounded-full h-[80px] w-[80px] object-cover"
                  src={imgURL}
                  alt="Dog"
                  width={80}
                  height={80}
                />
              ) : (
                <svg className="w-10 h-10 md:w-12 md:h-12 fill-accent">
                  <use xlinkHref="/sprite.svg#icon-paw"></use>
                </svg>
              )}
            </div>
          </div>
          <DialogTitle className="text-neutral-800 text-xl md:text-2xl font-bold leading-tight text-center md:leading-7 m-0">
            Are you sure you want to{" "}
            <span className="text-accent text-xl md:text-2xl font-bold leading-tight text-center md:leading-7 m-0">
              delete
            </span>{" "}
            your pet?
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2"></div>
        <DialogFooter className="flex gap-2 items-center m-0">
          <Button
            className="flex-grow py-4"
            type="button"
            onClick={() => onDeleteHandle(id)}
          >
            Yes
          </Button>
          <DialogClose asChild>
            <Button
              className="flex-grow py-4 bg-neutral-800 bg-opacity-5 text-neutral-800 hover:bg-accent hover:text-yellow-50 "
              variant="outline"
              type="button"
            >
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePet;
