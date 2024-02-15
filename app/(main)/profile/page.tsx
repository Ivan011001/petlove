import { Button } from "@/components/ui/button";

import ProfileForm from "./_components/profile-form";
import PetsList from "./_components/pets-list";

const ProfilePage = () => {
  return (
    <div className="container">
      <section className="w-full bg-white rounded-3xl pt-[18px] px-5 pb-10">
        <div className="flex justify-between items-center">
          <div className="px-3.5 py-2.5 bg-accent rounded-3xl justify-center items-center gap-1 inline-flex">
            <p className="text-white text-sm font-medium leading-none">User</p>
            <svg className="w-[18px] h-[18px] fill-white stroke-white">
              <use xlinkHref="/sprite.svg#icon-user"></use>
            </svg>
          </div>

          <button className="group p-2.5 bg-yellow-50 rounded-3xl hover:bg-accent transition-all duration-300">
            <svg className="stroke-accent w-[18px] h-[18px] group-hover:stroke-yellow-50 transition-all duration-300">
              <use xlinkHref="/sprite.svg#icon-edit"></use>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center gap-2 mb-[28px]">
          <div className="w-[94px] h-[94px] p-[27px] bg-yellow-50 rounded-full flex justify-center items-center">
            <svg className="w-10 h-10 fill-accent stroke-accent">
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

        <div className="mb-5">
          <PetsList />
        </div>

        <Button className="uppercase py-4 px-[28px]" variant="outline">
          Log Out
        </Button>
      </section>
    </div>
  );
};

export default ProfilePage;
