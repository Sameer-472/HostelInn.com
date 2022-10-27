// if we have multiple reducer we can combine it in this file 
import { auth } from "./auth";
import { registerHostel } from "./registerHostel";
import { combineReducers } from "redux";

// console.log(registerHostel)

const rootReducer = combineReducers({
    auth: auth , 
    registerHostel: registerHostel
})

export default rootReducer;


