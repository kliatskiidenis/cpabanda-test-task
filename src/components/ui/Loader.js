import * as React from 'react';
import {useSelector} from "react-redux";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';

const Loader = () => {
	const {isLoading} = useSelector((state) => state);

	if (!isLoading) {
		return null;
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<Backdrop sx={{ zIndex: '1201', color: '#fff' }} open>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Box>
	);
};

export default Loader;