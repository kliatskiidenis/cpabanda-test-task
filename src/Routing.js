import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";

import Layout from "./layout/Layout";
import AttendanceManagement from "./routes/AttendanceManagement";
import AdditionalInfo from "./routes/AdditionalInfo";


const Routing = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="/" element={<AttendanceManagement />} />
			<Route path="additional-info" element={<AdditionalInfo />} />
		</Route>
	)
);

export default Routing;