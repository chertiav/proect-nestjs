import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
//=============================================================
import { IPropsAuthAdornment } from '../../../common/types/auth';

const AuthAdornment: React.FC<IPropsAuthAdornment> = (
	props: IPropsAuthAdornment,
): JSX.Element => {
	const { showPassword, setShowPassword, textField } = props;

	const handleClickShowPassword = (): void => {
		setShowPassword({
			...showPassword,
			[textField]: !showPassword[textField],
		});
	};

	return (
		<Box
			margin={1}
			display="inline-flex"
			alignItems="center"
			justifyContent="center"
		>
			<IconButton
				aria-label="toggle password visibility"
				onClick={handleClickShowPassword}
			>
				{showPassword[textField] ? <VisibilityOff /> : <Visibility />}
			</IconButton>
		</Box>
	);
};

export default AuthAdornment;
