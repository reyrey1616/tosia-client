import { notify } from "../components/global/alerts/alerts.component";

const errorCatch = (error, customMessage) => {
	const errorResponse = error.response.data.error;
	if (errorResponse) {
		if (errorResponse.startsWith("Validation")) {
			notify(errorResponse, "error");
		} else if (errorResponse.startsWith("Duplicate")) {
			notify(
				"Email address already exists, Please use another email address.",
				"error"
			);
		} else if (errorResponse.startsWith("CastError")) {
			notify("Information not found", "error");
		} else {
			notify(errorResponse, "error");
		}
	} else {
		notify(customMessage, "error");
	}
};

export default errorCatch;
