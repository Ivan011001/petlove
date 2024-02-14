"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface IChipFilterProps {
  value: string;
  label: string;
}

const ChipFilter = ({ value, label }: IChipFilterProps) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onChangeBackgroundColor = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const labelNode = event.target.parentNode;
    if (!labelNode || !(labelNode instanceof HTMLLabelElement)) return;

    const label = labelNode as HTMLLabelElement;

    const checked = event.target.checked;
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (checked) {
      label.style.backgroundColor = "#F6B83D";
      label.style.color = "white";

      params.set(value, "");
    } else {
      label.style.backgroundColor = "white";
      label.style.color = "#262626";

      params.delete(value);
    }

    replace(`${pathname}?${params.toString()}`);
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
export default ChipFilter;
