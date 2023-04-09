import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
//=======================================================
import TopBarComponent from '../top-bar';
import { ILayout } from '../../common/types/layout';
import SideBarComponenet from '../sidebar';
import { useStyles } from './styles';

const LayoutComponent = ({ children }: ILayout) => {
	const location = useLocation();
	const isNonMobile = useMediaQuery('(min-width:600px)');
	const [isOpen, setIsOpen] = useState(true);
	const { classes } = useStyles();

	return location.pathname === '/login' || location.pathname === '/register' ? (
		<>{children}</>
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
					<TopBarComponent />
					{children}
				</Box>
			</Box>
		</>
	);
};

export default LayoutComponent;
