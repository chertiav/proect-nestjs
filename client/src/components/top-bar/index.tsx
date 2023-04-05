import React, { useContext } from 'react';
import { Box, Grid, IconButton, InputBase } from '@mui/material';
import { useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
//============================================
import { useAppSelector } from '../../utils/hook';
import { ColorModeContext, tokens } from '../../theme';
import { useStyles } from './styles';

const TopBarComponent = () => {
	const { user } = useAppSelector((state) => state.auth.user);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode: any = useContext(ColorModeContext);
	const classes = useStyles();

	return (
		<Box display="flex" justifyContent="space-between" px="32px" py="24px">
			<Grid>Welcom {user?.firstName}</Grid>
			<Box display="flex">
				<Grid
					sx={{
						pr: '37px',
						borderRight: `1px solid #373E41`,
					}}
				>
					<IconButton
						onClick={colorMode.toggleColorMode}
						sx={{ marginRight: '45px' }}
					>
						{theme.palette.mode === 'dark' ? (
							<DarkModeIcon />
						) : (
							<LightModeIcon />
						)}
					</IconButton>
					<IconButton>
						<NotificationsNoneIcon />
					</IconButton>
				</Grid>
				<Grid
					sx={{
						display: 'flex',
						backgroundColor: `${colors.primary['600']}`,
						borderRadius: '8px',
						ml: '28px',
					}}
				>
					<IconButton className={classes.root}>
						<SearchIcon />
					</IconButton>
					<InputBase
						placeholder="Поиск"
						sx={{
							px: '18px',
							py: '12px',
						}}
					/>
				</Grid>
			</Box>
		</Box>
	);
};

export default TopBarComponent;
