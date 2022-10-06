import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import User from "../model/userSchema.js"
import nodemailer from 'nodemailer';

// a random key 
const JWT_SECRET='mkmvksjaklmbjlkmklnhkj()lcksl[]';

export const forgetPassword=async(req,res)=>{
    try {
        const {email}=req.body
        console.log(email);
        const oldUser=await User.findOne({email:email});
        if(!oldUser){
            return res.status(403).json({msg:'User does not exist'});
        }
        const secret=JWT_SECRET+oldUser.password;
        const token=jwt.sign({
           email:oldUser.email,
           id:oldUser._id 
        },
        secret,
        {expiresIn : '5m'}
        );
        const link=`http://localhost:8000/verify-forget-password/${oldUser._id}/${token}`
        console.log(link);
        var transporter = nodemailer.createTransport({
          // host: 'smtp.gmail.com',
          // port: 465,
          // secure: true, 
          service: "gmail",
          auth: {
            user: "hostelindata@gmail.com",
            pass: "cfygzitepccqzdzx",
          },
        });
    
        var mailOptions = {
          from: "hostelindata@gmail.com",
          to: `${email}`,
          subject: "Password Reset",
          text: link,
        };
    
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
            return res.status(200).json({msg:'Reset Password Link has been sent your email.'})
          }
        });
        

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:error})
    }
}
export const verifyFG=async(req,res)=>{
    const { id, token } = req.params;
    console.log(req.params);
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    try {
      const verify = jwt.verify(token, secret);
      res.render("index", { email: verify.email, status: " Verified" });
    } catch (error) {
      console.log(error);
      res.send("This Link has been expired");
    }
}
export const updatePassword=async(req,res)=>{
    const { id, token } = req.params;
  const { password } = req.body;

  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    

    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
}