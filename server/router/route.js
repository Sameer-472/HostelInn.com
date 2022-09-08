import express from 'express';
// import HostelOwner from '../model/HostelOwnerSchema';
import HostelOwnerController from '../controller/hostelOwnerController.js';
import userController from '../controller/userController.js';
// import { check , validationResult } from 'express-validator';
const router = express.Router();

router.post("/signUp/hostelOwner",  
    HostelOwnerController
)

router.post('/signUp/user' ,  
    userController
)

export default router

