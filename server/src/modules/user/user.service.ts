import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
//==============================================================
import { User } from './models/user.model';
import { Watchlist } from '../watchlist/models/watchlist.model';
import { CreateUserDTO, UpdateUserDTO } from './dto';
import { TokenService } from '../token/token.service';
import { AuthUserResponse } from '../auth/response';

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User) private readonly userRepository: typeof User,
		private readonly tokenService: TokenService,
	) {}

	async hashPassword(password: string): Promise<string> {
		try {
			return bcrypt.hash(password, 7);
		} catch (error) {
			throw new Error(error);
		}
	}

	async findUserByEmail(email: string): Promise<User> {
		try {
			return this.userRepository.findOne({
				where: { email },
				include: {
					model: Watchlist,
					required: false,
				},
			});
		} catch (error) {
			throw new Error(error);
		}
	}

	async createUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
		try {
			dto.password = await this.hashPassword(dto.password);
			await this.userRepository.create({ ...dto });
			return dto;
		} catch (error) {
			throw new Error(error);
		}
	}

	async publicUser(email: string): Promise<AuthUserResponse> {
		try {
			const user = await this.userRepository.findOne({
				where: { email },
				attributes: { exclude: ['password'] },
				include: {
					model: Watchlist,
					required: false,
				},
			});
			const token = await this.tokenService.generateJwtToken(user);
			return { user, token };
		} catch (error) {
			throw new Error(error);
		}
	}

	async updateUser(id: number, dto: UpdateUserDTO): Promise<UpdateUserDTO> {
		try {
			await this.userRepository.update(dto, { where: { id } });
			return dto;
		} catch (error) {
			throw new Error(error);
		}
	}

	async deleteUser(email: string): Promise<boolean> {
		try {
			await this.userRepository.destroy({ where: { email } });
			return true;
		} catch (error) {
			throw new Error(error);
		}
	}
}
