import React from "react";
import { Form, Input, Radio, Select, DatePicker } from "antd";
import axios from "axios";
import { notify } from "../../global/alerts/alerts.component";
import { useHistory } from "react-router-dom";
import errorCatch from "../../../utils/errorCatch";
const { Option } = Select;
const RegistrationForm = () => {
	const history = useHistory();
	const onFinish = async (values) => {
		try {
			const request = await axios.post(
				"/auth/evaluator-register",
				values
			);
			const response = request.data;

			if (response.success) {
				notify(
					"Registration success!",
					"success",
					"You can now login your account."
				);
				setTimeout(() => {
					history.push("/evaluator-login");
				}, 1500);
			} else {
				throw Error;
			}
		} catch (error) {
			errorCatch(
				error,
				"Registration Error, Please refresh the page!"
			);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			layout="vertical"
			name="basic"
			initialValues={{
				gender: "Male",
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<div className="flex flex-wrap mb-2">
				<Form.Item
					className="col-6 col-md-12 p-half mb-0"
					label="First Name"
					name="fname"
					rules={[
						{
							required: true,
							message: "Please input your first name!",
						},
					]}
				>
					<Input allowClear />
				</Form.Item>
				<Form.Item
					className="col-6 col-md-12 p-half mb-0"
					label="Middle Name"
					name="mname"
					rules={[
						{
							required: true,
							message: "Please input your middle name!",
						},
					]}
				>
					<Input allowClear />
				</Form.Item>
				<Form.Item
					className="col-6 col-md-12 p-half"
					label="Last Name"
					name="lname"
					rules={[
						{
							required: true,
							message: "Please input your last name!",
						},
					]}
				>
					<Input allowClear />
				</Form.Item>
				<Form.Item
					className="col-6 col-md-12 p-half"
					label="Sex"
					name="gender"
					rules={[
						{
							required: true,
							message: "Please select your sex!",
						},
					]}
				>
					<Radio.Group buttonStyle="solid">
						<Radio.Button value="Male">Male</Radio.Button>
						<Radio.Button value="Female">Female</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item
					className="col-6 col-md-12 p-half"
					label="Phone Number"
					name="phoneNumber"
					rules={[
						{
							required: true,
							message: "Please input your phone number!",
						},
					]}
				>
					<Input allowClear />
				</Form.Item>
				<Form.Item
					className="col-6 col-md-12 p-half"
					label="Birthdate"
					name="birthdate"
					rules={[
						{
							required: true,
							message: "Please input your birthdate!",
						},
					]}
				>
					<DatePicker allowClear style={{ width: "100%" }} />
				</Form.Item>

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
					className="col-6 col-md-12 p-half"
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
				<Form.Item
					className="col-6 col-md-12 p-half"
					name="confirm"
					label="Confirm Password"
					dependencies={["password"]}
					rules={[
						{
							required: true,
							message: "Please confirm your password!",
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (
									!value ||
									getFieldValue("password") === value
								) {
									return Promise.resolve();
								}
								return Promise.reject(
									"The two passwords that you entered do not match!"
								);
							},
						}),
					]}
				>
					<Input.Password allowClear />
				</Form.Item>
			</div>

			<Form.Item>
				<center>
					<button type="submit" className="branding-btn-primary">
						Submit
					</button>
				</center>
			</Form.Item>
		</Form>
	);
};

export default RegistrationForm;
