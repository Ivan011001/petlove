"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useMediaQuery } from "usehooks-ts";

// import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { getOptions } from "@/utils/data";

interface ISelectFilterProps {
  label: string;
  value: string;
}

const SelectFilter = ({ label, value }: ISelectFilterProps) => {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const { replace } = useRouter();

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const options = await getOptions(value);
      setOptions(options);
    };

    fetch();
  }, [value]);

  // const onHandleChange = (term: string) => {
  //   const params = new URLSearchParams(searchParams);

  //   if (term) {
  //     params.set(value, term);
  //   } else {
  //     params.delete(value);
  //   }

  //   replace(`${pathname}?${params.toString()}`);
  // };

  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1280px)");
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  const finalOption = options.map((option: string) => {
    return { value: option, label: option };
  });

  return (
    <Select
      className="flex-grow w-full"
      placeholder={label}
      options={finalOption}
      styles={{
        control: (provided, _) => ({
          ...provided,
          border: "none",
          outline: "none",
          borderRadius: "24px",
          paddingTop: "5px",
          paddingBottom: "5px",
          backgroundColor: "white",
          appearance: "none",
          fontWeight: 500,

          ...(isTablet && {
            paddingTop: "8px",
            paddingBottom: "8px",
            paddingLeft: "6px",
          }),

          ...(isDesktop && {
            padding: "9.5px",
            paddingLeft: "px",
          }),
        }),
        option: (provided, state) => ({
          ...provided,
          color: state.isFocused ? "#FFCA28" : "#262626",
          opacity: state.isFocused ? "" : "60",
          backgroundColor: "white",
          fontWeight: 500,

          ...(isTablet && {}),
        }),
        menuList: (provided) => ({
          ...provided,
          "::-webkit-scrollbar": {
            width: "9px",
          },
          "::-webkit-scrollbar-track": {
            background: "rgba(18, 20, 23, 0.05)",
          },
          "::-webkit-scrollbar-thumb": {
            background: "rgba(18, 20, 23, 0.05)",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "rgba(18, 20, 23, 0.05)",
          },

          ...(isTablet && {}),
        }),
        placeholder: (provided) => ({
          ...provided,
          color: "#262626",
          fontSize: "13.5px",
          lineHeight: "20px",

          ...(isTablet && {
            fontSize: "16px",
            lineHeight: "24px",
          }),

          ...(isDesktop && {
            fontSize: "16px",
            lineHeight: "24px",
          }),
        }),
      }}
    />
  );
};

export default SelectFilter;
