import React from "react";
import { Form, Input, Radio, Select, DatePicker } from "antd";
const { Option } = Select;
const PersonalData = () => {
	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="tab-page-container">
			<Form
				layout="vertical"
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<div className="flex flex-wrap mb-2">
					<div className="col-12 flex mb-1">
						<Form.Item
							className="col-4 col-md-12 p-half mb-0"
							label="First Name"
							name="fname"
							rules={[
								{
									required: true,
									message:
										"Please input your first name!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-4 col-md-12 p-half mb-0"
							label="Middle Name"
							name="mname"
							rules={[
								{
									required: true,
									message:
										"Please input your middle name!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-4 col-md-12 p-half"
							label="Last Name"
							name="lname"
							rules={[
								{
									required: true,
									message:
										"Please input your last name!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
					</div>
					<div className="col-12 flex mb-1">
						<Form.Item
							className="col-4 col-md-12 p-half"
							label="Nickname"
							name="nickname"
							rules={[
								{
									required: true,
									message:
										"Please input your nickname!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-2 col-md-6 col-md-6 p-half"
							label="Gender"
							name="gender"
							rules={[
								{
									required: true,
									message:
										"Please select your gender!",
								},
							]}
						>
							<Radio.Group
								defaultValue="Male"
								buttonStyle="solid"
								size="large"
							>
								<Radio.Button value="Male">
									Male
								</Radio.Button>
								<Radio.Button value="Female">
									Female
								</Radio.Button>
							</Radio.Group>
						</Form.Item>
						<Form.Item
							className="col-3 col-md-12 p-half"
							label="Nationality"
							name="nationality"
							rules={[
								{
									required: true,
									message:
										"Please input your nationality!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-3 col-md-12 p-half"
							label="Birthdate"
							name="birthDate"
							rules={[
								{
									required: true,
									message:
										"Please input your birthdate!",
								},
							]}
						>
							<DatePicker
								size="large"
								allowClear
								style={{ width: "100%" }}
							/>
						</Form.Item>
					</div>

					<div className="col-12 flex mb-1">
						<Form.Item
							className="col-3 col-md-12 p-half"
							label="Category"
							name="category"
							rules={[
								{
									required: true,
									message: "Please select category!",
								},
							]}
						>
							<Select size="large">
								<Option value="Junior High School">
									Junior High School
								</Option>
								<Option value="College">College</Option>
							</Select>
						</Form.Item>
						<Form.Item
							className="col-3 col-md-12 p-half"
							label="Program/College/Department"
							name="department"
							rules={[
								{
									required: true,
									message:
										"Please input your program/college/department!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-3 col-md-12 p-half"
							label="Course"
							name="course"
							rules={[
								{
									required: true,
									message:
										"Please input your course!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-3 col-md-12 p-half"
							label="Level"
							name="level"
							rules={[
								{
									required: true,
									message:
										"Please input your level!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
					</div>
					<Form.Item
						className="col-12 col-md-12 p-half mb-1"
						label="Present Mailing Address"
						name="presentMailingAddress"
						rules={[
							{
								required: true,
								message:
									"Please input your present mailing address!",
							},
						]}
					>
						<Input
							size="large"
							allowClear
							placeholder="Lot No./Blk No., Street Name, Barangay, Town or City, Province, Zip Code, Country"
						/>
					</Form.Item>
					<Form.Item
						className="col-12 col-md-12 p-half mb-1"
						label="Permanent Mailing Address"
						name="permanentMailingAddress"
						rules={[
							{
								required: true,
								message:
									"Please input your permanent mailing address!",
							},
						]}
					>
						<Input
							size="large"
							allowClear
							placeholder="Lot No./Blk No., Street Name, Barangay, Town or City, Province, Zip Code, Country"
						/>
					</Form.Item>

					<div className="col-12 flex mb-1">
						<Form.Item
							className="col-4 col-md-12 p-half"
							label="Phone Number"
							name="phoneNumber"
							rules={[
								{
									required: true,
									message:
										"Please input your phone number!",
								},
							]}
						>
							<Input
								size="large"
								allowClear
								placeholder="+639-000-0000"
							/>
						</Form.Item>
						<Form.Item
							className="col-4 col-md-12 p-half"
							label="Telephone Number"
							name="telNumber"
							// rules={[
							// 	{
							// 		required: true,
							// 		message:
							// 			"Please input your telephone number!",
							// 	},
							// ]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-4 col-md-12 p-half"
							label="How did you know about TOSIA?"
							name="referral"
							rules={[
								{
									required: true,
									message: "Please select referral!",
								},
							]}
						>
							<Select
								defaultValue="Principal's Office"
								size="large"
							>
								<Option value="Principal's Office">
									Principal's Office
								</Option>
								<Option value="Office of the Student Affair">
									Office of the Student Affair
								</Option>
								<Option value="TOSIA Alumni">
									TOSIA Alumni
								</Option>
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
					</div>
					<div className="col-12 flex mb-1">
						<Form.Item
							className="col-4 col-md-12 p-half"
							label="Email"
							name="email"
							rules={[
								{
									required: true,
									message:
										"Please input your email!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-4 col-md-12 p-half"
							name="password"
							label="Password"
							rules={[
								{
									required: true,
									message:
										"Please input your password!",
								},
							]}
							hasFeedback
						>
							<Input.Password size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-4 col-md-12 p-half"
							name="confirm"
							label="Confirm Password"
							dependencies={["password"]}
							hasFeedback
							rules={[
								{
									required: true,
									message:
										"Please confirm your password!",
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (
											!value ||
											getFieldValue(
												"password"
											) === value
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
				</div>

				<Form.Item>
					<center>
						<button
							type="submit"
							className="branding-btn-primary"
						>
							&nbsp; Save changes
						</button>
					</center>
				</Form.Item>
			</Form>
		</div>
	);
};

export default PersonalData;
