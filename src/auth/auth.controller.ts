import { Controller, Post,UseGuards, Request,Body } from '@nestjs/common';
import { LocalAuthGuards } from './local-auth.guards';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
   // @UseGuards(LocalAuthGuards)
    @Post('login')
    async login(@Request() req, @Body() userData):Promise<any>{
        console.log("auth controller M->post =>login")
        const {email, password}=userData
        return this.authService.validateUserCreds(email, password)
       // return req.user
     //  return req.name

    }
}
