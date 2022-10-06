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

// import { verifyEmail } from '../controller/verifyEmail.js';
const router = express.Router();

// !  Sign Up Routes

// ? For Hostel

router.post("/register/hostelOwner", signUpOwner);
// ? For User
router.post("/register/user", signUpUser);

router.post("/user/details", UserDetails);

// !  Login Routes
// ? For HostelOwner
router.post("/loginOwner", loginOwner);

// ? For User

router.post("/loginUser", loginUser);

// !verify the email

router.get("/register/user/confirm:confirmationCode", verifyUser);
router.get("/register/hostelOwner/confirm:confirmationCode", verifyOwner);

// ! Forget Password
router.post('/forget-password',forgetPassword)
router.get('/verify-forget-password/:id/:token',verifyFG)
router.post('/verify-forget-password/:id/:token',updatePassword)



export default router;
