import { tokens } from '../../theme';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		searchBlock: {
			display: 'flex',
			width: '25rem',
			backgroundColor: `${colors.primary['600']}`,
			borderRadius: '8px',
		},
	};
});
