import { HOSTEL_REGISTER_SUCCUSS, HOSTEL_REGISTER_FAILED } from "./actionType";
import { RegisterHostel } from "../../Services/hostelRegisterService";

export const registerHostel = (payload) => async (dispatch) => {
  try {
    const response = await RegisterHostel(payload);
    dispatch({
      type: HOSTEL_REGISTER_SUCCUSS,
      payload: { hostelDetails: response },
    });
  } catch (error) {
    dispatch({ type: HOSTEL_REGISTER_FAILED });
  }
};
