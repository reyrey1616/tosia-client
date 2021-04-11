import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import CharacterReferencesTable from "./character-reference-table.component";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../../functions/personal-data";
import { notify } from "../../global/alerts/alerts.component";
const CharacterReferences = ({ data, userType }) => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();
	const [characterReferences, setCharacterReferences] = useState();
	const [buttonLoading, setButtonLoading] = useState(false);

	useEffect(() => {
		setCharacterReferences(data && data.characterReference);
	}, [data]);

	const onFinish = (values) => {
		if (data && characterReferences.length >= 3) {
			notify(
				"Sorry, you are unable to add character reference. You have already reached the limit of 3 character references!",
				"warning"
			);
		} else {
			const updatedData = [...characterReferences, values];
			setButtonLoading(true);
			dispatch(
				updateUserInfo(
					data && data._id,
					{ characterReference: updatedData },
					() => {
						notify("Character Reference Added!");
						setCharacterReferences(updatedData);
						form.resetFields();
						setButtonLoading(false);
					}
				)
			);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="tab-page-container">
			{userType !== "evaluator" && (
				<Form
					form={form}
					layout="vertical"
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<div className="flex flex-wrap mb-2">
						<div className="col-12 flex">
							<Form.Item
								className="col-4 col-md-12 p-half mb-0"
								label="Full Name"
								name="fullName"
								rules={[
									{
										required: true,
										message:
											"Please input character reference name",
									},
								]}
							>
								<Input allowClear />
							</Form.Item>
							<Form.Item
								className="col-3 col-md-12 p-half mb-0"
								label="Position/Affliation"
								name="position"
								rules={[
									{
										required: true,
										message:
											"Please input position/affliation!",
									},
								]}
							>
								<Input allowClear />
							</Form.Item>
							<Form.Item
								className="col-3 col-md-12 p-half mb-0"
								label="Contact No."
								name="contactNumber"
								rules={[
									{
										required: true,
										message:
											"Please input character reference contact number!",
									},
								]}
							>
								<Input allowClear />
							</Form.Item>
							<Form.Item
								className="col-2 col-md-12 p-half mb-0"
								label="Click here to save"
							>
								<Button
									htmlType="submit"
									type="primary"
									loading={buttonLoading}
								>
									Add Entry
								</Button>
							</Form.Item>
						</div>
					</div>
				</Form>
			)}

			<div className="table-container mt-2">
				<CharacterReferencesTable
					data={data && characterReferences}
					studentId={data && data._id}
				/>
			</div>
		</div>
	);
};

export default CharacterReferences;
