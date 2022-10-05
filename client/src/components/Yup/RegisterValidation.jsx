import * as Yup from 'yup';

export const SignUpSchema = Yup.object({
  firstName: Yup.string()
    .min(4)
    .max(20)
    .required('Please Enter minimum 4 letters'),
  lastName: Yup.string()
    .min(4)
    .max(20)
    .required('Please Enter minimum 4 letters'),
  email: Yup.string().email().required('Please Enter Valid Email'),
  gender: Yup.string().min(4).required('Please Select'),
  houseNumber: Yup.string().min(2).required('Please Enter House Number'),
  street: Yup.string().min(4).required('Please Enter Street Name'),
});
