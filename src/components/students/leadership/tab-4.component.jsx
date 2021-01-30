import React from "react";
import { Form, Input, Select, DatePicker } from "antd";
import ActivitiesOrganizedTable from "./table-tab-4.component";
const { Option } = Select;

const ActivitiesOrganized = () => {
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
					<div className="col-12 flex-wrap">
						<Form.Item
							className="col-4 col-md-12 p-half mb-0"
							label="Activity Name"
							name="activityName"
							rules={[
								{
									required: true,
									message:
										"Please input activity name",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>

						<Form.Item
							className="col-8 col-md-12 p-half mb-0"
							label="Activity Short Description"
							name="description"
							rules={[
								{
									required: true,
									message:
										"Please input activity short description",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-2 col-md-12 p-half"
							label="Personally/School Initiated"
							name="initiated"
							rules={[
								{
									required: true,
									message:
										"Please select who initiated the activity!",
								},
							]}
						>
							<Select size="large">
								<Option value="Personally">
									Personally
								</Option>
								<Option value="School Initiated">
									School Initiated
								</Option>
							</Select>
						</Form.Item>
						<Form.Item
							className="col-4  col-md-12 p-half"
							label="At what level is the project implemented?"
							name="levelImplemented"
							rules={[
								{
									required: true,
									message:
										"Please select level of project implemented!",
								},
							]}
						>
							<Select size="large">
								<Option value="School-based">
									School-based
								</Option>
								<Option value="District">
									District
								</Option>
								<Option value="District">
									District
								</Option>
								Regional
							</Select>
							<Option value="Provincial">
								Provincial
							</Option>
							<Option value="National">National</Option>
							<Option value="International">
								International
							</Option>
						</Form.Item>
						{/* <Form.Item
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
						</Form.Item> */}

						<Form.Item
							className="col-4 col-md-12 p-half mb-0"
							label="Significant role in the project organized"
							name="role"
							rules={[
								{
									required: true,
									message:
										"Please input significant role in the project organized!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>

						<Form.Item
							className="col-2 col-md-12 p-half"
							label="Date Implemented"
							name="dateImplemented"
							rules={[
								{
									required: true,
									message:
										"Please input date implmented!",
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
							className="col-4 col-md-12 p-half mb-0"
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
							label="click button below to save"
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
				<ActivitiesOrganizedTable />
			</div>
		</div>
	);
};

export default ActivitiesOrganized;
