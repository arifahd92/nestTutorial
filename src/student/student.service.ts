
import { Student } from './student.model';
import { Injectable, UsePipes } from '@nestjs/common';
//this file will handle methods of crud for data base, and thbese method will be called from controller  
@Injectable()
export class StudentService {
      // find all students
     
  async findAll() {
    try {
        console.log(process.env.DB_NAME)
      return await Student.findAll();
    } catch (error) {
      return ({message:error.message})
    }
  }

  async create(studentData) {
    try {
      const { name, age } = studentData;
      console.log(studentData,"from student services")
      return await Student.create({ name, age });
      
    } catch (error) {
      return ({message:error.message})
    }
   
  }
  //delete student by id 
  async deleteStudent(id){
    try {
      
   
  const student =  await Student.findByPk(id)
    if(student instanceof Student){
      await student.destroy()
       
        return {message:'deleted successfully'}
      
    }
    else{

      return {message:` student does not  exist for id -> ${id} try again with correct id`}
    }
  } catch (error) {
      return ({message:error.message})
  }

  }
// find student by id
  async findOne(id){
    console.log("findone services")
    try {
     
    const student =  await Student.findByPk(id)
    if(student instanceof Student){

      return student
    }
    else{

      return {message:` student does not  exist for id -> ${id}`}
    }
      
    } catch (error) {
      console.log("in catch block")
      return ({message:error.message})
    }
  }
  // find and update
  async findAndUpdate(id,studentData){
    try {
      

    console.log(studentData,'inside student services for find and update method')
    const student= await Student.findByPk(id)
    if(student instanceof Student){

       await student.update(studentData)
       return ({message:'updated successfully'})
    }
    else{
      
      return {message:` student does not  exist for id -> ${id}`}
    }
   
  } catch (error) {
     return ({message:error.message}) 
  }
  }
}
