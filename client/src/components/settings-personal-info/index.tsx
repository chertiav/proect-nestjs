import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { useStyles } from './styles';
import { Box, Grid, TextField } from '@mui/material';
import AppLoadingButton from '../loading-button';
import { getPublicUser, updateUserInfo } from '../../store/thunks/auth';

const SettingsPersonalInfoComponent: React.FC = (): JSX.Element => {
	const [userInfo, setUserInfo] = useState({
		firstName: '',
		userName: '',
		email: '',
	});
	const { user } = useAppSelector((state) => state.auth.user);
	const { classes } = useStyles();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (user)
			setUserInfo({
				firstName: user.firstName,
				userName: user.userName,
				email: user.email,
			});
	}, [user]);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const data = {
			firstName: userInfo.firstName,
			userName: userInfo.userName,
			email: userInfo.email,
		};
		dispatch(updateUserInfo(data));
		dispatch(getPublicUser());
	};

	const handleOnChaange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
	};

	return (
		<Grid
			component={'form'}
			noValidate
			autoComplete={'off'}
			className={classes.root}
			onSubmit={handleSubmit}
		>
			<Box className={classes.formWrapper}>
				<TextField
					className={classes.inputField}
					type={'text'}
					label="Имя"
					variant={'outlined'}
					value={userInfo.firstName}
					name="firstName"
					onChange={handleOnChaange}
				/>
				<TextField
					className={classes.inputField}
					type={'text'}
					label="Username"
					variant={'outlined'}
					value={userInfo.userName}
					name="userName"
					onChange={handleOnChaange}
				/>
				<TextField
					className={classes.inputField}
					type={'text'}
					label="Email"
					variant={'outlined'}
					value={userInfo.email}
					name="email"
					onChange={handleOnChaange}
				/>
				<Box className={classes.button}>
					<AppLoadingButton type={'submit'}>Сохранить</AppLoadingButton>
				</Box>
			</Box>
		</Grid>
	);
};

export default SettingsPersonalInfoComponent;
