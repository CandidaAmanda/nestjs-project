import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { REGEX } from "src/app.utils";
import {ApiProperty} from '@nestjs/swagger'

export class UserDto {

    @ApiProperty({
        description: 'Username',
        example: 'John Doe'
    })
    @IsNotEmpty()
    name: string;
    @ApiProperty({
        description: 'Email ID',
        example: 'JohnDoe@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Password',
        example: 'JohnDoe123@'
    })
    @IsNotEmpty()
    @Length(8,24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: 'Password weird'
    })
    password: string;

    @ApiProperty({
        description: 'Confirm password',
        example: 'JohnDoe123@'
    })
    @IsNotEmpty()
    @Length(8,24)
    @Matches(REGEX.PASSWORD_RULE,{
        message: 'Password weird'
    })
    confirmPassword: string;
}