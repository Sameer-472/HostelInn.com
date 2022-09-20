import HostelOwner from "../model/HostelOwnerSchema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
// ! For SignUp

export const HostelOwnerController = async(req , res)=>{
    
    const {name , email , password} = req.body

    try {
        let hostelOwner = await HostelOwner.findOne({
            email:email
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

        const salt = await bcrypt.genSalt(10);
        hostelOwner.password = await bcrypt.hash(password, salt);

        if(hostelOwner){
            const data = await hostelOwner.save()
            res.status(201).json({msg: data})
            console.log("OwnerUser added successfully")
        }

        
    } catch (error) {
        console.log('error has occur',error)
    }
}

// ! For SignIn
export const loginOwner=async(req,res)=>{
    try {
      const OwnerUser =await HostelOwner.findOne({email:req.body.email});
    if(OwnerUser){
      const compared= await bcrypt.compare(req.body.password,OwnerUser.password);
      
      if(!compared){
       return res.status(400).json({message:'Password does not match'});
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
        email:OwnerUser.email,
        token,
        OwnerUser,
      })
      

    }
   return res.status(404).send({message:'Email not found'});

    } catch (error) {
        return res.status(500).json({message:'Error in User Login Controller',error: error.message})
    }
}




