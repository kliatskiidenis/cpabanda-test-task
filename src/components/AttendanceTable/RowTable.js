import React from 'react';
import {useSelector} from "react-redux";

import CellTable from "./CellTable";

import TableRow from "@mui/material/TableRow";

const RowTable = ({row, number}) => {
	const {lessonsList} = useSelector((state) => state);

	return (
		<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
			{lessonsList.map((column) => (
				<CellTable key={column.Id} column={column} row={row} number={number} />
			))}
		</TableRow>
	);
};

export default RowTable;