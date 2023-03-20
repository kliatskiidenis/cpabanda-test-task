import React from 'react';
import {useSelector} from "react-redux";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";

const HeadTable = () => {
	const {lessonsList} = useSelector((state) => state);

	return (
		<TableHead>
			<TableRow>
				{lessonsList?.map((column) => (
					<TableCell
						align="center"
						key={column.Id}
						sx={column.Id === 2 ? {
							position: 'sticky',
							left: 0,
							background: "white",
							borderRight: "1px solid #e0e0e0",
							width: "300px",
							zIndex: 1000,
							align: "left",
						} : null}
					>
						{column.Title}
					</TableCell>
				))}
			</TableRow>
		</TableHead>

	);
}

export default HeadTable;