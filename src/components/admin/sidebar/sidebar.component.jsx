import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import {
	PieChartOutlined,
	UsergroupDeleteOutlined,
	UserSwitchOutlined,
	SnippetsOutlined,
} from "@ant-design/icons";

class Sidebar extends React.Component {
	render() {
		return (
			<div style={{ width: 220 }} className="admin-sidebar pt-1">
				<Menu mode="inline" className="menu-container">
					{/* <Menu.Item key="1">
						<NavLink
							activeClassName="ant-menu-item-selected"
							to="/admin/dashboard"
							className="align-items-flex-center"
						>
							<PieChartOutlined />
							Dashboard
						</NavLink>
					</Menu.Item> */}
					<Menu.Item key="1">
						<NavLink
							activeClassName="ant-menu-item-selected"
							to="/admin/students"
							className="align-items-flex-center"
						>
							<UsergroupDeleteOutlined />
							Students
						</NavLink>
					</Menu.Item>
					<Menu.Item key="2">
						<NavLink
							activeClassName="ant-menu-item-selected"
							to="/admin/evaluators"
							className="align-items-flex-center"
						>
							<UserSwitchOutlined />
							Evaluators
						</NavLink>
					</Menu.Item>
					{/* <Menu.Item key="4">
						<NavLink
							activeClassName="ant-menu-item-selected"
							to="/admin/reports"
							className="align-items-flex-center"
						>
							<SnippetsOutlined />
							Reports
						</NavLink>
					</Menu.Item> */}
				</Menu>
			</div>
		);
	}
}

export default Sidebar;
