import React from "react";
import { Form, Select } from "antd";
import { useSelector } from "react-redux";
import { selectCategory } from "../../redux/auth/auth.selectors";
const { Option } = Select;
const YearLevel = () => {
	const level = useSelector(selectCategory);
	console.log(level);
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
			<Select defaultValue="1st Year" size="large">
				<Option value="1st Year">1st Year</Option>
				<Option value="2nd Year">2nd Year</Option>

				<Option value="3rd Year">3rd Year</Option>

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
			<Select size="large">
				<Option value="Grade 7">Grade 7</Option>
				<Option value="Grade 8">Grade 8</Option>
				<Option value="Grade 9">Grade 9</Option>{" "}
				<Option value="Grade 10">Grade 10</Option>
				<Option value="Grade 11">Grade 11</Option>
				<Option value="Grade 12">Grade 12</Option>
			</Select>
		</Form.Item>
	);
};

export default YearLevel;
