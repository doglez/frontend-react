import * as ActionTypes from "../actions/action-types";

const authState = {
  user: {
    name: "",
    email: "",
    id: "",
  },
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return { user: action.pyload };

    case ActionTypes.REGISTER_FAIL:
      return state;

    default:
      return state;
  }
};

export default authReducer;
