import { notification, Popconfirm, message } from "antd";

export const notify = (title, type = "success", description = null) => {
	notification[type]({
		message: title,
		description: description && description,
	});
};

export const confirm = (e, msg) => {
	message.success(msg);
};

export const cancel = (e, msg) => {
	message.success(msg);
};

export const Confirmation = ({ children, title, confirmFn }) => (
	<Popconfirm
		title={title}
		onConfirm={() => confirmFn()}
		// onCancel={cancel}
		okText="Yes"
		cancelText="No"
	>
		{children}
	</Popconfirm>
);
