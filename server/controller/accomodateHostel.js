import User from "../model/userSchema.js";
import HostelOwnerSchema from "../model/HostelOwnerSchema.js";

export const accomodateHostel = async (req, res) => {
  const hostelForAccomodate = await HostelOwnerSchema.findById(req.params.id); //hostel u want to book
  const currentUser = await User.findById(req.body.userId); // user who want to book hostel
  if (hostelForAccomodate && currentUser) {
    try {
      await hostelForAccomodate.update({
        $push: { listOfUsers: currentUser._id },
      });
      await currentUser.update({ $set: req.body });
      return res.status(200).json({ currentUser });
    } catch (error) {
      return res.status(401).json("Error occured", error);
    }
  }
};
