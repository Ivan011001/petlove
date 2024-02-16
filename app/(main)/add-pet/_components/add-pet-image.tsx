import Image from "next/image";

const AddPetImage = () => {
  return (
    <div
      className="w-full h-full bg-center-top bg-cover bg-no-repeat relative md:overflow-hidden"
      style={{
        backgroundImage:
          "url(https://cdn.animaapp.com/projects/65c4c76946e5c0edf183ef9a/releases/65c4c80c7fc157c12e418353/img/rectangle-4561.svg)",
      }}
    >
      <div
        className="absolute bg-cover w-full h-full"
        style={{
          backgroundImage:
            "url(https://cdn.animaapp.com/projects/65abdef27b6be51fbc22722e/releases/65c65434e35bd7d6ae7069ea/img/telegram-cloud-document-2-5460905295997845524-1.png)",
        }}
      />
    </div>
  );
};

export default AddPetImage;
