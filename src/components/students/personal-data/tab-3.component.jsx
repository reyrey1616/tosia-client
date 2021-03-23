import React from "react";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../../functions/personal-data";
import { notify } from "../../global/alerts/alerts.component";

const SchoolContactDetails = ({ data }) => {
	const dispatch = useDispatch();
	const onFinish = (values) => {
		console.log("Success:", values);

		dispatch(
			updateUserInfo(data && data._id, values, () => {
				notify("School Contact Details Updated!");
			})
		);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="tab-page-container">
			<Form
				layout="vertical"
				name="basic"
				initialValues={
					data &&
					data && {
						...data,
					}
				}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<div className="flex flex-wrap mb-2">
					<div className="col-12 flex">
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="School Name"
							name="schoolName"
							rules={[
								{
									required: true,
									message:
										"Please input your school name!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="School Head Name"
							name="schoolHeadName"
							rules={[
								{
									required: true,
									message:
										"Please input your school head name!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
					</div>

					<div className="col-12 flex">
						<Form.Item
							className="col-12 col-md-12 p-half mb-0"
							label="School Address"
							name="schoolAddress"
							rules={[
								{
									required: true,
									message:
										"Please input your school address!",
								},
							]}
						>
							<Input
								size="large"
								allowClear
								placeholder="Lot No./Blk No., Street Name, Barangay, Town or City, Province, Zip Code, Country"
							/>
						</Form.Item>
					</div>

					<div className="col-12 flex">
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Telephone No."
							name="schoolContactNumber"
							rules={[
								{
									required: true,
									message:
										"Please input your school contact number!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Fax No."
							name="schoolFaxNumber"
							rules={[
								{
									required: true,
									message:
										"Please input your school fax number",
								},
							]}
						>
							<Input size="large" allowClear />
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

export default SchoolContactDetails;
