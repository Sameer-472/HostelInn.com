import userSchema from "../model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendMailForUser } from "../services/mail.js";

// ! Register
export const signUpUser = async (req, res) => {
  // const error = validationResult(req);
  const { name, email, password } = req.body;

  try {
    let user = await userSchema.findOne({
      email:email
    });
    
    if (user) {
      return res.status(201).json({
        message: "User already exits",
      });
    }

    const token = jwt.sign(
      {
        userId:user._id,
          userEmail: email
      },
      "RANDOM TOKEN",
      {
        expiresIn:"5min"
      }
    );
    user = new userSchema({
      name,
      email,
      password,
      confirmationCode: token
    });
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    
    if (user) {
      const data = await user.save();
      res.status(200).json({ message: "User has been successfully registered Please check your email" });
      sendMailForUser(user.name , user.email , token);
      console.log("user added successfully");
    }

  } catch (error) {
    res.status(500).json({msg:error})
    console.log(error.message);
  }
};

// ! Login
export const loginUser=async(req,res)=>{
    try {
      
      const user =await userSchema.findOne({email:req.body.email});
    if(user){
      const compared= await bcrypt.compare(req.body.password,user.password);
      
      if(!compared){
       return res.status(403).json({message:'Password does not match'});
      }

      const token=jwt.sign(
        {
            userId:user._id,
            userEmail:user.email
        },
        "RANDOM TOKEN",
        {
            expiresIn:"15min"
        }
      );

     return res.status(200).json({
        message:'Login Successful',
        email:user.email,
        token,
        user,
      })

      
    }
   return res.status(403).send({message:'Email not found'});

    } catch (error) {
        return res.status(500).json({message:'Error in User Login Controller',error: error.message})
    }
}


export const verifyUser = async(req, res)=>{
  try {
    const user = await userSchema.findOne({
      confirmationCode: req.params.confirmationCode
    })
  
    if(user){
      user.verified = true
      res.status(200).json({ message: "User has been confirm the email" , user});
    }
  } catch (error) {
    res.status(403).json({ message: "confirmation code is not exist" });
    console.log(error.message)
  }
}



