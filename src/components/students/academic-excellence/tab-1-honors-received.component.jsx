import React from "react";
import { Table, Avatar, Image, Button } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteAcademicExcellence } from "../../../functions/academic-excellence";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import EvaluationForm from "../../shared/evaluation-form.component";

const HonorsReceivedTable = ({ data, userType, docId, student }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const columns = [
		{
			title: "Level",
			dataIndex: "level",
			key: "level",
		},
		{
			title: "Academic Distinction",
			dataIndex: "academicDistinction",
			key: "academicDistinction",
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
							subAwardId: val?.id,
							subAwardType: "honor",
							point: val?.points,
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
											type: "honor",
											row_id: val.id,
										},
										() => {
											notify(
												"Academic Honor Deleted"
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

export default HonorsReceivedTable;
