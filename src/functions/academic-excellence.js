import axios from "axios";
import errorCatch from "../utils/errorCatch";
import { getUserStart } from "../redux/auth/auth.actions";

export const addAcademicExcellence = (id, payload, callback = () => {}) => {
	return async (dispatch) => {
		try {
			let request;

			const formData = new FormData();

			for (const [key, value] of Object.entries(payload)) {
				if (key !== "image") {
					formData.append(key, value);
					console.log(`${key}: ${value}`);
				}
			}
			formData.append("image", payload.image);

			request = await axios.put(`/students/academic/${id}`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			let response = await request.data;

			if (response.success === true) {
				dispatch(getUserStart());
				callback();
			} else {
				throw Error;
			}
		} catch (error) {
			console.log(error.response);
			errorCatch(error, "Error updating information");
		}
	};
};

export const deleteAcademicExcellence = (id, payload, callback = () => {}) => {
	return async (dispatch) => {
		try {
			let request;

			request = await axios.put(
				`/students/academic/${id}/${payload.row_id}`,
				payload
			);
			let response = await request.data;

			if (response.success === true) {
				dispatch(getUserStart());
				callback();
			} else {
				throw Error;
			}
		} catch (error) {
			console.log(error.response);
			errorCatch(error, "Error deleting information");
		}
	};
};
