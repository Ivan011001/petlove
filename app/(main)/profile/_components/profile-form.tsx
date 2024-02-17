import { selectUserEmail, selectUserName } from "@/state/auth/authSelectors";
import { useAppSelector } from "@/state/hooks";

const inputs = [
  {
    name: "name",
    placeholder: "Name",
    selector: selectUserName,
  },
  {
    name: "email",
    placeholder: "Email",
    selector: selectUserEmail,
  },
  {
    name: "phone",
    placeholder: "Phone",
    selector: selectUserName,
  },
];

const ProfileForm = () => {
  return (
    <>
      <h3 className="text-zinc-800 text-base md:text-lg font-bold leading-tight md:leading-normal mb-5">
        My information
      </h3>

      <form className="w-full flex flex-col gap-2.5">
        {inputs.map(({ name, placeholder, selector }) => {
          const value = useAppSelector(selector);
          return (
            <input
              key={name}
              className="bg-transparent p-3 lg:w-full border border-neutral-800 border-opacity-20 md:py-4 text-neutral-800 text-sm md:text-base font-medium leading-none md:leading-tight outline-none focus:border-accent focus:border-opacity-1 transition-all duration-300"
              type="text"
              name={name}
              defaultValue={value}
              placeholder={placeholder}
            />
          );
        })}
      </form>
    </>
  );
};

export default ProfileForm;
