import axios from 'axios';

const URL = "http://localhost:8000";

export const register=async(endpoint,payload)=>{
    try {
        const {data}=await axios.post(`${URL}/signUp/${endpoint}`,payload)
        return data;
    } catch (error) {
        console.log(error.message);
    }

}

export const login=async(endpoint,payload)=>{
    try {
        const {data}=await axios.post(`${URL}/signIn/${endpoint}`,payload)
        if(data.token){
            localStorage.setItem("user",JSON.stringify(data))
        }
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export const logout=()=>{
    localStorage.removeItem("user");

}