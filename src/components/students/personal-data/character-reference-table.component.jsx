import React from "react";
import { Button, Table } from "antd";
import { useDispatch } from "react-redux";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { deleteCharacterReference } from "../../../functions/personal-data";
const CharacterReferencesTable = ({ data, studentId }) => {
	const dispatch = useDispatch();

	const columns = [
		{
			title: "Full Name",
			dataIndex: "fullName",
			key: "fullName",
		},
		{
			title: "Position / Affiliation",
			dataIndex: "position",
			key: "position",
		},
		{
			title: "Contact No.",
			dataIndex: "contactNumber",
			key: "contactNumber",
		},
		{
			title: "Action",
			render: (val) => {
				return (
					<Confirmation
						title="Are you sure you want to delete this data?"
						confirmFn={() => {
							if (val.fullName) {
								const values = {
									fullName: val.fullName,
								};
								dispatch(
									deleteCharacterReference(
										studentId && studentId,
										values,
										() => {
											notify(
												"Character reference deleted!"
											);
										}
									)
								);
							}
						}}
					>
						<Button danger> Delete</Button>
					</Confirmation>
				);
			},
		},
	];
	return (
		<Table
			rowKey="fullName"
			dataSource={data && data}
			columns={columns}
			pagination={false}
		/>
	);
};

export default CharacterReferencesTable;
