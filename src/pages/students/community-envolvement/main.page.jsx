import React, { useEffect } from "react";
import { Tabs } from "antd";
import OrganizationInvolvement from "../../../components/students/community-envolvement/tab-1.component";
import ActivitiesAttended from "../../../components/students/community-envolvement/tab-2.component";
import ActivitiesOrganized from "../../../components/students/community-envolvement/tab-3.component";
import AwardsAndCitationsReceived from "../../../components/students/community-envolvement/tab-4.component";
import { useSelector } from "react-redux";
import {
	selectCurrentUser,
	selectCategory,
} from "../../../redux/auth/auth.selectors";
import { notify } from "../../../components/global/alerts/alerts.component";
const { TabPane } = Tabs;

const CommunityEnvolvementMainPage = () => {
	const userData = useSelector(selectCurrentUser);
	const category = useSelector(selectCategory);

	useEffect(() => {
		if (!category) {
			notify(
				"Please select your category on the Personal Data section before encoding another information.",
				"warning"
			);
			setTimeout(() => {
				window.location.href = "/student/personal-data";
			}, 3500);
		}
	}, []);
	return (
		<div className="admin-page-content card-container">
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
				<TabPane
					tab="Most Significant Civic / NGO / Religious Organizations and Position Held"
					key="1"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Civic / NGO / Religious
						Organizations and Position Held (Limit: 20)
					</h2>

					<OrganizationInvolvement data={userData && userData} />
				</TabPane>
				<TabPane tab="Most Significant Activities Attended" key="2">
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Activities Attended (Limit: 20)
					</h2>

					<ActivitiesAttended data={userData && userData} />
				</TabPane>
				<TabPane
					tab="Most Significant Activities Organized"
					key="3"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Activities Organized (Limit: 30)
					</h2>

					<ActivitiesOrganized data={userData && userData} />
				</TabPane>
				<TabPane
					tab="Most Significant Awards and Citations Received"
					key="4"
				>
					<h2 className="text-subtitle text-orange m-1">
						Most Significant Awards and Citations Received
						(Limit: 20)
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
