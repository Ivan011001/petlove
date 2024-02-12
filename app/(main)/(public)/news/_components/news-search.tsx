"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const NewsSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams);

    const searchInput: HTMLInputElement =
      event.currentTarget.elements.namedItem("search") as HTMLInputElement;

    const value = searchInput.value;

    params.set("page", "1");

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form className="relative" onSubmit={onFormSubmit}>
      <input
        className="w-full py-3 px-3 lg:py-4 lg:px-4 bg-transparent border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent placeholder:text-sm md:placeholder:text-base"
        id="search"
        name="search"
        placeholder="Search"
        defaultValue={searchParams.get("search")?.toString()}
      />

      <button
        type="submit"
        className="group absolute right-3 md:right-4 top-[50%] translate-y-[-50%]"
      >
        <svg className="h-[18px] md:h-[22px] w-[18px] md:w-[22px] stroke-neutral-800 fill-none group-hover:stroke-accent transition-all duration-300">
          <use xlinkHref="/sprite.svg#icon-search"></use>
        </svg>
      </button>
    </form>
  );
};

export default NewsSearch;
