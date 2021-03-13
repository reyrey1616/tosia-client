import axios from "axios";
import errorCatch from "../utils/errorCatch";
import { getUserStart } from "../redux/auth/auth.actions";

export const updateUserInfo = (id, payload, callback = () => {}) => {
	return async (dispatch) => {
		try {
			let request = await axios.post(`/students/${id}`, payload);
			let response = await request.data;
			if (payload.image) {
				const formData = new FormData();
				formData.append("image", payload.image);
				formData.append("withImage", true);
				request = await axios.post(`/students/${id}`, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});
				response = await request.data;
			}

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
