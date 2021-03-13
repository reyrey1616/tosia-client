import React, { useState } from "react";
import { Form, Input } from "antd";
import HonorsReceivedTable from "./tab-1-honors-received.component";
import SelectYearLevel from "../../shared/level.component";
import { notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { addAcademicExcellence } from "../../../functions/academic-excellence";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";

const AcademicHonorsReceived = ({ data }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);
	const [form] = Form.useForm();
	const [imageFile, setImageFile] = useState();
	const [fileKey, setFileKey] = useState(Date.now());
	const onFinish = (values) => {
		values.image = imageFile;
		values.type = "honor";

		if (!imageFile) {
			notify("Please add image!", "warning");
		} else {
			console.log("Success:", values);
			console.log(user._id);
			dispatch(
				addAcademicExcellence(user._id, values, () => {
					notify("Academic Honors Received Added");
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
					<div className="col-12 flex">
						<SelectYearLevel />

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
				<HonorsReceivedTable
					data={data && data.academic[0].academicHonorsReceived}
				/>
			</div>
		</div>
	);
};

export default AcademicHonorsReceived;
