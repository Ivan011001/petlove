"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/state/hooks";
import { current } from "@/state/auth/authOperations";

import ProfileForm from "./_components/profile-form";
import PetsList from "./_components/pets-list";
import LogOutButton from "./_components/log-out-button";
import RadioLink from "./_components/radio-link";
import StoreProvider from "@/providers/store-provider";
import ProfileImage from "./_components/profile-image";

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="container flex flex-col lg:flex-row gap-10">
      <section className="relative w-full lg:w-[520px] bg-white rounded-3xl md:rounded-[60px] pt-[54px] px-5 pb-10 md:p-[40px]">
        <div className="absolute top-[18px] md:top-[40px] left-[20px] md:left-[40px] px-3.5 py-2.5 bg-accent rounded-3xl justify-center items-center gap-1 inline-flex">
          <p className="text-white text-sm font-medium leading-none">User</p>
          <svg className="w-[18px] h-[18px] fill-white stroke-white">
            <use xlinkHref="/sprite.svg#icon-user"></use>
          </svg>
        </div>
        <button className="absolute top-[18px] md:top-[40px] right-[20px] md:right-[40px] group p-2.5 bg-yellow-50 rounded-3xl hover:bg-accent transition-all duration-300">
          <svg className="stroke-accent w-[18px] h-[18px] group-hover:stroke-yellow-50 transition-all duration-300">
            <use xlinkHref="/sprite.svg#icon-edit"></use>
          </svg>
        </button>
        <StoreProvider>
          <ProfileImage />
        </StoreProvider>
        <div className="mb-10">
          <StoreProvider>
            <ProfileForm />
          </StoreProvider>
        </div>
        <div className="mb-5 lg:mb-10">
          <PetsList />
        </div>

        <LogOutButton />
      </section>
      <section>
        <RadioLink message="My favorite pets" path="/profile/favorites" />
        <RadioLink message="Viewed" path="/profile/viewed" />
      </section>
    </div>
  );
};

export default ProfilePage;
