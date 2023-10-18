import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class AuthPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`custom pipe ${value}`)
    return value;
  }
}
// at which route we want to access value and do somehing there inside controller after method ( like @Get() )
//we will use  @UsePipes(new AuthPipe()) now params value like id will be assigned to this value