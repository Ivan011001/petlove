import Image from "next/image";
import RegistrationForm from "../../_components/registration-form";

const RegisterPage = () => {
  return (
    <main className="flex h-full flex-col md:flex-row lg:flex-col items-center justify-center">
      <div className="flex flex-col bg-stone-50 max-md:px-5">
        <div className="max-md:max-w-full lg:h-full lg:w-full">
          <div className="gap-5 lg:gap-[32px] max-md:flex-col lg:flex max-md:gap-0 relative">
            <div className="flex-col justify-center bg-amber-400 max-w-[335px] rounded-[30px] md:rounded-[60px] mb-[10px] md:max-w-[704px] md:max-h-[302px] relative overflow-hidden lg:max-h-[654px] lg:max-w-[592px]">
              <div className="relative flex-col w-full aspect-[1.19] md:h-[302px] lg:h-[654px]">
                <Image
                  className="absolute top-[22px] right-0 md:w-[572px] md:top-[40px] md:left-[106px] lg:w-[572px] lg:h-[715px] lg:top-[22px] lg:left-[36px]"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/65c4c76946e5c0edf183ef9a/releases/65c4c80c7fc157c12e418353/img/rectangle-4561.svg"
                  width={320}
                  height={414}
                />
                <Image
                  src="https://cdn.animaapp.com/projects/65c4c76946e5c0edf183ef9a/releases/65c4c80c7fc157c12e418353/img/telegram-cloud-document-2-5460905295997845524-2.png"
                  className="object-cover absolute inset-0 md:w-[364px] md:h-[374px] md:left-[270px] md:top-[24px] lg:w-[536px] lg:h-[632px] lg:left-6 lg:top-6"
                  alt="Big cat"
                  width={334}
                  height={280}
                  priority={true}
                />
                <div className="relative gap-2 items-start px-4 py-4 bg-white rounded-3xl hidden md:flex md:left-[32px] md:top-[149px] md:w-[294px] md:h-[121px] lg:left-[65px] lg:top-[440px]">
                  <div className="relative bg-[#FFF4DF] rounded-full w-[60px] h-[60px]">
                    <Image
                      src="/cat.png"
                      alt="Cat"
                      className="absolute h-8 w-8 top-[12px] left-[14px]"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="flex flex-col flex-1 ">
                    <div className="flex gap-5 justify-between w-full">
                      <p className="text-base font-bold text-amber-400">Jack</p>
                      <div className="flex gap-1 my-auto text-xs font-medium tracking-tight leading-4">
                        <p className="grow text-neutral-800 text-opacity-50">
                          Birthday:{" "}
                        </p>
                        <p className="grow text-neutral-800">18.10.2021</p>
                      </div>
                    </div>
                    <p className="mt-2 text-xs font-medium tracking-tight leading-4 text-neutral-800 text-opacity-80">
                      Jack is a gray Persian cat with green eyes. He loves to be
                      pampered and groomed, and enjoys playing with toys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
