"use client";
import * as Yup from "yup";

import { Formik, Form, Field } from "formik";

import { Button } from "@/components/ui/button";

interface LoginFormValues {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
});

const LoginForm = () => {
  const initialValues: LoginFormValues = { email: "", password: "" };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col gap-10 lg:gap-[64px]">
          <div className="flex flex-col gap-2.5">
            <div>
              <Field
                className="w-full py-3 px-3 lg:py-4 lg:px-4  border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent"
                id="email"
                name="email"
                placeholder="Email"
              />
              {touched.email && errors.email && (
                <p className="text-neutral-800 text-opacity-50 text-xs md:text-sm font-medium leading-none md:leading-tight">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <Field
                className="w-full py-3 px-3 lg:py-4 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent"
                id="password"
                name="password"
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <p className="text-neutral-800 text-opacity-50 text-xs md:text-sm font-medium leading-none md:leading-tight">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <Button type="submit" className="uppercase py-4 lg:py-4">
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
