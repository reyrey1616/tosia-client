import React, { lazy, useEffect } from "react";
import { Button, Tooltip } from "antd";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import Sidebar from "../components/students/sidebar/sidebar.component";
import { LogoutOutlined } from "@ant-design/icons";
import PrivateRoute from "../components/hoc/private-route/private-route.component";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import errorCatch from "../utils/errorCatch";
import { notify } from "../components/global/alerts/alerts.component";
import { useHistory } from "react-router-dom";
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

const token = localStorage.getItem("stkn");
const StudentRoutes = () => {
	const history = useHistory();

	useEffect(async () => {
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
	}, [token]);
	return (
		<div className="height-full flex width-full bg-dirtywhite">
			<Sidebar />

			<div className="admin-content p-1">
				<div className="student-header flex align-items-flex-center justify-content-space-between">
					<h2 className="text-title text-black">
						{" "}
						Welcome, Rey G. Guidoriagao Jr.
					</h2>
					<Tooltip title="Logout">
						<Link to="/login">
							<Button
								onClick={() =>
									localStorage.removeItem("stkn")
								}
								shape="circle"
								size="large"
								className="mr-1"
								icon={<LogoutOutlined />}
							></Button>
						</Link>
					</Tooltip>
				</div>
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
	);
};

export default StudentRoutes;
