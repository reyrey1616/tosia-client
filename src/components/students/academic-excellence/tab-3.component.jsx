import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Button } from "antd";
import AcademicContestsWonTable from "./tab-3-contests-won.component";
import SelectYearLevel from "../../shared/level.component";
import { notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { addAcademicExcellence } from "../../../functions/academic-excellence";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
const { Option } = Select;
const AcademicContestsWon = ({ data }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);
	const [form] = Form.useForm();
	const [imageFile, setImageFile] = useState();
	const [buttonLoading, setButtonLoading] = useState(false);
	const [fileKey, setFileKey] = useState(Date.now());
	const onFinish = (values) => {
		values.image = imageFile;
		values.type = "contest";

		if (!imageFile) {
			notify("Please add image!", "warning");
		} else {
			console.log("Success:", values);
			setButtonLoading(true);
			dispatch(
				addAcademicExcellence(user._id, values, () => {
					notify("Contest Won Added");
					form.resetFields();
					setImageFile(null);
					setFileKey(Date.now());
					setButtonLoading(false);
				})
			);
		}
	};

	const handleImageChange = (e) => {
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
				// hidden={
				// 	user && user?.isFinished
				// 		? true
				// 		: data &&
				// 		  data?.academic[0]?.academicContestsWon
				// 				?.length >= 50
				// 		? true
				// 		: false
				// }
				hidden={true}
			>
				<div className="flex flex-wrap mb-1">
					<div className="col-12 flex-wrap">
						<Form.Item
							className="col-6 col-md-12 p-half mb-0"
							label="Academic Contest Participated"
							name="contestName"
							rules={[
								{
									required: true,
									message:
										"Please input academic contests participated!",
								},
							]}
						>
							<Input allowClear />
						</Form.Item>
						<SelectYearLevel />

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
							<Select>
								<Option value="1st">1st</Option>
								<Option value="2nd">2nd</Option>{" "}
								<Option value="3rd">3rd</Option>{" "}
								<Option value="Finalist">Finalist</Option>{" "}
							</Select>
						</Form.Item>
						<Form.Item
							className="col-2 col-md-12 p-half"
							label="Individual/Team Award"
							name="awardType"
							rules={[
								{
									required: true,
									message: "Please select award type!",
								},
							]}
						>
							<Select>
								<Option value="Individual">Individual</Option>
								<Option value="Team Award">
									Team Award
								</Option>{" "}
							</Select>
						</Form.Item>
						<Form.Item
							className="col-3 col-md-12 p-half"
							label="At what level is the award given?"
							name="levelAwardGiven"
							rules={[
								{
									required: true,
									message: "Please select level award given!",
								},
							]}
						>
							<Select>
								<Option value="Classroom">Classroom</Option>
								<Option value="Department/Grade Level">
									Department/Grade Level
								</Option>
								<Option value="College/Program (ex: Regular, STE, SPA, SPJ, SPS)">
									College/Program (ex: Regular, STE, SPA, SPJ,
									SPS)
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
								<Option value="Provincial">Provincial</Option>{" "}
								<Option value="Regional">Regional</Option>{" "}
								<Option value="National">National</Option>{" "}
								<Option value="International">
									International
								</Option>
							</Select>
						</Form.Item>

						<Form.Item
							className="col-4 col-md-12 p-half mb-0"
							label="Name of the organization/institution that gave the award"
							name="organization"
							rules={[
								{
									required: true,
									message:
										"Please input organization/institution name!",
								},
							]}
						>
							<Input allowClear />
						</Form.Item>

						<Form.Item
							className="col-2 col-md-12 p-half"
							label="Date Received"
							name="dateReceived"
							rules={[
								{
									required: true,
									message: "Please input date received!",
								},
							]}
						>
							<DatePicker allowClear style={{ width: "100%" }} />
						</Form.Item>

						<div
							className="col-1 col-md-12 p-half mb-0"
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
				<AcademicContestsWonTable
					data={data && data.academic[0].academicContestsWon}
				/>
			</div>
		</div>
	);
};

export default AcademicContestsWon;
