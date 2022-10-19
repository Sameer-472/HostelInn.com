import mongoose from "mongoose";
import hostelSchema from "./HostelSchema.js";

const ownerAddressSchema = mongoose.Schema({
  city: String,
  street: String,
  houseNO: Number,
});

const hostelOwnerDetails = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide a Name"],
      unique: [false],
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
    confirmationCode: {
      type: String,
    },
    fullName: {
      type: String,
      require: [true, "please write your name"],
      unique: [false],
    },
    emailAddress: {
      type: String,
      require: [true, "please provide your emailAddress"],
      unique: true,
    },
    number: {
      type: Number,
      require: [true, "please [provide your number"],
    },
    cnic: {
      type: Number,
      require: [true, "please provide your CNIC"],
    },
    profilePic: String,

    address: ownerAddressSchema,

    hostelRegistered: [hostelSchema],

    noOfHostelRegister: Number,

    role: String,

    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const HostelOwnerModel = mongoose.model("hostelOwner", hostelOwnerDetails);

export default HostelOwnerModel;
