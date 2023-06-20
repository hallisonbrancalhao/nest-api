import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signIn(userMail: string, password: string): Promise<any> {
    const user = await this.userService.findUser(userMail);
  }
}
