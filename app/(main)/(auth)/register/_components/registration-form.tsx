"use client";

import { useState } from "react";

import { Field, Form, Formik } from "formik";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { registrationSchema } from "@/utils/validationFormSchemas";

interface IRegistratiomFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialValues: IRegistratiomFormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onShowPasswordChange = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
    setShowPassword((prev) => !prev);
  };

  const onShowConfirmPasswordChange = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="bg-white w-[335px] rounded-[30px] md:rounded-[60px] py-[27px] px-[20px] md:w-[704px] md:px-[140px] lg:w-[592px] lg:py-[77px] lg:px-[84px]">
      <div className="flex flex-col text-sm font-medium leading-5 text-neutral-800 text-opacity-50">
        <h2 className="w-full text-3xl font-bold leading-7 text-neutral-800 md:text-[54px] md:leading-[54px] md:mb-4">
          Registration
        </h2>
        <h3 className="mt-3 w-full text-neutral-800 md:mb-[32px] md:mt-0 text-[14px] leading-[18px] md:text-[18px] md:leading-[22px]">
          Thank you for your interest in our platform.
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={registrationSchema}
          onSubmit={(values, actions) => {}}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              <Field
                className={cn(
                  "w-full py-3 px-3 lg:py-4 mt-5 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent bg-white text-[rgba(38,38,38,0.8)] leading-[18px] font-medium text-[14px] md:mt-0 md:text-4 placeholder:text-sm md:placeholder:text-base",
                  touched.name
                    ? errors.name
                      ? "border-red-500 border-opacity-100"
                      : "border-green-500 border-opacity-100"
                    : ""
                )}
                placeholder="Name"
                name="name"
              />
              {errors.name && touched.name ? (
                <p className="mt-[2px] md:mt-1 text-red-500 text-[10px] pl-3 md:pl-4 font-medium leading-none md:leading-tight">
                  {errors.name}
                </p>
              ) : null}
              <Field
                className={cn(
                  "w-full py-3 px-3 lg:py-4 mt-2 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent bg-white text-[rgba(38,38,38,0.8)] leading-[18px] font-medium text-[14px] md:text-4 placeholder:text-sm md:placeholder:text-base",
                  touched.email
                    ? errors.email
                      ? "border-red-500 border-opacity-100"
                      : "border-green-500 border-opacity-100"
                    : ""
                )}
                placeholder="Email"
                name="email"
              />
              {errors.email && touched.email ? (
                <p className="mt-[2px] md:mt-1 text-red-500 text-[10px] pl-3 md:pl-4 font-medium leading-none md:leading-tight">
                  {errors.email}
                </p>
              ) : null}

              <div className="relative">
                <Field
                  className={cn(
                    "w-full py-3 px-3 lg:py-4 mt-2 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent bg-white text-[rgba(38,38,38,0.8)] leading-[18px] font-medium text-[14px] md:text-4 placeholder:text-sm md:placeholder:text-base",
                    touched.password
                      ? errors.password
                        ? "border-red-500 border-opacity-100"
                        : "border-green-500 border-opacity-100"
                      : ""
                  )}
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                />

                <button
                  type="button"
                  onClick={onShowPasswordChange}
                  className="group absolute right-3 md:right-4 top-[50%] translate-y-[-35%]"
                >
                  <svg className="h-[18px] md:h-[22px] w-[18px] md:w-[22px] stroke-accent group-hover:scale-110 transition-all duration-300">
                    {showPassword ? (
                      <use xlinkHref="/sprite.svg#icon-eye-on"></use>
                    ) : (
                      <use xlinkHref="/sprite.svg#icon-eye-off"></use>
                    )}
                  </svg>
                </button>
              </div>

              {errors.password && touched.password ? (
                <p className="mt-[2px] md:mt-1 text-red-500 text-[10px] pl-3 md:pl-4 font-medium leading-none md:leading-tight">
                  {errors.password}
                </p>
              ) : null}

              <div className="relative">
                <Field
                  className={cn(
                    "w-full py-3 px-3 lg:py-4 mt-2 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent bg-white text-[rgba(38,38,38,0.8)] leading-[18px] font-medium text-[14px] md:text-4 placeholder:text-sm md:placeholder:text-base",
                    touched.confirmPassword
                      ? errors.confirmPassword
                        ? "border-red-500 border-opacity-100"
                        : "border-green-500 border-opacity-100"
                      : ""
                  )}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                />

                <button
                  type="button"
                  onClick={onShowConfirmPasswordChange}
                  className="group absolute right-3 md:right-4 top-[50%] translate-y-[-35%]"
                >
                  <svg className="h-[18px] md:h-[22px] w-[18px] md:w-[22px] stroke-accent group-hover:scale-110 transition-all duration-300">
                    {showConfirmPassword ? (
                      <use xlinkHref="/sprite.svg#icon-eye-on"></use>
                    ) : (
                      <use xlinkHref="/sprite.svg#icon-eye-off"></use>
                    )}
                  </svg>
                </button>
              </div>
              {errors.confirmPassword && touched.confirmPassword ? (
                <p className="mt-[2px] md:mt-1 text-red-500 text-[10px] pl-3 md:pl-4 font-medium leading-none md:leading-tight">
                  {errors.confirmPassword}
                </p>
              ) : null}

              <Button
                type="submit"
                className="flex justify-center items-center py-3 mt-6 w-full font-bold text-white uppercase whitespace-nowrap bg-amber-400 rounded-[30px] md:mt-8"
                disabled={!isValid || !dirty}
              >
                Registration
              </Button>
            </Form>
          )}
        </Formik>
        <p className="self-center mt-3 text-xs md:text-sm tracking-tight leading-4 decoration-[rgba(38,38,38,0.5)] whitespace-nowrap md:mt-4">
          Already have an account?{" "}
          <Link
            className="font-bold decoration-amber-400 text-amber-400 underline"
            href={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
