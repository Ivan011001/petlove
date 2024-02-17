import { Button } from "@/components/ui/button";

import ProfileForm from "./_components/profile-form";
import PetsList from "./_components/pets-list";

const ProfilePage = () => {
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

        <div className="flex flex-col items-center gap-2 mb-[28px] md:mb-5">
          <div className="w-[94px] md:w-[110px] h-[94px] md:h-[110px] bg-yellow-50 rounded-full flex justify-center items-center">
            <svg className="w-10 md:w-[50px] h-10 md:h-[50px] fill-accent stroke-accent">
              <use xlinkHref="/sprite.svg#icon-user"></use>
            </svg>
          </div>

          <button className="text-neutral-800 text-xs font-medium underline leading-none hover:text-accent transition-all duration-300">
            Ulpoad photo
          </button>
        </div>

        <div className="mb-10">
          <ProfileForm />
        </div>

        <div className="mb-5 lg:mb-10">
          <PetsList />
        </div>

        <Button
          className="uppercase py-4 px-[28px] md:px-9 md:py-3.5"
          variant="outline"
        >
          Log Out
        </Button>
      </section>
    </div>
  );
};

export default ProfilePage;
