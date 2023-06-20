import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/users.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.userHash(createUserDto.password);
    this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find().select('-password');
  }

  findOne(email: string) {
    return this.userModel.findOne({ email: email }).select('-password');
  }

  findUser(email: string) {
    return this.userModel.findOne({ email: email });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(
        id,
        {
          name: updateUserDto.name,
          password: updateUserDto.password,
          age: updateUserDto.age,
        },
        { new: true },
      )
      .select('-password');
  }

  delete(id: string) {
    return this.userModel.findByIdAndDelete(id).select('-password');
  }

  private async userHash(pass: string) {
    const saltOrRounds = 10;

    const hashedPass = await bcrypt.hash(pass, saltOrRounds);
    return hashedPass;
  }
}
