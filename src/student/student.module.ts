import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { AuthMiddleware } from './middleware/auth';
@Module({
  imports: [ConfigModule.forRoot({envFilePath:'.env',  isGlobal: true,})],
  controllers: [StudentController],
  providers: [StudentService,],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).exclude({path:'student',method:RequestMethod.GET})
    .forRoutes('student')
  }
}
