import React from 'react';
import { TextField, Typography } from '@mui/material';
//========================================================
import { IPropsRegister } from '../../../common/types/auth';
import AuthAdornment from '../../../components/auth-adorment';
import AppButon from '../../../components/app-button';
import { useStyles } from './style';

const RegisterPage: React.FC<IPropsRegister> = (
	props: IPropsRegister,
): JSX.Element => {
	const { showPassword, setShowPassword, navigate, register, errors } = props;
	const { classes } = useStyles();

	return (
		<>
			<Typography variant="h2" className={classes.root}>
				Регистрация
			</Typography>
			<Typography
				variant="body1"
				marginBottom={2}
				className={classes.descriotion}
			>
				Введите данные для регистрации
			</Typography>
			<TextField
				error={!!errors.firstName}
				fullWidth={true}
				margin="normal"
				label="Имя"
				variant="outlined"
				placeholder="Введите ваше Имя"
				helperText={errors.firstName ? `${errors.firstName.message}` : ''}
				{...register('firstName')}
			/>
			<TextField
				error={!!errors.userName}
				fullWidth={true}
				margin="normal"
				label="Username"
				variant="outlined"
				placeholder="Введите ваш Username"
				helperText={errors.userName ? `${errors.userName.message}` : ''}
				{...register('userName')}
			/>
			<TextField
				error={!!errors.email}
				fullWidth={true}
				margin="normal"
				label="Email"
				variant="outlined"
				placeholder="Введите ваш Email"
				helperText={errors.email ? `${errors.email.message}` : ''}
				{...register('email')}
			/>
			<TextField
				error={!!errors.password}
				fullWidth={true}
				margin="normal"
				label="Password"
				type={showPassword.password ? 'text' : 'password'}
				variant="outlined"
				placeholder="Введите ваш Password"
				helperText={errors.password ? `${errors.password.message}` : ''}
				{...register('password')}
				InputProps={{
					endAdornment: (
						<AuthAdornment
							showPassword={showPassword}
							setShowPassword={setShowPassword}
							textField="password"
						/>
					),
				}}
			/>
			<TextField
				fullWidth={true}
				error={!!errors.confirmPassword}
				margin="normal"
				label="Password"
				type={showPassword.confirmPassword ? 'text' : 'password'}
				variant="outlined"
				placeholder="Повторите ваш Password"
				helperText={
					errors.confirmPassword ? `${errors.confirmPassword.message}` : ''
				}
				{...register('confirmPassword')}
				InputProps={{
					endAdornment: (
						<AuthAdornment
							showPassword={showPassword}
							setShowPassword={setShowPassword}
							textField="confirmPassword"
						/>
					),
				}}
			/>
			<AppButon type="submit" variant="contained" className={classes.button}>
				Регистрация
			</AppButon>
			<Typography variant="body1">
				У вас есть аккаунта?
				<span
					className={classes.incitingText}
					onClick={() => navigate('/login')}
				>
					Авторизация
				</span>
			</Typography>
		</>
	);
};

export default RegisterPage;
