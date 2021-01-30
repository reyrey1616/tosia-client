import React from "react";
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
		activityName: "Activity 1",
		description: "Description 1",
		initiated: "Personally",
		levelImplemented: "National",
		role: "Leader",
		dateImplemented: "01/28/2020",
		portfolioPage: "Portfolio 1",
	},
];

const ActivitiesOrganizedTable = () => {
	const columns = [
		{
			title: "Activity Name",
			dataIndex: "activityName",
			key: "activityName",
		},
		{
			title: "Short Description",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Iniated",
			dataIndex: "initiated",
			key: "initiated",
		},
		{
			title: "Level of Project Implemented",
			dataIndex: "levelImplemented",
			key: "levelImplemented",
		},
		{
			title: "Significant role in the project organized",
			dataIndex: "role",
			key: "role",
		},
		{
			title: "Date Implemented",
			dataIndex: "dateImplemented",
			key: "dateImplemented",
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

export default ActivitiesOrganizedTable;
