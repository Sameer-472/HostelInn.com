// import hostelSchema from "../model/HostelSchema";
import HostelOwnerSchema from "../model/HostelOwnerSchema.js";

export const RegisterNewHostel = async(req, res) => {
  // const userId = ;
  try {
    // 637dc25334c40027031ed792
    const hostelDetails = await HostelOwnerSchema.findById(req.params.id);
    await hostelDetails.update({ $push: { hostelRegistered: req.body} });
    const {hostelRegistered} = hostelDetails;
    res.status(200).json({
      message: "Hostel has been registered",
      hostelRegistered,
    });
  } catch (error) {
    console.log(error.message); 
  }
};


