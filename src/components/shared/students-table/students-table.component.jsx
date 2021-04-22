import React from "react";
import { Table, Avatar, Image, Button } from "antd";

import { useHistory } from "react-router-dom";

const StudentsTable = ({ data }) => {
	const history = useHistory();
	const columns = [
		{
			title: "Image",
			dataIndex: "image",
			key: "image",
			render: (val) => (
				<Avatar
					size={60}
					shape="square"
					src={
						<Image
							src={`${process.env.REACT_APP_MEDIA_DIRECTORY}students/${val}`}
						/>
					}
				/>
			),
		},
		{
			title: "Fullname",
			dataIndex: "fname",
			key: "fname",
			render: (col, row) => `${row.fname} ${row.mname} ${row.lname}`,
		},
		{
			title: "School",
			dataIndex: "schoolName",
			key: "schoolName",
		},
		{
			title: "Level",
			dataIndex: "level",
			key: "level",
		},
		{
			title: "Category",
			dataIndex: "category",
			key: "category",
		},

		{
			title: "Action",
			render: (val) => {
				return (
					<Button
						onClick={() => {
							history.push(
								`/evaluator/student-profile/${val._id}`
							);
						}}
					>
						{" "}
						View
					</Button>
				);
			},
		},
	];
	return (
		<Table
			dataSource={data && data}
			rowKey={`_id`}
			columns={columns}
			pagination={{ defaultPageSize: 5 }}
		/>
	);
};

export default StudentsTable;
