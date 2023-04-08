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
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../flex-bettwen';
import { navMenu } from '../../common/moks/navigate';
import { tokens } from '../../theme';
import Logo from '../../assets/images/sidebar/logo.svg';

function SideBarComponenet(props: any) {
	const [active, setActive] = useState('');
	const { isNonMobile, drowerWidth, isOpen, setIsOpen } = props;
	const { pathname } = useLocation();
	const { classes } = useStyles();
	const navigate = useNavigate();
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	useEffect(() => {
		setActive(pathname.substring(1));
	}, [pathname]);

	const renderNavMenu = () =>
		navMenu.map((element): JSX.Element => {
			return (
				<ListItem key={element.id}>
					<ListItemButton
						onClick={() => navigate(element.path)}
						className={classes.navItem}
					>
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
					<Box
						sx={{
							width: '100%',
							borderBottom: `1px solid ${colors.borderColor}`,
						}}
					>
						<Box>
							<FlexBetween>
								<Box className={classes.brand}>
									<img src={Logo} alt="Logo" />
									<Typography
										variant="h1"
										color={
											theme.palette.mode === 'dark'
												? colors.white.DEFAULT
												: colors.black.DEFAULT
										}
									>
										Demo
									</Typography>
								</Box>
								{!isNonMobile && (
									<IconButton onClick={() => setIsOpen(!isOpen)}>
										<ChevronLeftOutlinedIcon />
									</IconButton>
								)}
							</FlexBetween>
						</Box>
						<List sx={{ marginBottom: '55px' }}>{renderNavMenu()}</List>
					</Box>
					<Box width={'100%'}>
						<List>
							<ListItem>
								<ListItemButton className={classes.navItem}>
									<ListItemIcon>
										<LogoutOutlinedIcon />
									</ListItemIcon>
									<ListItemText>
										<Typography>Logout</Typography>
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</List>
					</Box>
				</Drawer>
			)}
		</Box>
	);
}

export default SideBarComponenet;
