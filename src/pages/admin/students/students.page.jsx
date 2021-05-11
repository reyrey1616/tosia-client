import React, { useEffect, useState } from "react";
import StudentsTable from "../../../components/shared/students-table/students-table.component";
import { useSelector } from "react-redux";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Spinner from "../../../components/hoc/spinner/spinner.component";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import { getStudents } from "../../../functions/students";

const { Option } = Select;
const StudentsPage = () => {
	const userData = useSelector(selectCurrentUser);
	const [students, setStudents] = useState([]);
	const [searchText, setSearchText] = useState("");
	// const [categorySelected, setCategory] = useState("");
	useEffect(async () => {
		const data = await getStudents("admin");
		setStudents(data);
	}, [getStudents]);

	const filteredData = () => {
		return (
			students &&
			students.filter((item) => {
				return (
					item?.fname
						.toLowerCase()
						.includes(searchText?.toLowerCase()) ||
					item?.lname
						.toLowerCase()
						.includes(searchText?.toLowerCase()) ||
					(item?.category &&
						item?.category
							.toLowerCase()
							.includes(searchText?.toLowerCase()))
				);
			})
		);
	};
	return !!userData ? (
		<div className="admin-page-content">
			<h2 className="text-subtitle text-orange m-1">Students</h2>

			<div className="flex m-1">
				<div className="col-5 col-md-8">
					<Input
						onChange={(e) => setSearchText(e.target.value)}
						size="large"
						prefix={<SearchOutlined />}
						placeholder="Search Student"
					/>
				</div>
				<div className="col-2 col-md-4 pl-1">
					<Select
						style={{ width: "100%" }}
						onChange={(e) => setSearchText(e)}
						size="large"
						prefix={<SearchOutlined />}
						placeholder="Select Category"
					>
						<Option value="Junior High School">
							Junior High School{" "}
						</Option>
						<Option value="College">College </Option>
					</Select>
				</div>
			</div>
			<StudentsTable data={students && filteredData()} userType="admin" />
		</div>
	) : (
		<Spinner />
	);
};

export default StudentsPage;
