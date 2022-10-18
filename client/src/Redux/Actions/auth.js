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
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { user: response },
    });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL });
  }
};

export const login = (endpoint, payload) => async (dispatch) => {
  try {
    const response = await Login(endpoint, payload);
    // console.log(response)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: response },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });
    console.log(error)
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
