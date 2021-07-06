import { combineReducers } from "redux";
import songReducers from "./songReducers";

const allReducer = combineReducers({ songs: songReducers });
export default allReducer;
