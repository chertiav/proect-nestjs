import React, { useEffect, useState } from 'react';
import {
	Box,
	Drawer,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useTheme,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
//============================================
import { useStyles } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flex-bettwen';

function SideBarComponenet(props: any) {
	const [active, setActive] = useState('');
	const { isNonMobile, drowerWidth, isOpen, setIsOpen } = props;
	const { pathname } = useLocation();
	const { classes } = useStyles();
	const navigate = useNavigate();
	const theme = useTheme();

	useEffect(() => {
		setActive(pathname.substring(1));
	}, [pathname]);

	return (
		<Box component="nav">
			{isOpen && (
				<Drawer
					open={isOpen}
					onClose={() => setIsOpen(false)}
					variant="persistent"
					anchor="left"
					sx={{
						width: drowerWidth,
						'& .MuiDrawer-paper': {
							color: theme.palette.secondary.main,
							background: theme.palette.primary.main,
							boxSizing: 'border-box',
							width: drowerWidth,
						},
					}}
				>
					<Box width="100%">
						<FlexBetween>
							<Box display="flex" alignItems="center" gap="10px">
								<Typography>Demo</Typography>
							</Box>
							{!isNonMobile && (
								<IconButton onClick={() => setIsOpen(!isOpen)}>
									<ChevronLeftOutlinedIcon />
								</IconButton>
							)}
						</FlexBetween>
					</Box>
				</Drawer>
			)}
		</Box>
	);
}

export default SideBarComponenet;
