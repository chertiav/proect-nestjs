import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
//==============================================================
import { User } from './models/user.model';
import { CreateUserDTO } from './dto';

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User) private readonly userRepository: typeof User,
	) {}
	async hashPasword(password: string): Promise<string> {
		return bcrypt.hash(password, 7);
	}
	async findUserByEmail(email: string): Promise<CreateUserDTO> {
		return this.userRepository.findOne({ where: { email } });
	}
	async createUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
		dto.password = await this.hashPasword(dto.password);
		await this.userRepository.create({ ...dto });
		return dto;
	}

	async publicUser(email: string) {
		return this.userRepository.findOne({
			where: { email },
			attributes: { exclude: ['password'] },
			raw: true,
		});
	}
}
