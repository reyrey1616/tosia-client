import React from "react";
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
		fullname: "Mike Guttierez",
		position: "Actor",
		contactNumber: "09182254329",
	},

	{
		key: "2",
		fullname: "Kevin Durant",
		position: "Athlete",
		contactNumber: "09182254329",
	},
];

const CharacterReferencesTable = () => {
	const columns = [
		{
			title: "Fullname",
			dataIndex: "fullname",
			key: "fullname",
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
		<Table dataSource={dataSource} columns={columns} pagination={false} />
	);
};

export default CharacterReferencesTable;
