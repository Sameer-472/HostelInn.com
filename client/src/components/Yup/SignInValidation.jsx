import * as Yup from "yup";

export const SignInSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Valid Email"),
  password: Yup.string()
    .min(8)
    .required("Password must be at least 8 characters"),
});
