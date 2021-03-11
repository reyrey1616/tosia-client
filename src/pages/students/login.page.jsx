import React, { useRef, useEffect } from "react";
import LoginForm from "../../components/students/login-form/login-form.component";
import Image from "../../assets/registration-image.svg";
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
			className="flex bg-dirtywhite  p-1"
			style={{ height: "auto", minHeight: "100vh" }}
		>
			<div className="flex card bg-gradient">
				<div className="col-6 col-md-12 animate__animated animate__fadeInRightBig flex-column p-2 pl-6 pr-6 registration-image">
					<div className="flex align-items-flex-center pb-1 pt-1">
						<img
							src={Logo}
							alt="TOSIA-logo"
							width="100"
							height="100"
						/>
						<h1 className="text-title-big text-white ml-1 m-0">
							TOSIA - The Outstanding Students of Iloilo
							Award
						</h1>
					</div>
					<div className="text-subtitle text-white">
						Intends to give due honor and credit to students
						who are not only outstanding in academics and
						leadership, but most importantly, have a high
						sense of social responsibility
					</div>
					<div className="m-1">
						<center>
							<button
								className="branding-btn-primary bg-orange button-cta"
								onClick={executeScroll}
							>
								{" "}
								Login
							</button>
						</center>
					</div>
					<div className="col-12 align-items-flex-center mt-4 justify-content-center">
						<img src={Image} width="400" height="400" />
					</div>
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
							WELCOME BACK,
						</p>
						<h2 className="text-title-big text-blue m-0">
							Please Login your account!
						</h2>
						<p className="text-body mb-2 text-grey">
							<label> DON'T HAVE AN ACCOUNT? </label>{" "}
							<Link to="/registration"> REGISTER</Link>
						</p>
						<LoginForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
