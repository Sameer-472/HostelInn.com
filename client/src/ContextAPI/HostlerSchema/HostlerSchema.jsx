// ! Used for Hostel Registration So that we can use it anywhere ...
// ! as form divides into three components

const typesOfRoom = {
  roomType: "",
  price: Number,
  availableVacancy: "",
};
const facilities = {
  free: [],
  general: [],
  services: [],
};

// const Documents = {
//   profilePicture: [String],
//   cnicFrontPicture: [String],
//   cnicBackPicture: [String],
// };

export const hostelFormDetails = {
  hostelName: "",
  hostelOwnerName: "",
  hostelEmailAddress: "",
  hostelLocation: "",
  hostelContactNumber: "",
  shortDescription: "",

  numberOfRooms: Number,
  typesOfRoom: [typesOfRoom],
  facilities: facilities,
  propertyType: "",
  hostelRules: "",

  images: [],

  // documents: [Documents],
};
