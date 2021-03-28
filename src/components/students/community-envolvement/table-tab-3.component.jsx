import React from "react";
import { Table, Avatar, Image, Button, Input, InputNumber } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommunityEnvolvement } from "../../../functions/community-envolvement";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";

const ActivitiesOrganizedTable = ({ data, userType }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
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
											type:
												"activities_organized",
											row_id: val.id,
										},
										() => {
											notify(
												"Activities Organized Deleted"
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

export default ActivitiesOrganizedTable;
