import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import PersonalData from "../../../components/evaluator/personal-data/tab-1.component";
import FamilyData from "../../../components/students/personal-data/tab-2.component";
import SchoolContactDetails from "../../../components/students/personal-data/tab-3.component";
import CharacterReferences from "../../../components/students/personal-data/tab-4.component";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../../components/hoc/spinner/spinner.component";
import {
	selectCurrentUser,
	selectCurrentSelectedStudent,
} from "../../../redux/auth/auth.selectors";
import { getOneStudent } from "../../../functions/students";
import { useParams } from "react-router-dom";
import { getOneStudentStart } from "../../../redux/auth/auth.actions";
const { TabPane } = Tabs;

const StudentProfile = () => {
	const userData = useSelector(selectCurrentUser);
	const student = useSelector(selectCurrentSelectedStudent);
	const params = useParams();
	const dispatch = useDispatch();
	// const [student, setStudent] = useState({});

	useEffect(async () => {
		// const studentData = await getOneStudent(params.id, "evaluator");
		// console.log(studentData);
		dispatch(getOneStudentStart(params.id, "evaluator"));
		console.log(student);
	}, [getOneStudent]);

	return !!userData && !!student ? (
		<div className="admin-page-content">
			<Tabs defaultActiveKey="1" type="card">
				<TabPane
					tab="Personal Data"
					key="1"
					style={{
						height: "80vh",
						overflow: "auto",
					}}
				>
					<h2 className="text-subtitle text-orange m-1">
						{" "}
						Aspirant's Personal Data{" "}
					</h2>

					<PersonalData
						data={student && student}
						userType="evaluator"
					/>

					<h2 className="text-subtitle text-orange m-1">
						Family Data
					</h2>
					<FamilyData
						data={student && student}
						userType="evaluator"
					/>

					<h2 className="text-subtitle text-orange m-1">
						School Contact Details
					</h2>
					<SchoolContactDetails
						data={student && student}
						userType="evaluator"
					/>

					<h2 className="text-subtitle text-orange m-1">
						Character References
					</h2>
					<CharacterReferences
						data={student && student}
						userType="evaluator"
					/>
				</TabPane>
				<TabPane tab="Academic Excellence" key="2">
					<h2 className="text-subtitle text-orange m-1">
						{" "}
						Academic Excellence
					</h2>
				</TabPane>
				<TabPane tab="Leadership" key="3">
					<h2 className="text-subtitle text-orange m-1">
						{" "}
						Leadership
					</h2>
				</TabPane>
				<TabPane tab="Community Envolvement" key="4">
					<h2 className="text-subtitle text-orange m-1">
						Community Envolvement
					</h2>
				</TabPane>
			</Tabs>
		</div>
	) : (
		<Spinner />
	);
};

export default StudentProfile;
