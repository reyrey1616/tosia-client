import React from "react";
import { Table } from "antd";

const LeadershipScoresTable = ({ data, totalScore }) => {
	const columns = [
		{
			title: "B. Leadership",
			dataIndex: "title",
		},
		{
			title: "Score",
			dataIndex: "score",
			key: "score",
			render: (val) => val?.toFixed(2),
		},
		{
			title: "35%",
			dataIndex: "percentage",
			key: "percentage",
		},
		{
			title: totalScore?.toFixed(2),
			dataIndex: "scoreFromPercentage",
			key: "scoreFromPercentage",
			render: (val) => val?.toFixed(2),
		},
	];
	return (
		<Table
			dataSource={data && data}
			rowKey={`title`}
			pagination={false}
			columns={columns}
			id="leadership-score-table"
			bordered
		/>
	);
};

export default LeadershipScoresTable;
