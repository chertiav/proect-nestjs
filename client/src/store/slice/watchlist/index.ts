import { createSlice } from '@reduxjs/toolkit';
import { getWatchListElements } from '../../thunks/watchlist';

const initialState: any = {
	watchlist: [],
};

export const watchListSlice = createSlice({
	name: 'watchList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getWatchListElements.fulfilled, (state, action) => {
			state.watchlist = action.payload;
		});
	},
});

export default watchListSlice.reducer;
