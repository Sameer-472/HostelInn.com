import { UPDATE_STATE } from "../Actions/actionType";



const initialState = false;

export const state = (state = initialState , action)=>{
    const {type} = action;
    switch (type) {
        case UPDATE_STATE: return{
            state: true
        }
        default:
            return state;
    }
}
