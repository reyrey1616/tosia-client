import React, { lazy, useEffect } from "react";
import { Button, Tooltip } from "antd";
import { Redirect, Switch, Link } from "react-router-dom";
import Sidebar from "../components/evaluator/sidebar/sidebar.component";
import { LogoutOutlined } from "@ant-design/icons";
import PrivateRoute from "../components/hoc/private-route/evaluator-private-route.component";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserStart } from "../redux/auth/auth.actions";
import { selectCurrentUser } from "../redux/auth/auth.selectors";
import Spinner from "../components/hoc/spinner/spinner.component";
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
	// useEffect(async () => {
	// 	dispatch(getUserStart());
	// }, []);

	return (
		<div className="height-full flex width-full bg-dirtywhite">
			<Sidebar />

			<div className="admin-content p-1">
				<div className="student-header flex align-items-flex-center justify-content-space-between">
					<h2 className="text-title text-black">
						{" "}
						Welcome,{" "}
						{/* {`${userData.fname} ${userData.mname.substring(
							0,
							1
						)} ${userData.lname}`} */}
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
						{/* <PrivateRoute
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
						/> */}
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default StudentRoutes;
