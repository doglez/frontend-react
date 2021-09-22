import axios from "axios";
import * as ActionTypes from "../actions/action-types";

export const RegisterAuthAction = (userState) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post("register", userState);
      const { data } = resp;
      dispatch({ type: ActionTypes.REGISTER_SUCCESS, payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: ActionTypes.REGISTER_FAIL, payload: {} });
    }
  };
};
