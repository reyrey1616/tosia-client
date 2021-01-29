import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

const LeadershipMainPage = () => (
	<div className="admin-page-content card-container">
		<Tabs defaultActiveKey="1" onChange={callback} type="card">
			<TabPane tab="Most Significant Organization Envolvement" key="1">
				Most Significant Organization Envolvement
			</TabPane>
			<TabPane
				tab="Most Significant Leadership Trainings Attended"
				key="2"
			>
				Most Significant Leadership Trainings Attended
			</TabPane>
			<TabPane
				tab="Most Significant Awards and Citation Received"
				key="3"
			>
				Most Significant Awards and Citation Received
			</TabPane>
			<TabPane tab="Most Significant Activities Organized" key="4">
				Most Significant Activities Organized
			</TabPane>
		</Tabs>
	</div>
);

export default LeadershipMainPage;
