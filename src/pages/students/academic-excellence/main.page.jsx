import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

const AcademicExcellenceMainPage = () => (
	<div className="admin-page-content card-container">
		<Tabs defaultActiveKey="1" onChange={callback} type="card">
			<TabPane tab="Academic Honors Received" key="1">
				Academic Honors Received
			</TabPane>
			<TabPane tab="Most Significant Citations Received" key="2">
				Most Significant Citations Received
			</TabPane>
			<TabPane tab="Most Significant Contests Won" key="3">
				Most Significant Contests Won
			</TabPane>
			<TabPane tab="Most Significant Non Academic Awards" key="4">
				Most Significant Non Academic Awards
			</TabPane>
			<TabPane
				tab="Most Significant Academic-Related Seminars and Trainings Attended"
				key="5"
			>
				Most Significant Academic-Related Seminars and Trainings
				Attended
			</TabPane>
		</Tabs>
	</div>
);

export default AcademicExcellenceMainPage;
