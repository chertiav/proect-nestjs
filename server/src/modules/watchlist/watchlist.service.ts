import { Injectable } from '@nestjs/common';
import { Watchlist } from './models/watchlist.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class WatchlistService {
	constructor(
		@InjectModel(Watchlist)
		private readonly watctListRepoository: typeof Watchlist,
	) {}

	async createAsset(user, dto) {
		const watchlist = {
			user: user.id,
			name: dto.name,
			assetId: dto.assetId,
		};
		await this.watctListRepoository.create(watchlist);
		return watchlist;
	}
}
