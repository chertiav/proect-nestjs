import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteAssets } from '../../thunks/assets';

const initialState: any = {
	assetes: [],
	favoriteAssets: [],
};

export const assetSlice = createSlice({
	name: 'assets',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getFavoriteAssets.fulfilled, (state, action) => {
			state.favoriteAssets = [...state.favoriteAssets, action.payload];
		});
	},
});

export default assetSlice.reducer;
