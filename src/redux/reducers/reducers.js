import { combineReducers } from "redux";
import authErrorReducer from "./authErrorReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  authReducer: authReducer,
  authErrorReducer: authErrorReducer,
});

export default reducers;
