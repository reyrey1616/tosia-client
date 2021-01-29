import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

const CommunityEnvolvementMainPage = () => (
	<div className="admin-page-content card-container">
		<Tabs defaultActiveKey="1" onChange={callback} type="card">
			<TabPane tab="Most Significant Religious Organizations" key="1">
				Most Significant Religious Organizations
			</TabPane>
			<TabPane tab="Most Significant Activities Attended" key="2">
				Most Significant Activities Attended
			</TabPane>
			<TabPane tab="Most Significant Activities Organized" key="3">
				Most Significant Activities Organized
			</TabPane>
			<TabPane
				tab="Most Significant Awards and Citation Received"
				key="4"
			>
				Most Significant Awards and Citation Received
			</TabPane>
		</Tabs>
	</div>
);

export default CommunityEnvolvementMainPage;
