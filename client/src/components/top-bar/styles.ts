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
		iconContainer: {
			display: 'flex',
			alignItems: 'center',
		},
		menuIcon: {
			marginRight: '10px',
			cursor: 'pointer',
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
			maxHeight: '45px',
			backgroundColor: `${colors.primary['600']}`,
			borderRadius: '8px',
			marginLeft: '28px',
		},
		searchInput: {
			padding: '12px 18px',
		},
	};
});
