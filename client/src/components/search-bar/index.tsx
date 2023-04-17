import React from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';
//===================================================
import { useStyles } from './styles';
import { ISingleAsset } from '../../common/types/assets';
import { useAppSelector } from '../../utils/hook';

const SearchBarComponent = () => {
	const assetsArray: ISingleAsset[] = useAppSelector(
		(state) => state.assets.assets,
	);
	const { classes } = useStyles();
	return (
		<Stack className={classes.searchBlock}>
			<Autocomplete
				freeSolo
				renderInput={(params) => <TextField {...params} label={'поиск'} />}
				options={assetsArray.map((element: { name: string }) => element.name)}
			/>
		</Stack>
	);
};

export default SearchBarComponent;
