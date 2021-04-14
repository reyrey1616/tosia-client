import React from "react";
import { Menu } from "antd";
import { IoIosSchool, IoIosPeople } from "react-icons/io";
import { VscOrganization } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import Reminders from "../../shared/reminders.component";

class Sidebar extends React.Component {
	render() {
		return (
			<div style={{ width: 256 }} className="admin-sidebar">
				<Menu mode="inline" className="menu-container">
					<Menu.Item key="1">
						<NavLink
							activeClassName="ant-menu-item-selected"
							to="/student/personal-data"
							className="align-items-flex-center"
						>
							<ImProfile className="mr-1" /> Personal Data
						</NavLink>
					</Menu.Item>
					<Menu.Item key="2">
						<NavLink
							activeClassName="ant-menu-item-selected"
							to="/student/academic-excellence"
							className="align-items-flex-center"
						>
							<IoIosSchool className="mr-1" /> Academic
							Excellence
						</NavLink>
					</Menu.Item>
					<Menu.Item key="3">
						<NavLink
							activeClassName="ant-menu-item-selected"
							to="/student/leadership"
							className="align-items-flex-center"
						>
							<IoIosPeople className="mr-1" /> Leadership
						</NavLink>
					</Menu.Item>
					<Menu.Item key="4">
						<NavLink
							activeClassName="ant-menu-item-selected"
							to="/student/community-envolvement"
							className="align-items-flex-center"
						>
							<VscOrganization className="mr-1" />{" "}
							Community Involvement
						</NavLink>
					</Menu.Item>
				</Menu>

				<Reminders />
			</div>
		);
	}
}

export default Sidebar;
