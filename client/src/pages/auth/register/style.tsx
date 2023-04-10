import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
	root: {
		textAlign: 'center',
		fontFamily: 'Popins',
		fontSize: '32px',
	},
	descriotion: {
		marginBottom: '16px',
		fontFamily: 'Popins',
		textAlign: 'center',
	},
	button: {
		margin: '16px 0',
		fontFamily: 'Popins',
		width: '60%',
	},
	incitingText: {
		color: '#4128FF',
		fontFamily: 'Popins',
		marginLeft: '10px',
		cursor: 'pointer',
	},
});
