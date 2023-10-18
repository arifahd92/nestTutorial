import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService:UsersService){// it should be exported from usermodule also like exports:[UserService], and injectable

    }
  async  validateUserCreds(email:string,password:string):Promise< {}> {
     console.log(email)
        const user =await this.userService.getUserByEmail(email)
        console.log("authservice validateUserCreds==>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        // if(!user){
        //     throw new BadRequestException("it seems you are not registerd user")
         
        // }
       

        //     console.log(`user inside auth service ${user['email']} ${user['password']}`)
        
        // console.log(user)
        if(password != user["password"]){
           // console.log(user["pasword"])
           throw new UnauthorizedException("password did not match")
        }
      return user//next time  token will be sent 
    }
}
