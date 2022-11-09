import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/services/user.service';
import *  as bcrpyt from 'bcrypt';
import { match } from 'assert';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUserCredentials(email:string, password: string) : Promise<any>
    {
            console.log("Email"+email);
           const matchedUser= await this.userService.getUserByEmail(email);
           console.log(matchedUser)
           if(!matchedUser) throw new BadRequestException();
        if(!await bcrpyt.compare(password,matchedUser.password))
        {
            throw new UnauthorizedException();
        }
           return matchedUser;
    }

    async generateToken(user:any)
    {

        return {
            accessToken: this.jwtService.sign({
                name: user.name,
                sub: user.id})
        }

    }
}
