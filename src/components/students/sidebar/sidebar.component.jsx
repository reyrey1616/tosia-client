import React from "react";
import { Menu } from "antd";
import { IoIosSchool, IoIosPeople } from "react-icons/io";
import { VscOrganization } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { ImProfile } from "react-icons/im";

import logo from "../../../assets/logo-circle.png";

class Sidebar extends React.Component {
	handleClick = (e) => {
		console.log("click ", e);
	};

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
				<Menu
					onClick={this.handleClick}
					defaultSelectedKeys={["1"]}
					defaultOpenKeys={["sub1"]}
					mode="inline"
					className="menu-container"
				>
					<Menu.Item key="1">
						<NavLink
							to="/student/personal-data"
							className="align-items-flex-center"
						>
							<ImProfile className="mr-1" /> Personal Data
						</NavLink>
					</Menu.Item>
					<Menu.Item key="2">
						<NavLink
							to="/student/academic-excellence"
							className="align-items-flex-center"
						>
							<IoIosSchool className="mr-1" /> Academic
							Excellence
						</NavLink>
					</Menu.Item>
					<Menu.Item key="3">
						<NavLink
							to="/student/leadership"
							className="align-items-flex-center"
						>
							<IoIosPeople className="mr-1" /> Leadership
						</NavLink>
					</Menu.Item>
					<Menu.Item key="4">
						<NavLink
							to="/student/community-envolvement"
							className="align-items-flex-center"
						>
							<VscOrganization className="mr-1" />{" "}
							Community Envolvement
						</NavLink>
					</Menu.Item>
				</Menu>
			</div>
		);
	}
}

export default Sidebar;
