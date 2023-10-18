import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[UsersModule, PassportModule],//userService is accessibbe inside authfolders file  only if userModule exports it like  exports:[UsersService]
  providers: [AuthService,LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
