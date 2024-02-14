"use client";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

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
        <div className="relative flex-grow">
          <input
            className="w-full p-3 md:p-3.5 lg:py-4 lg:px-4 bg-white transition-all duration-300 outline-none focus:border-accent placeholder:text-neutral-800 placeholder:text-sm md:placeholder:text-base"
            id="search"
            name="search"
            placeholder="Search"
          />

          <svg className="absolute right-3 md:right-4 top-[50%] translate-y-[-50%] h-[18px] md:h-[22px] w-[18px] md:w-[22px] stroke-neutral-800 fill-none">
            <use xlinkHref="/sprite.svg#icon-search"></use>
          </svg>
        </div>

        <div className="flex justify-between gap-2 md:flex-grow">
          <Select
            className="flex-grow w-full"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                borderRadius: "24px",
              }),
            }}
          />
          <Select
            className="flex-grow w-full"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                borderRadius: "24px",
              }),
            }}
          />
        </div>

        <div className="flex-grow">
          <Select
            className="w-full"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "none",
                borderRadius: "24px",
              }),
            }}
          />
        </div>

        <div className="relative flex-grow">
          <input
            className="w-full p-3 md:p-3.5 lg:py-4 lg:px-4 bg-white transition-all duration-300 outline-none focus:border-accent placeholder:text-neutral-800 placeholder:text-sm md:placeholder:text-base"
            id="location"
            name="location"
            placeholder="Location"
          />

          <svg className="absolute right-3 md:right-4 top-[50%] translate-y-[-50%] h-[18px] md:h-[22px] w-[18px] md:w-[22px] stroke-neutral-800 fill-none">
            <use xlinkHref="/sprite.svg#icon-search"></use>
          </svg>
        </div>
      </div>

      <div className="h-[1px] w-full bg-neutral-800 bg-opacity-10" />

      <div className="flex flex-wrap gap-2.5">
        {chips.map((chip) => (
          <FilterChip key={chip.value} value={chip.value} label={chip.label} />
        ))}
      </div>
    </div>
  );
};

export default NoticesFilters;

const FilterChip = ({ value, label }: { value: string; label: string }) => {
  const onChangeBackgroundColor = (event: any) => {
    const label = event.target.parentNode;

    if (event.target.checked) {
      label.style.backgroundColor = "#F6B83D";
      label.style.color = "white";
    } else {
      label.style.backgroundColor = "white";
      label.style.color = "#262626";
    }
  };

  return (
    <label className="p-3 md:py-3.5 bg-white rounded-3xl justify-center items-center gap-2.5 inline-flex">
      <input
        type="checkbox"
        className="hidden"
        value={value}
        onChange={onChangeBackgroundColor}
      />
      <span className="text-neutral-800 text-inherit text-sm md:text-base font-medium leading-none md:leading-tight">
        {label}
      </span>
    </label>
  );
};
