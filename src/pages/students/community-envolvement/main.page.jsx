import { Tabs } from "antd";
import OrganizationInvolvement from "../../../components/students/community-envolvement/tab-1.component";
import ActivitiesAttended from "../../../components/students/community-envolvement/tab-2.component";
import ActivitiesOrganized from "../../../components/students/community-envolvement/tab-3.component";
import AwardsAndCitationsReceived from "../../../components/students/community-envolvement/tab-4.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";
const { TabPane } = Tabs;

const CommunityEnvolvementMainPage = () => {
	const userData = useSelector(selectCurrentUser);

	return (
		<div className="admin-page-content card-container">
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
					tab="Most Significant Religious Organizations"
					key="1"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Civic / NGO / Religious
						Organizations and Position Held
					</h2>

					<OrganizationInvolvement data={userData && userData} />
				</TabPane>
				<TabPane tab="Most Significant Activities Attended" key="2">
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Activities Attended
					</h2>

					<ActivitiesAttended data={userData && userData} />
				</TabPane>
				<TabPane
					tab="Most Significant Activities Organized"
					key="3"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Activities Organized
					</h2>

					<ActivitiesOrganized data={userData && userData} />
				</TabPane>
				<TabPane
					tab="Most Significant Awards and Citation Received"
					key="4"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Awards and Citation Received
					</h2>

					<AwardsAndCitationsReceived
						data={userData && userData}
					/>
				</TabPane>
			</Tabs>
		</div>
	);
};

export default CommunityEnvolvementMainPage;
