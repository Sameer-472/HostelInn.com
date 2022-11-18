import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
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
      type: String,
      unique: [true, "CNIC exists"],
    },
    institute: {
      type: String,
    },
    program: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    whatsappNumber: {
      type: String,
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

    companyName: String,
    criminalRecord: Boolean,
    
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
