import React from "react";
// import SpinnerComponent from '../spinner/spinner.component';
import { Skeleton } from "antd";

const WithSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<Skeleton active paragraph={{ rows: 10 }} />
		) : (
			<WrappedComponent />
		);
	};

	return Spinner;
};

export default WithSpinner;
