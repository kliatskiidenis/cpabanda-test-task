import React from 'react';
import {Outlet} from "react-router-dom";

import Loader from "../components/ui/Loader";
import FooterBar from "../components/FooterBar";
import HeaderBar from "../components/HeaderBar";

import Container from '@mui/material/Container';

const Layout = () => (
	<div className="layout">
		<header><HeaderBar /></header>

		<main className="main">
			<Container>
				<Outlet />
			</Container>
		</main>

		<footer><FooterBar /></footer>
		<Loader />
	</div>
);

export default Layout;