"use client";

import Link from "next/link";

import { Formik, Form, Field } from "formik";

import { Button } from "@/components/ui/button";

import { addPetSchema } from "@/schemas";

import { cn } from "@/lib/utils";

interface IAddPetFormValues {
  title: string;
  name: string;
  imgURL: string;
  species: string;
  birthday: string;
  type: string;
}

const AddPetForm = () => {
  const initialValues: IAddPetFormValues = {
    title: "",
    name: "",
    imgURL: "",
    species: "",
    birthday: "",
    type: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addPetSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form className="flex flex-col">
          <ul className="flex gap-2 items-center mb-2">
            <li className="w-8 h-8 md:w-10 md:h-10 p-1.5 bg-rose-500 bg-opacity-10 rounded-full flex justify-center items-center">
              <svg className="stroke-rose-500">
                <use xlinkHref="/sprite.svg#icon-female"></use>
              </svg>
            </li>

            <li className="w-8 h-8 md:w-10 md:h-10 p-1.5 bg-blue-400 bg-opacity-10 rounded-full flex justify-center items-center">
              <svg className="stroke-blue-400">
                <use xlinkHref="/sprite.svg#icon-male"></use>
              </svg>
            </li>

            <li className="w-8 h-8 md:w-10 md:h-10 p-1.5 bg-yellow-50 rounded-full flex justify-center items-center">
              <svg className="fill-accent">
                <use xlinkHref="/sprite.svg#icon-duomale"></use>
              </svg>
            </li>
          </ul>
          <div className="h-[68px] w-[68px] md:h-[86px] md:w-[86px] rounded-full bg-yellow-50 self-center flex justify-center items-center mb-4 md:mb-3">
            <svg className="h-[34px] w-[34px] md:w-[44px] md:h-[44px] fill-accent">
              <use xlinkHref="/sprite.svg#icon-paw"></use>
            </svg>
          </div>
          <div className="flex flex-col gap-2.5 md:gap-4 mb-[30px]">
            <div>
              <div className="flex gap-2">
                <Field
                  className={cn(
                    "w-full py-[9px] px-3 md:py-3 lg:py-4 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent placeholder:text-sm md:placeholder:text-base",
                    touched.imgURL
                      ? errors.imgURL
                        ? "border-red-500 border-opacity-100"
                        : "border-green-500 border-opacity-100"
                      : ""
                  )}
                  id="imgURL"
                  name="imgURL"
                  placeholder="Enter URL"
                />
                <Button className="group p-[10px] md:px-4 bg-yellow-50 rounded-3xl text-neutral-800 font-medium leading-none flex gap-1 md:gap-2 items-center hover:text-white hover:bg-accent">
                  <span className="text-sx md:text-sm">Upload photo</span>
                  <svg className="w-4 h-4 fill-none stroke-accent group-hover:stroke-white transition-all duration-300">
                    <use xlinkHref="/sprite.svg#icon-upload"></use>
                  </svg>
                </Button>
              </div>
              {touched.imgURL && errors.imgURL && (
                <p className="mt-[2px] md:mt-1 text-red-500 text-[10px] pl-3 md:pl-4 font-medium leading-none md:leading-tight">
                  {errors.imgURL}
                </p>
              )}
            </div>

            <div>
              <Field
                className={cn(
                  "w-full py-3 px-3 lg:py-4 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent placeholder:text-sm md:placeholder:text-base",
                  touched.title
                    ? errors.title
                      ? "border-red-500 border-opacity-100"
                      : "border-green-500 border-opacity-100"
                    : ""
                )}
                id="title"
                name="title"
                placeholder="Title"
              />
              {touched.title && errors.title && (
                <p className="mt-[2px] md:mt-1 text-red-500 text-[10px] pl-3 md:pl-4 font-medium leading-none md:leading-tight">
                  {errors.title}
                </p>
              )}
            </div>
            <div>
              <div className="relative">
                <Field
                  className={cn(
                    "w-full py-3 px-3 lg:py-4 lg:px-4 border border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent placeholder:text-sm md:placeholder:text-base",
                    touched.name
                      ? errors.name
                        ? "border-red-500 border-opacity-100"
                        : "border-green-500 border-opacity-100"
                      : ""
                  )}
                  id="name"
                  name="name"
                  placeholder="Pet's name"
                />
              </div>

              {touched.name && errors.name && (
                <p className="mt-[2px] md:mt-1 text-red-500 text-[10px] pl-3 md:pl-4 font-medium leading-none md:leading-tight">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <Field
                id="name"
                name="name"
                placeholder="Type of pet"
                as="select"
                className="w-full py-3 px-3 lg:py-4 lg:px-4 border rounded-full border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent placeholder:text-sm md:placeholder:text-base"
              >
                <option>Type of pet</option>
              </Field>

              <Field
                id="name"
                name="name"
                placeholder="Type of pet"
                as="select"
                className="w-full py-3 px-3 lg:py-4 lg:px-4 border rounded-full border-neutral-800 border-opacity-20 transition-all duration-300 outline-none focus:border-accent placeholder:text-sm md:placeholder:text-base"
              >
                <option>Type of pet</option>
              </Field>
            </div>
          </div>

          <div className="flex justify-end gap-2 items-center">
            <Button
              type="submit"
              className="md:w-44 py-3 lg:py-4 bg-neutral-800 bg-opacity-5 text-neutral-800 hover:bg-accent hover:text-yellow-50"
            >
              <Link href="/">Back</Link>
            </Button>
            <Button
              disabled={!isValid || !dirty}
              type="submit"
              className="md:w-44 py-3 lg:py-4"
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddPetForm;
