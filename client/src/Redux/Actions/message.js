// action creators for actions related to message or notifications from API  

import {SET_MESSAGE , CLEAR_MESSAGE} from "./actionType";

export const setMessage = (message)=>{
    return {
        type: SET_MESSAGE,
        payload: message
    }
}

export const clearMessage = ()=>{
    return {
        type: CLEAR_MESSAGE,
    }
}
