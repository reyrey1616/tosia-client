import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import errorCatch from "../utils/errorCatch";

export const getEvaluators = async () => {
	let token;
	token = localStorage.getItem("atkn");
	if (token) {
		setAuthToken(token);
		try {
			let request = await axios.get("/evaluators");

			const response = await request.data;
			if (response.success) {
				return response.data;
			} else {
				throw Error;
			}
		} catch (error) {
			errorCatch(error, "Error loading evaluators");
		}
	}
};

export const getOneEvaluator = async (id) => {
	let token;
	token = localStorage.getItem("atkn");
	if (token) {
		setAuthToken(token);
		try {
			let request = await axios.get(`/evaluators/${id}`);

			const response = await request.data;
			if (response.success) {
				return response.data;
			} else {
				throw Error;
			}
		} catch (error) {
			errorCatch(error, "Error loading evaluator");
		}
	}
};

export const addStudentToEvaluator = async (evaluator, student, callback) => {
	let token;
	token = localStorage.getItem("atkn");
	if (token) {
		setAuthToken(token);
		try {
			let request = await axios.post(
				`/evaluators/${evaluator}/${student}`
			);

			const response = await request.data;
			if (response.success) {
				callback();
				return response.data;
			} else {
				throw Error;
			}
		} catch (error) {
			errorCatch(error, "Error adding student to evaluator!");
		}
	}
};

export const deleteStudentToEvaluator = async (
	evaluator,
	student,
	callback
) => {
	let token;
	token = localStorage.getItem("atkn");
	if (token) {
		setAuthToken(token);
		try {
			let request = await axios.delete(
				`/evaluators/${evaluator}/${student}`
			);

			const response = await request.data;
			if (response.success) {
				callback();
				return response.data;
			} else {
				throw Error;
			}
		} catch (error) {
			errorCatch(error, "Error deleting student to evaluator!");
		}
	}
};
