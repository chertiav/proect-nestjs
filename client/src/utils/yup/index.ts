import * as yup from 'yup';
//===============================
import { AppErrors } from '../../common/errors';

export const LoginSchema = yup
	.object()
	.shape({
		email: yup
			.string()
			.email(AppErrors.InvalidEmail)
			.required(AppErrors.RequiredField),
		password: yup
			.string()
			.min(6, AppErrors.minLength_6)
			.matches(
				/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,20}/g,
				AppErrors.invalidPassword,
			)
			.required(AppErrors.RequiredField),
	})
	.required();

export const RegisterSchema = yup
	.object()
	.shape({
		email: yup
			.string()
			.email(AppErrors.InvalidEmail)
			.required(AppErrors.RequiredField),
		password: yup
			.string()
			.min(6, AppErrors.minLength_6)
			.matches(
				/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,20}/g,
				AppErrors.invalidPassword,
			)
			.required(AppErrors.RequiredField),
		confirmPassword: yup
			.string()
			.min(6, AppErrors.minLength_6)
			.matches(
				/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,20}/g,
				AppErrors.invalidPassword,
			)
			.required(AppErrors.RequiredField),
		firstName: yup
			.string()
			.min(1, AppErrors.minLength_1)
			.required(AppErrors.RequiredField),
		userName: yup
			.string()
			.min(1, AppErrors.minLength_1)
			.required(AppErrors.RequiredField),
	})
	.required();
