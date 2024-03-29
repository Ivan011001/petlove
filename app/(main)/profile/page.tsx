import ProfileForm from "./_components/profile-form";
import PetsList from "./_components/pets-list";
import ProfileImage from "./_components/profile-image";
import ListSection from "./_components/list-section";
import LogoutModal from "@/components/logout-modal";

const ProfilePage = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-10">
      <section className="relative w-full lg:max-w-[520px] bg-white rounded-3xl md:rounded-[60px] pt-[54px] px-5 pb-10 md:p-[40px]">
        <div className="absolute top-[18px] md:top-[40px] left-[20px] md:left-[40px] px-3.5 py-2.5 bg-accent rounded-3xl justify-center items-center gap-1 inline-flex">
          <p className="text-white text-sm font-medium leading-none">User</p>
          <svg className="w-[18px] h-[18px] fill-white stroke-white">
            <use xlinkHref="/sprite.svg#icon-user"></use>
          </svg>
        </div>

        <ProfileImage />
        <div className="mb-10">
          <ProfileForm />
        </div>
        <div className="mb-5 lg:mb-10">
          <PetsList />
        </div>

        <LogoutModal variant="outline" />
      </section>
      <section className="lg:w-[970px]">
        <ListSection />
      </section>
    </div>
  );
};

export default ProfilePage;
