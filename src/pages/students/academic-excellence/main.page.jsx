import { Tabs } from "antd";
import AcademicHonorsReceived from "../../../components/students/academic-excellence/tab-1.component";
import CitationsReceivedTab from "../../../components/students/academic-excellence/tab-2.component";
import AcademicContestsWon from "../../../components/students/academic-excellence/tab-3.component";
import NonAcademicContestsWon from "../../../components/students/academic-excellence/tab-4.component";
import TrainingAttended from "../../../components/students/academic-excellence/tab-5.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
const { TabPane } = Tabs;

const AcademicExcellenceMainPage = () => {
	const userData = useSelector(selectCurrentUser);
	return (
		<div className="admin-page-content card-container">
			<Tabs defaultActiveKey="1" type="card">
				<TabPane tab="Academic Honors Received" key="1">
					<h2 className="text-subtitle text-orange m-1">
						{" "}
						Academic Honors Received
					</h2>

					<AcademicHonorsReceived data={userData && userData} />
				</TabPane>
				<TabPane tab="Most Significant Citations Received" key="2">
					<h2 className="text-subtitle text-orange m-1">
						{" "}
						Most Significant Citations Received
					</h2>

					<CitationsReceivedTab data={userData && userData} />
				</TabPane>
				<TabPane tab="Most Significant Contests Won" key="3">
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Contests Won{" "}
					</h2>

					<AcademicContestsWon data={userData && userData} />
				</TabPane>
				<TabPane tab="Most Significant Non Academic Awards" key="4">
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Non Academic Awards
					</h2>

					<NonAcademicContestsWon data={userData && userData} />
				</TabPane>
				<TabPane
					tab="Most Significant Academic-Related Seminars and Trainings Attended"
					key="5"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Academic-Related Seminars and
						Trainings Attended
					</h2>

					<TrainingAttended data={userData} />
				</TabPane>
			</Tabs>
		</div>
	);
};

export default AcademicExcellenceMainPage;
