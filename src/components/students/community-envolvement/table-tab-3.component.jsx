import React from "react";
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
		activityName: "Activity 1",
		description: "Description 1",
		initiated: "Personally",
		levelGiven: "National",
		role: "Leader",
		dateConducted: "01/28/2020",
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
			title: "Beneficiaries",
			dataIndex: "beneficiaries",
			key: "beneficiaries",
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
			title: "Date Conducted",
			dataIndex: "dateConducted",
			key: "dateConducted",
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
