"use client";

import { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface IChipFilterProps {
  value: string;
  label: string;
}

const ChipFilter = ({ value, label }: IChipFilterProps) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isChecked, setIsChecked] = useState<boolean>(searchParams.has(value));

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    const checked = event.target.checked;
    const value = event.target.value;

    params.set("page", "1");
    if (checked) {
      params.set(value, "true");
    } else {
      params.delete(value);
    }

    replace(`${pathname}?${params.toString()}`);
    setIsChecked(checked);
  };

  return (
    <label
      className={cn(
        "group p-3 md:py-3.5 bg-white rounded-3xl justify-center items-center gap-2.5 inline-flex hover:bg-accent cursor-pointer transition-all duration-300",
        isChecked && "bg-accent"
      )}
    >
      <input
        type="checkbox"
        className="hidden"
        value={value}
        onChange={onChange}
        defaultChecked={searchParams.has(value)}
      />
      <span
        className={cn(
          "text-neutral-800 text-inherit text-sm md:text-base font-medium leading-none md:leading-tight group-hover:text-white transition-all duration-300",
          isChecked && "text-white"
        )}
      >
        {label}
      </span>
    </label>
  );
};
export default ChipFilter;
