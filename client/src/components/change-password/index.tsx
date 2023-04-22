import React, { useState } from 'react';
import { useStyles } from './styles';
import { Box, Grid, TextField } from '@mui/material';
import AppLoadingButton from '../loading-button';
import { useAppDispatch } from '../../utils/hook';
import AuthAdornment from '../auth-adorment';
import { updateUserPassword } from '../../store/thunks/auth';

const ChangePasswordComponent = () => {
	const dispatch = useAppDispatch();
	const [dataPassword, setDataPassword] = useState({
		newPassword: '',
		oldPassword: '',
	});
	const [showPassword, setShowPassword] = useState({
		newPassword: false,
		oldPassword: false,
	});
	const { classes } = useStyles();

	const handleOnChaange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDataPassword({ ...dataPassword, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const data = {
			oldPassword: dataPassword.oldPassword,
			newPassword: dataPassword.newPassword,
		};
		dispatch(updateUserPassword(data));
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
					type={showPassword.oldPassword ? 'text' : 'password'}
					label="Старый пароль"
					variant={'outlined'}
					value={dataPassword.oldPassword}
					name="oldPassword"
					onChange={handleOnChaange}
					InputProps={{
						endAdornment: (
							<AuthAdornment
								showPassword={showPassword}
								setShowPassword={setShowPassword}
								textField="oldPassword"
							/>
						),
					}}
				/>
				<TextField
					className={classes.inputField}
					type={showPassword.newPassword ? 'text' : 'password'}
					label="Новый пароль"
					variant={'outlined'}
					value={dataPassword.newPassword}
					name="newPassword"
					onChange={handleOnChaange}
					InputProps={{
						endAdornment: (
							<AuthAdornment
								showPassword={showPassword}
								setShowPassword={setShowPassword}
								textField="newPassword"
							/>
						),
					}}
				/>
				<Box className={classes.button}>
					<AppLoadingButton type={'submit'}>Изменить пароль</AppLoadingButton>
				</Box>
			</Box>
		</Grid>
	);
};

export default ChangePasswordComponent;
