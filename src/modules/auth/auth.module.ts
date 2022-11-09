import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UserService } from '../user/services/user.service';
import { UserModule } from '../user/user.module';
import { QuizModule } from '../quiz/quiz.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule} from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[UserModule,QuizModule, PassportModule, JwtModule.register({
    secret:'abcdefg',
    signOptions:{
      expiresIn:'1d'
    }
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
