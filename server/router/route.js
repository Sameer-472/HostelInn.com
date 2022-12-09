import express from "express";
import {
  signUpOwner,
  loginOwner,
  verifyOwner
} from "../controller/hostelOwnerController.js";
import {
  signUpUser,
  loginUser,
  verifyUser,
  UserDetails,
} from '../controller/userController.js';
import { verifyFG,forgetPassword,updatePassword } from '../controller/forgetPasswordController.js';
import { RegisterNewHostel } from "../controller/hostelRegistrationController.js";
import { accomodateHostel } from "../controller/accomodateHostel.js";

// import { verifyEmail } from '../controller/verifyEmail.js';

const router = express.Router();

// !  Sign Up Routes

// ? For Hostel

// ? For User

// !  Login Routes
// ? For HostelOwner 
router.post("/loginOwner", loginOwner);
router.post("/register/hostelOwner", signUpOwner);
router.put("/registerNewHostel/:id" , RegisterNewHostel); // this is working fine,

// ? For User
router.post("/loginUser", loginUser);
router.post("/register/user", signUpUser);
router.put("/user/details", UserDetails);
router.put("/user/accomodateHostel/:id" , accomodateHostel);
// !verify the email
router.get("/register/user/confirm:confirmationCode", verifyUser);
router.get("/register/hostelOwner/confirm:confirmationCode", verifyOwner);

// ! Forget Password
router.post('/forget-password',forgetPassword)
router.get('/verify-forget-password/:id/:token',verifyFG)
router.post('/verify-forget-password/:id/:token',updatePassword)


export default router;
