import AuthActionTypes from "./auth.types";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import errorCatch from "../../utils/errorCatch";

export const getUserStart = (userType = "student") => (dispatch) => {
	(async function loadStudent() {
		let token;
		if (userType === "student") {
			token = localStorage.getItem("stkn");
		} else {
			token = localStorage.getItem("etkn");
		}
		if (token) {
			setAuthToken(token);
			try {
				let request;

				if (userType === "student") {
					request = await axios.get("/auth/get-student");
				} else {
					request = await axios.get("/auth/get-evaluator");
				}
				const response = request.data;
				if (response.success) {
					dispatch(getUserSuccess(response.data));
				} else {
					throw Error;
				}
			} catch (error) {
				dispatch(getUserFail(error));
				errorCatch(error, "Error loading student's information");
			}
		}
	})();

	return {
		type: AuthActionTypes.GET_USER_START,
	};
};

export const getUserSuccess = (payload) => {
	return {
		type: AuthActionTypes.GET_USER_SUCCESS,
		payload,
	};
};

export const getUserFail = (payload) => {
	return {
		type: AuthActionTypes.GET_USER_FAIL,
		payload,
	};
};

export const getOneStudentStart = (id, userType = "evaluator") => async (
	dispatch
) => {
	let token;
	if (userType === "evaluator") {
		token = localStorage.getItem("etkn");
	} else {
		token = localStorage.getItem("atkn");
	}
	if (token) {
		setAuthToken(token);
		try {
			let request = await axios.get(`/students/${id}`);

			const response = await request.data;
			if (response.success) {
				dispatch(getOneStudentSuccess(response.data));
			} else {
				throw Error;
			}
		} catch (error) {
			errorCatch(error, "Error loading student");
		}
	}

	return {
		type: AuthActionTypes.GET_ONE_STUDENT_SUCCESS,
	};
};

export const getOneStudentSuccess = (payload) => {
	return {
		type: AuthActionTypes.GET_ONE_STUDENT_SUCCESS,
		payload,
	};
};

export const getOneStudentFail = (payload) => {
	return {
		type: AuthActionTypes.GET_ONE_STUDENT_FAIL,
		payload,
	};
};
