import React, { lazy } from "react";
import { Button, Tooltip } from "antd";
import { Route, Redirect, Switch } from "react-router-dom";
import Sidebar from "../components/students/sidebar/sidebar.component";
import { LogoutOutlined } from "@ant-design/icons";

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
						<Button
							shape="circle"
							size="large"
							className="mr-1"
							icon={<LogoutOutlined />}
						></Button>
					</Tooltip>
				</div>
				<div className="admin-main-content">
					<Switch>
						<Route
							path="/student/personal-data/"
							component={PersonalData}
						/>
						<Route
							path="/student/academic-excellence/"
							component={AcademicExcellenceMainPage}
						/>
						<Route
							path="/student/leadership/"
							component={LeadershipMainPage}
						/>
						<Route
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
