import * as React from 'react';
import {useSelector} from "react-redux";

import HeadTable from "./HeadTable";
import RowTable from "./RowTable";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

const TableLayout = () => {
	const {schoolboyList} = useSelector((state) => state)

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: "70vh" }}>
				<Table stickyHeader aria-label="sticky table" sx={{width: "100vw"}}>
					<HeadTable />

					<TableBody>
						{schoolboyList.map((row, index) => (
							<RowTable key={row.Id} row={row} number={index +1} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export default TableLayout;