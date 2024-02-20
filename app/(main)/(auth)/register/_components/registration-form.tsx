"use client";

import { useState } from "react";

import { Field, Form, Formik } from "formik";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { registerSchema } from "@/schemas";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { ISignup, signup } from "@/state/auth/authOperations";

import { toast } from "sonner";
import { Oval } from "react-loader-spinner";
import { selectIsLoading } from "@/state/auth/authSelectors";

interface IRegistratiomFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

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

  const onShowConfirmPasswordChange = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.currentTarget.blur();
    setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit = async (values: ISignup) => {
    const { name, email, password } = values;
    await dispatch(signup({ name, email, password }));
    toast.success("You were successfully registrated!", { duration: 2000 });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form className="flex flex-col gap-10 lg:gap-[64px]">
          <div className="flex flex-col gap-2.5">
            <div>
              <Field
                className={cn(
                  "w-full py-3 px-3 lg:py-4 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent placeholder:text-sm md:placeholder:text-base",
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
            </div>

            <div>
              <Field
                className={cn(
                  "w-full py-3 px-3 lg:py-4 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent placeholder:text-sm md:placeholder:text-base",
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
            </div>

            <div>
              <div className="relative">
                <Field
                  className={cn(
                    "w-full py-3 px-3 lg:py-4 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent placeholder:text-sm md:placeholder:text-base",
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
                  className="group absolute right-3 md:right-4 top-[50%] translate-y-[-50%]"
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
            </div>

            <div>
              <div className="relative">
                <Field
                  className={cn(
                    "w-full py-3 px-3 lg:py-4 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent placeholder:text-sm md:placeholder:text-base",
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
                  className="group absolute right-3 md:right-4 top-[50%] translate-y-[-50%]"
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
            </div>
          </div>

          <Button
            disabled={!isValid || !dirty}
            type="submit"
            className="uppercase py-4 lg:py-4 flex gap-2"
          >
            Registration
            {isLoading && (
              <span>
                <Oval
                  visible={true}
                  height="20"
                  width="20"
                  color="#F6B83D"
                  ariaLabel="oval-loading"
                />
              </span>
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
