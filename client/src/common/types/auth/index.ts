import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface IShowPassword {
	password: boolean;
	repeatPassword: boolean;
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
	navigate: (to: string) => void;
	showPassword: IShowPassword;
	setShowPassword: (value: IShowPassword) => void;
	register: UseFormRegister<TFieldValues>;
	errors: FieldErrors<TFieldValues>;
}
export interface IPropsRegister {
	setEmail: (value: string) => void;
	setPassword: (value: string) => void;
	setRepeatPassword: (value: string) => void;
	setUserName: (value: string) => void;
	setFirstName: (value: string) => void;
	navigate: (to: string) => void;
	showPassword: IShowPassword;
	setShowPassword: (value: IShowPassword) => void;
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
}
