import * as ActionTypes from "../actions/action-types";

const initialState = {
  isLoggedIn: "",
  user: {
    name: "",
    email: "",
    id: "",
  },
  token: "",
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.REGISTER_SUCCESS:
      return { ...payload };

    case ActionTypes.REGISTER_FAIL:
      return state;

    default:
      return state;
  }
};

export default authReducer;
