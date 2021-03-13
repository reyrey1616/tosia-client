import React, { useState } from "react";
import { Form, Input, DatePicker, Select } from "antd";
import CitationsReceivedTable from "./tab-2-citations-received.component";
import SelectYearLevel from "../../shared/level.component";
import { notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { addAcademicExcellence } from "../../../functions/academic-excellence";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
const { Option } = Select;
const CitationsReceived = ({ data }) => {
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
				addAcademicExcellence(user._id, values, () => {
					notify("Citation Added");
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
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<div className="flex flex-wrap mb-2">
					<div className="col-12 flex-wrap">
						<Form.Item
							className="col-4 col-md-12 p-half mb-0"
							label="Citation Received"
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

						<SelectYearLevel />

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

						<div
							className="col-2 col-md-12 p-half mb-0"
							label="Image"
							name="image"
						>
							<div className="ant-col ant-form-item-label">
								<label className="ant-form-required">
									{" "}
									Image:
								</label>
							</div>
							<input
								type="file"
								key={fileKey}
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
				<CitationsReceivedTable
					data={data && data.academic[0].citationsReceived}
				/>
			</div>
		</div>
	);
};

export default CitationsReceived;
