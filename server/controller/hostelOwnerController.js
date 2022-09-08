import { check , validationResult } from "express-validator";
import HostelOwner from "../model/HostelOwnerSchema";

export const HostelOwnercontroller = async(req , res)=>{
    const error = validationResult(req);
    const {name , email , password} = req.body

    try {
        let hostelOwner = await HostelOwner.findOne({
            email
        });
        if(hostelOwner){
            return res.status(400).json({
                message: "User already exits"
            })
        }

        hostelOwner = new HostelOwner({
            name , 
            email ,
            password
        })

        if(hostelOwner){
            console.log("user added successfully")
        }
        
    } catch (error) {
        console.log('error is occured')
    }
}