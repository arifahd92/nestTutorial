import { Body, Controller, Get, Param, Post ,Put, Delete, ParseIntPipe, UsePipes,UseFilters,ForbiddenException, Req, ValidationPipe} from '@nestjs/common';
import  {StudentService}  from "./student.service"
import { AuthPipe } from 'src/pipe/AuthPipe';
import { CreateStudentDto } from 'src/pipe/createStudentDto';
import { HttpExceptionFilter } from 'src/exception/http.filter';
import {Request,Response,NextFunction} from 'express'
//inside controller we define routes and we call the methods of service , and service handles database crud operations
@Controller('student')
export class StudentController {
  //called StudentsController constructor
  constructor(public studentService: StudentService) {}//service is injectable so ucan use sevice method doing this
    @Post()
   // @UsePipes(ValidationPipe)//globally i handeled this validation
    create(@Body() CreateStudentDto:CreateStudentDto) {
      console.log("student controller  hits")
      return this.studentService.create(CreateStudentDto)
    }
  
    @Get()
    findAll(){
      console.log("get of findAll")
      return this.studentService.findAll()
    }
  
    @Delete(':id')
    @UseFilters(new HttpExceptionFilter())
   
    deleteStudent(@Param('id', ParseIntPipe) id: number){
      console.log("delete student")
      if(id>10){
      throw new ForbiddenException()
      }
      return this.studentService.deleteStudent(id)
    }
  
    @Get(':id')
    @UsePipes(new AuthPipe())//it is not being handeled by global pipe validation coz it is not validation like name string age Number inside value id will be assigned in auth pipe
    findOne(@Param('id', ParseIntPipe) id: number) {
      //typeof id was string earlier but with help of ParseIntPipe converted in number
      console.log(typeof id)//number
      return this.studentService.findOne(id);
    }
  
    @Put(':id')
    findAndUpdate(@Param('id', ParseIntPipe) id:string, @Body() studentData){
      console.log("updateId",id)
      console.log("student data", studentData)
      return this.studentService.findAndUpdate(id,studentData)
  
    }

    //trying to read header 
    @Get('token/token')
    async exampleMethod(@Req() request: Request): Promise<any> {
      // Access the token from the request headers
      const token = request.headers['token'];
      console.log(request['name'])
      
      // You can use the 'token' value here
      console.log('Token from request headers:', token);
  
      // Rest of your code...
    }
  
    
}
