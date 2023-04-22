import React, { useContext } from 'react';
import { Grid, IconButton, useTheme } from '@mui/material';
import { DarkMode, LightMode, NotificationsNone } from '@mui/icons-material';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';

const ThemeSwitcherComponent: React.FC = (): JSX.Element => {
	const theme = useTheme();
	const colorMode: any = useContext(ColorModeContext);
	const { classes } = useStyles();
	return (
		<Grid className={classes.iconBlock}>
			<IconButton onClick={colorMode.toggleColorMode} className={classes.icon}>
				{theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
			</IconButton>
			<IconButton className={classes.icon}>
				<NotificationsNone />
			</IconButton>
		</Grid>
	);
};

export default ThemeSwitcherComponent;
