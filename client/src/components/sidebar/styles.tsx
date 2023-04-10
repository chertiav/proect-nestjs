import { makeStyles } from 'tss-react/mui';
//=========================================
import { tokens } from '../../theme';
import { IStylesSidebarProps } from '../../common/types/sidebar';

export const useStyles = makeStyles<IStylesSidebarProps>()(
	(theme, props: IStylesSidebarProps) => {
		const colors = tokens(theme.palette.mode);
		return {
			root: {
				width: props.drowerWidth,
				'& .MuiDrawer-paper': {
					color: theme.palette.secondary.main,
					background: theme.palette.primary.main,
					boxSizing: 'border-box',
					width: props.drowerWidth,
				},
			},
			brand: {
				display: 'flex',
				alignItems: 'center',
				gap: '10px',
				padding: '30px 15px',
				cursor: 'pointer',
			},
			brandTitle: {
				color:
					theme.palette.mode === 'dark'
						? colors.white.DEFAULT
						: colors.black.DEFAULT,
			},
			navBlock: {
				width: '100%',
				borderBottom: `1px solid ${colors.borderColor}`,
			},
			navList: {
				marginBottom: '55px',
			},
			navItem: {
				'& .MuiSvgIcon-root': {
					color: theme.palette.secondary.main,
				},
				'&:hover': {
					backgroundColor: '#1900D5;',
					color: '#fff',
					borderRadius: '4px',
					'& .MuiSvgIcon-root': {
						color: colors.white.DEFAULT,
					},
				},
			},
			navFotter: {
				width: '100%',
			},
			active: {
				backgroundColor: '#1900D5',
				color: '#fff',
				borderRadius: '4px',
				'& .MuiSvgIcon-root': {
					color: colors.white.DEFAULT,
				},
			},
		};
	},
);
