import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
//=======================================================
import TopBarComponent from '../top-bar';
import SideBarComponenet from '../sidebar';
import { useStyles } from './styles';

const LayoutComponent: React.FC = (): JSX.Element => {
	const location = useLocation();
	const isNonMobile = useMediaQuery('(min-width:767px)');
	const [isOpen, setIsOpen] = useState(true);
	const { classes } = useStyles();

	return location.pathname === '/login' || location.pathname === '/register' ? (
		<Outlet />
	) : (
		<>
			<Box display={isNonMobile ? 'flex' : 'block'} className={classes.root}>
				<SideBarComponenet
					isNonMobile={isNonMobile}
					drowerWidth="220px"
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
				<Box className={classes.mainSection}>
					<TopBarComponent
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						isNonMobile={isNonMobile}
					/>
					<Outlet />
				</Box>
			</Box>
		</>
	);
};

export default LayoutComponent;
