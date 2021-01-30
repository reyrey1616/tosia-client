import React from "react";
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
		training: "Training 1",
		isRequirement: "Yes",
		level: "1st Year",
		organization: "Org 1",
		dateAttended: "01/28/2020",
		portfolioPage: "Portfolio 1",
	},
];

const TrainingAttendedTable = () => {
	const columns = [
		{
			title: "Seminar/Training Attended",
			dataIndex: "training",
			key: "training",
		},
		{
			title: "Requirement for graduation",
			dataIndex: "isRequirement",
			key: "isRequirement",
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

export default TrainingAttendedTable;
