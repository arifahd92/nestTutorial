import { IsString, IsInt } from "class-validator";

export class CreateStudentDto{
    @IsString()
    name:string

    @IsInt()
    age:Number
    
 
}
//strict data types if name is not string automatic it will through an error message 
//it will be implimented like this
//@Post()
//@UsePipes(ValidationPipe)//globally i handeled this validation
//create(@Body() CreateStudentDto:CreateStudentDto) {// earlier we were writing studentData at place of CreateStudentDto and type object