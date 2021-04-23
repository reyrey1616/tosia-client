import React from "react";
import { Table, Avatar, Image, Button } from "antd";

import { useHistory } from "react-router-dom";

const StudentsTable = ({ data, userType }) => {
	const history = useHistory();
	const columns = [
		// {
		// 	title: "Image",
		// 	dataIndex: "image",
		// 	key: "image",
		// 	render: (val) => (
		// 		<Avatar
		// 			size={60}
		// 			shape="square"
		// 			src={
		// 				<Image
		// 					src={`${process.env.REACT_APP_MEDIA_DIRECTORY}students/${val}`}
		// 				/>
		// 			}
		// 		/>
		// 	),
		// },
		{
			title: "Fullname",
			dataIndex: "fname",
			key: "fname",
			render: (col, row) => `${row.fname} ${row.mname} ${row.lname}`,
		},
		{
			title: "Designation",
			dataIndex: "designation",
			key: "designation",
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
		},
		{
			title: "Phone #",
			dataIndex: "phoneNumber",
			key: "phoneNumber",
		},

		{
			title: "Action",
			render: (val) => {
				return (
					<Button
						onClick={() => {
							history.push(
								`/admin/evaluator/${val._id}/students`
							);
						}}
					>
						Manage
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
