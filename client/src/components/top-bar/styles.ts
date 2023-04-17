import { makeStyles } from 'tss-react/mui';
import { tokens } from '../../theme';

export const useStyles = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			background: colors.primary.DEFAULT,
			borderBottom: `1px solid ${colors.borderColor}`,
			position: 'static',
			boxShadow: 'none',
		},
		toolBar: {
			padding: '24px 45px',
			justifyContent: 'space-between',
		},
		menuIcon: {
			marginRight: '10px',
			cursor: 'pointer',
		},
	};
});
