import { combineReducers } from "redux";
import repositioriesReducer from "./repositiriesReduser";

const reducers = combineReducers({
  repositories: repositioriesReducer,
});

export default reducers;
