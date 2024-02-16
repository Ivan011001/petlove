import * as Yup from "yup";

export const addPetSchema = Yup.object().shape({
  title: Yup.string()
    .required("*Title is required")
    .min(3, "*Title must be at least 3 characters"),
  name: Yup.string()
    .required("*Name is required")
    .min(2, "*Name must be at least 2 characters"),
  imgURL: Yup.string().matches(
    /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
    "*Invalid image format"
  ),
  species: Yup.string().required("*Species is required"),
  birthday: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "*Invalid birthday format")
    .required("*Birthday is required"),
  sex: Yup.string().required("*Sex is required"),
});
