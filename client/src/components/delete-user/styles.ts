import { makeStyles } from 'tss-react/mui';
import { tokens } from '../../theme';

export const useStyles = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {},
		tabHetting: {
			width: '100%',
			textAlign: 'center',
			marginBottom: 32,
		},
		allertMassage: {
			width: '100%',
			textAlign: 'center',
			marginBottom: 32,
		},
		checkBoxBlock: {
			width: '100%',
		},
		checkBoxBlockLabel: {
			justifyContent: 'center',
			marginBottom: 32,
		},
		checkBox: {
			'&.MuiCheckbox-root': {
				color: colors.blue,
			},
			'&.Mui-checked': {
				color: colors.blue,
			},
		},
		buttonBlock: {
			width: '100%',
			textAlign: 'center',
		},
	};
});
