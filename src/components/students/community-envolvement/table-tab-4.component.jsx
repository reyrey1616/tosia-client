import React from "react";
import { Table, Avatar, Image, Button, InputNumber } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommunityEnvolvement } from "../../../functions/community-envolvement";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";

const AwardsAndCitationsReceivedTable = ({ data, userType }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const columns = [
		{
			title: "Awards and Citation Received",
			dataIndex: "citationReceived",
			key: "citationReceived",
		},
		{
			title: "Level award given",
			dataIndex: "levelGiven",
			key: "levelGiven",
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
							src={`${process.env.REACT_APP_MEDIA_DIRECTORY}community/${val}`}
						/>
					}
				/>
			),
		},
		{
			title: "Action",
			render: (val) => {
				return userType === "evaluator" ? (
					<div className="flex">
						<InputNumber />
						<Button default> Submit</Button>
					</div>
				) : (
					<Confirmation
						title="Are you sure you want to delete this data?"
						confirmFn={() => {
							if (val.id) {
								dispatch(
									deleteCommunityEnvolvement(
										currentUser &&
											currentUser._id,
										{
											type: "citation",
											row_id: val.id,
										},
										() => {
											notify(
												"Award/Citation Deleted"
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
			rowKey={`id`}
			columns={columns}
			pagination={true}
		/>
	);
};

export default AwardsAndCitationsReceivedTable;
