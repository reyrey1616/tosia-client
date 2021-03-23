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

const StudentsPage = lazy(() =>
	import("../pages/evaluator/students/students.page")
);
const StudentProfilePage = lazy(() =>
	import("../pages/evaluator/student-profile/student-profile.page")
);
const StudentRoutes = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const userData = useSelector(selectCurrentUser);
	useEffect(async () => {
		dispatch(getUserStart("evaluator"));
	}, []);

	return !!userData ? (
		<div className="height-full flex width-full bg-dirtywhite">
			<Sidebar />
			<div className="admin-content p-1">
				<div className="student-header flex align-items-flex-center justify-content-space-between">
					<h2 className="text-title text-black">
						{" "}
						Welcome,{" "}
                            {`${userData.fname} ${userData.mname.substring(
                                0,
                                1
                            )} ${userData.lname}`}
					</h2>
					<Tooltip title="Logout">
						<Link to="/login">
							<Button
								onClick={() =>
									localStorage.removeItem("etkn")
								}
								shape="circle"
								size="large"
								className="mr-1"
								icon={<LogoutOutlined />}
							/>
						</Link>
					</Tooltip>
				</div>
				<div className="admin-main-content">
					<Switch>
						<PrivateRoute
							path="/evaluator/students"
							component={StudentsPage}
						/>
						<Redirect
							from="/evaluator/"
							exact
							to="/evaluator/students"
						/>
						<PrivateRoute
							path="/evaluator/student-profile/:id"
							component={StudentProfilePage}
						/>
						{/* <PrivateRoute
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
	) : (
		<Spinner />
	);
};

export default StudentRoutes;
