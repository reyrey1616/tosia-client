import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { NavLink } from "react-router-dom";
const menu = (
	<Menu>
		<Menu.Item>
			<NavLink to="/admin/account">Account</NavLink>
		</Menu.Item>
		<Menu.Item>
			<NavLink to="/logout">Logout</NavLink>
		</Menu.Item>
	</Menu>
);

const AdminHeader = () => (
	<div className="admin-header">
		<div className="flex align-items-flex-center admin-header-actions">
			<NavLink to="/signup" className="text-white">
				{" "}
				Logout
			</NavLink>
		</div>
	</div>
);
export default AdminHeader;
