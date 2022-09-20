import * as Yup from 'yup';


export const SignUpSchema=Yup.object({
    name:Yup.string().min(4).max(20).required("Please Enter minimum 4 letters"),
    email:Yup.string().email().required("Please Enter Valid Email"),
    password:Yup.string().required("Please Enter Password with minimum 8 letters").min(8),
    confirmPassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password Must Match")
})