import { makeStyles } from 'tss-react/mui';
import { tokens } from '../../theme';

export const useStyles = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			display: 'flex',
			maxHeight: '95px',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '24px 32px',
			backgroundColor: colors.primary.DEFAULT,
			borderBottom: `1px solid ${colors.borderColor}`,
		},
		iconContainer: {
			display: 'flex',
			alignItems: 'center',
		},
		iconBlock: {
			paddingRight: '37px',
			borderRight: `1px solid ${colors.borderColor}`,
		},
		icon: {
			'&:hover': {
				backgroundColor: 'transparent',
			},
		},
		searchBlock: {
			display: 'flex',
			backgroundColor: `${colors.primary['600']}`,
			borderRadius: '8px',
			marginLeft: '28px',
		},
		searchInput: {
			padding: '12px 18px',
		},
	};
});
