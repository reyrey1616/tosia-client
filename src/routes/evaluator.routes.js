import React, { lazy, useEffect } from "react";
import { Tooltip } from "antd";
import { Redirect, Switch } from "react-router-dom";
import PrivateRoute from "../components/hoc/private-route/evaluator-private-route.component";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserStart } from "../redux/auth/auth.actions";
import { selectCurrentUser } from "../redux/auth/auth.selectors";
import Spinner from "../components/hoc/spinner/spinner.component";
import Logo from "../assets/logo-circle.png";

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
		<div className="height-full width-full bg-dirtywhite">
			<div
				className="student-header p-half flex-unwrap row align-items-flex-center justify-content-space-between bg-blue"
				style={{ width: "100%", position: "sticky" }}
			>
				<div
					className="flex col-6 col-md-12 align-items-flex-center"
					onClick={() => {
						history.push("/evaluator/students");
					}}
					style={{
						cursor: "pointer",
					}}
				>
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
								localStorage.removeItem("etkn");
								history.push("/evaluator-login");
							}}
						>
							{" "}
							Logout{" "}
						</button>
					</Tooltip>
				</div>
			</div>
			<div className="admin-content p-1 " style={{ width: "100%" }}>
				<div
					className="admin-main-content"
					style={{ height: "auto", overflow: "unset" }}
				>
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
					</Switch>
				</div>
			</div>
		</div>
	) : (
		<Spinner />
	);
};

export default StudentRoutes;
