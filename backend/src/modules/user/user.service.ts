import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getByEmail(email: string) {
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      throw new HttpException(
        'User with this email does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }

  async getById(id: string) {
    const user = await this.userRepository.findOne({ id });
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return user;
  }

  async create(userDto: CreateUserDto) {
    const newUser = await this.userRepository.create(userDto);
    await this.userRepository.save(newUser);
    return newUser;
  }
}
