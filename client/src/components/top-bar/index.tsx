import React, { useContext } from 'react';
import { Box, Grid, IconButton, InputBase } from '@mui/material';
import { useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
//============================================
import { useAppSelector } from '../../utils/hook';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';

const TopBarComponent = () => {
	const user = useAppSelector((state) => state.auth.user);
	const theme = useTheme();
	const colorMode: any = useContext(ColorModeContext);
	const { classes } = useStyles();

	return (
		<Box className={classes.root}>
			<Grid>Welcom {user?.firstName}</Grid>
			<Box className={classes.iconContainer}>
				<Grid className={classes.iconBlock}>
					<IconButton
						onClick={colorMode.toggleColorMode}
						className={classes.icon}
					>
						{theme.palette.mode === 'dark' ? (
							<DarkModeIcon />
						) : (
							<LightModeIcon />
						)}
					</IconButton>
					<IconButton className={classes.icon}>
						<NotificationsNoneIcon />
					</IconButton>
				</Grid>
				<Grid className={classes.searchBlock}>
					<IconButton className={classes.icon}>
						<SearchIcon />
					</IconButton>
					<InputBase placeholder="Поиск" className={classes.searchInput} />
				</Grid>
			</Box>
		</Box>
	);
};

export default TopBarComponent;
