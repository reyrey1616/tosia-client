import React, { useEffect } from "react";
import { Tabs } from "antd";
import PersonalData from "../../../components/evaluator/personal-data/tab-1.component";
import FamilyData from "../../../components/evaluator/personal-data/family-data.component";
import SchoolContactDetails from "../../../components/evaluator/personal-data/school-details.component";
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

// Academic Honors Received
import AcademicHonorsReceivedTable from "../../../components/students/academic-excellence/tab-1-honors-received.component";
import CitationsReceivedTable from "../../../components/students/academic-excellence/tab-2-citations-received.component";
import ContestWonTable from "../../../components/students/academic-excellence/tab-3-contests-won.component";
import NonAcademicAwardsTable from "../../../components/students/academic-excellence/tab-4-non-academic-contest-won.component";
import TrainingsAttendedTable from "../../../components/students/academic-excellence/tab-5-training-attended.component";

// Leadership
import LeadershipOrganizationEnvolvementTable from "../../../components/students/leadership/table-tab-1.component";
import LeadershipTraningAttendedTable from "../../../components/students/leadership/table-tab-2.component";
import LeadershipCitationTable from "../../../components/students/leadership/table-tab-3.component";
import LeadershipActivitiesOrganizedTable from "../../../components/students/leadership/table-tab-4.component";

// Leadership
import CommunityReligiousOrganizationTable from "../../../components/students/community-envolvement/table-tab-1.component";
import CommunityActivitiesAttendedTable from "../../../components/students/community-envolvement/table-tab-2.component";
import CommunityActivitiesOrganizedTable from "../../../components/students/community-envolvement/table-tab-3.component";
import CommunityCitationTable from "../../../components/students/community-envolvement/table-tab-4.component";

const { TabPane } = Tabs;

const StudentProfile = () => {
	const userData = useSelector(selectCurrentUser);
	const student = useSelector(selectCurrentSelectedStudent);
	const params = useParams();
	const dispatch = useDispatch();
	// const [student, setStudent] = useState({});

	useEffect(async () => {
		dispatch(getOneStudentStart(params.id, "admin"));
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

					<PersonalData data={student && student} />

					<h2 className="text-subtitle text-orange m-1">
						Family Data
					</h2>
					<FamilyData data={student && student} />

					<h2 className="text-subtitle text-orange m-1">
						School Contact Details
					</h2>
					<SchoolContactDetails data={student && student} />

					<h2 className="text-subtitle text-orange m-1">
						Character References
					</h2>
					<CharacterReferences
						data={student && student}
						userType="admin"
					/>
				</TabPane>

				{/* ACADEMIC EXCELLENCE TAB */}
				<TabPane
					tab="Academic Excellence"
					key="2"
					className="p-1"
					style={{
						height: "80vh",
						overflow: "auto",
					}}
				>
					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Academic Honors Received
						</p>

						<AcademicHonorsReceivedTable
							data={
								student &&
								student?.academic &&
								student?.academic[0]?.academicHonorsReceived
							}
							docId={
								student &&
								student?.academic &&
								student?.academic[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>

					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Citations Received
						</p>

						<CitationsReceivedTable
							data={
								student &&
								student?.academic &&
								student?.academic[0]?.citationsReceived
							}
							docId={
								student &&
								student?.academic &&
								student?.academic[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>

					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Contests Won
						</p>
						<ContestWonTable
							data={
								student &&
								student?.academic &&
								student?.academic[0]?.academicContestsWon
							}
							docId={
								student &&
								student?.academic &&
								student?.academic[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>

					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Non-Academic Awards
						</p>
						<NonAcademicAwardsTable
							data={
								student &&
								student?.academic &&
								student?.academic[0]?.nonAcademicAwards
							}
							docId={
								student &&
								student?.academic &&
								student?.academic[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>

					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Academic-Related Seminars and
							Training Attended
						</p>
						<TrainingsAttendedTable
							data={
								student &&
								student?.academic &&
								student?.academic[0]?.seminarsAttended
							}
							docId={
								student &&
								student?.academic &&
								student?.academic[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>
				</TabPane>

				{/* LEADERSHIP TAB */}
				<TabPane
					tab="Leadership"
					key="3"
					className="p-1"
					style={{
						height: "80vh",
						overflow: "auto",
					}}
				>
					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Organization Involvement
						</p>

						<LeadershipOrganizationEnvolvementTable
							data={
								student &&
								student?.leadership_virtual &&
								student?.leadership_virtual[0].orgEnvolvement
							}
							docId={
								student &&
								student?.leadership_virtual &&
								student?.leadership_virtual[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>

					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Leadership Trainings Attended
						</p>

						<LeadershipTraningAttendedTable
							data={
								student &&
								student?.leadership_virtual &&
								student?.leadership_virtual[0]
									.leadershipTraining
							}
							docId={
								student &&
								student?.leadership_virtual &&
								student?.leadership_virtual[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>

					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Awards and Citations Received
						</p>

						<LeadershipCitationTable
							data={
								student &&
								student?.leadership_virtual &&
								student?.leadership_virtual[0]?.citation
							}
							docId={
								student &&
								student?.leadership_virtual &&
								student?.leadership_virtual[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>

					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Activities Organized
						</p>

						<LeadershipActivitiesOrganizedTable
							data={
								student &&
								student?.leadership_virtual &&
								student?.leadership_virtual[0]
									.activitiesOrganized
							}
							docId={
								student &&
								student?.leadership_virtual &&
								student?.leadership_virtual[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>
				</TabPane>

				{/* COMMUNITY ENVOLVEMENT TAB */}
				<TabPane
					tab="Community Involvement"
					key="4"
					className="p-1"
					style={{
						height: "80vh",
						overflow: "auto",
					}}
				>
					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Civic / NGO / Religious
							Organizations and Position Held
						</p>

						<CommunityReligiousOrganizationTable
							data={
								student &&
								student?.community &&
								student?.community[0]?.organizations
							}
							docId={
								student &&
								student?.community &&
								student?.community[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>

					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Activities Attended
						</p>

						<CommunityActivitiesAttendedTable
							data={
								student &&
								student?.community &&
								student?.community[0]?.activitiesAttended
							}
							docId={
								student &&
								student?.community &&
								student?.community[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>

					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Activities Organized
						</p>

						<CommunityActivitiesOrganizedTable
							data={
								student &&
								student?.community &&
								student?.community[0].activitiesOrganized
							}
							docId={
								student &&
								student?.community &&
								student?.community[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>

					<div className="card p-1 mb-2">
						<p className="font-18 text-orange m-1">
							{" "}
							Most Significant Awards and Citations Received
						</p>

						<CommunityCitationTable
							data={
								student &&
								student?.community &&
								student?.community[0]?.awardsAndCitations
							}
							docId={
								student &&
								student?.community &&
								student?.community[0]?._id
							}
							student={student && student?._id}
							userType="admin"
						/>
					</div>
				</TabPane>
			</Tabs>
		</div>
	) : (
		<Spinner />
	);
};

export default StudentProfile;
