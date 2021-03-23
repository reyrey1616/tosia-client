import React from "react";
import { Form, Input, Radio, Select, DatePicker, Avatar, Image } from "antd";
import moment from "moment";
import { selectCurrentSelectedStudent } from "../../../redux/auth/auth.selectors";
import { createStructuredSelector } from "reselect";
const dateFormat = "YYYY/MM/DD";

const { Option } = Select;
const PersonalData = ({ data }) => {
	return (
		data &&
		data && (
			<div className={"tab-page-container-no-scroll"}>
				<div className="flex flex-unwrap mb-2">
					<div className="col-3 p-1">
						<Image
							className="card"
							style={{ borderRadius: "20px" }}
							width={250}
							src={`${process.env.REACT_APP_MEDIA_DIRECTORY}students/${data.image}`}
						/>
					</div>
					<div className="col-9 p-1">
						<p className="font-25 fw-600 text-orange m-0">
							{data.fname} "{data.nickname}" {data.mname}{" "}
							{data.lname}
						</p>
						<p className="font-16 mb-1">
							{" "}
							{data.schoolName} - {data.level} -{" "}
							{data.category}
						</p>
						<Item title="Gender" value={data.gender} />
						<Item
							title="Nationality"
							value={data.nationality}
						/>
						<Item title="Birthdate" value={data.birthdate} />
						<Item title="Phone #" value={data.phoneNumber} />
						<Item title="Tel #" value={data.telNumber} />
						<Item title="Email" value={data.email} />
						<Item
							title="Department"
							value={data.department}
						/>
						<Item title="Course" value={data.course} />
						<Item title="Referral" value={data.referral} />
					</div>
				</div>
			</div>
		)
	);
};

const Item = ({ title, value }) => (
	<div
		className="flex mb-1"
		style={{ borderBottom: "0.5px solid rgba(220,220,220, 0.3)" }}
	>
		<div className="col-2">
			<label
				className="font-17"
				style={{
					width: "200px !important",
				}}
			>
				{" "}
				{title}:
			</label>
		</div>
		<label className="font-17 text-orange"> {value} </label>
	</div>
);

export default PersonalData;
