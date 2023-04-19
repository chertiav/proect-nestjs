import {
	Body,
	Controller,
	Delete,
	Get,
	Post,
	Query,
	Req,
	UseGuards,
} from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchlistDTO } from './dto';
import { JwtAuthGuard } from '../../guards/jwt-guard';
import { CreateAssetResponse, GetUserAssetsResponse } from './response';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Watchlist } from './models/watchlist.model';

@Controller('watchlist')
export class WatchlistController {
	constructor(private readonly watchListService: WatchlistService) {}

	@ApiTags('API')
	@ApiResponse({ status: 201, type: CreateAssetResponse })
	@UseGuards(JwtAuthGuard)
	@Post('create')
	createAsset(
		@Body() assetDto: WatchlistDTO,
		@Req() request,
	): Promise<CreateAssetResponse> {
		const user = request.user;
		return this.watchListService.createAsset(user, assetDto);
	}

	@ApiTags('API')
	@ApiResponse({ status: 200, type: GetUserAssetsResponse })
	@UseGuards(JwtAuthGuard)
	@Get('get-elements')
	getUserAssets(@Req() request): Promise<Watchlist[]> {
		const user = request.user;
		return this.watchListService.getUserAssets(user.id);
	}

	@ApiTags('API')
	@ApiResponse({ status: 200 })
	@UseGuards(JwtAuthGuard)
	@Delete()
	deleteAsset(@Query('id') assetId: string, @Req() request): Promise<boolean> {
		const { id: userId } = request.user;
		return this.watchListService.deleteAsset(userId, assetId);
	}
}
