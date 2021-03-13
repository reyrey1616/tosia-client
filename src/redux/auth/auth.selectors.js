import { createSelector } from "reselect";

const authSelector = (state) => state.auth;

export const selectCurrentUser = createSelector(
	[authSelector],
	(auth) => auth.user
);

export const selectCategory = createSelector(
	[authSelector],
	(auth) => auth.user.category
);

export const selectAcademic = createSelector(
	[authSelector],
	(auth) => auth.user.academic
);

export const selectCommunity = createSelector(
	[authSelector],
	(auth) => auth.user.community
);

export const selectLeadership = createSelector(
	[authSelector],
	(auth) => auth.user.leadership_virtual
);
