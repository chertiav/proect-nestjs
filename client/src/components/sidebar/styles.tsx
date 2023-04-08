import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
	brand: {
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
		padding: '30px 15px',
		cursor: 'pointer',
	},
	navItem: {
		'&:hover': {
			backgroundColor: '#1900D5;',
			color: '#fff',
			borderRadius: '4px',
		},
	},
});
