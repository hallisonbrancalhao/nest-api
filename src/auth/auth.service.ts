import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(userMail: string, password: string): Promise<any> {
    const user = await this.userService.findUser(userMail);
    const validPassword: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!validPassword) throw new UnauthorizedException();

    const payload = { sub: user._id, userMail: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
