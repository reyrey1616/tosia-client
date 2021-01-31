import React from "react";
import { Form, Input } from "antd";
const LoginForm = () => {
	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			layout="vertical"
			name="basic"
			initialValues={{ remember: true }}
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
					<Input size="large" allowClear />
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
					hasFeedback
				>
					<Input.Password size="large" allowClear />
				</Form.Item>
			</div>

			<Form.Item>
				<center>
					<button type="submit" className="branding-btn-primary">
						Login
					</button>
				</center>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
