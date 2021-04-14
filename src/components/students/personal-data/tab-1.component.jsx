import React, { useState, useEffect } from "react";
import { Form, Input, Radio, Select, DatePicker, Button } from "antd";
import { notify } from "../../global/alerts/alerts.component";
import { updateUserInfo } from "../../../functions/personal-data";
import { useDispatch } from "react-redux";
import moment from "moment";
import UploadWithPreview from "../../global/upload-with-preview/upload-with-preview.component";
import { toDataURL, dataURLtoFile } from "../../../utils/urlToFile";

const dateFormat = "YYYY/MM/DD";

const { Option } = Select;
const PersonalData = ({ data, userType }) => {
	const [mainPhotoUrl, setMainPhotoUrl] = useState();
	const [mainPhotoFile, setMainPhotoFile] = useState();
	const [student, setStudent] = useState({});
	const [buttonLoading, setButtonLoading] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		if (data && data) {
			let url = `${process.env.REACT_APP_MEDIA_DIRECTORY}students/${data.image}`;
			toDataURL(url).then((dataUrl) => {
				const fileData = dataURLtoFile(dataUrl, data.image);
				setMainPhotoFile(fileData);
				setMainPhotoUrl(URL.createObjectURL(fileData));
			});
			setStudent(data);
		}
	}, [data]);

	const onFinish = async (values) => {
		delete values.password;

		values.image = mainPhotoFile;
		setButtonLoading(true);
		dispatch(
			updateUserInfo(data && data._id, values, () => {
				notify("Information updated successfully");
				setButtonLoading(false);
			})
		);
	};

	const handleMainPhotoChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			if (file.type !== "image/jpeg" && file.type !== "image/png") {
				notify("File must be image", "warning");
				e.target.value = null;
			} else if (file.size > 2000000) {
				notify("Image must be less than 2 MB", "warning");
				e.target.value = null;
			} else {
				setMainPhotoUrl(URL.createObjectURL(file));
				setMainPhotoFile(file);
			}
		} else {
			setMainPhotoUrl(null);
			setMainPhotoFile(null);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div
			className={
				userType === "evaluator"
					? "tab-page-container-no-scroll"
					: "tab-page-container"
			}
		>
			{data && data && (
				<Form
					layout="vertical"
					name="basic"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					initialValues={
						data &&
						data && {
							...data,
							birthdate: moment(
								data.birthdate,
								dateFormat
							),
						}
					}
				>
					<div className="flex flex-wrap mb-2">
						<div className="col-12 flex mb-1">
							<div className="col-3 col-md-12 p-half justify-content-center">
								<UploadWithPreview
									name="product_main_photo"
									image={mainPhotoUrl}
									handleChange={
										handleMainPhotoChange
									}
									label="Upload 2x2 Photo"
								/>
							</div>
							<div className="col-9 col-md-12 flex-wrap">
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
									<Input allowClear />
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
									<Input allowClear />
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
									<Input allowClear />
								</Form.Item>
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
									<Input allowClear />
								</Form.Item>
								<Form.Item
									className="col-4 col-md-6 col-md-6 p-half"
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
										buttonStyle="solid"
										size="medium"
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
									className="col-4 col-md-12 p-half"
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
									<Input allowClear />
								</Form.Item>
								<Form.Item
									className="col-4 col-md-12 p-half"
									label="Birthdate"
									name="birthdate"
									rules={[
										{
											required: true,
											message:
												"Please input your birthdate!",
										},
									]}
								>
									<DatePicker
										dateFormat={dateFormat}
										allowClear
										style={{ width: "100%" }}
									/>
								</Form.Item>
								<Form.Item
									className="col-4 col-md-12 p-half"
									label="Category"
									name="category"
									rules={[
										{
											required: true,
											message:
												"Please select category!",
										},
									]}
								>
									<Select>
										<Option value="Junior High School">
											Junior High School
										</Option>
										<Option value="College">
											College
										</Option>
									</Select>
								</Form.Item>
								<Form.Item
									className="col-4 col-md-12 p-half"
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
									<Input allowClear />
								</Form.Item>
							</div>
						</div>

						<div className="col-12 flex mb-1">
							<Form.Item
								className="col-6 col-md-12 p-half"
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
								<Input allowClear />
							</Form.Item>
							<Form.Item
								className="col-6 col-md-12 p-half"
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
								<Input allowClear />
							</Form.Item>
						</div>
						<Form.Item
							className="col-12 col-md-12 p-half"
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
								className="mb-1"
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
								className="mb-1"
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
								<Input allowClear />
							</Form.Item>
							<Form.Item
								className="col-4 col-md-12 p-half"
								label="How did you know about TOSIA?"
								name="referral"
								rules={[
									{
										required: true,
										message:
											"Please select referral!",
									},
								]}
							>
								<Select>
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
									<Option value="Others">
										Others
									</Option>
								</Select>
							</Form.Item>
						</div>
						<div className="col-12 flex mb-1">
							{/* <Form.Item
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
							<Input  allowClear />
						</Form.Item>
						<Form.Item
							className="col-4 col-md-12 p-half"
							name="password"
							label="Password"
							// rules={[
							// 	{
							// 		required: true,
							// 		message:
							// 			"Please input your password!",
							// 	},
							// ]}
						>
							<Input.Password  allowClear />
						</Form.Item> */}
							{/* <Form.Item
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
							<Input.Password  allowClear />
						</Form.Item> */}
						</div>
					</div>

					{userType === "evaluator" ? null : (
						<Form.Item className="button-form-item">
							<center>
								<Button
									htmlType="submit"
									type="primary"
									loading={buttonLoading}
									size="large"
								>
									&nbsp; Save changes
								</Button>
							</center>
						</Form.Item>
					)}
				</Form>
			)}
		</div>
	);
};

export default PersonalData;
