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
    fullName: {
      type: String,
      required: [true, "Please provide your full name"],
      unique: [false],
    },
    email: {
      type: String,
      required: [true, "Please provide an Email!"],
      unique: [true, "Email Exist"],
    },

    gender: {
      type: String,
      required: [true, "Please provide gender"],
    },

    address: {
      type: AddressSchema,
      required: [true, "Please provide your address"],
      unique: false,
    },
    occupation: {
      type: String,
      required: [true, "Please provide your occupation"],
    },
    companyName: String,
    universityName: {
      type: String,
      required: [true, "Please enter your university name"],
    },
    criminalRecord: Boolean,
    contactNumber: {
      type: String,
      required: [true, "Please enter your contact number"],
      unique: [true, "Contact number exist"],
    },
    emergencyNumber: {
      type: String,
      required: [true, "Please enter your emergency number"],
      unique: [true, "Emergency number exist"],
    },
    bloodGroup: {
      type: String,
      required: [true, "Please enter your blood group"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Please enter your date of birth"],
    },
    cnicPhoto: {
      type: String,
      required: [true, "Please enter your cnic photo"],
    },
    profilePhoto: {
      type: String,
      required: [true, "Please enter your profile photo"],
    },
  },
  { timestamps: true }
);

const UserDetails = mongoose.model("userDetail", userDetailsSchema);

export default UserDetails;
