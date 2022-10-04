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
} from "../controller/userController.js";
// import { verifyEmail } from '../controller/verifyEmail.js';
const router = express.Router();

// !  Sign Up Routes

// ? For Hostel

router.post("/register/hostelOwner", signUpOwner);
// ? For User
router.post("/register/user", signUpUser);

// !  Login Routes
// ? For HostelOwner
router.post("/loginOwner", loginOwner);

// ? For User

router.post("/loginUser", loginUser);

// verify the email

router.get("/register/user/confirm:confirmationCode", verifyUser);
router.get("/register/hostelOwner/confirm:confirmationCode", verifyOwner);

export default router;
