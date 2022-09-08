import HostelOwner from "../model/HostelOwnerSchema.js";
import bcrypt from 'bcrypt'

 const HostelOwnerController = async(req , res)=>{
    
    const {name , email , password} = req.body

    try {
        let hostelOwner = await HostelOwner.findOne({
            email:email
        });
        if(hostelOwner){
            return res.status(400).json({
                message: "User already exits"
            })
        }

        hostelOwner = new HostelOwner({
            name , 
            email ,
            password
        })

        const salt = await bcrypt.genSalt(10);
        hostelOwner.password = await bcrypt.hash(password, salt);

        if(hostelOwner){
            const data = await hostelOwner.save()
            res.status(201).json({msg: data})
            console.log("user added successfully")
        }

        
    } catch (error) {
        console.log('error has occur',error)
    }
}
export default HostelOwnerController;