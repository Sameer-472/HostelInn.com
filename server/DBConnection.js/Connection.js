import mongoose from "mongoose";
const Url=''
export const Connection=async(username,password)=>{
    try {
       await mongoose.connect(Url,{useUnifiedTopology:true});
       console.log('Successfully Connected to Database');
    } catch (error) {
        console.log('Connection to Db', error.message);
    }
}