export const addItem = (item, itemToAdd) => {
	const existing = item.find((i) => i.name === itemToAdd.name);

	if (existing) {
		return [...item];
	}

	return [...item, itemToAdd];
};

export const updateItem = (item, itemToAdd) => {
	return addItem(removeItem(item, itemToAdd), itemToAdd);
};

export const removeItem = (item, itemToAdd) => {
	const existing = item.find((i) => i._id === itemToAdd._id);

	if (existing) {
		return item.filter((i) => i._id !== itemToAdd._id);
	}

	return [...item];
};

export const findById = (items, id) => {
	return items.find((i) => i._id === id);
};

export const createReducer = (initialState, handlers) => {
	return function (state = initialState, action) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};
};

export const updateState = (oldObject, newValues) => {
	return Object.assign({}, oldObject, newValues);
};
