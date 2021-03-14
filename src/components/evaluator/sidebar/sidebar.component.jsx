import React from "react";
import { Menu } from "antd";
import { BsCardChecklist } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { ImProfile } from "react-icons/im";

import logo from "../../../assets/logo-circle.png";

class Sidebar extends React.Component {
	render() {
		return (
			<div style={{ width: 256 }} className="admin-sidebar">
				<div className="logo-container">
					<img
						src={logo}
						alt="Logo"
						className="admin-header-logo"
						height="100"
						width="100"
					/>
				</div>
				<Menu mode="inline" className="menu-container">
					<Menu.Item key="1">
						<NavLink
							activeClassName="ant-menu-item-selected"
							to="/evaluator/students"
							className="align-items-flex-center"
						>
							<ImProfile className="mr-1" /> Students
						</NavLink>
					</Menu.Item>
					<Menu.Item key="2">
						<NavLink
							activeClassName="ant-menu-item-selected"
							to="/evaluator/history"
							className="align-items-flex-center"
						>
							<BsCardChecklist className="mr-1" /> History
						</NavLink>
					</Menu.Item>
				</Menu>
			</div>
		);
	}
}

export default Sidebar;
