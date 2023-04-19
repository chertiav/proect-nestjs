import { createAsyncThunk } from '@reduxjs/toolkit';
import { instanceAuth } from '../../../utils/axios';

export const getWatchListElements = createAsyncThunk(
	'watchlist/get-elements',
	async (_, { rejectWithValue }) => {
		try {
			const userData = await instanceAuth.get('watchlist/get-elements');
			return userData.data;
		} catch (error: any) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	},
);
