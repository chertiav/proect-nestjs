import { makeStyles } from 'tss-react/mui';
import { tokens } from '../../theme';

export const useStyle = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			padding: 32,
		},
		tabsWrapper: {
			borderBottom: `1px solid ${colors.borderColor}`,
		},
	};
});
