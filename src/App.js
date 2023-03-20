import {RouterProvider} from "react-router-dom";

import Routing from "./Routing";
import {useDispatch, useSelector} from "react-redux";
import {getColumnValuesAction, getLessonsAction, getSchoolBoysAction, setLoadingAction} from "./redux/actionCreators";
import {getLessonData, getSchoolBoysData, getValuesTableData} from "./services";
import {useEffect} from "react";

const App = () => {
	const { schoolboyList, lessonsList, valuesData } = useSelector(state => state);

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

	const isInitialData = schoolboyList.length !== 0 && lessonsList.length !== 0 && valuesData.length !== 0;

	useEffect(() => {
		if (!isInitialData) {
			getInitialTableData();
		}
	}, []);

	if (!isInitialData) {
		return null;
	}

	return (
		<RouterProvider router={Routing} />
	);
}

export default App;