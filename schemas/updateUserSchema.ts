import * as Yup from "yup";

export const updateUserSchema = Yup.object().shape({
  name: Yup.string().required("*Name is required").min(2, "*Name it too short"),
  phone: Yup.string().matches(
    /^\+\d{3}\s\d{2}\s\d{3}\s\d{4}$/,
    "*Invalid phone format"
  ),
});
