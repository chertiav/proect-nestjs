import React from 'react';
import { TextField, Typography } from '@mui/material';
//========================================
import { IPropsLogin } from '../../../common/types/auth';
import AuthAdornment from '../../../components/auth-adorment';
import { useStyles } from './styles';
import AppLoadingButton from '../../../components/loading-button';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
	const { showPassword, setShowPassword, navigate, register, errors, loading } =
		props;
	const { classes } = useStyles();

	return (
		<>
			<Typography variant="h2" className={classes.root}>
				Авторизация
			</Typography>
			<Typography variant="body1" className={classes.descriotion}>
				Введите Ваш логин и пароль
			</Typography>
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
			<AppLoadingButton
				loading={loading}
				type="submit"
				variant="contained"
				className={classes.button}
			>
				Войти
			</AppLoadingButton>
			<Typography variant="body1">
				У вас нет аккаунта?
				<span
					className={classes.incitingText}
					onClick={() => navigate('/register')}
				>
					Регистрация
				</span>
			</Typography>
		</>
	);
};

export default LoginPage;
