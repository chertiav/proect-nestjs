import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
	return {
		root: {
			width: '100%',
			height: '100%',
		},
		mainSection: {
			display: 'flex',
			width: '100%',
			flexDirection: 'column',
			justifyContent: 'center',
		},
	};
});
