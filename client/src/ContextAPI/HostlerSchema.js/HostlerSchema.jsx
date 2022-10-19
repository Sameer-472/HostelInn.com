// ! Used for Hostel Registration So that we can use it anywhere ...
// ! as form divides into three components

const addressObject = {
  city: "",
  street: "",
  houseNO: "",
};

const roomSchema = {
  roomType: "",
  price: "",
  noOfRooms: "",
};

const facilitiesSchema = {
  Parking: Boolean,
  library: Boolean,
  wifi: Boolean,
  ElectricityBackup: Boolean,
  PrayerRoom: Boolean,
  shelfStorage: Boolean,
  Laundry: Boolean,
  HotWaterInWinter: Boolean,
  TwoTimeTea: Boolean,
  Breakfast: Boolean,
  Launch: Boolean,
  Dinner: Boolean,
  optional: [String],
};

const hostelSchema = {
  hostelName: "",
  hostelAddress: addressObject,
  hostelPics: ["hello", "anas", "how", "are", "you"],
  roomDetails: [roomSchema],
  facilities: [facilitiesSchema],
};
// { roomType: "double", price: "3000", noOfRooms: "4" },
// { roomType: "single", price: "4000", noOfRooms: "3" },

export const hostelFormDetails = {
  fullName: "",
  number: "",
  profilePic: "",
  address: addressObject,
  hostelRegistered: [hostelSchema],
  noOfHostelRegister: "",
  role: "hostler",
};
