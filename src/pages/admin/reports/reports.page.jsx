import React, { useEffect, useState } from "react";
import OverallSummary from "../../../components/admin/reports/summary.component";
import { useSelector } from "react-redux";
import Spinner from "../../../components/hoc/spinner/spinner.component";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import { getStudents } from "../../../functions/students";
import StudentsTable from "../../../components/shared/students-table/students-table.component";
import { Select, Input, Skeleton } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const Reports = () => {
	const userData = useSelector(selectCurrentUser);
	const [students, setStudents] = useState([]);
	const [collegeCount, setCollegeCount] = useState(0);
	const [jhsCount, setJhsCount] = useState(0);
	const [searchText, setSearchText] = useState("");
	const [filterSubmission, setFilterSubmission] = useState();
	const [category, setCategory] = useState();

	useEffect(async () => {
		const data = await getStudents("admin");
		setStudents(data);

		const collegeCount =
			data &&
			data?.filter((item) => item?.category === "College")?.length;
		const jhsCount =
			data &&
			data?.filter((item) => item?.category === "Junior High School")
				?.length;

		setCollegeCount(collegeCount);
		setJhsCount(jhsCount);
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

	const filterSubmitStudent = () => {
		let value;
		if (filterSubmission === "Yes") {
			value = true;
		} else if (filterSubmission === "No") {
			value = false;
		} else {
			return students && students;
		}
		return (
			students &&
			students?.filter((item) => {
				return item?.isFinished === value;
			})
		);
	};

	return !!userData && students ? (
		<div className="admin-page-content">
			<h2 className="text-subtitle text-orange m-1">Summary</h2>

			<OverallSummary
				collegeCount={collegeCount}
				jhsCount={jhsCount}
				totalCount={students?.length}
				verifiedCount={
					students?.filter((item) => item?.isVerified === true)
						?.length
				}
				submittedCount={
					students?.filter((item) => item?.isFinished === true)
						?.length
				}
				evaluatedCount={
					students?.filter((item) => item?.isDoneEvaluated === true)
						?.length
				}
			/>

			<div>
				<h2 className="text-subtitle text-orange m-1">Students</h2>

				<div className="flex m-1">
					<div className="col-5 col-md-8">
						<Input
							onChange={(e) => {
								setFilterSubmission(null);
								setSearchText(e.target.value);
							}}
							size="large"
							prefix={<SearchOutlined />}
							placeholder="Search Student"
						/>
					</div>
					<div className="col-2 col-md-4 pl-1">
						<Select
							style={{ width: "100%" }}
							onChange={(e) => {
								setFilterSubmission(null);
								setSearchText(e);
								setCategory(e);
							}}
							size="large"
							prefix={<SearchOutlined />}
							value={category}
							placeholder="Select Category"
						>
							<Option value="Junior High School">
								Junior High School{" "}
							</Option>
							<Option value="College">College </Option>
						</Select>
					</div>
					<div className="col-2 col-md-4 pl-1">
						<Select
							style={{ width: "100%" }}
							onChange={(e) => {
								setCategory(null);
								setSearchText("");
								setFilterSubmission(e);
							}}
							size="large"
							prefix={<SearchOutlined />}
							placeholder="Students Submited"
							allowClear
							value={filterSubmission}
						>
							<Option value="Yes">Yes </Option>
							<Option value="No">No </Option>
						</Select>
					</div>
				</div>
				{students ? (
					<StudentsTable
						data={
							filterSubmission
								? filterSubmitStudent()
								: filteredData()
						}
						userType="admin"
						isReport={true}
					/>
				) : (
					<Skeleton active row={5} />
				)}
			</div>
		</div>
	) : (
		<Spinner />
	);
};

export default Reports;
