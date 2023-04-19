import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ISingleAsset } from '../../common/types/assets';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import FlexBetween from '../../components/flex-bettwen';
import { useStyles } from './styles';
import { createWatchListRecord } from '../../store/thunks/assets';

const SingleAssetPage: React.FC = (): JSX.Element => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { classes } = useStyles();
	const assetsArray: ISingleAsset[] = useAppSelector(
		(state) => state.assets.assets,
	);
	const asset = assetsArray.find((element) => element.name === (id as string));
	const dispatch = useAppDispatch();
	const handleCreateRecord = () => {
		const data = {
			name: '',
			assetId: '',
		};
		if (asset) {
			const token = sessionStorage.getItem('token');
			console.log(token);
			data.name = asset.name;
			data.assetId = asset.id;
			dispatch(createWatchListRecord(data));
		}
	};
	return (
		<>
			{asset && (
				<Grid container className={classes.root}>
					<Grid item xs={12} className={classes.assetName}>
						<Typography variant={'h1'}>{asset.name}</Typography>
					</Grid>
					<Grid item sm={6} xs={12} className={classes.card}>
						<Grid className={classes.cardItem}>
							<FlexBetween>
								<Avatar src={asset.image} className={classes.assetIcon} />
								<Typography variant={'h2'} className={classes.assetSymbol}>
									{asset.symbol.toUpperCase()}
								</Typography>
							</FlexBetween>
						</Grid>
					</Grid>
					<Grid item sm={6} xs={12} className={classes.card}>
						<Grid className={classes.cardItem}>
							<FlexBetween>
								<Typography variant={'h2'} className={classes.cardTitle}>
									Цена
								</Typography>
								<Typography variant={'h2'} className={classes.assetPrice}>
									$ {asset.current_price}
								</Typography>
							</FlexBetween>
						</Grid>
					</Grid>
					<Grid item sm={6} xs={12} className={classes.card}>
						<Grid className={classes.cardItem}>
							<Typography variant={'h2'} className={classes.cardTitle}>
								Изменение цены, $:&nbsp;
							</Typography>
							<Typography
								variant={'h2'}
								className={
									asset.price_change_24h >= 0
										? `${classes.assetPriceDetail} ${classes.trendUp}`
										: `${classes.assetPriceDetail} ${classes.trendDown}`
								}
							>
								{asset.price_change_24h.toFixed(4)}
							</Typography>
						</Grid>
					</Grid>
					<Grid item sm={6} xs={12} className={classes.card}>
						<Grid className={classes.cardItem}>
							<Typography variant={'h2'} className={classes.cardTitle}>
								Изменение цены, в %:&nbsp;
							</Typography>
							<Typography
								variant={'h2'}
								className={
									asset.price_change_percentage_24h >= 0
										? `${classes.assetPriceDetail} ${classes.trendUp}`
										: `${classes.assetPriceDetail} ${classes.trendDown}`
								}
							>
								{asset.price_change_percentage_24h.toFixed(2)}
							</Typography>
						</Grid>
					</Grid>
					<Grid
						container
						justifyContent={'center'}
						className={classes.cardButtonBlock}
					>
						<Button
							color={'success'}
							variant={'outlined'}
							className={classes.cardButton}
							onClick={() => navigate(-1)}
						>
							Назад
						</Button>
						<Button
							color={'success'}
							variant={'outlined'}
							className={classes.cardButton}
							onClick={handleCreateRecord}
						>
							Добавить в избранное
						</Button>
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default SingleAssetPage;
