import { Suspense } from "react";

import SelectFilter from "./select-filter";
import SearchFilter from "./search-filter";
import LocationFilter from "./location-filter";
import ChipFilter from "./chip-filter";

const chips = [
  { value: "popular", label: "Popular" },
  { value: "unpopular", label: "Unpopular" },
  { value: "cheap", label: "Cheap" },
  { value: "expensive", label: "Expensive" },
];

const NoticesFilters = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-4 md:items-center">
        <Suspense>
          <SearchFilter />
        </Suspense>

        <div className="flex justify-between gap-2 md:min-w-[356px] md:flex-grow">
          <SelectFilter label="Category" value="categories" param="category" />
          <SelectFilter label="By gender" value="sex" param="gender" />
        </div>

        <div className="flex-grow ">
          <SelectFilter label="By type" value="species" param="type" />
        </div>

        <Suspense>
          <LocationFilter />
        </Suspense>
      </div>

      <div className="h-[1px] w-full bg-neutral-800 bg-opacity-10" />

      <div className="flex flex-wrap gap-2.5">
        <Suspense>
          {chips.map((chip) => (
            <ChipFilter
              key={chip.value}
              value={chip.value}
              label={chip.label}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default NoticesFilters;
