"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const NewsSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative">
      <input
        className="w-full py-3 px-3 lg:py-4 lg:px-4 bg-transparent border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent  placeholder:text-sm md:placeholder:text-base"
        id="search"
        name="search"
        placeholder="Search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("search")?.toString()}
      />

      <svg className="absolute right-3 md:right-4 top-[50%] translate-y-[-50%] h-[18px] md:h-[22px] w-[18px] md:w-[22px] stroke-neutral-800 fill-none">
        <use xlinkHref="/sprite.svg#icon-search"></use>
      </svg>
    </div>
  );
};

export default NewsSearch;
