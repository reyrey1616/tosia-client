import React from "react";
import { Table, Avatar, Image, Button } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteAcademicExcellence } from "../../../functions/academic-excellence";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";

const CitationsReceivedTable = ({ data }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const columns = [
		{
			title: "Citation Received",
			dataIndex: "citationReceived",
			key: "citationReceived",
		},
		{
			title: "Level",
			dataIndex: "level",
			key: "level",
		},
		{
			title: "Individual/Team Award",
			dataIndex: "awardType",
			key: "awardType",
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
			title: "Image",
			dataIndex: "image",
			key: "image",
			render: (val) => (
				<Avatar
					size={60}
					shape="square"
					src={
						<Image
							src={`${process.env.REACT_APP_MEDIA_DIRECTORY}academic/${val}`}
						/>
					}
				/>
			),
		},
		{
			title: "Action",
			render: (val) => {
				return (
					<Confirmation
						title="Are you sure you want to delete this data?"
						confirmFn={() => {
							if (val.id) {
								dispatch(
									deleteAcademicExcellence(
										currentUser &&
											currentUser._id,
										{
											type: "citation",
											row_id: val.id,
										},
										() => {
											notify(
												"Citation Received Deleted"
											);
										}
									)
								);
							}
						}}
					>
						<Button danger> Delete</Button>
					</Confirmation>
				);
			},
		},
	];
	return (
		<Table
			dataSource={data && data}
			rowKey="id"
			columns={columns}
			pagination={true}
		/>
	);
};

export default CitationsReceivedTable;
