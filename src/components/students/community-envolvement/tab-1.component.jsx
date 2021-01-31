import React from "react";
import { Form, Input, Select, DatePicker } from "antd";
import OrganizationsTable from "./table-tab-1.component";
const { Option } = Select;

const Organizations = () => {
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
							label="Organization Name"
							name="organizationName"
							rules={[
								{
									required: true,
									message:
										"Please input organization name",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-2 col-md-12 p-half"
							label="Position/Designation"
							name="position"
							rules={[
								{
									required: true,
									message:
										"Please input position/designation!",
								},
							]}
						>
							<Select size="large">
								<Option value="Member">Member</Option>
								<Option value="Officer">
									Officer
								</Option>{" "}
							</Select>
						</Form.Item>

						<Form.Item
							className="col-3 col-md-12 p-half"
							label="At what level does organization operate?"
							name="levelOperate"
							rules={[
								{
									required: true,
									message:
										"Please input level does organization operate!",
								},
							]}
						>
							<Select size="large">
								<Option value="Local">Local</Option>
								<Option value="National">
									National
								</Option>

								<Option value="International">
									International
								</Option>
							</Select>
						</Form.Item>

						<Form.Item
							className="col-3 col-md-12 p-half"
							label="Inclusive Date"
							name="inclusiveDate"
							rules={[
								{
									required: true,
									message:
										"Please input inclusive date!",
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
				<OrganizationsTable />
			</div>
		</div>
	);
};

export default Organizations;
