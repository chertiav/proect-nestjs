import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
//========================================

const LoginPage = () => {
	return (
		<>
			<Typography variant="h2" fontFamily="Popins" textAlign="center">
				Авторизация
			</Typography>
			<Typography
				variant="body1"
				marginBottom={2}
				fontFamily="Popins"
				textAlign="center"
			>
				Введите Ваш логин и пароль
			</Typography>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Email"
				variant="outlined"
				placeholder="Введите ваш Email"
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Password"
				type="password"
				variant="outlined"
				placeholder="Введите ваш Password"
			/>
			<Button
				sx={{
					fontFamily: 'Popins',
					marginTop: 2,
					marginBottom: 2,
					width: '60%',
				}}
				variant="contained"
			>
				Войти
			</Button>
			<Typography variant="body1" sx={{ fontFamily: 'Popins' }}>
				У вас нет аккаунта?<span className="incitingText">Регистрация</span>
			</Typography>
		</>
	);
};

export default LoginPage;
