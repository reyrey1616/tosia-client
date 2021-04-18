import React from "react";
import { Table, Avatar, Image, Button } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteAcademicExcellence } from "../../../functions/academic-excellence";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import EvaluationForm from "../../shared/evaluation-form.component";
const TrainingAttendedTable = ({ data, userType, docId, student }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const columns = [
		{
			title: "Seminars/Trainings Attended",
			dataIndex: "training",
			key: "training",
		},
		{
			title: "Requirement for graduation",
			dataIndex: "isRequirement",
			key: "isRequirement",
		},
		{
			title: "Level",
			dataIndex: "level",
			key: "level",
		},

		{
			title:
				"Name of the organization/institution that organized the seminar/training",
			dataIndex: "organization",
			key: "organization",
		},
		{
			title: "Level the event organized",
			dataIndex: "eventOrganizedLevel",
			key: "eventOrganizedLevel",
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
							src={`${process.env.REACT_APP_MEDIA_DIRECTORY}academic/${val}`}
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
							awardType: "academic",
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
									deleteAcademicExcellence(
										currentUser &&
											currentUser._id,
										{
											type: "seminar",
											row_id: val.id,
										},
										() => {
											notify(
												"Academic-Related Seminar/Training Deleted"
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
			columns={columns}
			pagination={{ defaultPageSize: 5 }}
			rowKey="id"
		/>
	);
};

export default TrainingAttendedTable;
