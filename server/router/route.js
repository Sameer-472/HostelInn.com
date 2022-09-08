import express from 'express';
import HostelOwner from '../model/HostelOwnerSchema';
import {HostelOwnercontroller} from '../controller/hostelOwnerController';
import { check , validationResult } from 'express-validator';
const router = express.Router();

router.post('signUp/hostelowner' , 
    [
        check("name" , "Please enter a valid name").not().isEmpty() ,
        check("email" , "Please enter a valid email").isEmail() ,
        check("password" , "Please enter a valid password").isLength({min : 6 }) ,
    ] ,  
    HostelOwnercontroller(req , res)
)
