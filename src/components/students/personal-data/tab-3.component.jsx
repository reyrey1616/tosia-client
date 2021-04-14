import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../../functions/personal-data";
import { notify } from "../../global/alerts/alerts.component";

const SchoolContactDetails = ({ data }) => {
	const dispatch = useDispatch();
	const [buttonLoading, setButtonLoading] = useState(false);
	const onFinish = (values) => {
		setButtonLoading(true);

		dispatch(
			updateUserInfo(data && data._id, values, () => {
				notify("School Contact Details Updated!");
				setButtonLoading(false);
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
							<Input allowClear />
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
							<Input allowClear />
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
							<Input allowClear />
						</Form.Item>
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Fax No."
							name="schoolFaxNumber"
						>
							<Input allowClear />
						</Form.Item>
					</div>
					<div className="col-12 flex">
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Adviser Name"
							name="schoolAdviserName"
							rules={[
								{
									required: true,
									message:
										"Please input your adviser name!",
								},
							]}
						>
							<Input allowClear />
						</Form.Item>
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Adviser Contact No."
							name="schoolAdviserContactNumber"
							rules={[
								{
									required: true,
									message:
										"Please input your adviser contact number!",
								},
							]}
						>
							<Input allowClear />
						</Form.Item>
					</div>
				</div>

				<Form.Item className="button-form-item">
					<center>
						<Button
							htmlType="submit"
							type="primary"
							size="large"
							loading={buttonLoading}
						>
							&nbsp; Save changes
						</Button>
					</center>
				</Form.Item>
			</Form>
		</div>
	);
};

export default SchoolContactDetails;
