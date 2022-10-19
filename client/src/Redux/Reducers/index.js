// if we have multiple reducer we can combine it in this file 
import { auth } from "./auth";
import { registerHostel } from "./registerHostel";
import { combineReducers } from "redux";

const rootReducer = combineReducers(auth , registerHostel)

export default rootReducer