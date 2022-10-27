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
  const response = await Register(endpoint, payload);
  if (response.status === 200) {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: { user: response },
    });
    return response;
  } else {
    dispatch({ type: REGISTER_FAIL , payload: {user: response}});
    return response;
  }
};

export const login = (endpoint, payload) => async (dispatch) => {
  const response = await Login(endpoint, payload);
  if (response.status === 200) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: response },
    });
    return response
  } else {
    dispatch({
      type: LOGIN_FAIL,
      payload: {user: response}
    });
    return response
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
