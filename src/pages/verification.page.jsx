import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { notify } from "../components/global/alerts/alerts.component";
import errorCatch from "../utils/errorCatch";
const VerificationPage = () => {
	const params = useParams();
	const history = useHistory();

	useEffect(() => {
		verifyAccount(params.id);
	}, [params.id, verifyAccount]);
	return (
		<div>
			<p>
				Your account has been verified. Redirecting you to login
				page ...
			</p>
		</div>
	);
};

const verifyAccount = async (id) => {
	try {
		const url = `/auth/verify/${id}`;

		const request = await axios.post(url, {
			isVerified: true,
		});

		const response = request.data;
		console.log(response);
		if (response.success) {
			console.log(response.data);
			notify(
				"Email confirmation success!",
				"success",
				"Your email has been verified. You can now login to your account!"
			);
			setTimeout(() => {
				window.location.href = "/login";
			}, 1500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(
			error,
			"Email verification Error. Please refresh the page!"
		);
	}
};

export default VerificationPage;
