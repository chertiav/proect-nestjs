import { makeStyles } from 'tss-react/mui';
import { tokens } from '../../theme';

export const useStyles = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			padding: '10px 20px',
		},
		watchListHeading: {
			textAlign: 'center',
		},
		heading: {
			margin: '25px 0',
		},
		assetsTableBlock: {
			backgroundColor: `${
				theme.palette.mode === 'light'
					? colors.primary.DEFAULT
					: colors.primary[600]
			}`,
			padding: '20px 16px',
			marginBottom: 32,
			minHeight: 270,
			border: `1px solid ${colors.borderColor}`,
			borderRadius: 12,
			'& .MuiPaper-root': {
				backgroundColor: 'transparent',
				boxShadow: 'none',
				backgroundImage: 'none',
			},
		},
	};
});
