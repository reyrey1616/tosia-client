import React from "react";
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
		training: "Training 1",
		level: "1st Year",
		organization: "Org 1",
		dateAttended: "01/28/2020",
		portfolioPage: "Portfolio 1",
	},
];

const LeadershipTrainingAttendedTable = () => {
	const columns = [
		{
			title: "Seminars/Trainings Attended",
			dataIndex: "training",
			key: "training",
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
			title: "Date Attended",
			dataIndex: "dateAttended",
			key: "dateAttended",
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

export default LeadershipTrainingAttendedTable;
