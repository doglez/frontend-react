import axios from "axios";
import * as ActionTypes from "../actions/action-types";

// export const RegisterAuthAction = (userState) => {
//   return async (dispatch) => {
//     try {
//       const resp = await axios.post("register", userState);
//       const { data } = resp;
//       dispatch({ type: ActionTypes.REGISTER_SUCCESS, payload: data });
//     } catch (error) {
//       console.error(error);
//       dispatch({ type: ActionTypes.REGISTER_FAIL, payload: {} });
//     }
//   };
// };

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
      console.error(e);
      dispatch({
        type: ActionTypes.REGISTER_FAIL,
        payload: {},
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
      console.error(e);
      dispatch({
        type: ActionTypes.LOTOUT_FAIL,
        payload: {},
      });
      history.push("/");
    });
};
