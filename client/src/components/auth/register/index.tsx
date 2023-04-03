import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
//========================================================
import { IPropsRegister } from '../../../common/types/auth';
import AuthAdornment from '../authAdorment';

const RegisterPage: React.FC<IPropsRegister> = (
	props: IPropsRegister,
): JSX.Element => {
	const {
		setEmail,
		setPassword,
		setRepeatPassword,
		setUserName,
		setFirstName,
		showPassword,
		setShowPassword,
		navigate,
	} = props;

	return (
		<>
			<Typography variant="h2" fontFamily="Poppins" textAlign="center">
				Регистрация
			</Typography>
			<Typography
				variant="body1"
				marginBottom={2}
				fontFamily="Poppins"
				textAlign="center"
			>
				Введите данные для регистрации
			</Typography>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Имя"
				variant="outlined"
				placeholder="Введите ваше Имя"
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Username"
				variant="outlined"
				placeholder="Введите ваш Username"
				onChange={(e) => setUserName(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Email"
				variant="outlined"
				placeholder="Введите ваш Email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Password"
				type={showPassword.password ? 'text' : 'password'}
				variant="outlined"
				placeholder="Введите ваш Password"
				onChange={(e) => setPassword(e.target.value)}
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
				margin="normal"
				label="Password"
				type={showPassword.repeatPassword ? 'text' : 'password'}
				variant="outlined"
				placeholder="Повторите ваш Password"
				onChange={(e) => setRepeatPassword(e.target.value)}
				InputProps={{
					endAdornment: (
						<AuthAdornment
							showPassword={showPassword}
							setShowPassword={setShowPassword}
							textField="repeatPassword"
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
			<Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
				У вас есть аккаунта?
				<span className="incitingText" onClick={() => navigate('/login')}>
					Авторизация
				</span>
			</Typography>
		</>
	);
};

export default RegisterPage;
