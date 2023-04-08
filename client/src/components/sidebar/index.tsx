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
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
//============================================
import { useStyles } from './styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flex-bettwen';
import { navMenu } from '../../common/moks/navigate';

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

	const renderNavMenu = () =>
		navMenu.map((element): JSX.Element => {
			return (
				<ListItem key={element.id}>
					<ListItemButton onClick={() => navigate(element.path)}>
						<ListItemIcon>{element.icon}</ListItemIcon>
						<ListItemText>
							<Typography variant="body1">{element.name}</Typography>
						</ListItemText>
					</ListItemButton>
				</ListItem>
			);
		});

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
						<Box>
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
						<List>{renderNavMenu()}</List>
					</Box>
				</Drawer>
			)}
		</Box>
	);
}

export default SideBarComponenet;
