import React from "react";
import { Form, Input, Select } from "antd";
import HonorsReceivedTable from "./tab-1-honors-received.component";
const { Option } = Select;
const AcademicHonorsReceived = () => {
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
					<div className="col-12 flex">
						<Form.Item
							className="col-2 col-md-12 p-half"
							label="Grade Level"
							name="gradeLevel"
							rules={[
								{
									required: true,
									message:
										"Please input grade level!",
								},
							]}
						>
							<Select defaultValue="Grade 7" size="large">
								<Option value="Grade 8">Grade 8</Option>
								<Option value="Grade 9">
									Grade 9
								</Option>{" "}
								<Option value="Grade 9">Grade 9</Option>
							</Select>
						</Form.Item>
						<Form.Item
							className="col-2 col-md-12 p-half"
							label="College Year Level"
							name="collegeYearLevel"
							rules={[
								{
									required: true,
									message:
										"Please input college year level!",
								},
							]}
						>
							<Select defaultValue="1st Year" size="large">
								<Option value="1st Year">
									1st Year
								</Option>
								<Option value="2nd Year">
									2nd Year
								</Option>

								<Option value="3rd Year">
									3rd Year
								</Option>

								<Option value="4th Year">
									4th Year
								</Option>

								<Option value="5th Year">
									5th Year
								</Option>
							</Select>
						</Form.Item>
						<Form.Item
							className="col-4 col-md-12 p-half mb-0"
							label="Academic Distinction"
							name="academicDistinction"
							rules={[
								{
									required: true,
									message:
										"Please input academic distinction",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-3 col-md-12 p-half mb-0"
							label="Porfolio Page"
							name="portfolioPage"
							rules={[
								{
									required: true,
									message:
										"Please input portoflio page",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-1 col-md-12 p-0 mb-0 mt-1 "
							label="click here to save"
						>
							<button
								type="submit"
								className="branding-btn-primary"
							>
								Save changes
							</button>
						</Form.Item>
					</div>
				</div>
			</Form>

			<div className="table-container mt-2">
				{/* <AcademicHonorsReceivedTable /> */}
				<HonorsReceivedTable />
			</div>
		</div>
	);
};

export default AcademicHonorsReceived;
