import * as Yup from 'yup';

export const SignUpSchema = Yup.object({
  name: Yup.string()
    .min(4)
    .max(20)
    .required('Please Enter minimum 4 letters'),
  email: Yup.string().email().required('Please Enter Valid Email'),
  password: Yup.string().min(8).required('Password must be at least 8 characters'),
});
