"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/state/hooks";
import { current } from "@/state/auth/authOperations";

import ProfileForm from "./_components/profile-form";
import PetsList from "./_components/pets-list";
import LogOutButton from "./_components/log-out-button";
import StoreProvider from "@/providers/store-provider";
import ProfileImage from "./_components/profile-image";
import LinkList from "./_components/link-list";

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
        <LinkList />
      </section>
    </div>
  );
};

export default ProfilePage;
