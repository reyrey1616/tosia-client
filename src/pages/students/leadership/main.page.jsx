import { Tabs } from "antd";
import OrganizationInvolvement from "../../../components/students/leadership/tab-1.component";
import LeadershipTrainingAttended from "../../../components/students/leadership/tab-2.component";
import AwardsAndCitationsReceived from "../../../components/students/leadership/tab-3.component";
import ActivitiesOrganized from "../../../components/students/leadership/tab-4.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
const { TabPane } = Tabs;

const LeadershipMainPage = () => {
	const userData = useSelector(selectCurrentUser);
	return (
		<div className="admin-page-content card-container">
			<h3 className="text-orange pl-1">Instructions</h3>
			<ul>
				<li>
					List all your activities in chronological order and
					kindly spell out acronyms.
				</li>
				<li>
					All activities must be supported by
					documents/Photographs in the portfolio accordingly.
					Indicate the page number in the portfolio.
				</li>
				<li>Use the format as indicated in this sample form.</li>
			</ul>
			<Tabs defaultActiveKey="1" type="card">
				<TabPane
					tab="Most Significant Organization Envolvement"
					key="1"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Organization Envolvement and
						Position Held
					</h2>
					<OrganizationInvolvement data={userData && userData} />
				</TabPane>
				<TabPane
					tab="Most Significant Leadership Trainings Attended"
					key="2"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Leadership Trainings and Seminars
						Attended
					</h2>

					<LeadershipTrainingAttended
						data={userData && userData}
					/>
				</TabPane>
				<TabPane
					tab="Most Significant Awards and Citations Received"
					key="3"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Awards and Citations Received
					</h2>
					<AwardsAndCitationsReceived
						data={userData && userData}
					/>
				</TabPane>
				<TabPane
					tab="Most Significant Activities Organized"
					key="4"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Activities Organized
					</h2>

					<ActivitiesOrganized data={userData && userData} />
				</TabPane>
			</Tabs>
		</div>
	);
};

export default LeadershipMainPage;
