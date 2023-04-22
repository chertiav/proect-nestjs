import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
//============================================
import { useStyles } from './styles';
import FlexBetween from '../flex-bettwen';
import { ITopbarProps } from '../../common/types/topbar';
import ThemeSwitcherComponent from '../them-switcher';
import SearchBarComponent from '../search-bar';
import { useAppSelector } from '../../utils/hook';

const TopBarComponent: React.FC<ITopbarProps> = (
	props: ITopbarProps,
): JSX.Element => {
	const { classes } = useStyles();
	const { isOpen, setIsOpen, isNonMobile } = props;
	const { user } = useAppSelector((state) => state.auth.user);

	return (
		<AppBar className={classes.root}>
			<Toolbar className={classes.toolBar}>
				<Grid container justifyContent={'space-between'} alignItems={'center'}>
					<Grid item sm={3} lg={3}>
						<FlexBetween>
							<MenuOutlined
								className={classes.menuIcon}
								onClick={() => setIsOpen(!isOpen)}
							/>
							<Typography variant="h3">
								Welcom {user?.firstName ? user.firstName : ''}
							</Typography>
						</FlexBetween>
					</Grid>
					{isNonMobile && (
						<Grid
							item
							sm={9}
							lg={9}
							display={'flex'}
							justifyContent={'flex-end'}
						>
							<ThemeSwitcherComponent />
							<SearchBarComponent />
						</Grid>
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default TopBarComponent;
