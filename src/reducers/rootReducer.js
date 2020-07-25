import { combineReducers } from "redux";
import inputReducer from "./inputReducer";

const rootReducer = combineReducers({
  inputs: inputReducer,
});

export default rootReducer;
