import mongoose from "mongoose";
import hostelSchema from "./HostelSchema.js";

// const ownerAddressSchema = mongoose.Schema({
//   city: String,
//   street: String,
//   houseNO: Number,
// });

const hostelOwnerDetails = mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "Please Provide a Name"],
      // unique: [false],
    },
    email: {
      type: String,
      // required: [true, "Please provide an Email!"],
      // unique: [true, "Email Exist"],
    },

    password: {
      type: String,
      // required: [true, "Please provide a password!"],
      // unique: false,
    },
    confirmationCode: {
      type: String,
    },
    fullName: {
      type: String,
      // require: [true, "please write your name"],
      // unique: [false],
    },

    cnic: {
      type: Number,
    },
    nationality:{
      type: String
    },
    dateOfBirth:{
      type: Date
    },
    mobileNumber: {
      type: Number,
    },

    whatsappNumber: {
      type: Number,
    },
    

    religion:{
      type: String
    },

    gender: {
      type: String
    },
    profilePic: {
      type: String
    },
    nicFrontPic: {
      type: String
    },
    nicBack: {
      type: String
    },

    address: {
      type: String
    },

    hostelRegistered: [hostelSchema],

    listOfUsers:{
      type: Array,
      default: []
    },

    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const HostelOwnerSchema = mongoose.model("hostelOwner", hostelOwnerDetails);

export default HostelOwnerSchema;
