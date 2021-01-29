import React, { lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
const RegistrationPage = lazy(() =>
	import("../pages/students/registration.page")
);

const StudentRoutes = () => {
	return (
		<div>
			<Switch></Switch>
		</div>
	);
};

export default StudentRoutes;
