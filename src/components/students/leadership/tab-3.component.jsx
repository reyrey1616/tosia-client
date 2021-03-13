import React, { useState } from "react";
import { Form, Input, Select, DatePicker } from "antd";
import AwardsAndCitationsReceivedTable from "./table-tab-3.component";
import { notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { addLeadership } from "../../../functions/leadership";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
const { Option } = Select;

const AwardsAndCitationsReceived = ({ data }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);
	const [form] = Form.useForm();
	const [imageFile, setImageFile] = useState();
	const [fileKey, setFileKey] = useState(Date.now());
	const onFinish = (values) => {
		values.image = imageFile;
		values.type = "citation";

		if (!imageFile) {
			notify("Please add image!", "warning");
		} else {
			console.log("Success:", values);
			console.log(user._id);
			dispatch(
				addLeadership(user._id, values, () => {
					notify("Award/Citation Added");
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
							className="col-3 col-md-12 p-half mb-0"
							label="Award and Citation Received"
							name="citationReceived"
							rules={[
								{
									required: true,
									message:
										"Please input citation received!",
								},
							]}
						>
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-3 col-md-12 p-half"
							label="At what level the award is given?"
							name="levelGiven"
							rules={[
								{
									required: true,
									message:
										"Please select what level thr award is given!",
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
				<AwardsAndCitationsReceivedTable
					data={data && data.leadership_virtual[0].citation}
				/>
			</div>
		</div>
	);
};

export default AwardsAndCitationsReceived;
