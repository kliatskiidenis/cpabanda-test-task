export const setLoadingAction = (payload) => {
	return { type: "IS_LOADING", payload }
};

export const getSchoolBoysAction = (payload) => {
	return { type: "GET_SCHOOL_BOYS", payload }
};

export const getLessonsAction = (payload) => {
	return { type: "GET_LESSONS", payload }
};

export const getColumnValuesAction = (payload) => {
	return { type: "GET_COLUMN_VALUES", payload	}
};

export const updatePresenceStatusActions = (payload) => {
	return { type: "UPDATE_PRESENCE_STATUS", payload }
};