import axios from "axios";
import errorCatch from "../utils/errorCatch";
import { getUserStart } from "../redux/auth/auth.actions";

export const addLeadership = (id, payload, callback = () => {}) => {
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

			request = await axios.put(
				`/students/leadership/${id}`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
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
			errorCatch(error, "Error updating information");
		}
	};
};

export const deleteLeadership = (id, payload, callback = () => {}) => {
	return async (dispatch) => {
		try {
			let request;

			request = await axios.put(
				`/students/leadership/${id}/${payload.row_id}`,
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
