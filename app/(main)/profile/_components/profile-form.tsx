"use client";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/state/hooks";

import { updateUser } from "@/state/auth/authOperations";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhone,
} from "@/state/auth/authSelectors";

import { Formik, Field, Form } from "formik";
import { updateUserSchema } from "@/schemas";

import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface IProfileFormValue {
  name: string;
  email: string;
  phone: string;
}

const ProfileForm = () => {
  const dispatch = useAppDispatch();

  const name = useAppSelector(selectUserName);
  const email = useAppSelector(selectUserEmail);
  const phone = useAppSelector(selectUserPhone);

  const [isClientUsed, setIsClientUsed] = useState(false);

  const initialValues: IProfileFormValue = {
    name,
    email,
    phone: phone || "+380",
  };

  const onFormActivate = () => {
    setIsClientUsed((prev) => !prev);
  };

  const onHandleSubmit = async (values: IProfileFormValue) => {
    const { name, phone } = values;

    await dispatch(updateUser({ name, phone }));
    toast.success("You have successfully changed profile info!");
    setIsClientUsed((prev) => !prev);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={updateUserSchema}
      onSubmit={onHandleSubmit}
    >
      {({ touched, errors, setErrors, setValues }) => (
        <Form>
          <button
            type="button"
            onClick={async () => {
              onFormActivate();
              await setValues(initialValues);
              setErrors({});
            }}
            className={cn(
              "absolute top-[18px] md:top-[40px] right-[20px] md:right-[40px] group p-2.5 bg-yellow-50 rounded-3xl hover:bg-accent transition-all duration-300",
              isClientUsed && "bg-accent"
            )}
          >
            <svg
              className={cn(
                "stroke-accent w-[18px] h-[18px] group-hover:stroke-yellow-50 transition-all duration-300",
                isClientUsed && "stroke-yellow-50"
              )}
            >
              <use xlinkHref="/sprite.svg#icon-edit"></use>
            </svg>
          </button>

          <div className="flex items-center justify-between mb-5 h-[38px]">
            <h3 className="text-zinc-800 text-base md:text-lg font-bold leading-tight md:leading-normal">
              My information
            </h3>

            {isClientUsed && (
              <button
                type="submit"
                className={cn(
                  "group p-2.5 bg-yellow-50 rounded-3xl flex justify-center items-center hover:bg-accent transition-all duration-300 cursor-pointer"
                )}
              >
                <svg
                  className={cn(
                    "stroke-accent w-[18px] h-[18px] group-hover:stroke-yellow-50 transition-all duration-300"
                  )}
                >
                  <use xlinkHref="/sprite.svg#icon-check"></use>
                </svg>
              </button>
            )}
          </div>

          <div className="w-full flex flex-col gap-2.5">
            <div className="flex flex-col">
              <Field
                className={`bg-transparent p-3 lg:w-full border border-neutral-800 border-opacity-20 md:py-4 text-neutral-800 text-sm md:text-base font-medium leading-none md:leading-tight outline-none focus:border-accent focus:border-opacity-1 transition-all duration-300 ${
                  isClientUsed ? "" : "pointer-events-none text-opacity-30"
                }`}
                type="text"
                name="name"
                placeholder="Name"
                disabled={!isClientUsed}
                styles={{ all: "unset" }}
              />

              {touched.name && errors.name && (
                <p className="mt-[2px] text-red-500 text-[10px] pl-3 md:pl-4 font-medium leading-none md:leading-tight">
                  {errors.name}
                </p>
              )}
            </div>
            <Field
              className="bg-transparent p-3 lg:w-full border border-neutral-800 border-opacity-20 md:py-4 text-neutral-800 text-sm md:text-base font-medium leading-none md:leading-tight outline-none focus:border-accent focus:border-opacity-1 transition-all duration-300 pointer-events-none text-opacity-30"
              type="text"
              name="email"
              placeholder="Email"
              disabled
            />
            <div className="flex flex-col">
              <Field
                className={`bg-transparent p-3 lg:w-full border border-neutral-800 border-opacity-20 md:py-4 text-neutral-800 text-sm md:text-base font-medium leading-none md:leading-tight outline-none focus:border-accent focus:border-opacity-1 transition-all duration-300 ${
                  isClientUsed ? "" : "pointer-events-none text-opacity-30"
                }`}
                type="text"
                name="phone"
                placeholder="Phone"
                disabled={!isClientUsed}
                styles={{ all: "unset" }}
              />

              {touched.phone && errors.phone && (
                <p className="mt-[2px] text-red-500 text-[10px] pl-3 md:pl-4 font-medium leading-none md:leading-tight">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
