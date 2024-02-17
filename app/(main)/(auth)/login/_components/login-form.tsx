"use client";

import { useState } from "react";

import { Formik, Form, Field } from "formik";

import { Button } from "@/components/ui/button";

import { loginSchema } from "@/schemas";

import { cn } from "@/lib/utils";

import { useAppDispatch } from "@/state/hooks";
import { ISignin, ISignup, signin } from "@/state/auth/authOperations";

interface ILoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: ILoginFormValues = { email: "", password: "" };

  const onShowPasswordChange = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.blur();
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (values: ISignin) => {
    const { email, password } = values;
    await dispatch(signin({ email, password }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form className="flex flex-col gap-10 lg:gap-[64px]">
          <div className="flex flex-col gap-2.5">
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
                id="email"
                name="email"
                placeholder="Email"
              />
              {touched.email && errors.email && (
                <p className="mt-[2px] md:mt-1 text-red-500 text-[10px] pl-3 md:pl-4 font-medium leading-none md:leading-tight">
                  {errors.email}
                </p>
              )}
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
                  id="password"
                  name="password"
                  placeholder="Password"
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

              {touched.password && errors.password && (
                <p className="mt-[2px] md:mt-1 text-red-500 text-[10px] pl-3 md:pl-4 font-medium leading-none md:leading-tight">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <Button
            disabled={!isValid || !dirty}
            type="submit"
            className="uppercase py-4 lg:py-4"
          >
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
