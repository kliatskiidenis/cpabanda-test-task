import React from 'react';
import {useSelector} from "react-redux";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const AdditionalInfo = () => {
	const { schoolboyList, lessonsList } = useSelector(state => state);

	const getBiggestValueFromColumnTitle = () => {
		const getReducedValueFromTitle = (item) => (
			item.Title
				?.split('/')
				.reduce((acc2, i) => acc2 + (i * 1), 0) || 0
		) ;

		return lessonsList.reduce((acc, item) => {
			const valueInAcc = getReducedValueFromTitle(acc)
			const valueInItem = getReducedValueFromTitle(item)

			if (valueInItem > valueInAcc) return item;
			return acc;
		}, {});
	};

	const biggestValueFromTitle = getBiggestValueFromColumnTitle();

	return (
		<Container>
			<Typography variant="h4" component="h1" marginY={4}>
				Сторінка с завданням
			</Typography>

			{schoolboyList.length ? (
				<Paper sx={{ width: '100%', overflow: 'hidden', padding: "15px" }}>
					<Typography variant="h6" component="div" sx={{ marginBottom: "20px" }}>
						Kількість учнів: {schoolboyList.length}
					</Typography>

					<Typography variant="h6" component="div" sx={{ marginBottom: "40px"}}>
						Oб'єкт з найбільшою сумою чисел у Title - {JSON.stringify(biggestValueFromTitle)}
					</Typography>
				</Paper>
			) : null}


			<Typography variant="h5" component="h2" paddingTop={4} marginBottom={2}>
				Примітки:
			</Typography>

			<Paper sx={{ width: '100%', overflow: 'hidden', padding: "15px" }}>
				<Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
					Так як не було можливості уточнити те робив тільки те, що зазначено в завданні, що б не вийшло так що робив те, що не потрібно:
				</Typography>

				<Typography variant="body2" component="p" sx={{marginBottom: "20px" }}>
					- Використовував Create React App.
				</Typography>

				<Typography variant="body2" component="p" sx={{marginBottom: "20px" }}>
					- Використовував Redux, не Redux Toolkit.
				</Typography>

				<Typography variant="body2" component="p" sx={{ marginBottom: "20px" }}>
					- Не використовував Redux Saga.
				</Typography>

				<Typography variant="body2" component="p" sx={{ marginBottom: "20px" }}>
					- Тільки desktop версія.
				</Typography>
			</Paper>
		</Container>
	);
}

export default AdditionalInfo;