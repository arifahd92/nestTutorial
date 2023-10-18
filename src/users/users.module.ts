import { Module, NestModule,MiddlewareConsumer } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { UsersController } from './users.controller';
import { AuthMiddleware } from 'src/student/middleware/auth';

@Module({
  providers: [UsersService],
  exports:[UsersService],
  controllers: [UsersController]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
   // .exclude({path:'student',method:RequestMethod.GET})
    .forRoutes('auth')
  }
}
