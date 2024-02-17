"use client";

import { uploadImage } from "@/state/auth/authOperations";
import { selectUserImage } from "@/state/auth/authSelectors";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

const ProfileImage = () => {
  const imgURL = useAppSelector(selectUserImage);
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!file) return;
    const formData = new FormData();
    formData.append("imgURL", file);
    dispatch(uploadImage(formData));
  }, [file, dispatch]);

  return (
    <div className="flex flex-col items-center gap-2 mb-[28px] md:mb-5">
      <div className="w-[94px] md:w-[110px] h-[94px] md:h-[110px] bg-yellow-50 rounded-full flex justify-center items-center">
        {imgURL ? (
          <Image
            src={imgURL}
            alt="dfdfd"
            width={110}
            height={110}
            className="rounded-full w-[94px] md:w-[110px] h-[94px] md:h-[110px] object-cover"
          />
        ) : (
          <svg className="w-10 md:w-[50px] h-10 md:h-[50px] fill-accent stroke-accent">
            <use xlinkHref="/sprite.svg#icon-user"></use>
          </svg>
        )}
      </div>
      <input
        type="file"
        name="imgURL"
        accept="image/png, image/jpg"
        onChange={handleFileChange}
        className="text-neutral-800 text-xs font-medium underline leading-none hover:text-accent transition-all duration-300"
      />
      Upload photo
    </div>
  );
};

export default ProfileImage;
