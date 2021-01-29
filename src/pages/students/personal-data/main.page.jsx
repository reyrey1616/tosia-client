import { Tabs } from "antd";
import PersonalData from "../../../components/students/personal-data/tab-1.component";
import FamilyData from "../../../components/students/personal-data/tab-2.component";
import SchoolContactDetails from "../../../components/students/personal-data/tab-3.component";
import CharacterReferences from "../../../components/students/personal-data/tab-4.component";

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

const PersonalDataMainPage = () => (
	<div className="admin-page-content">
		<Tabs defaultActiveKey="1" onChange={callback} type="card">
			<TabPane tab="Personal Data" key="1">
				<h2 className="text-subtitle m-1">
					{" "}
					Aspirant's Personal Data{" "}
				</h2>

				<PersonalData />
			</TabPane>
			<TabPane tab="Family Data" key="2">
				<h2 className="text-subtitle m-1">
					{" "}
					Aspirant's Family Data{" "}
				</h2>

				<FamilyData />
			</TabPane>
			<TabPane tab="School Contact Details" key="3">
				<h2 className="text-subtitle m-1">
					{" "}
					School Contact Details{" "}
				</h2>

				<SchoolContactDetails />
			</TabPane>
			<TabPane tab="Character Reference" key="4">
				<h2 className="text-subtitle m-1">Character References</h2>

				<CharacterReferences />
			</TabPane>
		</Tabs>
	</div>
);

export default PersonalDataMainPage;
