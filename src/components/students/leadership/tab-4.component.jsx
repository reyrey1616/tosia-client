import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";
import ActivitiesOrganizedTable from "./table-tab-4.component";
// import SelectYearLevel from "../../shared/level.component";
import { notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { addLeadership } from "../../../functions/leadership";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
const { Option } = Select;
const { TextArea } = Input;

const ActivitiesOrganized = ({ data }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);
	const [form] = Form.useForm();
	const [imageFile, setImageFile] = useState();
	const [fileKey, setFileKey] = useState(Date.now());
	const [buttonLoading, setButtonLoading] = useState(false);
	const onFinish = (values) => {
		values.image = imageFile;
		values.type = "activities_organized";

		if (!imageFile) {
			notify("Please add image!", "warning");
		} else {
			console.log("Success:", values);
			console.log(user._id);
			setButtonLoading(true);
			dispatch(
				addLeadership(user._id, values, () => {
					notify("Activities Organized Added");
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

	return (
		<div className="tab-page-container">
			<Form
				form={form}
				layout="vertical"
				name="basic"
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				hidden={user && user?.isFinished ? true : false}
			>
				<div className="flex flex-wrap mb-2">
					<div className="col-12 flex-wrap">
						<div className="col-5">
							<Form.Item
								className="col-12 col-md-12 p-half mb-0"
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
								<Input allowClear />
							</Form.Item>

							<Form.Item
								className="col-12 col-md-12 p-half mb-0"
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
								<TextArea
									allowClear
									showCount
									rows={4}
									maxLength={200}
								/>
							</Form.Item>
						</div>
						<div className="col-7 flex-wrap">
							<Form.Item
								className="col-6 col-md-12 p-half"
								label="Is this activity initiated by you personally or by the school?"
								name="initiated"
								rules={[
									{
										required: true,
										message:
											"Please select who initiated the activity!",
									},
								]}
							>
								<Select>
									<Option value="Personally">
										Personally
									</Option>
									<Option value="School Initiated">
										School Initiated
									</Option>
								</Select>
							</Form.Item>
							<Form.Item
								className="col-6 col-md-12 p-half"
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
								<Select>
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
								className="col-6 col-md-12 p-half mb-0"
								label="Significant role in the activity organized"
								name="role"
								rules={[
									{
										required: true,
										message:
											"Please input significant role in the activity organized!",
									},
								]}
							>
								<Input allowClear />
							</Form.Item>

							<Form.Item
								className="col-6 col-md-12 p-half"
								label="Date Implemented"
								name="dateImplemented"
								rules={[
									{
										required: true,
										message:
											"Please input date implemented!",
									},
								]}
							>
								<DatePicker
									allowClear
									style={{ width: "100%" }}
								/>
							</Form.Item>

							<Form.Item
								className="col-6 col-md-12 p-half"
								label="At what level the award is given?"
								name="levelAwardGiven"
								rules={[
									{
										required: true,
										message:
											"Please select level award given!",
									},
								]}
							>
								<Select>
									<Option value="School-based">
										School-based
									</Option>
									<Option value="District/Municipal">
										District/Municipal
									</Option>
									<Option value="Provincial">
										Provincial
									</Option>{" "}
									<Option value="Regional">
										Regional
									</Option>{" "}
									<Option value="National">
										National
									</Option>{" "}
									<Option value="International">
										International
									</Option>
								</Select>
							</Form.Item>

							<div
								className="col-6 col-md-12 p-half mb-0"
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
				<ActivitiesOrganizedTable
					data={
						data &&
						data.leadership_virtual[0].activitiesOrganized
					}
				/>
			</div>
		</div>
	);
};

export default ActivitiesOrganized;
