import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";
import OrganizationInvolvementTable from "./table-tab-1.component";
// import SelectYearLevel from "../../shared/level.component";
import { notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { addLeadership } from "../../../functions/leadership";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
const { Option } = Select;

const OrganizationInvolvement = ({ data }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);
	const [form] = Form.useForm();
	const [imageFile, setImageFile] = useState();
	const [fileKey, setFileKey] = useState(Date.now());
	const [buttonLoading, setButtonLoading] = useState(false);
	const onFinish = (values) => {
		values.image = imageFile;
		values.type = "org_envolvement";

		if (!imageFile) {
			notify("Please add image!", "warning");
		} else {
			console.log("Success:", values);
			console.log(user._id);
			setButtonLoading(true);
			dispatch(
				addLeadership(user._id, values, () => {
					notify("Organization Envolvement Added");
					form.resetFields();
					setImageFile(null);
					setFileKey(Date.now());
					setButtonLoading(false);
				})
			);
		}
	};

	const handleImageChange = (e) => {
		console.log(e.target.files[0]);
		const file = e.target.files[0];
		if (file) {
			if (file.type !== "image/jpeg" && file.type !== "image/png") {
				notify("File must be image", "warning");
				e.target.value = null;
			} else if (file.size > 2000000) {
				notify("Image must be less than 2 MB", "warning");
				e.target.value = null;
			} else {
				setImageFile(file);
			}
		} else {
			setImageFile(null);
		}
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	console.log(data && data.leadership_virtual[0]);

	return (
		<div className="tab-page-container">
			<Form
				form={form}
				layout="vertical"
				name="basic"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				hidden={user && user?.isFinished ? true : false}
			>
				<div className="flex flex-wrap mb-2">
					<div className="col-12 flex-wrap">
						<Form.Item
							className="col-5 col-md-12 p-half mb-0"
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
							<Input allowClear />
						</Form.Item>
						<Form.Item
							className="col-3 col-md-12 p-half"
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
							<Input />
						</Form.Item>

						<Form.Item
							className="col-4 col-md-12 p-half"
							label="At what level does the organization operate?"
							name="levelOperate"
							rules={[
								{
									required: true,
									message:
										"Please input level does organization operate!",
								},
							]}
						>
							<Select>
								<Option value="Classroom">
									Classroom
								</Option>

								<Option value="Department">
									Department
								</Option>

								<Option value="College">College</Option>

								<Option value="University">
									University
								</Option>

								<Option value="District/Municipal">
									District/Municipal
								</Option>
								<Option value="Provincial">
									Provincial
								</Option>
								<Option value="Regional">
									Regional
								</Option>

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
							label="Inclusive Dates"
							name="inclusiveDate"
							rules={[
								{
									required: true,
									message:
										"Please input inclusive dates!",
								},
							]}
						>
							<Input
								allowClear
								style={{ width: "100%" }}
								placeholder="February 2020 to March 2020"
							/>
						</Form.Item>

						<div
							className="col-3 col-md-12 p-half mb-0"
							name="image"
						>
							<div className="ant-col ant-form-item-label">
								<label className="ant-form-required">
									{" "}
									Image:
								</label>
							</div>
							<input
								key={fileKey}
								type="file"
								onChange={handleImageChange}
							/>
						</div>
					</div>
				</div>
				<Form.Item className="button-form-item">
					<Button
						htmlType="submit"
						size="large"
						type="primary"
						loading={buttonLoading}
					>
						&nbsp; Save changes
					</Button>
				</Form.Item>
			</Form>

			<div className="table-container mt-2">
				{/* <AcademicHonorsReceivedTable /> */}
				<OrganizationInvolvementTable
					data={
						data && data.leadership_virtual[0].orgEnvolvement
					}
				/>
			</div>
		</div>
	);
};

export default OrganizationInvolvement;
