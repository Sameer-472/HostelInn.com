import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  city: String,
  street: String,
  houseNo: String,
});

const roomSchema = mongoose.Schema({
  roomType: String,
  price: Number,
  noOfRooms: Number,
});

const facilitiesSchema = mongoose.Schema({
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
});

const hostelSchema = mongoose.Schema({
  hostelName: String,
  hostelAddress: addressSchema,
  hostelPics: [String],
  roomDetails: [roomSchema],
  facilities: [facilitiesSchema],
});

// const hostelModel = mongoose.model('hostelDetails': hostelSchema);

export default hostelSchema;
