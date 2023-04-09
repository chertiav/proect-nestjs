import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
//========================================
import { IPropsLogin } from '../../../common/types/auth';
import AuthAdornment from '../authAdorment';
import { useStyles } from './styles';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
	const { showPassword, setShowPassword, navigate, register, errors } = props;
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
				{...register('email', {
					required: 'Это обязательное поле',
					pattern:
						/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				})}
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
				{...register('password', {
					required: 'Это обязательное поле',
					minLength: 6,
				})}
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
			<Button
				type="submit"
				sx={{
					fontFamily: 'Poppins',
					marginTop: 2,
					marginBottom: 2,
					width: '60%',
				}}
				variant="contained"
			>
				Войти
			</Button>
			<Typography variant="body1" className={classes.root}>
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
