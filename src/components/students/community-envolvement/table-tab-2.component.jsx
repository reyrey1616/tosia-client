import React from "react";
import { Table, Avatar, Image, Button } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteCommunityEnvolvement } from "../../../functions/community-envolvement";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import EvaluationForm from "../../shared/evaluation-form.component";
import moment from "moment";
import sorter from "../../../utils/sorter";
const ActivitiesAttendedTable = ({ data, userType, docId, student }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
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
			title: "Name of the Organization that organized the Activity",
			dataIndex: "organization",
			key: "organization",
		},
		// {
		// 	title: "Level the award is given",
		// 	dataIndex: "levelAwardGiven",
		// 	key: "levelAwardGiven",
		// },
		{
			title: "Date Attended",
			dataIndex: "dateAttended",
			key: "dateAttended",
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
							src={`${process.env.REACT_APP_MEDIA_DIRECTORY}community/${val}`}
						/>
					}
				/>
			),
		},
		// {
		// 	title: userType === "admin" ? "Points" : "Action",
		// 	render: (val) => {
		// 		if (userType === "admin") {
		// 			return val?.points;
		// 		}
		// 		return userType === "evaluator" ? (
		// 			<EvaluationForm
		// 				data={{
		// 					evaluator: currentUser && currentUser._id,
		// 					student,
		// 					parentAward: docId,
		// 					awardType: "community",
		// 					subAwardId: val.id,
		// 					subAwardType: "activities",
		// 					point: val?.points,
		// 				}}
		// 			/>
		// 		) : (
		// 			<Confirmation
		// 				title="Are you sure you want to delete this data?"
		// 				confirmFn={() => {
		// 					if (val.id) {
		// 						dispatch(
		// 							deleteCommunityEnvolvement(
		// 								currentUser && currentUser._id,
		// 								{
		// 									type: "activities",
		// 									row_id: val.id,
		// 								},
		// 								() => {
		// 									notify(
		// 										"Activities Attended Deleted"
		// 									);
		// 								}
		// 							)
		// 						);
		// 					}
		// 				}}
		// 			>
		// 				{!currentUser?.isFinished && (
		// 					<Button danger hidden={true}>
		// 						{" "}
		// 						Delete
		// 					</Button>
		// 				)}
		// 			</Confirmation>
		// 		);
		// 	},
		// },
	];
	return (
		<Table
			dataSource={data && sorter(data, "dateAttended")}
			rowKey={`id`}
			columns={columns}
			pagination={{ defaultPageSize: 5 }}
		/>
	);
};

export default ActivitiesAttendedTable;
