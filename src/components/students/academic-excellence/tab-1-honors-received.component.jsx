import React from "react";
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
		level: "1st Year",
		academicDistinction: "Academic Distinction Sample 1",
		portfolioPage: "Portfolio 1",
	},
	{
		key: "2",
		level: "2nd Year",
		academicDistinction: "Academic Distinction Sample 2",
		portfolioPage: "Portfolio 2",
	},
];

const HonorsReceivedTable = () => {
	const columns = [
		{
			title: "Level",
			dataIndex: "level",
			key: "level",
		},
		{
			title: "Academic Distinction",
			dataIndex: "academicDistinction",
			key: "academicDistinction",
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

export default HonorsReceivedTable;
