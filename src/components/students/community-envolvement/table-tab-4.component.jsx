import React from "react";
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
		citationReceived: "Citation 1",
		levelGiven: "1st Year",
		organization: "Org 1",
		dateReceived: "01/28/2020",
		portfolioPage: "Portfolio 1",
	},
];

const AwardsAndCitationsReceivedTable = () => {
	const columns = [
		{
			title: "Awards and Citation Received",
			dataIndex: "citationReceived",
			key: "citationReceived",
		},
		{
			title: "Level award given",
			dataIndex: "levelGiven",
			key: "levelGiven",
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

export default AwardsAndCitationsReceivedTable;
