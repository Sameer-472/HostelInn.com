import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    userId: {
      type: String
    },
    name: {
      type: String,
      unique: [false],
    },
    email: {
      type: String,
      unique: [true, 'Email Exist'],
    },

    password: {
      type: String,
      unique: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    confirmationCode: {
      type: String,
      required: false,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    fatherName: {
      type: String,
    },
    guardianPhoneNumber: {
      type: String,
    },
    cnic: {
      type: Number,
      unique: [true, "CNIC exists"],
    },
    nationality:{
      type: String
    },
    institute: {
      type: String,
    },
    program: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    mobileNumber: {
      type: Number,
    },
    whatsappNumber: {
      type: Number,
    },
    permanentAddress: {
      type: String,
    },
    religion: {
      type: String,
    },
    gender: {
      type: String,
    },
    occupation: {
      type: String,
    },

    companyName: {
      type: String
    },
    criminalRecord:{
      type: String
    },
    
    // emergency Number
     personName: {
      type: String,
    },
    relationship: {
      type: String,
    },
    permanentAddress: {
      type: String,
    },
    accomodationType:{
      type: String
    },
    profilePicture: {
      type: String,
    },

    cnicFrontPicture: {
      type: String,
    },
    cnicBackPicture: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('user', userSchema);

export default User;