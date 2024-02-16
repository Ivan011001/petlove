import Link from "next/link";

import AddPetForm from "./_components/add-pet-form";
import AddPetImage from "./_components/add-pet-image";

const AddPetPage = () => {
  return (
    <div className="container min-h-full flex flex-col lg:flex-row gap-2.5 md:gap-4 lg:gap-8 pb-5">
      <section className="h-[280px] flex-grow rounded-3xl md:rounded-[60px] bg-accent w-full sm:max-w-[335px] md:h-[302px] md:max-w-[704px] lg:h-full mx-auto">
        <AddPetImage />
      </section>
      <section className="flex items-center justify-center rounded-3xl md:rounded-[60px] bg-white w-full h-auto lg:h-full p-5 pt-7 md:pt-[40px] md:pb-[40px] sm:max-w-[335px] mx-auto md:max-w-[704px]">
        <div className="lg:max-w-[424px]">
          <h2 className="text-neutral-800 text-3xl md:text-3xl font-bold leading-7 md:leading-loose mb-6 md:mb-[40px]">
            Add my pet/{" "}
            <span className="text-zinc-800 text-opacity-40 text-sm md:text-base font-bold leading-none md:leading-tight">
              Personal details
            </span>
          </h2>

          <AddPetForm />
        </div>
      </section>
    </div>
  );
};

export default AddPetPage;
