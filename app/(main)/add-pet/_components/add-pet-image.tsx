import PetImage from "@/components/ui/pet-image";
import RectangleImage from "@/components/ui/rectangle-image";
import Image from "next/image";

const AddPetImage = () => {
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
        className="absolute w-[297px] h-[248px] object-cover md:left-[204px] md:bottom-0 lg:h-[648px] lg:w-[512px] lg:left-10"
        src="https://cdn.animaapp.com/projects/65c4c76946e5c0edf183ef9a/releases/65d484025eb23226784eda53/img/telegram-cloud-document-2-5460905295997845524-1.png"
        alt="Dog"
        width={297}
        height={248}
      />
    </div>
  );
};

export default AddPetImage;
