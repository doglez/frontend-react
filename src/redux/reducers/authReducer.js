import * as ActionTypes from "../actions/action-types";

const initialState = {
  user: {
    name: "",
    email: "",
    id: "",
  },
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
