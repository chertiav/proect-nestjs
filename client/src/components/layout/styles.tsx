import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
	root: {
		display: 'flex',
		width: '100%',
	},
	mainSection: {
		display: 'flex',
		width: '85%',
		flexDirection: 'column',
		justifyContent: 'center',
	},
});
