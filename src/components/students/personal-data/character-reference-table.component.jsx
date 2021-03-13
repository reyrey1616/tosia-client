import React from "react";
import { Table } from "antd";

const CharacterReferencesTable = ({ data }) => {
	const columns = [
		{
			title: "Fullname",
			dataIndex: "fullName",
			key: "fullName",
		},
		{
			title: "Position/Affliation",
			dataIndex: "position",
			key: "position",
		},
		{
			title: "Contact No.",
			dataIndex: "contactNumber",
			key: "contactNumber",
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
