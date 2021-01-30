import React from "react";
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
		organization: "Org 1",
		position: "Officer",
		levelOperate: "National",
		inclusiveDate: "01/01/2020",
		portfolioPage: "Portfolio 1",
	},
];

const OrganizationInvolvementTable = () => {
	const columns = [
		{
			title: "Name of Organization",
			dataIndex: "organization",
			key: "organization",
		},
		{
			title: "Position/Designation",
			dataIndex: "position",
			key: "position",
		},
		{
			title: "At what level does organization operate?",
			dataIndex: "levelOperate",
			key: "levelOperate",
		},
		{
			title: "Inclusive Date",
			dataIndex: "inclusiveDate",
			key: "inclusiveDate",
		},
		{
			title: "Portfolio Page",
			dataIndex: "portfolioPage",
			key: "portfolioPage",
		},
	];
	return (
		<Table dataSource={dataSource} columns={columns} pagination={false} />
	);
};

export default OrganizationInvolvementTable;
