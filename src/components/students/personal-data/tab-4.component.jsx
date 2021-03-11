import React from "react";
import { Form, Input } from "antd";
import CharacterReferencesTable from "./character-reference-table.component";
const CharacterReferences = ({ data }) => {
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
					<div className="col-12 flex">
						<Form.Item
							className="col-4 col-md-12 p-half mb-0"
							label="Full Name"
							name="fullname"
							rules={[
								{
									required: true,
									message:
										"Please input character reference name",
								},
							]}
						>
							<Input size="large" allowClear />
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
							<Input size="large" allowClear />
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
							<Input size="large" allowClear />
						</Form.Item>
						<Form.Item
							className="col-1 col-md-12 p-0 mb-0 "
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
				<CharacterReferencesTable
					data={data && data.characterReference}
				/>
			</div>
		</div>
	);
};

export default CharacterReferences;
