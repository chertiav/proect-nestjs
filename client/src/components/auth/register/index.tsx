import React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const RegisterPage = () => {
	return (
		<>
			<Typography variant="h2" fontFamily="Popins" textAlign="center">
				Регистрация
			</Typography>
			<Typography
				variant="body1"
				marginBottom={2}
				fontFamily="Popins"
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
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Username"
				variant="outlined"
				placeholder="Введите ваш Username"
			/>
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
			<TextField
				fullWidth={true}
				margin="normal"
				label="Password"
				type="password"
				variant="outlined"
				placeholder="Повторите ваш Password"
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
				У вас есть аккаунта?<span className="incitingText">Авторизация</span>
			</Typography>
		</>
	);
};

export default RegisterPage;
