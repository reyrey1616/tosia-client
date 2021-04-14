import React from "react";
import { Table, Avatar, Image, Button } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteLeadership } from "../../../functions/leadership";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import EvaluationForm from "../../shared/evaluation-form.component";

const LeadershipTrainingAttendedTable = ({
	data,
	userType,
	docId,
	student,
}) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const columns = [
		{
			title: "Seminars/Trainings Attended",
			dataIndex: "training",
			key: "training",
		},

		{
			title: "Level",
			dataIndex: "level",
			key: "level",
		},

		{
			title:
				"Name of the Organization/Institution that gave the award",
			dataIndex: "organization",
			key: "organization",
		},
		{
			title: "Level the award is given",
			dataIndex: "levelAwardGiven",
			key: "levelAwardGiven",
		},
		{
			title: "Date Attended",
			dataIndex: "dateAttended",
			key: "dateAttended",
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
							subAwardType: "training",
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
											type: "leadership",
											row_id: val.id,
										},
										() => {
											notify(
												"Leadership Training Deleted"
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
			dataSource={data && data}
			rowKey={`id`}
			columns={columns}
			pagination={{ defaultPageSize: 5 }}
		/>
	);
};

export default LeadershipTrainingAttendedTable;
