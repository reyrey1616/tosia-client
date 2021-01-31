import { Tabs } from "antd";
import OrganizationInvolvement from "../../../components/students/leadership/tab-1.component";
import LeadershipTrainingAttended from "../../../components/students/leadership/tab-2.component";
import AwardsAndCitationsReceived from "../../../components/students/leadership/tab-3.component";
import ActivitiesOrganized from "../../../components/students/leadership/tab-4.component";

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

const LeadershipMainPage = () => (
	<div className="admin-page-content card-container">
		<Tabs defaultActiveKey="1" onChange={callback} type="card">
			<TabPane tab="Most Significant Organization Envolvement" key="1">
				<h2 className="text-subtitle text-orange m-1">
					Most Significant Organization Envolvement and Position
					Held
				</h2>
				<OrganizationInvolvement />
			</TabPane>
			<TabPane
				tab="Most Significant Leadership Trainings Attended"
				key="2"
			>
				<h2 className="text-subtitle text-orange m-1">
					Most Significant Leadership Trainings and Seminars
					Attended
				</h2>

				<LeadershipTrainingAttended />
			</TabPane>
			<TabPane
				tab="Most Significant Awards and Citation Received"
				key="3"
			>
				<h2 className="text-subtitle text-orange m-1">
					Most Significant Awards and Citation Received
				</h2>
				<AwardsAndCitationsReceived />
			</TabPane>
			<TabPane tab="Most Significant Activities Organized" key="4">
				<h2 className="text-subtitle text-orange m-1">
					Most Significant Activities Organized
				</h2>

				<ActivitiesOrganized />
			</TabPane>
		</Tabs>
	</div>
);

export default LeadershipMainPage;
