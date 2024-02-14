"use client";

import React from "react";
import Select from "react-select";

interface ISelectFilterProps {
  label: string;
  value?: string;
}

const SelectFilter = ({ label, value }: ISelectFilterProps) => {
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1280;
  const isDesktop = window.innerWidth >= 1280;

  return (
    <Select
      className="flex-grow w-full"
      placeholder={label}
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
          color: state.isFocused ? "black" : "rgba(18, 20, 23, 0.2)",
          fontFamily: "Manrope",
          backgroundColor: "white",
          fontWeight: 500,
          // Add additional styles based on device
          ...(isTablet &&
            {
              // Add mobile specific styles here
            }),
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
          // Add additional styles based on device
          ...(isTablet &&
            {
              // Add mobile specific styles here
            }),
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
