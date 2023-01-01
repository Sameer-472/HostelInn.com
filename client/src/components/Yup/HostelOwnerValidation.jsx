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

const typesOfRoom = Yup.object({
  roomType: Yup.string().required("Please enter room type"),
  price: Yup.number()
    .min(3, "Please enter minimum 3 Numbers")
    .required("Please enter room price"),
  noOfVacancy: Yup.string().required("Please enter available vacancy"),
});

const facilities = Yup.object({
  roomType: Yup.string().required("Please room type"),
  general: [Yup.string().required("Please enter General facilities")],
  services: [Yup.string().required("Please Enter Services")],
});

export const hostelOwnerValidation = Yup.object({
  hostelName: Yup.string()
    .min(4, "Please enter minimum 4 characters")
    .required("Please enter your hostel name"),
  hostelOwnerName: Yup.string()
    .min(4, "Please enter minimum 4 characters")
    .required("Please enter your name"),
  hostelEmailAddress: Yup.string()
    .email()
    .required("Please enter valid email"),
  hostelLocation: Yup.string()
    .min(4, "Please enter minimum 4 characters")
    .required("Please enter your name"),
  hostelContactNumber: Yup.number()
    .min(11, "Please enter minimum 11 characters")
    .max(11, "Pleasure enter maximum 11 numbers")
    .required("Please enter your Number"),
  shortDescription: Yup.string().required(
    "Please enter short description of your hostel"
  ),
  numberOfRooms: Yup.string().required("Please enter total number of rooms"),
  typesOfRoom: [typesOfRoom],
  facilities: facilities,
  propertyType: Yup.string().required("Please enter property type"),
  hostelRules: Yup.string()
    .min(4, "Please enter minimum 20 Letters")
    .required("Please enter hostel rules"),
  images: [Yup.string().required("Please enter hostel pics")],
});
