import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import {ApiTags} from '@nestjs/swagger'

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    
    async login(@Request() req){
        console.log('login successful')
        //return req.user;
        console.log(req.user)
        return this.authService.generateToken(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('user')
    user(@Request() req){
        return req.user;
    }
}
