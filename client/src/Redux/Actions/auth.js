// this action creator is related to authentication like 
// login and register;

// we are gonna use authService from Services folder to make HTTP request 

import {Register , Login , Logout} from "../../Services/authService";
import {REGISTER_SUCCESS , REGISTER_FAIL, LOGIN_SUCCESS , LOGIN_FAIL , LOGOUT} from './actionType'

export const register = (endpoint , payload)=> async(dispatch)=>{
    try {
      const response = await Register(endpoint,payload);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {user : response}
    })
    } catch (error) {
        dispatch({type:REGISTER_FAIL})
    }
    // return register(endpoint , payload).then(
    // (response)=>{
    //     dispatch({
    //         type: REGISTER_SUCCESS
    //     });
    //     return Promise.resolve();
    // }) , 
    // (error)=>{
    //     // const message = error.response.data.message;
    //     dispatch({
    //         type: REGISTER_FAIL
    //     })
    //     return Promise.reject();
    // }
}

export const login = (endpoint , payload) =>(dispatch)=>{
    return Login(endpoint , payload).then(
    (response)=>{
        dispatch({
            type: LOGIN_SUCCESS ,
            payload: {user: response}
        })
        return Promise.resolve();
    } , 
    (error)=>{
        dispatch({
            type: LOGIN_FAIL
        })
        return Promise.reject();
    }
    )
}

export const logout = ()=> (dispatch)=>{
    dispatch({
        type: LOGOUT
    })
}



  