import React from "react";
import { Form, Input, InputNumber } from "antd";
const FamilyData = ({ data }) => {
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
							<Input size="large" allowClear />
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
							<Input size="large" allowClear />
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
							<Input size="large" allowClear />
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
							<Input size="large" allowClear />
						</Form.Item>
					</div>

					<div className="col-12 flex">
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Legal Guardian's Name"
							name="guardianName"
							rules={[
								{
									required: true,
									message:
										"Please input your guardian's name!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Legal Guardian's Occupation"
							name="guardianOccupation"
							rules={[
								{
									required: true,
									message:
										"Please input your guardian's occupation!",
								},
							]}
						>
							<Input size="large" allowClear />
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
							size="large"
							allowClear
							style={{ width: "100%" }}
						/>
					</Form.Item>
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

export default FamilyData;
