import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getNews } from '../../store/thunks/news/intex';
import { useStyle } from './style';
import { Box, Grid, Link, Typography } from '@mui/material';

const NewsPage = () => {
	const { news } = useAppSelector((state) => state.news);
	const dispatch = useAppDispatch();
	const { classes } = useStyle();
	const renderNewsBlock = news.map((element: any) => {
		return (
			<Grid container className={classes.newsBlock} key={element.id}>
				<Grid item xs={12} md={3}>
					<img src={element.imageurl} alt={element.category} />
				</Grid>
				<Grid item xs={12} md={9}>
					<Box className={classes.newsTitle}>
						<Typography variant="h3">{element.title}</Typography>
					</Box>
					<Box>
						<Typography variant="body1">{element.body}</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={12} className={classes.readMore}>
					<Typography variant="h4">
						<Link href={element.url}>Read more</Link>
					</Typography>
				</Grid>
			</Grid>
		);
	});

	useEffect(() => {
		dispatch(getNews());
	}, [dispatch]);

	return (
		<Grid className={classes.root}>
			<Grid className={classes.blockTitle}>
				<Typography variant="h4">Новости</Typography>
			</Grid>
			<Grid>{renderNewsBlock}</Grid>
		</Grid>
	);
};

export default NewsPage;
