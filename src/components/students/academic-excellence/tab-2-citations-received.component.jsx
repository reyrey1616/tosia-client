import React from "react";
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
		citationReceived: "Citation 1",
		level: "1st Year",
		organization: "Org 1",
		dateReceived: "01/28/2020",
		portfolioPage: "Portfolio 1",
	},
];

const CitationsReceivedTable = () => {
	const columns = [
		{
			title: "Citation Received",
			dataIndex: "citationReceived",
			key: "citationReceived",
		},
		{
			title: "Level",
			dataIndex: "level",
			key: "level",
		},
		{
			title: "Name of Organization/Institution that gives the award",
			dataIndex: "organization",
			key: "organization",
		},
		{
			title: "Date Received",
			dataIndex: "dateReceived",
			key: "dateReceived",
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

export default CitationsReceivedTable;
