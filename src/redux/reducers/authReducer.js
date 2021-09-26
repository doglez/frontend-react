import * as ActionTypes from "../actions/action-types";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
    id: "",
  },
  token: "",
  expireToken: "",
};

/**
 * Funcion se encarga de validar si en el local storage hay informacion del usuario para luego almacenarlo en el estado por medio del initialState
 * @returns objetct initialState
 */
const getInitialState = () => {
  const auth = localStorage.getItem("auth");
  try {
    const authObject = JSON.parse(auth);
    const { expireToken, token } = authObject;
    if (new Date(expireToken) > new Date()) {
      axios.defaults.headers.common["Authorization"] = token;
      return authObject;
    }
    return initialState;
  } catch (error) {
    return initialState;
  }
};

const authState = getInitialState();

const authReducer = (state = authState, { type, payload }) => {
  switch (type) {
    case ActionTypes.REGISTER_SUCCESS:
      localStorage.setItem("auth", JSON.stringify(payload));
      axios.defaults.headers.common["Authorization"] = payload.token;
      return { ...payload };

    case ActionTypes.REGISTER_FAIL:
      return state;

    case ActionTypes.LOGOUT_SUCCESS:
      localStorage.removeItem("auth");
      return { ...initialState };

    case ActionTypes.LOTOUT_FAIL:
      localStorage.removeItem("auth");
      return { ...initialState };

    default:
      return state;
  }
};

export default authReducer;
