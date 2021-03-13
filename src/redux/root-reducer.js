import { combineReducers } from "redux";
import AuthReducer from "./auth/auth.reducers";

export default combineReducers({
	auth: AuthReducer,
});
