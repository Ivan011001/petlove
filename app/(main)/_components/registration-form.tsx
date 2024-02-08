import Link from "next/link";

const RegistrationForm = () => {
  return (
    <form className="bg-white w-[335px] h-[422px] rounded-[30px] py-[27px] px-[20px]">
      <div className="flex flex-col text-sm font-medium leading-5 text-neutral-800 text-opacity-50">
        <h2 className="w-full text-3xl font-bold leading-7 text-neutral-800">
          Registration
        </h2>
        <h3 className="mt-3 w-full text-neutral-800">
          Thank you for your interest in our platform.
        </h3>
        <input
          className="justify-center items-start py-3 pr-16 pl-3 mt-5 w-full whitespace-nowrap border border-solid border-neutral-800 border-opacity-10 bg-white"
          placeholder="Name"
        />
        <input
          className="justify-center items-start py-3 pr-16 pl-3 mt-2.5 w-full whitespace-nowrap border border-solid border-neutral-800 border-opacity-10 bg-white"
          placeholder="Email"
        />
        <input
          className="flex gap-5 justify-between p-3 mt-2.5 w-full whitespace-nowrap border border-solid border-neutral-800 border-opacity-10 bg-white"
          placeholder="Password"
        />
        {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1639b4cd5e7107f8ea012802af448df82382de85322aafeda0d64da15a590904?"
                  className="aspect-square w-[18px]"
                /> */}
        <input
          className="flex gap-5 justify-between p-3 mt-2.5 w-full border border-solid border-neutral-800 border-opacity-10 bg-white"
          placeholder="Confirm password"
        />
        {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf16b460095e51869194200975e24715573b0a2d05ec48dee5aaac86014d8f3d?"
                  className="aspect-square w-[18px]"
                /> */}
        <button
          type="submit"
          className="flex justify-center items-center py-3 mt-6 w-full font-bold text-white uppercase whitespace-nowrap bg-amber-400 rounded-[30px]"
        >
          Registration
        </button>
        <p className="self-center mt-3 text-xs tracking-tight leading-4 decoration-[rgba(38,38,38,0.5)] whitespace-nowrap">
          Already have an account?
          <Link
            className="font-bold decoration-amber-400 text-amber-400 underline"
            href={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
