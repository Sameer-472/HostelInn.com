// import hostelSchema from "../model/HostelSchema";
import HostelOwnerSchema from "../model/HostelOwnerSchema.js";

export const RegisterNewHostel = (req, res) => {
  try {
    const hostelOwner = new HostelOwnerSchema(req.body);
    res.status(200).json({
      message: "detail added",
      hostelOwner,
    });
  } catch (error) {
    console.log(error.message);
    
  }
};


