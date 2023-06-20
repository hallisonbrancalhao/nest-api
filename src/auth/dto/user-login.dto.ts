import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class UserLoginDto {
  @IsEmail()
  useremail: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;
}
