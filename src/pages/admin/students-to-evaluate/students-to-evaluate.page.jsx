import React, { useEffect, useState } from "react";
import StudentsTable from "../../../components/shared/students-table/students-table.component";
import { useSelector } from "react-redux";
import { Select, Button } from "antd";
import Spinner from "../../../components/hoc/spinner/spinner.component";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
import {
	getOneEvaluator,
	addStudentToEvaluator,
	deleteStudentToEvaluator,
} from "../../../functions/evaluators";
import { getStudents } from "../../../functions/students";
import { useParams } from "react-router-dom";
import { notify } from "../../../components/global/alerts/alerts.component";
const { Option } = Select;
const StudentsToEvaluate = () => {
	const params = useParams();
	const userData = useSelector(selectCurrentUser);
	const [evaluator, setEvaluator] = useState(null);
	const [students, setStudents] = useState(null);
	const [buttonLoading, setButtonLoading] = useState(false);
	const [selectedStudent, setSelectedStudent] = useState(null);
	useEffect(async () => {
		const isMounted = true;
		if (isMounted) {
			const data = await getOneEvaluator(params.id);
			setEvaluator(data);

			const studentsFromEvaluator = data?.studentToEvaluate;

			const students = await getStudents("admin", false);

			console.log(students);

			setStudents(
				removeAddedStudentToDropdown(
					students,
					studentsFromEvaluator
				)
			);
		}

		return () => {
			isMounted = false;
		};
	}, [params, getStudents]);

	const convertArrayToActualStudentsData = (arr) => {
		return arr?.map((item) => {
			return {
				...item?.student,
			};
		});
	};

	const removeAddedStudentToDropdown = (
		allStudents,
		studentsFromEvaluator
	) => {
		return allStudents?.filter(
			(ar) =>
				!studentsFromEvaluator?.find(
					(rm) => rm?.student?._id === ar?._id
				)
		);
	};

	const onChange = (val) => {
		setSelectedStudent(val);
	};

	const addStudent = async () => {
		if (selectedStudent && evaluator) {
			if (!selectedStudent) {
				notify("Please select student to add", "warning");
			} else {
				setButtonLoading(true);
				const updatedEvaluator = await addStudentToEvaluator(
					evaluator?._id,
					selectedStudent,
					() => {
						setTimeout(() => {
							notify("Student Added");
							setButtonLoading(false);
						}, 500);
					}
				);

				setEvaluator(updatedEvaluator);
				setStudents(
					removeAddedStudentToDropdown(
						students,
						updatedEvaluator?.studentToEvaluate
					)
				);
				setSelectedStudent(null);
			}
		} else {
			notify(
				"Something went wrong. Please refresh the page!",
				"warning"
			);
		}
	};

	const handleRemoveStudent = async (student) => {
		if (student && evaluator) {
			const updatedEvaluator = await deleteStudentToEvaluator(
				evaluator?._id,
				student?._id,
				() => {
					setTimeout(() => {
						notify("Student Removed");
					}, 500);
				}
			);

			setEvaluator(updatedEvaluator);
			setStudents([...students, student]);
			setSelectedStudent(null);
		} else {
			notify(
				"Something went wrong. Please refresh the page!",
				"warning"
			);
		}
	};

	return !!userData && evaluator && students ? (
		<div className="admin-page-content">
			<h2 className="text-subtitle text-orange m-1">
				Students to Evaluate By{" "}
				{`${evaluator?.fname} ${evaluator?.mname} ${evaluator?.lname}`}
			</h2>

			<div className="flex p-half mb-1 mt-1">
				<Select
					showSearch
					style={{ width: 300 }}
					placeholder="Select a student"
					optionFilterProp="children"
					className="m-half"
					onChange={onChange}
					value={selectedStudent}
				>
					{students?.map((item) => (
						<Option value={item?._id} key={item?._id}>
							{" "}
							{`${item?.fname} ${item?.mname} ${item?.lname}`}{" "}
						</Option>
					))}
				</Select>

				<Button
					className="m-half"
					htmlType="submit"
					type="primary"
					onClick={() => addStudent()}
					loading={buttonLoading}
				>
					Add Student
				</Button>
			</div>

			<StudentsTable
				data={
					evaluator &&
					convertArrayToActualStudentsData(
						evaluator?.studentToEvaluate
					)
				}
				userType="admin"
				removeStudent={handleRemoveStudent}
			/>
		</div>
	) : (
		<Spinner />
	);
};

export default StudentsToEvaluate;
