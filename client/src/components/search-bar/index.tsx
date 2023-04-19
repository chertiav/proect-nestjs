import React, { useState } from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';
//===================================================
import { useStyles } from './styles';
import { ISingleAsset } from '../../common/types/assets';
import { useAppSelector } from '../../utils/hook';
import { useNavigate } from 'react-router-dom';

const SearchBarComponent: React.FC = (): JSX.Element => {
	const [selectedItem, setSelectedItem] = useState<string | null>(null);
	const navigate = useNavigate();
	const assetsArray: ISingleAsset[] = useAppSelector(
		(state) => state.assets.assets,
	);
	const { classes } = useStyles();
	return (
		<Stack className={classes.searchBlock}>
			<Autocomplete
				value={selectedItem}
				onChange={(e: any, value: string | null) => {
					value && navigate(`single/${value}`);
					setSelectedItem(null);
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						label={'поиск'}
						InputProps={{
							...params.InputProps,
							type: 'search',
						}}
					/>
				)}
				options={assetsArray.map((element: { name: string }) => element.name)}
			/>
		</Stack>
	);
};

export default SearchBarComponent;
