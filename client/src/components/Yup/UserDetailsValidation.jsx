import * as Yup from 'yup';

export const UserDetailsValidation = Yup.object({
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
  area: Yup.string().min(4).required('Please Enter Area Name'),
  city: Yup.string().min(4).required('Please Enter City Name'),
  province: Yup.string().min(4).required('Please Enter Your Province'),
  occupation: Yup.string().min(4).required('Please Enter Your Occupation'),
  companyName: Yup.string(),
  universityName: Yup.string().min(4).required('Please Enter Your University'),
  criminalRecord: Yup.boolean().required('Please Select'),
  contactNumber: Yup.string().min(11).required('Please Enter Your Contact Number'),
  emergencyNumber: Yup.string().min(11).required('Please Enter Your Emergency Number'),
});
