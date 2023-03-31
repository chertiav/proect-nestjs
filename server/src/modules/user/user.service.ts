import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
//==============================================================
import { User } from './models/user.model';
import { Watchlist } from '../watchlist/models/watchlist.model';
import { CreateUserDTO, UpdateUserDTO } from './dto';

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User) private readonly userRepository: typeof User,
	) {}

	async hashPasword(password: string): Promise<string> {
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
			dto.password = await this.hashPasword(dto.password);
			await this.userRepository.create({ ...dto });
			return dto;
		} catch (error) {
			throw new Error(error);
		}
	}

	async publicUser(email: string): Promise<User> {
		try {
			return this.userRepository.findOne({
				where: { email },
				attributes: { exclude: ['password'] },
				include: {
					model: Watchlist,
					required: false,
				},
			});
		} catch (error) {
			throw new Error(error);
		}
	}

	async updateUser(email: string, dto: UpdateUserDTO): Promise<UpdateUserDTO> {
		try {
			await this.userRepository.update(dto, { where: { email } });
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
