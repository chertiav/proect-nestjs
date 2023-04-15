import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Box, Grid } from '@mui/material';
//===============================================================
import { useStyles } from './styles';
import { getFavoriteAssets } from '../../store/thunks/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import AreaChart from '../../components/charts/area-chart';
import LineChart from '../../components/charts/line-chart';
import TrendUp from '../../assets/images/chart/trend-up.svg';
import TrendDown from '../../assets/images/chart/trend-down.svg';
import { IChartData, ISingleAsset } from '../../common/types/assets';

const Home: React.FC = (): JSX.Element => {
	const favoriteAssets: IChartData[] = useAppSelector(
		(state) => state.assets.favoriteAssets,
	);
	const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);
	const filteredArray = favoriteAssets.filter(
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

	const renderFavoriteBlock: JSX.Element[] = filteredArray.map(
		(element: IChartData) => {
			let currentPrice: number = 0;
			let changePrice: number = 0;
			const { price_chart_data, name, singleAsset } = element;
			singleAsset.forEach((element: ISingleAsset): void => {
				currentPrice = element.current_price;
				changePrice = element.price_change_percentage_24h;
			});
			const slicePrice: number[] = price_chart_data.map(
				(element: number[]) => element[1],
			);
			const avveragePrice: number =
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
									<Box
										className={
											changePrice > 0
												? `${classes.priceTrend} ${classes.trendUp}`
												: `${classes.priceTrend} ${classes.trendDown}`
										}
									>
										{changePrice > 0 ? (
											<img src={TrendUp} alt="up" />
										) : (
											<img src={TrendDown} alt="down" />
										)}
										<span>{changePrice.toFixed(2)}%</span>
									</Box>
									<span className={classes.avveragePrice}>
										$ {avveragePrice.toLocaleString()}
									</span>
								</Grid>
							</div>
						</Grid>

						<Grid item xs={12} sm={6} lg={6}>
							<h5>
								<AreaChart data={price_chart_data} />
							</h5>
						</Grid>
					</Grid>
				</Grid>
			);
		},
	);

	return (
		<Box className={classes.root}>
			<Grid container spacing={2} className={classes.areaChart}>
				{renderFavoriteBlock}
			</Grid>
			<Grid container className={classes.lineChartBlock}>
				<Grid item xs={12} sm={12} lg={12}>
					{filteredArray.length && <LineChart data={filteredArray} />}
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
