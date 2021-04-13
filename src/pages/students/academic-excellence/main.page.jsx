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
			<h3 className="text-orange pl-1">Instructions</h3>
			<ul className="instructions-ul">
				<li>
					List all your activities in chronological order and
					kindly spell out acronyms.
				</li>
				<li>
					All activities must be supported by a related document.
					Please scan or take a clear photo of your supporting
					document. Scanned documents should be converted to
					image format. Only one supporting document / image is
					required for each activity.
				</li>
				<li>
					The system only accepts ONE IMAGE. And it must be less
					than 2MB.
				</li>
				<li>
					Each category has limits, please refer to the maximum
					number of entries indicated in each sub-category.
				</li>
				<li>
					Click the “Save Changes” button to add an entry. All
					entries will be recorded upon clicking the button.
				</li>
				<li>Review entries before leaving the portal.</li>
			</ul>
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
						Most Significant Citations Received (Limit: 20)
					</h2>

					<CitationsReceivedTab data={userData && userData} />
				</TabPane>
				<TabPane tab="Most Significant Contests Won" key="3">
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Contests Won (Limit: 50)
					</h2>

					<AcademicContestsWon data={userData && userData} />
				</TabPane>
				<TabPane tab="Most Significant Non Academic Awards" key="4">
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Non Academic Awards (Limit: 50)
					</h2>

					<NonAcademicContestsWon data={userData && userData} />
				</TabPane>
				<TabPane
					tab="Most Significant Academic-Related Seminars and Trainings Attended"
					key="5"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Academic-Related Seminars and
						Trainings Attended (Limit: 20)
					</h2>

					<TrainingAttended data={userData} />
				</TabPane>
			</Tabs>
		</div>
	);
};

export default AcademicExcellenceMainPage;
