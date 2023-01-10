// if we have multiple reducer we can combine it in this file 
import { auth } from "./auth";
import { registerHostel } from "./registerHostel";
import { combineReducers } from "redux";
import { state } from "./state";


// console.log(registerHostel)

const rootReducer = combineReducers({
    auth: auth , 
    registerHostel: registerHostel,
    state: state
})

export default rootReducer;


