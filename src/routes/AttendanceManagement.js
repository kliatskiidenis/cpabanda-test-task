import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import TableLayout from "../components/AttendanceTable/TableLayout";
import {setLoadingAction, getColumnValuesAction, getLessonsAction, getSchoolBoysAction} from "../redux/actionCreators";
import {getLessonData, getSchoolBoysData, getValuesTableData} from "../services";

import Typography from "@mui/material/Typography";

const AttendanceManagement = () => {
	const dispatchAction = useDispatch();
	const getInitialTableData = async () => {
		dispatchAction(setLoadingAction(true));

		const mainApiResponse = await Promise.all([
			getSchoolBoysData(),
			getLessonData(),
			getValuesTableData(),
		]);

		const additionalColumns = [
			{ Id: 1, Title: '№', minWidth: 100 },
			{ Id: 2, Title: 'Учні', minWidth: 170 },
		];

		const allColumns = [...additionalColumns, ...mainApiResponse[1].data.Items]

		dispatchAction(getSchoolBoysAction(mainApiResponse[0].data.Items));
		dispatchAction(getLessonsAction(allColumns));
		dispatchAction(getColumnValuesAction(mainApiResponse[2].data.Items));
		dispatchAction(setLoadingAction(false));
	};

	useEffect(() => {
		getInitialTableData();
	}, []);

	return (
		<>
			<Typography variant="h4" component="h1" marginY={4}>
				Журнал відвідування уроків
			</Typography>

			<TableLayout />
		</>
	);
}

export default AttendanceManagement;