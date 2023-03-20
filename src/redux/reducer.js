import { IS_LOADING, GET_SCHOOL_BOYS, GET_LESSONS, GET_COLUMN_VALUES, UPDATE_PRESENCE_STATUS } from "./actionTypes";

const initialState = {
	isLoading: false,
	valuesData: [],
	schoolboyList: [],
	lessonsList: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case IS_LOADING:
			return  {
				...state,
				isLoading: action.payload,
			};

		case GET_SCHOOL_BOYS:
			return {
				...state,
				schoolboyList: action.payload,
			};

		case GET_LESSONS:
			return {
				...state,
				lessonsList: action.payload,
			};

		case GET_COLUMN_VALUES:
			return {
				...state,
				valuesData: action.payload,
			};

		case UPDATE_PRESENCE_STATUS:
			const { rowId, newData } = action.payload;
			const filteredValuesData = state.valuesData.filter((item) => item.SchoolboyId !== rowId);
			const updatedValuesData = [...filteredValuesData, ...newData]

			return {
				...state,
				valuesData: updatedValuesData,
			};

		default:
			return state;
	}
};