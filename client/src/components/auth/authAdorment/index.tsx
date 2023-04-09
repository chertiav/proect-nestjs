import React from 'react';
import { Box, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
//=============================================================
import { IPropsAuthAdornment } from '../../../common/types/auth';
import { useStyles } from './styles';

const AuthAdornment: React.FC<IPropsAuthAdornment> = (
	props: IPropsAuthAdornment,
): JSX.Element => {
	const { showPassword, setShowPassword, textField } = props;
	const { classes } = useStyles();

	const handleClickShowPassword = (): void => {
		setShowPassword({
			...showPassword,
			[textField]: !showPassword[textField],
		});
	};

	return (
		<Box className={classes.root}>
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
