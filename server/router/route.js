import express from 'express';
// import HostelOwner from '../model/HostelOwnerSchema';
import HostelOwnercontroller from '../controller/hostelOwnerController.js';
import userController from '../controller/userController.js';
// import { check , validationResult } from 'express-validator';
const router = express.Router();

router.post("/signUp/hostelOwner",  
    HostelOwnercontroller
)

router.post('/signUp/user' ,  
    userController
)

export default router

