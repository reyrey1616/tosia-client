import React, { lazy, Suspense } from "react";
import {  Route, Switch } from "react-router-dom";
import Spinner from "./components/hoc/spinner/spinner.component";
import ErrorBoundary from "./components/hoc/error-boundary/error-boundary.component";
const RegistrationPage = lazy(() =>
	import("./pages/students/registration.page")
);
const LoginPage = lazy(() => import("./pages/students/login.page"));
const StudentRoutes = lazy(() => import("./routes/student.routes"));

const EvaluatorRoutes = lazy(() => import("./routes/evaluator.routes"));
const EvaluatorRegistrationPage = lazy(() =>
	import("./pages/evaluator/registration.page")
);
const EvaluatorLoginPage = lazy(() => import("./pages/evaluator/login.page"));
const Homepage = lazy(() => import("./pages/home.page"));
const VerificationPage = lazy(() => import("./pages/verification.page"));

const AdminRoutes = lazy(() => import("./routes/admin.routes"));
const AdminLogin = lazy(() => import("./pages/admin/login.page"));

const App = () => {
	return (
		<div className="m-0 p-0">
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<Switch>
						{/* Student */}
						<Route
							path="/verification/:id"
							component={VerificationPage}
						/>
						<Route
							path="/registration"
							component={RegistrationPage}
						/>
						<Route path="/login" component={LoginPage} />
						<Route
							path="/student"
							component={StudentRoutes}
						/>

						{/* Evaluator */}
						<Route
							path="/evaluator"
							component={EvaluatorRoutes}
						/>
						<Route
							path="/evaluator-registration"
							component={EvaluatorRegistrationPage}
						/>
						<Route
							path="/evaluator-login"
							component={EvaluatorLoginPage}
						/>

						{/* Evaluator */}
						<Route path="/admin" component={AdminRoutes} />
						<Route
							path="/admin-login"
							component={AdminLogin}
						/>

						<Route
							path="/evaluator-login"
							component={EvaluatorLoginPage}
						/>

						<Route path="/" component={Homepage} />
					</Switch>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default App;
