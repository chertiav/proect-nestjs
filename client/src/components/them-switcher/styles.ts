import { makeStyles } from 'tss-react/mui';
export const useStyles = makeStyles()(() => {
	return {
		iconBlock: {
			paddingRight: '37px',
		},
		icon: {
			'&:hover': {
				backgroundColor: 'transparent',
			},
		},
	};
});
