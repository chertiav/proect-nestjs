import { makeStyles } from 'tss-react/mui';
import { tokens } from '../../theme';

export const useStyles = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			margin: '8px',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			'& .MuiIconButton-root:hover': {
				backgroundColor: 'transparent',
				boxShadow: 'none',
				backgroundImage: 'none',
			},
		},
	};
});
