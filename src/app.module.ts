import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
console.log(process.env.DB_NAME)
@Module({
  imports: [StudentModule, AuthModule, UsersModule, ConfigModule.forRoot({envFilePath:'.env',  isGlobal: true,})],//seperatre module will go here (inside imports)
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
