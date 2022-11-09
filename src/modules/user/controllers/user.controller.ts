import { Body, Controller, HttpStatus, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { validations } from "src/app.utils";
import { UserDto } from "../dto/user.dto";
import { UserService } from "../services/user.service";
import {ApiTags, ApiCreatedResponse, ApiBadRequestResponse} from '@nestjs/swagger'
import { User } from "../models/user.entity";

@ApiTags('user')
@Controller('users')
export class UserController{

    constructor(private userService: UserService){}

    @Post('/addUser')
    @UsePipes(ValidationPipe)
    @ApiCreatedResponse({
        description:'Created user object as response',
        type: User
    })
    @ApiBadRequestResponse({
        description:'User cannot be registered'
    })
    //@ApiResponse()
    async addUser(@Body(validations.VALIDATE_PIPE) userData: UserDto){
        console.log(userData)
        return await this.userService.registerUser(userData);
    }
}