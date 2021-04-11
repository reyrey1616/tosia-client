import React, { useRef, useEffect } from "react";
import LoginForm from "../../components/students/login-form/login-form.component";
import Image from "../../assets/Login.png";
import Logo from "../../assets/logo-circle.png";
import { Link } from "react-router-dom";
import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import errorCatch from "../../utils/errorCatch";
import { notify } from "../../components/global/alerts/alerts.component";
import { useHistory } from "react-router-dom";
const token = localStorage.getItem("stkn");
const LoginPage = () => {
	const history = useHistory();

	useEffect(() => {
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
						setTimeout(() => {
							history.push("/student/personal-data");
						}, 1500);
					} else {
						throw Error;
					}
				} catch (error) {
					errorCatch(error, "Login Failed");
				}
			}
		})();
	}, []);

	const signUpRef = useRef(null);
	const executeScroll = () => signUpRef.current.scrollIntoView();

	return (
		<div
			className="flex bg-dirtywhite login-page-wrapper p-5"
			style={{ height: "auto", minHeight: "100vh" }}
		>
			<div className="flex card bg-gradient login-page-container">
				<div className="col-6 col-md-12 animate__animated animate__fadeInRightBig flex-column p-2 pl-6 pr-6 registration-image">
					<img src={Image} alt="Tosia" />
				</div>
				<div
					className="col-6 col-md-12 p-1 animate__animated animate__fadeInLeftBig bg-white"
					style={{
						borderTopRightRadius: "15px",
						borderBottomRightRadius: "15px",
					}}
					ref={signUpRef}
				>
					<div className="p-2 pr-6 pl-6">
						<p className="text-body m-0 text-grey">
							{" "}
							WELCOME BACK!
						</p>
						<h2 className="text-title-big text-blue m-0">
							Please login your account.
						</h2>
						<p className="text-body mb-2 text-grey">
							<label> DON'T HAVE AN ACCOUNT? </label>{" "}
							<Link to="/registration">
								{" "}
								Click here to register
							</Link>
						</p>
						<LoginForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
