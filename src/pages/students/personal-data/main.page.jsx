import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

const PersonalDataMainPage = () => (
	<div className="admin-page-content card-container">
		<Tabs defaultActiveKey="1" onChange={callback} type="card">
			<TabPane tab="Personal Data" key="1">
				Personal Data
			</TabPane>
			<TabPane tab="Family Data" key="2">
				Family Data
			</TabPane>
			<TabPane tab="School Contact Details" key="3">
				School Contact Details
			</TabPane>
			<TabPane tab="Character Reference" key="4">
				Character Reference
			</TabPane>
		</Tabs>
	</div>
);

export default PersonalDataMainPage;
