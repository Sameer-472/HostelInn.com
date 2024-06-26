// this file will update the state of the application 

import {
    REGISTER_SUCCESS , REGISTER_FAIL , LOGIN_SUCCESS , LOGIN_FAIL , LOGOUT
} from '../Actions/actionType'

const user = JSON.parse(sessionStorage.getItem("user") || sessionStorage.getItem("owner"))  ;

const initialState = user ? {isLoggedIn: true , user}: {isLoggedIn: false , user: null};

export const auth = (state = initialState , action)=>{
    const {type , payload} = action;
    switch (type) {
        case REGISTER_SUCCESS: return{
            ...state , signUp: false,
            user: payload.user
        }
        case REGISTER_FAIL: return{
            ...state , signUp: false,
            user: payload.user
        }
        case LOGIN_SUCCESS: return{
            ...state , isLoggedIn: true , 
            user: payload.user
        }
        case LOGIN_FAIL: return{
            ...state , isLoggedIn: false , 
            user: payload.user
        }
        case LOGOUT: return{
            ...state , isLoggedIn: false , 
            user: null
        }
        default:
            return state;
    }
}