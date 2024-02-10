import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("*Name is required"),
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "*Invalid email format"
    )
    .required("*Email is required"),
  password: Yup.string()
    .required("*Password is required")
    .min(7, "*Password must be at least 7 characters"),
  confirmPassword: Yup.string()
    .required("*Confirm password is required")
    .oneOf([Yup.ref("password")], "*Passwords must match"),
});
