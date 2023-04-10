import React, { useContext } from 'react';
import {
	AppBar,
	Box,
	Grid,
	IconButton,
	InputBase,
	Toolbar,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/material';
import {
	LightMode,
	DarkMode,
	Search,
	NotificationsNone,
	MenuOutlined,
} from '@mui/icons-material';
//============================================
import { useAppSelector } from '../../utils/hook';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';
import FlexBetween from '../flex-bettwen';
import { ITopbarProps } from '../../common/types/topbar';

const TopBarComponent: React.FC<ITopbarProps> = (
	props: ITopbarProps,
): JSX.Element => {
	const { user } = useAppSelector((state) => state.auth);
	const theme = useTheme();
	const colorMode: any = useContext(ColorModeContext);
	const { classes } = useStyles();
	const { isOpen, setIsOpen } = props;

	return (
		<AppBar className={classes.root}>
			<Toolbar className={classes.toolBar}>
				<FlexBetween>
					<MenuOutlined
						className={classes.menuIcon}
						onClick={() => setIsOpen(!isOpen)}
					/>
					<Typography variant="h3">Welcom {user?.firstName}</Typography>
				</FlexBetween>
				<Box className={classes.iconContainer}>
					<Grid className={classes.iconBlock}>
						<IconButton
							onClick={colorMode.toggleColorMode}
							className={classes.icon}
						>
							{theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
						</IconButton>
						<IconButton className={classes.icon}>
							<NotificationsNone />
						</IconButton>
					</Grid>
					<Grid className={classes.searchBlock}>
						<IconButton className={classes.icon}>
							<Search />
						</IconButton>
						<InputBase placeholder="Поиск" className={classes.searchInput} />
					</Grid>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default TopBarComponent;
