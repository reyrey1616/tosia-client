import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { useDispatch } from "react-redux";
import { notify } from "../../global/alerts/alerts.component";
import { updateUserInfo } from "../../../functions/personal-data";
const FamilyData = ({ data }) => {
	const dispatch = useDispatch();
	const [buttonLoading, setButtonLoading] = useState(false);
	const onFinish = (values) => {
		setButtonLoading(true);
		dispatch(
			updateUserInfo(data && data._id, values, () => {
				notify("Family Data Updated!");
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
							label="Father's Name"
							name="fatherName"
							rules={[
								{
									required: true,
									message:
										"Please input your father's name!",
								},
							]}
						>
							<Input allowClear />
						</Form.Item>
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Father's Occupation"
							name="fatherOccupation"
							rules={[
								{
									required: true,
									message:
										"Please input your father's occupation!",
								},
							]}
						>
							<Input allowClear />
						</Form.Item>
					</div>

					<div className="col-12 flex">
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Mother's Name"
							name="motherName"
							rules={[
								{
									required: true,
									message:
										"Please input your mother's name!",
								},
							]}
						>
							<Input allowClear />
						</Form.Item>
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Mother's Occupation"
							name="motherOccupation"
							rules={[
								{
									required: true,
									message:
										"Please input your mother's occupation!",
								},
							]}
						>
							<Input allowClear />
						</Form.Item>
					</div>

					<div className="col-12 flex">
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Legal Guardian's Name"
							name="guardianName"
						>
							<Input allowClear />
						</Form.Item>
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Legal Guardian's Occupation"
							name="guardianOccupation"
						>
							<Input allowClear />
						</Form.Item>
					</div>
					<Form.Item
						className="col-6 col-md-12 p-half mb-0"
						label="No. of Siblings"
						name="numberOfSiblings"
						rules={[
							{
								required: true,
								message:
									"Please input number of siblings!",
							},
						]}
					>
						<InputNumber
							allowClear
							style={{ width: "100%" }}
						/>
					</Form.Item>
				</div>

				<Form.Item>
					<center>
						<Button
							htmlType="submit"
							type="primary"
							loading={buttonLoading}
						>
							Save changes
						</Button>
					</center>
				</Form.Item>
			</Form>
		</div>
	);
};

export default FamilyData;
