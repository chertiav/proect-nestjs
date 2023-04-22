import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
//==============================================================
import { User } from './models/user.model';
import { Watchlist } from '../watchlist/models/watchlist.model';
import { CreateUserDTO, UpdatePasswordDTO, UpdateUserDTO } from './dto';
import { TokenService } from '../token/token.service';
import { AuthUserResponse } from '../auth/response';
import { AppError } from 'src/common/constants/errors';

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

	async findUserById(id: number): Promise<User> {
		try {
			return this.userRepository.findOne({
				where: { id },
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

	async updatePassword(id: number, dto: UpdatePasswordDTO): Promise<any> {
		try {
			const { password } = await this.findUserById(id);
			const curentPassword = await bcrypt.compare(dto.oldPassword, password);
			if (!curentPassword) return new BadRequestException(AppError.WRONG_DATA);
			const newPassword = await this.hashPassword(dto.newPassword);
			const data = { password: newPassword };
			return await this.userRepository.update(data, { where: { id } });
		} catch (error) {
			throw new Error(error);
		}
	}

	async deleteUser(id: number): Promise<boolean> {
		try {
			await this.userRepository.destroy({ where: { id } });
			return true;
		} catch (error) {
			throw new Error(error);
		}
	}
}
