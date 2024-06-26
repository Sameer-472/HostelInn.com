// this action creator is related to authentication like
// login and register;

// we are gonna use authService from Services folder to make HTTP request

import { Register, Login, Logout } from "../../Services/authService";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./actionType";

export const register = (endpoint, payload) => async (dispatch) => {
  try {
    const response = await Register(endpoint, payload);
    if(response.status === 200){
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response },
      });
      return response
    }
    else{
      dispatch({
        type: LOGIN_FAIL,
        payload: {user: response}
      });
      return response;
    }
  } catch (error) {
    console.log('Error',error.message)
    dispatch({ type: REGISTER_FAIL });
  }
};

export const login = (endpoint, payload) => async (dispatch) => {
  try {
    const response = await Login(endpoint, payload);
    console.log(response)

    if(response.status === 200){
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response },
      });
      return response
    }
    else{
      dispatch({
        type: LOGIN_FAIL,
        payload: {user: response}
      });
      return response;
    }

  } catch (error) {
    console.log('Error',error.message)
  }
};

export const logout = () =>async (dispatch) => {
  console.log("logout function invoked")
  const user = await Logout();
  dispatch({
    type: LOGOUT,
    payload: {user}
  });
};
