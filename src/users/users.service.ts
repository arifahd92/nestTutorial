import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UsersService {
 //user registration    
// m-post =>/user

async create(userData) {
    try {
      const { email, password } = userData;
      console.log(userData,"from user service")
      

      return await User.create({ email, password });
      
    } catch (error) {
        //console.log(error)
      return ({message:error.errors[0].message})//this is the way to catch exact error message
    }
   
  }
  // user login
  //m-get =>user with token (if token , extract id through middleware and associate to request object , call next())




 async  getUserByEmail(email:string){
  console.log("getUserByEmail called of user service")
    const user = await User.findOne({where:{email:email}}) 
    if(user instanceof User){

      return user
    }
    // return {message:false} 
   // return undefined
   throw new BadRequestException("Email is not registerd ")
   } 
  
}
