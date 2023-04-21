import { makeStyles } from 'tss-react/mui';
import { tokens } from '../../theme';

export const useStyles = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			'& .MuiPaper-root': {
				backgroundColor: 'transparent',
				boxShadow: 'none',
				backgroundImage: 'none',
			},
			'& .MuiOutlinedInput-root': {
				'&.Mui-focused fieldset': {
					borderColor: colors.blue,
				},
			},
			'& label.Mui-focused': {
				color: `${
					theme.palette.mode === 'dark'
						? colors.white.DEFAULT
						: colors.black.DEFAULT
				}`,
			},
		},
		formWrapper: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: '32px 0',
		},
		inputField: {
			with: '25%',
			marginBottom: '15px',
		},
		button: {
			marginTop: 32,
		},
	};
});
