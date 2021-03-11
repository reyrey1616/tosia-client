import AuthActionTypes from "./auth.types";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import errorCatch from "../../utils/errorCatch";
import { notify } from "../../components/global/alerts/alerts.component";
import { useDispatch } from "react-redux";

const token = localStorage.getItem("stkn");

export const getUserStart = (callback = (result) => {}) => {
	(async function loadStudent() {
		if (token) {
			setAuthToken(token);
			try {
				const request = await axios.get("/auth/get-student");
				const response = request.data;
				console.log(response.data);
				if (response.success) {
					notify(
						"Login Success!",
						"success",
						"Welcome to TOSIA"
					);

					callback("success", response.data);
				} else {
					throw Error;
				}
			} catch (error) {
				callback("error", error);
				errorCatch(error, "Login Failed");
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
