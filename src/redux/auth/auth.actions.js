import AuthActionTypes from "./auth.types";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import errorCatch from "../../utils/errorCatch";
import { notify } from "../../components/global/alerts/alerts.component";

const token = localStorage.getItem("stkn");

export const getUserStart = (callback = (result) => {}) => (dispatch) => {
	(async function loadStudent() {
		if (token) {
			setAuthToken(token);
			try {
				const request = await axios.get("/auth/get-student");
				const response = request.data;
				if (response.success) {
					notify(
						"Login Success!",
						"success",
						"Welcome to TOSIA"
					);

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

export const getAcademicExcellenceStart = (callback = (result) => {}) => (
	dispatch
) => {
	(async function loadStudent() {
		if (token) {
			setAuthToken(token);
			try {
				const request = await axios.get("/auth/get-student");
				const response = request.data;
				if (response.success) {
					notify(
						"Login Success!",
						"success",
						"Welcome to TOSIA"
					);

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
		type: AuthActionTypes.GET_ACADEMIC_START,
	};
};

export const getAcademicExcellenceSuccess = (payload) => {
	return {
		type: AuthActionTypes.GET_ACADEMIC_SUCCESS,
		payload,
	};
};

export const getAcademicExcellenceFail = (payload) => {
	return {
		type: AuthActionTypes.GET_ACADEMIC_FAIL,
		payload,
	};
};
