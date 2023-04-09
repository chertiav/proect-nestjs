import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
//=============================================
import './style.scss';
import LoginPage from './login';
import RegisterPage from './register';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

const AuthRootComponent: React.FC = (): JSX.Element => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [userName, setUserName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [showPassword, setShowPassword] = useState({
		password: false,
		repeatPassword: false,
	});
	const location = useLocation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const handleSubmitForm = async (data: any) => {
		if (location.pathname === '/login') {
			try {
				const userData = { email: data.email, password: data.password };
				const user = await instance.post('auth/login', userData);
				await dispatch(login(user.data));
				navigate('/');
			} catch (e) {
				let message = 'Unknown Error';
				if (e instanceof Error) message = e.message;
				return message;
			}
		} else {
			if (password === repeatPassword) {
				try {
					const userData = { firstName, userName, email, password };
					const newUser = await instance.post('auth/register', userData);
					await dispatch(login(newUser.data));
					navigate('/');
				} catch (e) {
					let message = 'Unknown Error';
					if (e instanceof Error) message = e.message;
					return message;
				}
			} else {
				throw new Error(AppErrors.PasswordDoNotMatch);
			}
		}
	};

	return (
		<div className="root">
			<form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					maxWidth={640}
					margin="auto"
					padding={5}
					borderRadius={5}
					boxShadow={'5px 5px 10px #ccc'}
				>
					{location.pathname === '/login' ? (
						<LoginPage
							register={register}
							errors={errors}
							showPassword={showPassword}
							setShowPassword={setShowPassword}
							navigate={navigate}
						/>
					) : location.pathname === '/register' ? (
						<RegisterPage
							setEmail={setEmail}
							setPassword={setPassword}
							setRepeatPassword={setRepeatPassword}
							setUserName={setUserName}
							setFirstName={setFirstName}
							showPassword={showPassword}
							setShowPassword={setShowPassword}
							navigate={navigate}
						/>
					) : null}
				</Box>
			</form>
		</div>
	);
};

export default AuthRootComponent;
