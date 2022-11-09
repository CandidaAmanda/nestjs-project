import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "../dto/user.dto";
import { User } from "../models/user.entity";
import { UserRepository } from "../repositories/user.repository";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService
{
    constructor(@InjectRepository(UserRepository) private userRepository: UserRepository){}

    async registerUser(newUser: UserDto)
    {

        const user = new User();
        user.name=newUser.name;
        user.email=newUser.email;
        user.password=newUser.password;
        return await this.userRepository.save(user);

    }

    async getUserByEmail(email:string)

    {
        return await User.findOne({where:{email}});

    }

   

}