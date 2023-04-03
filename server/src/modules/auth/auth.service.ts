import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
//====================================================
import { CreateUserDTO } from '../user/dto';
import { UserService } from '../user/user.service';
import { AppError } from 'src/common/constants/errors';
import { UserLoginDTO } from './dto';
import { AuthUserResponse } from './response';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService) {}

	async registerUsers(dto: CreateUserDTO): Promise<AuthUserResponse> {
		try {
			const existUser = await this.userService.findUserByEmail(dto.email);
			if (existUser) throw new BadRequestException(AppError.USER_EXIST);
			await this.userService.createUser(dto);
			return this.userService.publicUser(dto.email);
		} catch (error) {
			throw new BadRequestException(AppError.USER_EXIST);
		}
	}

	async loginUser(dto: UserLoginDTO): Promise<AuthUserResponse> {
		try {
			const existUser = await this.userService.findUserByEmail(dto.email);
			if (!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST);
			const validatePassword = await bcrypt.compare(
				dto.password,
				existUser.password,
			);
			if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA);
			return this.userService.publicUser(dto.email);
		} catch (error) {
			throw new Error(error);
		}
	}
}
