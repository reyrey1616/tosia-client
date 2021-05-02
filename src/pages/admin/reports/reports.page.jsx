import React, { useEffect, useState } from "react";
import OverallSummary from "../../../components/admin/reports/summary.component";
import { useSelector } from "react-redux";
import Spinner from "../../../components/hoc/spinner/spinner.component";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import { getStudents } from "../../../functions/students";

const Reports = () => {
	const userData = useSelector(selectCurrentUser);
	const [students, setStudents] = useState([]);
	const [collegeCount, setCollegeCount] = useState(0);
	const [jhsCount, setJhsCount] = useState(0);

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
					students?.filter(
						(item) => item?.isDoneEvaluated === true
					)?.length
				}
			/>
			{/* <StudentsTable
				data={students && filteredData()}
				userType="admin"
			/> */}
		</div>
	) : (
		<Spinner />
	);
};

export default Reports;
