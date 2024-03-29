import AuthActionTypes from "./auth.types";
import { createReducer } from "../utils";

const INITIAL_STATE = {
	user: undefined,
	loading: false,
	error: undefined,
	errors: [],
	isAuthenticated: false,
	academicExcelence: {},
	currentStudent: {},
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

const getOneStudent = (state, action) => {
	return {
		...state,
		loading: false,
		currentStudent: action.payload,
	};
};

const getAcademicExcellence = (state, action) => {
	return {
		...state,
		loading: false,
		academicExcelence: action.payload,
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

	[AuthActionTypes.GET_ACADEMIC_EXCELLENCE_START]: authLoading,
	[AuthActionTypes.GET_ACADEMIC_EXCELLENCE_SUCCESS]: getAcademicExcellence,
	[AuthActionTypes.GET_ACADEMIC_EXCELLENCE_FAIL]: authFail,

	[AuthActionTypes.GET_ONE_STUDENT_START]: authLoading,
	[AuthActionTypes.GET_ONE_STUDENT_SUCCESS]: getOneStudent,
	[AuthActionTypes.GET_ONE_STUDENT_FAIL]: authFail,
});

export default AuthReducer;
