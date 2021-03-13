import { Tabs } from "antd";
import PersonalData from "../../../components/students/personal-data/tab-1.component";
import FamilyData from "../../../components/students/personal-data/tab-2.component";
import SchoolContactDetails from "../../../components/students/personal-data/tab-3.component";
import CharacterReferences from "../../../components/students/personal-data/tab-4.component";
import { useSelector } from "react-redux";
import Spinner from "../../../components/hoc/spinner/spinner.component";
import { selectCurrentUser } from "../../../redux/auth/auth.selectors";

const { TabPane } = Tabs;

const PersonalDataMainPage = () => {
	const userData = useSelector(selectCurrentUser);

	return !!userData ? (
		<div className="admin-page-content">
			<Tabs defaultActiveKey="1" type="card">
				<TabPane tab="Personal Data" key="1">
					<h2 className="text-subtitle text-orange m-1">
						{" "}
						Aspirant's Personal Data{" "}
					</h2>

					<PersonalData data={userData && userData} />
				</TabPane>
				<TabPane tab="Family Data" key="2">
					<h2 className="text-subtitle text-orange m-1">
						{" "}
						Aspirant's Family Data{" "}
					</h2>

					<FamilyData data={userData && userData} />
				</TabPane>
				<TabPane tab="School Contact Details" key="3">
					<h2 className="text-subtitle text-orange m-1">
						{" "}
						School Contact Details{" "}
					</h2>

					<SchoolContactDetails data={userData && userData} />
				</TabPane>
				<TabPane tab="Character Reference" key="4">
					<h2 className="text-subtitle text-orange m-1">
						Character References
					</h2>

					<CharacterReferences data={userData && userData} />
				</TabPane>
			</Tabs>
		</div>
	) : (
		<Spinner />
	);
};

export default PersonalDataMainPage;
