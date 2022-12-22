// ! Used for Hostel Registration So that we can use it anywhere ...
// ! as form divides into three components

const EmergencyContact = {
  name: "",
  relationship: "",
  mobileNumber: "",
  whatsappNumber: "",
  permanentAddress: "",
};

const Documents = {
  profilePicture: [String],
  cnicFrontPicture: [String],
  cnicBackPicture: [String],
};

export const hostelFormDetails = {
  hostelName: "",
  hostelOwnerName: "",
  hostelEmailAddress: "",
  hostelLocation: "",
  hostelContactNumber: "",
  shortDescription: "",

  dateOfBirth: "",
  mobileNumber: "",
  whatsappNumber: "",
  religion: "",
  gender: "",
  // occupation: "",
  // companyName: "",
  // medicalIllness: "",
  // criminalRecord: Boolean,
  // accommodationType: "",
  // emergencyContact: [EmergencyContact],
  documents: [Documents],
};
