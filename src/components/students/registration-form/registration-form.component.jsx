import React from "react";
import { Form, Input, Radio, Select, DatePicker } from "antd";
const { Option } = Select;
const RegistrationForm = () => {
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
					<Input size="large" allowClear />
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
					<Input size="large" allowClear />
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
					<Input size="large" allowClear />
				</Form.Item>
				<Form.Item
					className="col-6 col-md-12 p-half"
					label="Gender"
					name="gender"
					rules={[
						{
							required: true,
							message: "Please select your gender!",
						},
					]}
				>
					<Radio.Group
						defaultValue="Male"
						buttonStyle="solid"
						size="large"
					>
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
					<Input size="large" allowClear />
				</Form.Item>
				<Form.Item
					className="col-6 col-md-12 p-half"
					label="Birthdate"
					name="birthDate"
					rules={[
						{
							required: true,
							message: "Please input your birthdate!",
						},
					]}
				>
					<DatePicker
						size="large"
						allowClear
						style={{ width: "100%" }}
					/>
				</Form.Item>
				<Form.Item
					className="col-12 col-md-12 p-half"
					label="School Name"
					name="schoolName"
					rules={[
						{
							required: true,
							message: "Please input your school name!",
						},
					]}
				>
					<Input size="large" allowClear />
				</Form.Item>
				<Form.Item
					className="col-12 col-md-12 p-half"
					label="How did you know about TOSIA?"
					name="referral"
					rules={[
						{
							required: true,
							message: "Please select referral!",
						},
					]}
				>
					<Select defaultValue="Principal's Office" size="large">
						<Option value="Principal's Office">
							Principal's Office
						</Option>
						<Option value="Office of the Student Affair">
							Office of the Student Affair
						</Option>
						<Option value="TOSIA Alumni">TOSIA Alumni</Option>
						<Option value="Family / Friends">
							Family / Friends
						</Option>
						<Option value="Newspaper, poster, etc.">
							Newspaper, poster, etc.
						</Option>
						<Option value="Social Networking Sites">
							Social Networking Sites
						</Option>
						<Option value="Others">Others</Option>
					</Select>
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
					<Input size="large" allowClear />
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
					hasFeedback
				>
					<Input.Password size="large" allowClear />
				</Form.Item>
				<Form.Item
					className="col-6 col-md-12 p-half"
					name="confirm"
					label="Confirm Password"
					dependencies={["password"]}
					hasFeedback
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
					<Input.Password size="large" allowClear />
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