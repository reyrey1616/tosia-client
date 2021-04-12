import React, { useState } from "react";
import { InputNumber, Button } from "antd";
import axios from "axios";
import { notify } from "../global/alerts/alerts.component";
import errorCatch from "../../utils/errorCatch";
const addEvaluation = async ({ data }, callback) => {
	try {
		const request = await axios.post(`/evaluations`, data);
		const response = request.data;
		if (response.success === true) {
			callback();
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Something went wrong. Please try again later!");
	}
};

const EvaluationForm = ({ data }) => {
	const [point, setPoint] = useState(0);
	const [loading, setLoading] = useState(false);
	return (
		<div className="flex">
			<InputNumber
				min={0}
				disabled={loading}
				value={point}
				onChange={(val) => {
					setPoint(val);
				}}
			/>
			<Button
				default
				loading={loading}
				onClick={() => {
					if (data && data) {
						setLoading(true);
						data.point = point;
						addEvaluation({ data }, () => {
							setTimeout(() => {
								setLoading(false);
								setPoint(0);
								notify(
									"Evaluation submitted",
									"success"
								);
							}, 1000);
						});
					} else {
						notify(
							"Something went wrong. Please refresh the page!",
							"error"
						);
					}
				}}
			>
				{" "}
				Submit
			</Button>
		</div>
	);
};

export default EvaluationForm;
