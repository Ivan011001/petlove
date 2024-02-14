"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const LocationFilter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const onHandleChange = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("location", term);
    } else {
      params.delete("location");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex-grow">
      <input
        className="w-full p-3 md:p-3.5 lg:py-4 lg:px-4 bg-white transition-all duration-300 outline-none focus:border-accent placeholder:text-neutral-800 placeholder:text-sm md:placeholder:text-base"
        id="location"
        name="location"
        placeholder="Location"
        onChange={(e) => onHandleChange(e.target.value)}
        defaultValue={searchParams.get("location")?.toString()}
      />

      <svg className="absolute right-3 md:right-4 top-[50%] translate-y-[-50%] h-[18px] md:h-[22px] w-[18px] md:w-[22px] stroke-neutral-800 fill-none">
        <use xlinkHref="/sprite.svg#icon-search"></use>
      </svg>
    </div>
  );
};

export default LocationFilter;
