import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Box, Grid } from '@mui/material';
//===============================================================
import { useStyles } from './styles';
import { getFavoriteAssets } from '../../store/thunks/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import AreaChart from '../../components/charts/area-chart';

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
		const currentPrice = element.data.prices[element.data.prices.length - 1];
		const currentCap =
			element.data.market_caps[element.data.market_caps.length - 1];
		return (
			<Grid item key={element.name} xs={12} sm={6} lg={6}>
				<Grid container className={classes.topCardItem}>
					<Grid item xs={12} sm={6} lg={6} className={classes.containerItem}>
						<h3 className={classes.assetName}>{element.name}</h3>
						<div className={classes.itemDetails}>
							<h3 className={classes.cardPrice}>
								$ {parseFloat(currentPrice[1].toFixed(2)).toLocaleString()}
							</h3>
							<p className={classes.cardCapitalize}>
								$ {parseInt(currentCap[1].toFixed(0)).toLocaleString()}
							</p>
						</div>
					</Grid>

					<Grid item xs={12} sm={6} lg={6}>
						<h5>
							<AreaChart data={element.data.prices} />
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
