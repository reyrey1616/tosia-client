import React from "react";
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
		contestName: "Citation 1",
		level: "1st Year",
		rank: "1st",
		organization: "Org 1",
		dateReceived: "01/28/2020",
		portfolioPage: "Portfolio 1",
	},
];

const NonAcademicContestsWonTable = () => {
	const columns = [
		{
			title: "Non-Academic Contests Participated",
			dataIndex: "contestName",
			key: "contestName",
		},
		{
			title: "Level",
			dataIndex: "level",
			key: "level",
		},
		{
			title: "Rank",
			dataIndex: "rank",
			key: "rank",
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

export default NonAcademicContestsWonTable;
