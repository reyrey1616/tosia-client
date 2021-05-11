import React, { lazy, useEffect } from "react";
import { Tooltip } from "antd";
import { Redirect, Switch } from "react-router-dom";
import Sidebar from "../components/admin/sidebar/sidebar.component";
import PrivateRoute from "../components/hoc/private-route/admin-private-route.component";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserStart } from "../redux/auth/auth.actions";
import { selectCurrentUser } from "../redux/auth/auth.selectors";
import Spinner from "../components/hoc/spinner/spinner.component";
import Logo from "../assets/logo-circle.png";

const StudentsPage = lazy(() =>
	import("../pages/admin/students/students.page")
);
const StudentProfilePage = lazy(() =>
	import("../pages/admin/student-profile/student-profile.page")
);
const StudentScorePage = lazy(() =>
	import("../pages/admin/student-score/student-score.page")
);
const EvaluatorsPage = lazy(() =>
	import("../pages/admin/evaluators/evaluators.page")
);

const StudentsToEvaluatePage = lazy(() =>
	import("../pages/admin/students-to-evaluate/students-to-evaluate.page")
);

const ReportsPage = lazy(() => import("../pages/admin/reports/reports.page"));

const StudentRoutes = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const userData = useSelector(selectCurrentUser);
	useEffect(async () => {
		dispatch(getUserStart("admin"));
	}, []);

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
						{`${userData.fname} ${userData.mname.substring(0, 1)} ${
							userData.lname
						}!`}
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
								localStorage.removeItem("atkn");
								history.push("/admin-login");
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
					height: "calc(100vh - 50px)",
					marginTop: "50px",
				}}
			>
				<Sidebar />

				<div
					className="admin-content p-1"
					style={{ width: "calc(100vw - 220px)" }}
				>
					<div
						className="admin-main-content"
						style={{ minHeight: "90vh" }}
					>
						<Switch>
							{/* <PrivateRoute
								path="/student/personal-data/"
								component={PersonalData}
							/> */}
							<Redirect
								from="/admin/"
								exact
								to="/admin/dashboard"
							/>

							<PrivateRoute
								path="/admin/students"
								component={StudentsPage}
							/>
							<PrivateRoute
								path="/admin/evaluators"
								component={EvaluatorsPage}
							/>
							<PrivateRoute
								path="/admin/student-profile/:id"
								component={StudentProfilePage}
							/>
							<PrivateRoute
								path="/admin/student-score/:id"
								component={StudentScorePage}
							/>
							<PrivateRoute
								path="/admin/evaluator/:id/students"
								component={StudentsToEvaluatePage}
							/>

							<PrivateRoute
								path="/admin/reports"
								component={ReportsPage}
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
