import React from "react";
import { Form, Select } from "antd";
import { useSelector } from "react-redux";
import { selectCategory } from "../../redux/auth/auth.selectors";
const { Option } = Select;
const YearLevel = () => {
	const level = useSelector(selectCategory);
	if (level && level) {
		return level && level === "College" ? (
			<Form.Item
				className="col-2 col-md-12 p-half"
				label="College Year Level"
				name="level"
				rules={[
					{
						required: true,
						message: "Please select college year level!",
					},
				]}
			>
				<Select>
					<Option value="1st Year" selected>
						1st Year
					</Option>
					<Option value="2nd Year" selected>
						2nd Year
					</Option>
					<Option value="3rd Year" selected>
						3rd Year
					</Option>
					<Option value="4th Year">4th Year</Option>
					<Option value="5th Year">5th Year</Option>
				</Select>
			</Form.Item>
		) : (
			<Form.Item
				className="col-2 col-md-12 p-half"
				label="Grade Level"
				name="level"
				rules={[
					{
						required: true,
						message: "Please select grade level!",
					},
				]}
			>
				<Select>
					<Option value="Grade 7">Grade 7</Option>
					<Option value="Grade 8">Grade 8</Option>
					<Option value="Grade 9">Grade 9</Option>
					<Option value="Grade 10">Grade 10</Option>
				</Select>
			</Form.Item>
		);
	} else {
		return (
			<div className="align-items-flex-center">
				{" "}
				<b className="text-red">
					Please select your category first on the Personal Data
					section.
				</b>{" "}
			</div>
		);
	}
};

export default YearLevel;
