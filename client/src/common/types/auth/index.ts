import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface IShowPassword {
	password: boolean;
	confirmPassword: boolean;
	[key: string]: boolean;
}
export interface IPropsAuthAdornment {
	showPassword: IShowPassword;
	setShowPassword: (value: IShowPassword) => void;
	textField: string;
}
export interface IPropsLogin<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any,
> {
	loading: boolean;
	navigate: (to: string) => void;
	showPassword: IShowPassword;
	setShowPassword: (value: IShowPassword) => void;
	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;
}
export interface IPropsRegister<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any,
> {
	loading: boolean;
	navigate: (to: string) => void;
	showPassword: IShowPassword;
	setShowPassword: (value: IShowPassword) => void;
	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;
}

interface IPublicUser {
	id: number | null;
	firstName: string;
	userName: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	watchlist: [IWatchlist];
}

interface IWatchlist {
	id: number | null;
	name: string;
	assetId: string;
	createdAt: string;
	updatedAt: string;
	user: number | null;
}

export interface IAuthState {
	user: IPublicUser;
	isLogged: boolean;
	isLoading: boolean;
}

export interface ILoginData {
	email: string;
	password: string;
}

export interface IRegisterData {
	email: string;
	password: string;
	firstName: string;
	userName: string;
}
