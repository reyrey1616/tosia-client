import React from "react";
import { Form, Input, Select, DatePicker } from "antd";
import NonAcademicContestsWonTable from "./tab-4-non-academic-contest-won.component";
const { Option } = Select;
const NonAcademicContestsWon = () => {
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
							className="col-6 col-md-12 p-half mb-0"
							label="Non-Academic Contest Participated"
							name="contestName"
							rules={[
								{
									required: true,
									message:
										"Please input academic contests participated!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
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
								<Option value="Grade 7">Grade 7</Option>
								<Option value="Grade 8">Grade 8</Option>
								<Option value="Grade 9">
									Grade 9
								</Option>{" "}
								<Option value="Grade 9">Grade 9</Option>
							</Select>
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
							className="col-2 col-md-12 p-half"
							label="Rank"
							name="rank"
							rules={[
								{
									required: true,
									message: "Please select rank",
								},
							]}
						>
							<Select size="large">
								<Option value="1st">1st</Option>
								<Option value="2nd">2nd</Option>{" "}
								<Option value="3rd">3rd</Option>{" "}
								<Option value="Finalist">
									Finalist
								</Option>{" "}
							</Select>
						</Form.Item>
						<Form.Item
							className="col-2 col-md-12 p-half"
							label="Individual/Team Award"
							name="awardType"
							rules={[
								{
									required: true,
									message:
										"Please select award type!",
								},
							]}
						>
							<Select size="large">
								<Option value="Individual">
									Individual
								</Option>
								<Option value="Team Award">
									Team Award
								</Option>{" "}
							</Select>
						</Form.Item>

						<Form.Item
							className="col-4 col-md-12 p-half mb-0"
							label="Name of organization/institution that gives the award"
							name="organization"
							rules={[
								{
									required: true,
									message:
										"Please input organization/institution name!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>

						<Form.Item
							className="col-2 col-md-12 p-half"
							label="Date Received"
							name="dateReceived"
							rules={[
								{
									required: true,
									message:
										"Please input date received!",
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
				<NonAcademicContestsWonTable />
			</div>
		</div>
	);
};

export default NonAcademicContestsWon;
