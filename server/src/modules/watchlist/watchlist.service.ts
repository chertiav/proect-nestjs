import { Injectable } from '@nestjs/common';
import { Watchlist } from './models/watchlist.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAssetResponse } from './response';

@Injectable()
export class WatchlistService {
	constructor(
		@InjectModel(Watchlist)
		private readonly watctListRepoository: typeof Watchlist,
	) {}

	async createAsset(user, dto): Promise<CreateAssetResponse> {
		const watchlist = {
			user: user.id,
			name: dto.name,
			assetId: dto.assetId,
		};
		await this.watctListRepoository.create(watchlist);
		return watchlist;
	}

	async deleteAsset(userId: number, assetId: string): Promise<boolean> {
		await this.watctListRepoository.destroy({
			where: {
				id: assetId,
				user: userId,
			},
		});
		return true;
	}
}
