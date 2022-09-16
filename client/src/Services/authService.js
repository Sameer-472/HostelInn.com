import axios from 'axios';
const URL = "http://localhost:8000";

// payload is object contains email , password and username 
// endpoint determine rather its a user or hostelOwner 

export const Register=async(endpoint,payload)=>{
    try {
        const response = await axios.post(`${URL}/signUp/${endpoint}`,payload)
        console.log(response)
        const data = response.data;
        console.log(data)
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export const Login=async(endpoint,payload)=>{
    try {
        const response =await axios.post(`${URL}${endpoint}`,payload)
        const data = response.data
        console.log("hello")
        console.log(data)
        console.log(response)
        if(data.token){
            localStorage.setItem("user",JSON.stringify(data))
        }
        return data;
    } catch (error) {   
        console.log(error.message);
    }
}

export const Logout=()=>{
    localStorage.removeItem("user");
}