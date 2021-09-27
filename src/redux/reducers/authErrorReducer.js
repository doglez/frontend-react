import * as ActionTypes from "../actions/action-types";

const initialState = {
  message: "",
  errors: "",
};

const authErrorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.REGISTER_FAIL:
      return { ...payload };
    case ActionTypes.REGISTER_SUCCESS:
      return initialState;

    case ActionTypes.LOGOUT_FAIL:
      return { ...payload };

    case ActionTypes.LOGOUT_SUCCESS:
      return initialState;

    case ActionTypes.LOGIN_FAIL:
      return { ...payload };

    case ActionTypes.LOGIN_SUCESS:
      return initialState;

    default:
      return state;
  }
};

export default authErrorReducer;
