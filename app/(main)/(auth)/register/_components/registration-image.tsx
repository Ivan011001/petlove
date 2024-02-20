import PetImage from "@/components/pet-image";
import RectangleImage from "@/components/rectangle-image";
import Image from "next/image";

const RegistrationImage = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <RectangleImage
        className="w-[332px] h-[414px] top-[22px] left-[13px] object-contain absolute md:w-[572px] md:h-[715px] md:left-[106px] lg:left-10"
        src="https://cdn.animaapp.com/projects/65c4c76946e5c0edf183ef9a/releases/65c4c80c7fc157c12e418353/img/rectangle-4561.svg"
        alt="Rectangle"
        width={332}
        height={414}
      />
      <PetImage
        className="w-[335px] h-[280px] object-cover absolute md:w-[364px] md:h-[302px] md:left-[250px] md:object-cover lg:h-[660px] lg:w-[512px] lg:left-10 lg:bottom-0"
        src="https://cdn.animaapp.com/projects/65c4c76946e5c0edf183ef9a/releases/65c4c80c7fc157c12e418353/img/telegram-cloud-document-2-5460905295997845524-2.png"
        alt="Cat"
        width={335}
        height={280}
      />
      <div className="hidden md:flex gap-2 items-start bg-white rounded-3xl w-[294px] p-4 md:absolute md:bottom-8 md:left-8 lg:left-[65px] lg:bottom-[106px]">
        <div className="flex-shrink rounded-full w-[60px] h-[60px] bg-yellow-50 flex justify-center items-center p-4">
          <Image src="/images/cat.png" alt="Cat" width={32} height={32} />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-accent text-base font-bold leading-tight">
              Jack
            </h3>
            <p className="text-neutral-800 text-opacity-50 text-xs font-medium  leading-none">
              Birthday:{" "}
              <span className="text-neutral-800 text-xs font-medium  leading-none">
                18.10.2021
              </span>
            </p>
          </div>
          <p className="w-48 text-neutral-800 text-opacity-80 text-xs font-medium leading-none">
            Jack is a gray Persian cat with green eyes. He loves to be pampered
            and groomed, and enjoys playing with toys.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationImage;
