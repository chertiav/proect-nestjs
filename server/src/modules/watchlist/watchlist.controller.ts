import {
	Body,
	Controller,
	Delete,
	Get,
	Patch,
	Post,
	Query,
	Req,
	UseGuards,
} from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchlistDTO } from './dto';
import { JwtAuthGuard } from '../../guards/jwt-guard';

@Controller('watchlist')
export class WatchlistController {
	constructor(private readonly watchListService: WatchlistService) {}

	@UseGuards(JwtAuthGuard)
	@Post('create')
	createAsset(@Body() assetDto: WatchlistDTO, @Req() request: any) {
		const user = request.user;
		return this.watchListService.createAsset(user, assetDto);
	}

	@Get('get-all')
	getAllAssets() {
		return;
	}

	@Patch('update')
	updateAssset() {
		return;
	}

	@Delete()
	deleteAsset(@Query('id') id: string) {
		return;
	}
}
