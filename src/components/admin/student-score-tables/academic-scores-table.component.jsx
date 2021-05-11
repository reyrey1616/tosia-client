import React from "react";
import { Table } from "antd";

const AcademicScoresTable = ({ data, totalScore }) => {
	const columns = [
		{
			title: "A. Academic Excellence",
			dataIndex: "title",
		},
		{
			title: "Score",
			dataIndex: "score",
			key: "score",
			render: (val) => val?.toFixed(2),
		},
		{
			title: "30%",
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
			id="academic-score-table"
			dataSource={data && data}
			rowKey={`title`}
			pagination={false}
			columns={columns}
			bordered
		/>
	);
};

export default AcademicScoresTable;
