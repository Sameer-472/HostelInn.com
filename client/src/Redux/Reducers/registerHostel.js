import { HOSTEL_REGISTER_SUCCUSS, HOSTEL_REGISTER_FAILED } from "../Actions/actionType";

const initialState = {}

export const registerHostel = (state = initialState , action)=>{
    const {type , payload} = action;
    switch (type) {
        case HOSTEL_REGISTER_SUCCUSS: return{
            ...state, hostelDetails: payload.hostelDetails
        }
        case HOSTEL_REGISTER_FAILED: return{
            ...state, hostelDetails: payload.hostelDetails
        }
        default:
            break;
    }
}

