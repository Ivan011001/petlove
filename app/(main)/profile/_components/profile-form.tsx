const ProfileForm = () => {
  return (
    <>
      <h3 className="text-zinc-800 text-base font-bold leading-tight mb-5">
        My information
      </h3>

      <form className="w-full flex flex-col gap-2.5">
        <input
          className="bg-red-400 p-3"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="bg-red-400 p-3"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className="bg-red-400 p-3"
          type="text"
          name="phone"
          placeholder="Phone"
        />
      </form>
    </>
  );
};

export default ProfileForm;
