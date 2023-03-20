import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterBar = () => (
	<Box sx={{ flexGrow: 1, py: 2 }}>
		<Typography variant="body2" color="textSecondary" align="center">
			{new Date().getFullYear()}
			<Box component="span"> Test Application by Denis Kliatskii</Box>
		</Typography>
	</Box>
);

export default FooterBar;