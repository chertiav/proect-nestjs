import { makeStyles } from 'tss-react/mui';
//========================================
import { tokens } from '../../theme';

export const useStyles = makeStyles()((theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			flexGrow: 1,
			padding: '32px',
		},
		areaChart: {
			marginBottom: '32px',
		},
		topCardItem: {
			backgroundColor: `${
				theme.palette.mode === 'light' ? colors.primary.DEFAULT : '#232323'
			}`,
			padding: '20px 16px',
			minHeight: 185,
			border: `1px solid ${colors.borderColor}`,
			borderRadius: 12,
		},
		containerItem: {
			display: 'flex',
			flexDirection: 'column',
		},
		assetName: {
			fontSize: 25,
			fontWeight: 600,
			lineHeight: '30px',
			textTransform: 'capitalize',
		},
		itemDetails: {
			display: 'flex',
			height: '100%',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			// paddingBottom: '35px',
		},
		cardPrice: {
			fontSize: 32,
			fontWeight: 700,
			lineHeight: '48px',
		},
		priceInfo: {
			margin: '0px 0px 0px 0px',
			alignItems: 'center',
		},
		avveragePrice: {
			color: `${colors.secondary.DEFAULT}`,
			fontWeight: 400,
			fontSize: 18,
			lineHeight: '21px',
			padding: '2px 4px',
		},
		priceTrend: {
			width: 80,
			display: 'flex',
			justifyContent: 'center',
			padding: '2px',
			borderRadius: 4,
		},
		trendUp: {
			backgroundColor: '#A9FFA7',
			color: '#037400',
		},
		trendDown: {
			backgroundColor: '#FFA7A7',
			color: '#740000',
		},
		lineChartBlock: {
			backgroundColor: `${
				theme.palette.mode === 'light'
					? colors.primary.DEFAULT
					: colors.primary[600]
			}`,
			padding: '20px 16px',
			minHeight: 270,
			border: `1px solid ${colors.borderColor}`,
			borderRadius: 12,
			marginBottom: 32,
		},
		topPriceRoot: {
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
