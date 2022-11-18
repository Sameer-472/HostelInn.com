import mongoose from "mongoose";

// const FullNameSchema = mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
// });

const AddressSchema = mongoose.Schema({
  houseNumber: String,
  street: String,
  area: String,
  city: String,
  province: String,
});

const userDetailsSchema = mongoose.Schema(
  {
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

    // address: {
    //   type: AddressSchema,
    //   required: [true, "Please provide your address"],
    //   unique: false,
    // },
    occupation: {
      type: String,
    },
    companyName: String,
    criminalRecord: Boolean,
    // universityName: {
    //   type: String,
    //   required: [true, "Please enter your university name"],
    // },

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

const UserDetails = mongoose.model("userDetail", userDetailsSchema);

export default UserDetails;
