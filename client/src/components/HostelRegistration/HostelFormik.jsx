// import React, { createContext } from "react";
// import { useFormik } from "formik";
// import { hostelOwnerValidation } from "../Yup/HostelOwnerValidation";
// import { FormContext } from "../../ContextAPI/DataProvider";

// const { hostelForm } = createContext(FormContext);

// const etc = {
//   name: "",
//   email: "",
// };

//   export const {
//     handleBlur,
//     values,
//     touched,
//     errors,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: etc,
//     validationSchema: hostelOwnerValidation,
//     validateOnChange: true,
//     onSubmit: async (values, action) => {
//       // const { name, password, email } = values;
//       // const result = await dispatch(
//       // register(
//       // TODO: enter valid endpoint
//       // "hostelOwner",
//       // Send data to backend
//       // values
//       //   {
//       //     email: `${email}`,
//       //     name: `${name}`,
//       //     password: `${password}`,
//       //   }
//       // )
//       // );
//       // console.log(result);
//       // ! Status Codes
//       // 200 User added Successful
//       //201 user already exist
//       // result.user.status === 200 ? action.resetForm() : setError(true);
//       // const statusCode=result.user.status;
//       // if(statusCode===400){
//       //   console.log('code 400')
//       //   return;
//       // }
//       // else if( statusCode === 200){
//       //   action.resetForm();
//       //   setError(false)
//       //   return;
//       // }
//       // else if(statusCode===201){
//       //   setError(true);
//       //   console.log('error has occured');
//       //   return;
//       // }
//     },
//   });
