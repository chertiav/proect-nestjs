import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Box, Grid } from '@mui/material';
//===============================================================
import { useStyles } from './styles';
import { getFavoriteAssets } from '../../store/thunks/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import AreaChart from '../../components/charts/area-chart';
import TrendUp from '../../assets/images/chart/trend-up.svg';
import TrendDown from '../../assets/images/chart/trend-down.svg';

const Home: React.FC = (): JSX.Element => {
	const favoriteAssets: any[] = useAppSelector(
		(state) => state.assets.favoriteAssets,
	);
	const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);
	const newArray = favoriteAssets.filter(
		(value, index, self) =>
			index === self.findIndex((t) => t.name === value.name),
	);

	const dispatch = useAppDispatch();
	const fetchDataRef = useRef(false);
	const { classes } = useStyles();

	const fetchData = useCallback(
		(data: string[]) => {
			data.forEach((element: string) => {
				dispatch(getFavoriteAssets(element));
			});
		},
		[dispatch],
	);

	useEffect(() => {
		if (fetchDataRef.current) return;
		fetchDataRef.current = true;
		fetchData(favoriteAssetName);
	}, [favoriteAssetName, fetchData]);

	const renderFavoriteBlock = newArray.map((element: any) => {
		const { data, name, singleAsset } = element;
		const currentPrice = singleAsset.map(
			(element: any) => element.current_price,
		);
		const changePrice = singleAsset.map(
			(element: any) => element.market_cap_change_percentage_24h,
		);
		const slicePrice = data.map((element: number[]) => element[1]);
		const avveragePrice =
			slicePrice.reduce((price: number, total: number) => price + total) /
			slicePrice.length;
		return (
			<Grid item key={name} xs={12} sm={6} lg={6}>
				<Grid container className={classes.topCardItem}>
					<Grid item xs={12} sm={6} lg={6} className={classes.containerItem}>
						<h3 className={classes.assetName}>{name}</h3>
						<div className={classes.itemDetails}>
							<h3 className={classes.cardPrice}>
								${currentPrice.toLocaleString()}
							</h3>
							<Grid spacing={1} container className={classes.priceInfo}>
								<Box className={changePrice > 0
								? `${classes.priceTrend} ${classes.trendUp}`
								: `${classes.priceTrend} ${classes.trendDown}`
							}>
									{changePrice > 0 ? (
										<img src={TrendUp} alt="up" />
									) : (
										<img src={TrendDown} alt="down" />
									)}
									<span>{parseFloat(changePrice).toFixed(2)}%</span>
								</Box>
								<span className={classes.avveragePrice}>
									$ {avveragePrice.toLocaleString()}
								</span>
							</Grid>
						</div>
					</Grid>

					<Grid item xs={12} sm={6} lg={6}>
						<h5>
							<AreaChart data={data} />
						</h5>
					</Grid>
				</Grid>
			</Grid>
		);
	});

	return (
		<Box className={classes.root}>
			<Grid container spacing={2}>
				{renderFavoriteBlock}
			</Grid>
		</Box>
	);
};

export default Home;
