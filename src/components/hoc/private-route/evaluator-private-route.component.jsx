import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({
	component: Component,
	isAuthenticated,
	loading,
	currentUser,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				!localStorage.getItem("etkn") ? (
					<Redirect to="/evaluator-login" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PrivateRoute;
