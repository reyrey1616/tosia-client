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

export const updateUserInfo = (id, payload, callback = () => {}) => {
	return async (dispatch) => {
		try {
			const request = await axios.put(`/students/${id}`, payload);
			const response = await request.data;
			if (response.success === true) {
				dispatch(getUserStart());
				callback();
			} else {
				throw Error;
			}
		} catch (error) {
			errorCatch(error, "Error updating information");
		}
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
