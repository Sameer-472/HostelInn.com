import axios from "axios";

const URL = ('http://localhost:8000/registerNewHostel');

export const RegisterHostel = async(payload)=>{
    try {
        const response = await axios.post(URL,payload)
        console.log(response)
        return response
    } catch (error) {
        console.log(error.message)
    }
}