import React from "react";
import { Table, Avatar, Image, Button } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteLeadership } from "../../../functions/leadership";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import EvaluationForm from "../../shared/evaluation-form.component";
import moment from "moment";
import sorter from "../../../utils/sorter";
const ActivitiesOrganizedTable = ({ data, userType, docId, student }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const columns = [
		{
			title: "Activity Name",
			dataIndex: "activityName",
			key: "activityName",
		},
		{
			title: "Name of Activity and Short Description",
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
			title: "Significant role in the activity organized",
			dataIndex: "role",
			key: "role",
		},
		// {
		// 	title: "Level the award is given",
		// 	dataIndex: "levelAwardGiven",
		// 	key: "levelAwardGiven",
		// },
		{
			title: "Date Implemented",
			dataIndex: "dateImplemented",
			key: "dateImplemented",
			render: (val) => moment(val).format("MMMM DD, YYYY"),
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
							src={`${process.env.REACT_APP_MEDIA_DIRECTORY}leadership/${val}`}
						/>
					}
				/>
			),
		},
		{
			title: "Action",
			render: (val) => {
				return userType === "evaluator" ? (
					<EvaluationForm
						data={{
							evaluator: currentUser && currentUser._id,
							student,
							parentAward: docId,
							awardType: "leadership",
							subAwardId: val.id,
							subAwardType: "activities_organized",
							point: val?.points,
						}}
					/>
				) : (
					<Confirmation
						title="Are you sure you want to delete this data?"
						confirmFn={() => {
							if (val.id) {
								dispatch(
									deleteLeadership(
										currentUser &&
											currentUser._id,
										{
											type:
												"activities_organized",
											row_id: val.id,
										},
										() => {
											notify(
												"Activity Organized Deleted"
											);
										}
									)
								);
							}
						}}
					>
						{!currentUser?.isFinished && (
							<Button danger> Delete</Button>
						)}
					</Confirmation>
				);
			},
		},
	];
	return (
		<Table
			dataSource={data && sorter(data, "dateImplemented")}
			rowKey={`id`}
			columns={columns}
			pagination={{ defaultPageSize: 5 }}
		/>
	);
};

export default ActivitiesOrganizedTable;
