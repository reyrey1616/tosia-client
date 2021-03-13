import React, { useState } from "react";
import { Form, Input, Select, DatePicker } from "antd";
import ActivitiesOrganizedTable from "./table-tab-3.component";
import { notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { addCommunityEnvolvement } from "../../../functions/community-envolvement";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
const { Option } = Select;

const ActivitiesOrganized = ({ data }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);
	const [form] = Form.useForm();
	const [imageFile, setImageFile] = useState();
	const [fileKey, setFileKey] = useState(Date.now());
	const onFinish = (values) => {
		values.image = imageFile;
		values.type = "activities_organized";

		if (!imageFile) {
			notify("Please add image!", "warning");
		} else {
			console.log("Success:", values);
			console.log(user._id);
			dispatch(
				addCommunityEnvolvement(user._id, values, () => {
					notify("Activities Organized Added");
					form.resetFields();
					setImageFile(null);
					setFileKey(Date.now());
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

	return (
		<div className="tab-page-container">
			<Form
				form={form}
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
							label="Beneficiaries"
							name="beneficiaries"
							rules={[
								{
									required: true,
									message:
										"Please input beneficiaries!",
								},
							]}
						>
							<Input size="large" allowClear />
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
								<Option value="Regional">
									Regional
								</Option>
								<Option value="Provincial">
									Provincial
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
							label="Date Conducted"
							name="dateConducted"
							rules={[
								{
									required: true,
									message:
										"Please input date conducted!",
								},
							]}
						>
							<DatePicker
								size="large"
								allowClear
								style={{ width: "100%" }}
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
				<ActivitiesOrganizedTable
					data={data && data.community[0].activitiesOrganized}
				/>
			</div>
		</div>
	);
};

export default ActivitiesOrganized;
