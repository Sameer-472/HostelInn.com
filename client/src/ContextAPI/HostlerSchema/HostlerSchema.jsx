// ! Used for Hostel Registration So that we can use it anywhere ...
// ! as form divides into three components

const EmergencyContact = {
  name: "",
  relationship: "",
  mobileNumber:   "",
  whatsappNumber: "",
  permanantAddress: "",
}

const Documents = {
  profilePicture: [String],
  cnicFrontPicture: [String],
  cnicBackPicture: [String],
}

export const hostelFormDetails = {
  firstName: "",
  lastName: "",
  guardianFullName: "",
  guardianCNIC: "",
  guardianPhoneNumber: "",
  email: "",
  cnic: "",
  nationality: "",
  university: "",
  programme: "",
  dateOfBirth: "",
  mobileNumber: "",
  whatsappNumber: "",
  permanantAddress: "",
  religion: "",
  gender: "",
  occupation: "",
  companyName: "",
  medicalIllness: "",
  criminalRecord: Boolean,
  accomodationType: "",
  emergencyContact: [EmergencyContact],
  documents: [Documents]
};
