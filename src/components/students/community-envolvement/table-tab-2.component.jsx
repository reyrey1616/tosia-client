import React from "react";
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
		activityName: "Activity 1",
		beneficiaries: "Beneficiaries 1",
		levelImplemented: "National",
		organization: "Org 1",
		dateAttended: "01/28/2020",
		portfolioPage: "Portfolio 1",
	},
];

const ActivitiesAttendedTable = () => {
	const columns = [
		{
			title: "Activity Name",
			dataIndex: "activityName",
			key: "activityName",
		},
		{
			title: "Beneficiaries",
			dataIndex: "beneficiaries",
			key: "beneficiaries",
		},

		{
			title: "Level of the Activity Implemented",
			dataIndex: "levelImplemented",
			key: "levelImplemented",
		},
		{
			title: "Name of Organization that organized the Activity",
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

export default ActivitiesAttendedTable;
