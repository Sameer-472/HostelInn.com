import express from "express";
import userSchema from "../model/userSchema.js";
import bcrypt from 'bcrypt';

 const userController = async(req , res)=>{
    // const error = validationResult(req);
    const {name , email , password} = req.body

    try {
        let user = await userSchema.findOne({
            email
        });

        if(user){
            return res.status(400).json({
                message: "User already exits"
            })
        }

        user = new userSchema({
            name , 
            email ,
            password
        })

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);


        if(user){
            const data = await user.save()
            res.status(201).json({msg: data})
            console.log("user added successfully")
        }
        
    } catch (error) {
        console.log('error is occured' , error)
    }
}

export default userController;