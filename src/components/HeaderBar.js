import * as React from 'react';
import {NavLink} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const HeaderBar = () =>  (
	<Box sx={{ flexGrow: 1 }}>
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Журнал
				</Typography>

				<Button className="navButton">
					<NavLink
						className={({ isActive }) =>
							isActive ? "active" : "nav-link"
						}
						style={{color: "#fff", textDecoration: "none"}}
						to="/"
					>
						Журнал відвідування
					</NavLink>
				</Button>

				<Button className="navButton">
					<NavLink
						className={({ isActive }) =>
							isActive ? "active" : "nav-link"
						}
						style={{color: "#fff", textDecoration: "none"}}
						to="/additional-info"
					>
						Додаткове завдання
					</NavLink>
				</Button>
			</Toolbar>
		</AppBar>
	</Box>
);

export default HeaderBar;