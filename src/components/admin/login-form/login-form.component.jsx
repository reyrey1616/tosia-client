import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import errorCatch from "../../../utils/errorCatch";
import { useHistory } from "react-router-dom";
import { notify } from "../../global/alerts/alerts.component";

const LoginForm = () => {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const onFinish = async (values) => {
		try {
			setLoading(true);

			const request = await axios.post("/auth/admin-login", values);
			const response = request.data;
			if (response.success) {
				notify("Login Success!", "success", "Welcome to TOSIA");
				localStorage.setItem("atkn", response.token);
				setTimeout(() => {
					history.push("/admin/students");
					setLoading(true);
				}, 1500);
			} else {
				throw Error;
			}
		} catch (error) {
			setLoading(false);

			errorCatch(error, "Login Failed");
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			layout="vertical"
			name="basic"
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<div className="flex flex-wrap mb-2">
				<Form.Item
					className="col-12 col-md-12 p-half"
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Please input your email!",
						},
					]}
				>
					<Input allowClear />
				</Form.Item>
				<Form.Item
					className="col-12 col-md-12 p-half"
					name="password"
					label="Password"
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
					]}
				>
					<Input.Password allowClear />
				</Form.Item>
			</div>

			<Form.Item>
				<center>
					<Button
						htmlType="submit"
						type="primary"
						loading={loading}
					>
						Login
					</Button>
				</center>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
