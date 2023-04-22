import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getWatchListElements } from '../../store/thunks/watchlist';
import { getTopPriceData } from '../../store/thunks/assets';
import TopPriceComponent from '../../components/top-price';
import { Grid, Typography } from '@mui/material';
import { useStyles } from './styles';

const WatchListPage: React.FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { classes } = useStyles();
	const {
		watchList: { watchlist },
		assets: { assets },
	} = useAppSelector((state) => state);
	useEffect(() => {
		dispatch(getTopPriceData());
		dispatch(getWatchListElements());
	}, [dispatch]);
	const filteredArray = assets.filter((element: any) => {
		return watchlist.some((otherElement: any) => {
			return otherElement.assetId === element.id;
		});
	});
	return (
		<Grid className={classes.root}>
			<Grid className={classes.watchListHeading}>
				<Typography variant={'h2'} className={classes.heading}>
					Избранное
				</Typography>
			</Grid>
			<Grid className={classes.assetsTableBlock}>
				<TopPriceComponent assets={filteredArray} />
			</Grid>
		</Grid>
	);
};

export default WatchListPage;
