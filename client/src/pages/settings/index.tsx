import React, { useState } from 'react';
import { Box, Grid, Tab, Tabs, useTheme } from '@mui/material';
import TabPanel from '../../common/tab-panel';
import { tabProps } from '../../utils/helpers';
import { tokens } from '../../theme';
import { useStyle } from './style';
import SettingsPersonalInfoComponent from '../../components/settings-personal-info';

const SettingsPage = () => {
	const [value, setValue] = useState(0);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const { classes } = useStyle();
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Grid className={classes.root}>
			<Box className={classes.tabsWrapper}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="Settinge tabs"
						centered
						textColor="secondary"
						TabIndicatorProps={{
							style: {
								backgroundColor: colors.blue,
							},
						}}
					>
						<Tab label="Персональные данные" {...tabProps(0)} />
						<Tab label="Изменить пароль" {...tabProps(1)} />
						<Tab label="Удалить аккаунт" {...tabProps(2)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<SettingsPersonalInfoComponent />
				</TabPanel>
				<TabPanel value={value} index={1}>
					Item Two
				</TabPanel>
				<TabPanel value={value} index={2}>
					Item Three
				</TabPanel>
			</Box>
		</Grid>
	);
};

export default SettingsPage;
