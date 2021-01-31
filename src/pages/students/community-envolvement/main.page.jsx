import { Tabs } from "antd";
import OrganizationInvolvement from "../../../components/students/community-envolvement/tab-1.component";
import ActivitiesAttended from "../../../components/students/community-envolvement/tab-2.component";
import ActivitiesOrganized from "../../../components/students/community-envolvement/tab-3.component";
import AwardsAndCitationsReceived from "../../../components/students/community-envolvement/tab-4.component";

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

const CommunityEnvolvementMainPage = () => (
	<div className="admin-page-content card-container">
		<Tabs defaultActiveKey="1" onChange={callback} type="card">
			<TabPane tab="Most Significant Religious Organizations" key="1">
				<h2 className="text-subtitle text-orange m-1">
					Most Significant Civic / NGO / Religious Organizations
					and Position Held
				</h2>

				<OrganizationInvolvement />
			</TabPane>
			<TabPane tab="Most Significant Activities Attended" key="2">
				<h2 className="text-subtitle text-orange m-1">
					Most Significant Activities Attended
				</h2>

				<ActivitiesAttended />
			</TabPane>
			<TabPane tab="Most Significant Activities Organized" key="3">
				<h2 className="text-subtitle text-orange m-1">
					Most Significant Activities Organized
				</h2>

				<ActivitiesOrganized />
			</TabPane>
			<TabPane
				tab="Most Significant Awards and Citation Received"
				key="4"
			>
				<h2 className="text-subtitle text-orange m-1">
					Most Significant Awards and Citation Received
				</h2>

				<AwardsAndCitationsReceived />
			</TabPane>
		</Tabs>
	</div>
);

export default CommunityEnvolvementMainPage;
