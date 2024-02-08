import RegistrationForm from "../../_components/registration-form";

const RegisterPage = () => {
  return (
    <main className="flex h-full flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col bg-stone-50 max-md:px-5">
        <div className="max-md:max-w-full">
          <div className=" gap-5 max-md:flex-col max-md:gap-0 ">
            <div className="flex-col justify-center bg-amber-400 max-w-[335px] rounded-[30px] mb-[10px] md:max-w-[704px] md:max-h-[302px]">
              <div className="flex overflow-hidden relative flex-col pt-9 pr-px pl-6 w-full aspect-[1.19]">
                <img
                  className="absolute top-10 right-0 w-[300px] "
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/65c4c76946e5c0edf183ef9a/releases/65c4c80c7fc157c12e418353/img/rectangle-4561.svg"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.animaapp.com/projects/65c4c76946e5c0edf183ef9a/releases/65c4c80c7fc157c12e418353/img/telegram-cloud-document-2-5460905295997845524-2.png"
                  className="object-cover absolute inset-0"
                />
                <div className="relative gap-2 items-start px-4 py-4 mt-96 bg-white rounded-3xl max-md:mt-10 hidden md:flex">
                  <div className="justify-center items-center text-3xl font-extrabold tracking-tighter leading-8 text-white whitespace-nowrap bg-yellow-50 rounded-full h-[60px] w-[60px]">
                    🐈
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
