import {
	Body,
	Controller,
	Delete,
	Patch,
	Req,
	UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@ApiTags('API')
	@ApiResponse({ status: 200, type: UpdateUserDTO })
	@UseGuards(JwtAuthGuard)
	@Patch('update')
	updateUser(
		@Body() updateDto: UpdateUserDTO,
		@Req() request,
	): Promise<UpdateUserDTO> {
		const user = request.user;
		return this.userService.updateUser(user.email, updateDto);
	}

	@UseGuards(JwtAuthGuard)
	@Delete('delete')
	deleteUser(@Req() request) {
		const user = request.user;
		return this.userService.deleteUser(user.email);
	}
}
