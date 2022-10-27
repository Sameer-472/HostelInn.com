import * as Yup from "yup";

const addressObject = Yup.object({
  city: Yup.string()
    .min(4, "Please enter minimum 4 letters")
    .required("Please enter your city"),
  street: Yup.string()
    .min(1, "Please enter minimum 1 letters")
    .required("Please enter your street"),
  houseNo: Yup.string()
    .min(1, "Please enter minimum 1 letters")
    .required("Please enter your house number"),
});

const roomSchema = Yup.object({
  roomType: Yup.string()
    .min(4, "Please enter minimum 4 letters")
    .required("Please enter room type"),
  price: Yup.string()
    .min(3, "Please enter minimum 3 Numbers")
    .required("Please enter room price"),
  noOfRooms: Yup.string()
    .max(2, "Please enter 2 numbers")
    .required("Please enter available rooms"),
});

const hostelSchema = Yup.object({
  hostelName: Yup.string()
    .min(4, "Please enter minimum 4 Letters")
    .required("Please enter your full name"),
  hostelAddress: addressObject,
  hostelPics: [Yup.string().required("Please enter hostel pictures")],
  roomDetails: [roomSchema],
  facilities: [Yup.string().required("Please Enter Facilities")],
});

export const hostelOwnerValidation = Yup.object({
  fullName: Yup.string()
    .min(4, "Please enter minimum 4 Letters")
    .required("Please enter your full name"),
  number: Yup.string()
    .min(11, "Please enter minimum 11 numbers")
    .required("Please enter your number"),
  profilePic: Yup.string().required("Please enter your Profile Picture"),
  address: addressObject,
  hostelRegistered: [hostelSchema],
  noOfHostelRegistered: Yup.string().required(
    "Please enter your total number of hostels"
  ),
});
