import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import errorCatch from "../utils/errorCatch";

export const getStudents = async (
	userType = "evaluator",
	assigned = false,
	evaluator = null
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
			let request;

			if (!assigned) {
				request = await axios.get("/students/without-evaluator");
			} else {
				if (evaluator) {
					request = await axios.get(
						`/students/evaluator/${evaluator}`
					);
				} else {
					request = await axios.get("/students");
				}
			}

			const response = await request.data;
			if (response.success) {
				return response.data;
			} else {
				throw Error;
			}
		} catch (error) {
			errorCatch(error, "Error loading students");
		}
	}
};

export const getOneStudent = async (id, userType = "evaluator") => {
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
				return response.data;
			} else {
				throw Error;
			}
		} catch (error) {
			errorCatch(error, "Error loading students");
		}
	}
};
