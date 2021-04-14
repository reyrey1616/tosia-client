import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";
import ActivitiesAttendedTable from "./table-tab-2.component";
import { notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { addCommunityEnvolvement } from "../../../functions/community-envolvement";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
const { Option } = Select;

const ActivitiesAttended = ({ data }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);
	const [form] = Form.useForm();
	const [imageFile, setImageFile] = useState();
	const [fileKey, setFileKey] = useState(Date.now());
	const [buttonLoading, setButtonLoading] = useState(false);
	const onFinish = (values) => {
		values.image = imageFile;
		values.type = "activities";

		if (!imageFile) {
			notify("Please add image!", "warning");
		} else {
			console.log("Success:", values);
			setButtonLoading(true);
			console.log(user._id);
			dispatch(
				addCommunityEnvolvement(user._id, values, () => {
					notify("Activities Attended Added");
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
				hidden={
					user && user?.isFinished
						? true
						: data &&
						  data?.community[0]?.activitiesAttended
								?.length >= 20
						? true
						: false
				}
			>
				<div className="flex flex-wrap mb-1">
					<div className="col-12 flex-wrap">
						<Form.Item
							className="col-4 col-md-12 p-half mb-0"
							label="Activity Name"
							name="activityName"
							rules={[
								{
									required: true,
									message:
										"Please input activity name!",
								},
							]}
						>
							<Input allowClear />
						</Form.Item>

						<Form.Item
							className="col-4 col-md-12 p-half mb-0"
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
							<Input allowClear />
						</Form.Item>

						<Form.Item
							className="col-4 col-md-12 p-half"
							label="At what level was the activity implemented?"
							name="levelImplemented"
							rules={[
								{
									required: true,
									message:
										"Please select level of activity implemented!",
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
							className="col-5 col-md-12 p-half mb-0"
							label="Name of the Organization that organized the activity"
							name="organization"
							rules={[
								{
									required: true,
									message:
										"Please input name of the organization that organized the activity!",
								},
							]}
						>
							<Input allowClear />
						</Form.Item>
						<Form.Item
							className="col-4 col-md-12 p-half"
							label="At what level is the award given?"
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
								<Option value="Classroom">
									Classroom
								</Option>
								<Option value="Department/Grade Level">
									Department/Grade Level
								</Option>
								<Option value="College/Program (ex: Regular, STE, SPA, SPJ, SPS)">
									College/Program (ex: Regular, STE,
									SPA, SPJ, SPS)
								</Option>
								<Option value="University/School">
									University/School
								</Option>{" "}
								<Option value="Municipal/District">
									Municipal/District
								</Option>{" "}
								<Option value="Congressional District">
									Congressional District
								</Option>{" "}
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

						<Form.Item
							className="col-3 col-md-12 p-half"
							label="Date Attended"
							name="dateAttended"
							rules={[
								{
									required: true,
									message:
										"Please input date attended!",
								},
							]}
						>
							<DatePicker
								allowClear
								style={{ width: "100%" }}
							/>
						</Form.Item>

						<div
							className="col-2 col-md-12 p-half mb-0"
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
				<ActivitiesAttendedTable
					data={data && data.community[0].activitiesAttended}
				/>
			</div>
		</div>
	);
};

export default ActivitiesAttended;
