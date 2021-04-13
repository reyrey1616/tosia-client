import React from "react";
import { Checkbox, Form, Button, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/auth/auth.selectors";
import Logo from "../assets/logo-circle.png";
import { updateUserInfo } from "../functions/personal-data";
import { notify } from "../components/global/alerts/alerts.component";

const DataPrivacy = () => {
	const [btnLoading, setBtnLoading] = React.useState(false);

	const dispatch = useDispatch();
	const data = useSelector(selectCurrentUser);
	const onFinish = (values) => {
		setBtnLoading(true);
		values.isFirstLoggedIn = !values.isFirstLoggedIn;
		dispatch(
			updateUserInfo(data && data?._id, values, () => {
				notify("Welcome to your profile!");
			})
		);
	};
	return (
		<div className="p-5 pl-9 pr-9">
			<div className="flex col-12 justify-content-center m-1">
				<Avatar src={Logo} size={100} />
			</div>

			<Form layout="vertical" name="basic" onFinish={onFinish}>
				<p>
					By accepting this, you consent the collection, use,
					recording, storing, organizing, consolidation, updating
					disclosure, transfer, sharing and/or general processing
					of you Personal Data by The Outstanding Students of
					Iloilo Awards by JCI Regatta and as stated above you
					undertake in turn to help the organization observe the
					requirements of the Data Privacy Acts of the
					Philippines (Republic Act No. 10173), its implementing
					rules and regulations and other relevant issuances of
					the National Privacy Commission. The permission you are
					granting to the organization shall be effective
					immediately and shall continue for a period of one (1)
					year from the date of this consent form (the
					“Permission Read”) unless you inform us in writing of
					your decision to revoke your permission prior to the
					end of the Permission Period, in which case, the
					organization shall immediately cease from collecting,
					using, recording, storing, organizing, consolidating,
					updating, disclosing, transferring, sharing and/or
					general processing of your Personal Data.
				</p>

				<Form.Item
					name="isFirstLoggedIn"
					valuePropName="checked"
					rules={[
						{
							validator: (_, value) =>
								value
									? Promise.resolve()
									: Promise.reject(
											new Error(
												"Should accept agreement!"
											)
									  ),
						},
					]}
				>
					<Checkbox>
						I hereby consent to the collection, use,
						recording, storing, organizing, consolidation,
						updating, disclosure, transfer, sharing and/or
						general processing of my Personal Data by The
						Outstanding Students of Iloilo Awards by JCI
						Regatta in accordance with the terms of this
						Personal Data Protection Statement for Applicants.
					</Checkbox>
				</Form.Item>

				<div className="flex col-12 justify-content-center mt-2">
					<Button
						type="primary"
						htmlType="submit"
						loading={btnLoading}
					>
						{" "}
						Proceed{" "}
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default DataPrivacy;
