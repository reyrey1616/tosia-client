import React, { lazy, useEffect } from "react";
import { Tooltip, Alert, Button } from "antd";
import { Redirect, Switch } from "react-router-dom";
import Sidebar from "../components/students/sidebar/sidebar.component";
import PrivateRoute from "../components/hoc/private-route/private-route.component";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserStart } from "../redux/auth/auth.actions";
import { selectCurrentUser } from "../redux/auth/auth.selectors";
import Spinner from "../components/hoc/spinner/spinner.component";
import Logo from "../assets/logo-circle.png";
import {
	Confirmation,
	notify,
} from "../components/global/alerts/alerts.component";
import { updateUserInfo } from "../functions/personal-data";
const PersonalData = lazy(() =>
	import("../pages/students/personal-data/main.page")
);
const AcademicExcellenceMainPage = lazy(() =>
	import("../pages/students/academic-excellence/main.page")
);
const LeadershipMainPage = lazy(() =>
	import("../pages/students/leadership/main.page")
);
const CommunityEnvolvementMainPage = lazy(() =>
	import("../pages/students/community-envolvement/main.page")
);

const DataPrivacy = lazy(() => import("../pages/data-privacy.page"));

const StudentRoutes = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const userData = useSelector(selectCurrentUser);
	useEffect(async () => {
		dispatch(getUserStart("student"));
	}, []);

	return !!userData ? (
		userData?.isFirstLoggedIn ? (
			<DataPrivacy />
		) : (
			<div
				className="height-full flex width-full bg-dirtywhite"
				style={{ display: "flex", flexDirection: "column" }}
			>
				<div
					className="student-header p-half flex align-items-flex-center justify-content-space-between bg-blue"
					style={{ position: "fixed", width: "100%" }}
				>
					<div className="flex col-6 col-md-12 align-items-flex-center ">
						<img
							src={Logo}
							alt="Logo"
							className="admin-header-logo"
							height="50"
							width="50"
						/>
						<h3 className="m-0 text-white fw-700">
							{" "}
							The Outstanding Students of Iloilo Awards
						</h3>
					</div>
					<div className="col-6 col-md-12 justify-content-end align-items-flex-center">
						<h3 className="text-white m-0 mr-1 fw-700">
							{" "}
							Welcome,{" "}
							{`${
								userData.fname
							} ${userData.mname.substring(0, 1)} ${
								userData.lname
							}!`}
						</h3>
						{userData && userData?.isFinished ? null : (
							<Confirmation
								title="Are you sure you want submit?"
								confirmFn={() => {
									dispatch(
										updateUserInfo(
											userData &&
												userData?._id,
											{
												isFinished: true,
											},
											() => {
												notify(
													"Successfully Submitted"
												);

												setTimeout(() => {
													window.location.href =
														"/student/personal-data";
												}, [1500]);
											}
										)
									);
								}}
							>
								<Tooltip title="Submit">
									<Button
										className="text-white mr-1 fw-700 submit-final-btn"
										style={{
											background: "#f16626",
											outline: "none",
											border: 0,
										}}
									>
										Submit
									</Button>
								</Tooltip>
							</Confirmation>
						)}
						<Tooltip title="Help">
							<a
								className="text-white mr-1 fw-700"
								href="https://www.facebook.com/TheOutstandingStudentsofIloiloAwards"
								target="_blank"
								rel="noreferrer"
							>
								{" "}
								Help
							</a>
						</Tooltip>
						<Tooltip title="Logout">
							<button
								className="text-white mr-1 fw-700"
								style={{
									background: "transparent",
									outline: "none",
									border: 0,
								}}
								onClick={() => {
									localStorage.removeItem("stkn");
									history.push("/login");
								}}
							>
								{" "}
								Logout{" "}
							</button>
						</Tooltip>
					</div>
				</div>
				<div
					className="flex"
					style={{
						height: "calc(100vh - 70px)",
						marginTop: "70px",
					}}
				>
					<Sidebar />

					<div className="admin-content p-1">
						{userData && userData?.isFinished === true && (
							<Alert
								className="mb-1"
								// message="Directions"
								description="Thank you for submitting your application. The encoded information in the version you submitted is considered final and changes can no longer be made."
								type="success"
							/>
						)}
						<div className="admin-main-content">
							<Switch>
								<PrivateRoute
									path="/student/personal-data/"
									component={PersonalData}
								/>
								<Redirect
									from="/student/"
									exact
									to="/student/personal-data"
								/>
								<PrivateRoute
									path="/student/academic-excellence/"
									component={
										AcademicExcellenceMainPage
									}
								/>
								<PrivateRoute
									path="/student/leadership/"
									component={LeadershipMainPage}
								/>
								<PrivateRoute
									path="/student/community-envolvement/"
									component={
										CommunityEnvolvementMainPage
									}
								/>
							</Switch>
						</div>
					</div>
				</div>
			</div>
		)
	) : (
		<Spinner />
	);
};

export default StudentRoutes;
