import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "./components/hoc/spinner/spinner.component";
import ErrorBoundary from "./components/hoc/error-boundary/error-boundary.component";
const RegistrationPage = lazy(() =>
	import("./pages/students/registration.page")
);
const StudentRoutes = lazy(() => import("./routes/student.routes"));
const App = () => {
	return (
		<div className="m-0 p-0">
			<ErrorBoundary>
				<Suspense fallback={<Spinner />}>
					<BrowserRouter>
						<Switch>
							{/* <Route path="/" component={StudentRoutes} /> */}
							<Route
								path="/registration"
								component={RegistrationPage}
							/>
						</Switch>
					</BrowserRouter>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default App;
