import axios from 'axios';
const URL = "http://localhost:8000";

// http://localhost:8000/loginOwner


// payload is object contains email , password and username 
// endpoint determine rather its a user or hostelOwner 


export const Register=async(endpoint,payload)=>{
    try {
        const response = await axios.post(`${URL}/register/${endpoint}`,payload)
        console.log(response)
        return response; 
    } catch (error) {
        return error.response
    }
}

export const Login=async(endpoint,payload)=>{
    try {
        const response =await axios.post(`${URL}${endpoint}`, payload)
        const data = response.data
        // console.log(data)
        // console.log(response)
        if(data.token && endpoint === '/loginOwner'){
            sessionStorage.setItem("owner",JSON.stringify(data))
        }
        else{
            sessionStorage.setItem("user",JSON.stringify(data))
        }
        return response;
    } catch (error) {   
        console.log(error);
        return error.response
    }
}

export const Logout=async()=>{
    console.log("Logout invoked form services")
    const user = sessionStorage.removeItem("user") || sessionStorage.removeItem("owner");
    return user;
}