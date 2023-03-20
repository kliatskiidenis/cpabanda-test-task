import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {deleteMissedClassStatus, getValuesTableDataById, setMissedClassStatus} from "../../services";
import {setLoadingAction, updatePresenceStatusActions} from "../../redux/actionCreators";

import TableCell from "@mui/material/TableCell";

const CellTable = (props) => {
	const {column, row, number} = props;
	const {FirstName, LastName, SecondName, Id: rowId} = row;
	const {valuesData} = useSelector((state) => state);
	const dispatchAction = useDispatch();

	const cellClickHandler = async (params) => {
		const {rowId, columnId, cellValue} = params;
		dispatchAction(setLoadingAction(true));

		if (cellValue === 'H') {
			await deleteMissedClassStatus({rowId, columnId});
		} else {
			await setMissedClassStatus({rowId, columnId});
		}

		const res = await getValuesTableDataById(rowId);

		dispatchAction(updatePresenceStatusActions({rowId, newData: res.data.Items}));
		dispatchAction(setLoadingAction(false));
	};

	if (column.Id === 1) {
		return (
			<TableCell align="center" sx={{width: "30px"}} key={column.Id}>{number}</TableCell>
		)
	} else if (column.Id === 2) {
		return (
			<TableCell
				key={column.Id}
				sx={{
					position: 'sticky',
					left: 0,
					background: "white",
					borderRight: "1px solid #e0e0e0",
					width: "300px",
				}}
			>
				{LastName}{' '}{FirstName}{' '}{SecondName}
			</TableCell>
		)
	} else {
		const currentValue = valuesData.find((item) => item.ColumnId === column.Id && item.SchoolboyId === row.Id);
		const cellValue = currentValue?.Title;

		return (
			<TableCell
				key={column.Id}
				align="center"
				sx={{ cursor: "pointer" }}
				onClick={() => cellClickHandler({rowId, columnId: column.Id, cellValue})}
			>
				{cellValue === "H" ? cellValue : null}
			</TableCell>
		)
	};
}

export default CellTable;