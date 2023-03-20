import React from 'react';

import TableLayout from "../components/AttendanceTable/TableLayout";

import Typography from "@mui/material/Typography";

const AttendanceManagement = () => {
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