"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import Select from "react-select";

import { getOptions } from "@/data";
import { capitalizeWord } from "@/utils";

interface ISelectFilterProps {
  label: string;
  value: string;
  param: string;
}

const SelectFilter = ({ label, value, param }: ISelectFilterProps) => {
  const [options, setOptions] = useState([]);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1280px)");
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    const fetch = async () => {
      const options = await getOptions(value);
      setOptions(options);
    };

    fetch();
  }, [value]);

  const finalOptions = options.map((option: string) => {
    return { value: option, label: capitalizeWord(option) };
  });

  const onHandleChange = (term: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");
    if (term) {
      params.set(param, term);
    } else {
      params.delete(param);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      className="flex-grow w-full"
      onChange={(e) => onHandleChange(e?.value as string)}
      defaultInputValue={capitalizeWord(
        searchParams.get(param)?.toString() as string
      )}
      placeholder={label}
      options={finalOptions}
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
        menu: (provided, state) => ({
          ...provided,
          border: "none",
          borderRadius: "16px",
        }),
        option: (provided, state) => ({
          ...provided,
          color: state.isFocused ? "#FFCA28" : "#262626",
          opacity: state.isFocused ? "" : "60",
          backgroundColor: "white",

          transition: "all",
          transitionDuration: "300ms",
          transitionProperty: "cubic-bezier(0.4, 0, 0.2, 1)",

          ...(isTablet && {}),
        }),
        menuList: (provided) => ({
          ...provided,
          borderRadius: "16px",
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "8px",
            background: "rgba(38, 38, 38, 0.08)",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "rgba(38, 38, 38, 0.08)",
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
