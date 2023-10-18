import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelize } from './student/mysql.services';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  try {
   
    await sequelize.sync()
    const app = await NestFactory.create(AppModule);
   // app.useGlobalPipes(new ValidationPipe)//go in student controller post there i commented @UsePipes(ValidationPipe) due to this 
                                           // this is handling only validation 
    await app.listen(4000,()=>console.log("listening at port 4000"));
  } catch (error) {
    console.log("caught error")
    console.log(error)
  }
}
bootstrap();
