import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
//=======================================================
import TopBarComponent from '../top-bar';
import { ILayout } from '../../common/types/layout';
import SideBarComponenet from '../sudebar';

const LayoutComponent = ({ children }: ILayout) => {
	const location = useLocation();
	const isNonMobile = useMediaQuery('(min-width:600px)');
	const [isOpen, setIsOpen] = useState(true);

	return location.pathname === '/location' ||
		location.pathname === '/register' ? (
		<>{children}</>
	) : (
		<>
			<Box
				display={isNonMobile ? 'flex' : 'block'}
				width={'100%'}
				height={'100%'}
			>
				<SideBarComponenet
					isNonMobile={isNonMobile}
					drowerWidth="250"
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
				<Box>
					<TopBarComponent />
					{children}
				</Box>
			</Box>
		</>
	);
};

export default LayoutComponent;
