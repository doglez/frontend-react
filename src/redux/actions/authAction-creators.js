import axios from "axios";
import * as ActionTypes from "../actions/action-types";

export const RegisterAuthAction = (userState) => (dispatch) => {
  axios
    .post("register", userState)
    .then((r) => {
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: ActionTypes.REGISTER_FAIL,
        payload: e.response.data,
      });
    });
};

export const LogOutAuthAction = (history) => (dispatch) => {
  axios
    .get("logout")
    .then((r) => {
      dispatch({
        type: ActionTypes.LOGOUT_SUCCESS,
        payload: r.data,
      });
      history.push("/");
    })
    .catch((e) => {
      dispatch({
        type: ActionTypes.LOGOUT_FAIL,
        payload: e.response.data,
      });
      history.push("/");
    });
};

export const LoginAuthAction = (userState) => (dispatch) => {
  axios
    .post("login", userState)
    .then((r) => {
      dispatch({
        type: ActionTypes.LOGIN_SUCESS,
        payload: r.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: ActionTypes.LOGIN_FAIL,
        payload: e.response.data,
      });
    });
};
