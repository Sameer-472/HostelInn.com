import express from 'express';
import {HostelOwnerController,loginOwner} from '../controller/hostelOwnerController.js';
import {userController,loginUser} from '../controller/userController.js';
const router = express.Router();

// !  Sign Up Routes

// ? For Hostel

router.post("/signUp/hostelOwner",  
    HostelOwnerController
)
// ? For User
router.post('/signUp/user' ,  
    userController
)

// !  Login Routes
// ? For HostelOwner
router.post('/loginOwner',loginOwner);

// ? For User

router.post('/loginUser',loginUser)




export default router

