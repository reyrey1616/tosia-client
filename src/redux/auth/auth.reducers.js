import AuthActionTypes from "./auth.types";
import { createReducer } from "../utils";

const INITIAL_STATE = {
	user: undefined,
	loading: false,
	error: undefined,
	errors: [],
	isAuthenticated: false,
};

const authLoading = (state) => {
	return {
		...state,
		loading: true,
	};
};

const getUser = (state, action) => {
	return {
		...state,
		loading: false,
		user: action.payload,
	};
};

const authFail = (state, action) => {
	return {
		...state,
		loading: false,
		error: action.payload,
	};
};

const AuthReducer = createReducer(INITIAL_STATE, {
	[AuthActionTypes.GET_USER_START]: authLoading,
	[AuthActionTypes.GET_USER_SUCCESS]: getUser,
	[AuthActionTypes.GET_USER_FAIL]: authFail,
});

export default AuthReducer;
