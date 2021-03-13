import React from "react";
import { Table, Avatar, Image, Button } from "antd";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useDispatch, useSelector } from "react-redux";
import { deleteLeadership } from "../../../functions/leadership";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";

const OrganizationInvolvementTable = ({ data }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const columns = [
		{
			title: "Name of Organization",
			dataIndex: "organizationName",
			key: "organizationName",
		},
		{
			title: "Position/Designation",
			dataIndex: "position",
			key: "position",
		},
		{
			title: "At what level does organization operate?",
			dataIndex: "levelOperate",
			key: "levelOperate",
		},
		{
			title: "Inclusive Date",
			dataIndex: "inclusiveDate",
			key: "inclusiveDate",
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
				return (
					<Confirmation
						title="Are you sure you want to delete this data?"
						confirmFn={() => {
							if (val.id) {
								dispatch(
									deleteLeadership(
										currentUser &&
											currentUser._id,
										{
											type: "org_envolvement",
											row_id: val.id,
										},
										() => {
											notify(
												"Organization Envolvement Deleted"
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

export default OrganizationInvolvementTable;
