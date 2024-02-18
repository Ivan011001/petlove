import Image from "next/image";

const LoginImage = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <Image
        className="w-[332px] h-[414px] top-[22px] left-[13px] object-contain absolute md:w-[572px] md:h-[715px] md:left-[106px] lg:left-10"
        src="https://cdn.animaapp.com/projects/65c4c76946e5c0edf183ef9a/releases/65c4c80c7fc157c12e418353/img/rectangle-4561.svg"
        alt="Rectangle"
        width={332}
        height={414}
      />
      <Image
        className="w-[335px] h-[280px] object-cover absolute md:w-[364px] md:h-[302px] md:left-[250px] md:object-cover lg:h-[660px] lg:w-[512px] lg:left-10 lg:bottom-0"
        src="https://cdn.animaapp.com/projects/65abdef27b6be51fbc22722e/releases/65c65434e35bd7d6ae7069ea/img/telegram-cloud-document-2-5460905295997845524-1.png"
        alt="Dog"
        width={335}
        height={280}
      />
      <div className="hidden md:flex gap-2 items-start bg-white rounded-3xl w-[294px] md:absolute md:bottom-8 md:left-8 p-4 lg:bottom-[97px] lg:left-[61px]">
        <div className="flex-shrink rounded-full w-[60px] h-[60px] bg-yellow-50 flex justify-center items-center p-4">
          <Image src="/images/dog.png" alt="Dog" width={32} height={32} />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-accent text-base font-bold leading-tight">
              Rich
            </h3>
            <p className="text-neutral-800 text-opacity-50 text-xs font-medium  leading-none">
              Birthday:{" "}
              <span className="text-neutral-800 text-xs font-medium  leading-none">
                21.09.2020
              </span>
            </p>
          </div>
          <p className="w-48 text-neutral-800 text-opacity-80 text-xs font-medium leading-none">
            Rich would be the perfect addition to an active family that loves to
            play and go on walks. I bet he would love having a playmate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginImage;
