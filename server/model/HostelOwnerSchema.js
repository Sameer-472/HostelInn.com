import mongoose from "mongoose";

const ownerSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Provide a Name"],
        unique:[false],
    },
        email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
      },
    
      password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
      },
    
},{timestamps : true})

const HostelOwner=mongoose.model('hostelOwner',ownerSchema);

export default HostelOwner;