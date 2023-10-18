import { BadRequestException, Injectable,NestMiddleware } from "@nestjs/common";
import {Request,Response,NextFunction} from 'express'
@Injectable()
export class AuthMiddleware implements NestMiddleware{
    use(req:Request,res:Response, next:NextFunction){
        console.log("auth middleware")
        console.log(req.headers.token)
        //if token in valid
       // throw new BadRequestException('token does nt match')
      // console.log(req.url=="/login")
      // if(req.url=="/login"){
        //verify and generate token
       
     //  }
     //  req['name']="arif"
        next()
    }
}
// i used it globally  by configuring it in student.module
//so for every request this will be called except excuded path in configuration
