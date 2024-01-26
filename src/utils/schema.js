import * as yup from "yup";

export const schema = yup.object({
  company_name: yup.string().required("Company name is required field"),
  email: yup
    .string()
    .required("Email is required field")
    .email("Please enter a valid email address"),
  mobile: yup
    .string()
    .min(10)
    .max(14)
    .required("Mobile number is required field")
    .matches(/^[0-9]+$/, "Please enter digits only"),
  password: yup
    .string()
    .required("Password is required field")
    .matches(/^[0-9]+$/, "Please enter valid passworf format"),
  country: yup.string().required("Country is required field"),
  state: yup.string().required("State is required field"),
});
