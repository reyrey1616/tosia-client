import React, { lazy, useEffect } from "react";
import { Button, Tooltip } from "antd";
import { Redirect, Switch, Link } from "react-router-dom";
import Sidebar from "../components/students/sidebar/sidebar.component";
import { LogoutOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import PrivateRoute from "../components/hoc/private-route/private-route.component";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserStart } from "../redux/auth/auth.actions";
import { selectCurrentUser } from "../redux/auth/auth.selectors";
import Spinner from "../components/hoc/spinner/spinner.component";
import Reminders from "../components/shared/reminders.component";
import Logo from "../assets/logo-circle.png";
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

const StudentRoutes = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const userData = useSelector(selectCurrentUser);
	useEffect(async () => {
		dispatch(getUserStart("student"));
	}, []);

	const logout = () => {
		history.push("/login");
		// localStorage.removeItem("stkn");
	};

	return !!userData ? (
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
						{`${userData.fname} ${userData.mname.substring(
							0,
							1
						)} ${userData.lname}!`}
					</h3>
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
					<Tooltip title="Logout">
						<a
							className="text-white mr-1 fw-700"
							href="https://www.facebook.com/jciregattailoilo/"
							target="_blank"
						>
							{" "}
							Help
						</a>
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
								component={AcademicExcellenceMainPage}
							/>
							<PrivateRoute
								path="/student/leadership/"
								component={LeadershipMainPage}
							/>
							<PrivateRoute
								path="/student/community-envolvement/"
								component={CommunityEnvolvementMainPage}
							/>
						</Switch>
					</div>
				</div>
			</div>
		</div>
	) : (
		<Spinner />
	);
};

export default StudentRoutes;
