import HostelOwnerModel from "../model/HostelOwnerSchema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { sendMailForOwner } from "../services/mail.js";
// ! For SignUp

export const signUpOwner = async(req , res)=>{
    
    const {name , email , password} = req.body

    try {
        let hostelOwner = await HostelOwnerModel.findOne({
            email:email
        });
        if(hostelOwner){
            return res.status(403).json({
                message: "Owner already exits"
            })
        }
        
        const token = jwt.sign({
            // ownerId: hostelOwner._id,
            email: email,
        } , "RONDOM_TOKEN" , {
            expiresIn: "5min"
        })

        hostelOwner = new HostelOwnerModel({
            name,
            email ,
            password,
            confirmationCode: token
        })

        const salt = await bcrypt.genSalt(10);
        hostelOwner.password = await bcrypt.hash(password, salt);


        if(hostelOwner){
            const data = await hostelOwner.save()
            res.status(200).json({
              message:
                "Owner has been successfully registered Please check your email",
            });
            sendMailForOwner(hostelOwner.name , hostelOwner.email , token);
            console.log("Owner registered successfully please check your email for confirmation ")
        }
    } catch (error) {
        console.log('error has occur',error)
    }
}

// ! For SignIn
export const loginOwner=async(req,res)=>{
    try {
      const OwnerUser =await HostelOwnerModel.findOne({email:req.body.email});
    if(OwnerUser){
      const compared= await bcrypt.compare(req.body.password,OwnerUser.password);
      
      if(!compared){
       return res.status(403).json({message:'Password does not match'});
      }

      const token=jwt.sign(
        {
            userId:OwnerUser._id,
            userEmail:OwnerUser.email
        },
        "RANDOM TOKEN",
        {
            expiresIn:"15min"
        }
      );

      return res.status(200).json({
        message:'Login Successful',
        email: OwnerUser.email,
        token,
        OwnerUser,
      })
    }
   return res.status(404).send({message:'Email not found'});

    } catch (error) {
        return res.status(500).json({message:'Error in User Login Controller',error: error.message})
    }
}

export const verifyOwner = async(req, res)=>{
    try {
      const owner = await HostelOwnerModel.findOne({
        confirmationCode: req.params.confirmationCode
      })
    
      if(owner){
        owner.verified = true
        res.status(200).json({ message: "Owner has been confirm the email" , owner});
      }
    } catch (error) {
      res.status(403).json({ message: "confirmation code is not exist" });
      console.log(error.message)
    }
  }


