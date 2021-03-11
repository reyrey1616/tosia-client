import { createSelector } from "reselect";

const authSelector = (state) => state.auth;

export const selectCurrentUser = createSelector(
	[authSelector],
	(auth) => auth.user
);

export const selectLoading = createSelector(
	[authSelector],
	(auth) => auth.loading
);
