"use client";

import { useState, useEffect } from "react";
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

  const [isChecked, setIsChecked] = useState(searchParams.has(value));

  useEffect(() => {
    setIsChecked(searchParams.has(value));
  }, [searchParams, value]);

  const onChangeBackgroundColor = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = event.target.checked;
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);

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
        "p-3 md:py-3.5 bg-white rounded-3xl justify-center items-center gap-2.5 inline-flex cursor-pointer",
        isChecked && "text-white bg-accent"
      )}
    >
      <input
        type="checkbox"
        className="hidden"
        value={value}
        onChange={onChangeBackgroundColor}
        checked={isChecked}
      />
      <span className="text-neutral-800 text-inherit text-sm md:text-base font-medium leading-none md:leading-tight">
        {label}
      </span>
    </label>
  );
};
export default ChipFilter;
