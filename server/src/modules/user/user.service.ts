import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from './dto';
import { AppError } from 'src/common/errors';

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
		const existUser = await this.findUserByEmail(dto.email);
		if (existUser) throw new BadRequestException(AppError.USER_EXIST);
		dto.password = await this.hashPasword(dto.password);
		await this.userRepository.create({ ...dto });
		return dto;
	}
}
