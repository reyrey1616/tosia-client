import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import Spinner from "../../../components/hoc/spinner/spinner.component";
import {
	selectCurrentUser,
	selectCurrentSelectedStudent,
} from "../../../redux/auth/auth.selectors";
import { getOneStudent } from "../../../functions/students";
import { useParams } from "react-router-dom";
import { getOneStudentStart } from "../../../redux/auth/auth.actions";
import AcademicExcellenceScoreTable from "../../../components/admin/student-score-tables/academic-scores-table.component";

import LeadershipScoreTable from "../../../components/admin/student-score-tables/leadership-scores-table.component";

import CommunityScoreTable from "../../../components/admin/student-score-tables/community-scores-table.component";

import { AcademicExcellenceData, LeadershipData, CommunityData } from "./utils";
import { useReactToPrint } from "react-to-print";

const StudentScorePage = () => {
	const userData = useSelector(selectCurrentUser);
	const student = useSelector(selectCurrentSelectedStudent);
	const params = useParams();
	const dispatch = useDispatch();
	const [finalScore, setFinalScore] = useState(0);
	const [academicExcellenceData, setAcadedemicExcellenceData] = useState({
		totalScore: 0,
		data: [],
	});

	const [leadershipData, setLeadershipData] = useState({
		totalScore: 0,
		data: [],
	});

	const [communityData, setCommunityData] = useState({
		totalScore: 0,
		data: [],
	});

	const printRef = React.useRef();

	useEffect(async () => {
		dispatch(getOneStudentStart(params.id, "admin"));
	}, [getOneStudent]);

	useEffect(() => {
		if (!student) return;

		if (student?.academic) {
			const { totalScore, data } = AcademicExcellenceData(
				student?.academic[0]?.academicHonorsReceived,
				student?.academic[0]?.citationsReceived,
				student?.academic[0]?.academicContestsWon,
				student?.academic[0]?.nonAcademicAwards,
				student?.academic[0]?.seminarsAttended
			);
			setAcadedemicExcellenceData({ totalScore, data });
			setFinalScore(finalScore + totalScore);
		}

		if (student?.leadership_virtual && student?.community) {
			console.log(student?.community[0]?.organizations);
			const { totalScore, data } = LeadershipData(
				student?.leadership_virtual[0]?.orgEnvolvement,
				student?.community[0]?.organizations,
				student?.leadership_virtual[0]?.leadershipTraining,
				student?.leadership_virtual[0]?.citation,
				student?.leadership_virtual[0]?.activitiesOrganized
			);
			setLeadershipData({ totalScore, data });
			setFinalScore(finalScore + totalScore);
		}

		if (student?.community) {
			const { totalScore, data } = CommunityData(
				student?.community[0]?.activitiesAttended,
				student?.community[0]?.awardsAndCitations,
				student?.community[0]?.activitiesOrganized
			);
			setCommunityData({ totalScore, data });
			setFinalScore(finalScore + totalScore);
		}
	}, [student]);

	const handlePrint = useReactToPrint({
		content: () => printRef.current,
	});

	return !!userData && !!student ? (
		<div className="admin-page-content ">
			<div className="containerToPrint p-2" ref={printRef}>
				<div className="row mb-2">
					<div className="col-7">
						<h3>
							Name:{" "}
							<label className="text-orange">{`${student?.fname} ${student?.mname} ${student?.lname}`}</label>
						</h3>
						<h3>
							{" "}
							School:{" "}
							<label className="text-orange">{`${student?.schoolName}`}</label>{" "}
						</h3>
						<h3>
							{" "}
							Level:{" "}
							<label className="text-orange">{`${student?.category}`}</label>{" "}
						</h3>
					</div>
					<div className="col-5 align-items-flex-center">
						<div className="row align-items-flex-center">
							<h3 className="p-1">SCORE</h3>{" "}
							<h1 className="p-1 text-orange">
								{finalScore?.toFixed(2)}
							</h1>
						</div>
					</div>
				</div>

				<div className="flex-column">
					<div className="col-12 mb-2">
						<AcademicExcellenceScoreTable
							data={academicExcellenceData?.data}
							totalScore={academicExcellenceData?.totalScore}
						/>
					</div>
					<div className="col-12 mb-2">
						<LeadershipScoreTable
							data={leadershipData?.data}
							totalScore={leadershipData?.totalScore}
						/>
					</div>
					<div className="col-12 mb-2">
						<CommunityScoreTable
							data={communityData?.data}
							totalScore={communityData?.totalScore}
						/>
					</div>
				</div>
			</div>

			<div className="flex justify-content-center mt-4">
				<Button type="primary" size="large" onClick={handlePrint}>
					{" "}
					Print{" "}
				</Button>
			</div>
		</div>
	) : (
		<Spinner />
	);
};

export default StudentScorePage;
