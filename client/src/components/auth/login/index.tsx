import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
//========================================
import { IPropsLogin } from '../../../common/types/auth';
import AuthAdornment from '../authAdorment';
import { useStyles } from './styles';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
	const { setEmail, setPassword, showPassword, setShowPassword, navigate } =
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
