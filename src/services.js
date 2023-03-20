import axios from "axios";

const URL = `${process.env.REACT_APP_BASE_URL}v1/${process.env.REACT_APP_CLASS_KEY}`;
const GET_SCHOOL_BOYS_URL = `${URL}/Schoolboy`;
const GET_LESSONS_URL = `${URL}/Column`;
const GET_VALUES_URL = `${URL}/Rate`;
const DELETE_VALUES_URL = `${URL}/UnRate`;
export const getSchoolBoysData = () => (
	axios.get(GET_SCHOOL_BOYS_URL)
);
export const getLessonData = () => (
	axios.get(GET_LESSONS_URL)
);
export const getValuesTableData = () => (
	axios.get(GET_VALUES_URL)
);
export const getValuesTableDataById = (id) => (
	axios.get(`${GET_VALUES_URL}?SchoolboyId=${id}`)
);
export const setMissedClassStatus = (params) => {
	const {rowId, columnId} = params;

	const data = {
		SchoolboyId: rowId,
		ColumnId: columnId,
		Title: "H"
	}

	return axios.post(GET_VALUES_URL, data);
};
export const deleteMissedClassStatus = (params) => {
	const {rowId, columnId} = params;

	const data = {
		SchoolboyId: rowId,
		ColumnId: columnId,
	}

	return axios.post(DELETE_VALUES_URL, data);
};