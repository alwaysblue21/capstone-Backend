import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService) {}

    @Post("/signup")
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string}> {
        return this.authService.signUp(signUpDto)
    }

    @Post("/login")
    login(@Res() res: Response, @Body() loginDto: LoginDto) {
        const jwt = this.authService.login(loginDto)
        res.cookie('access_token', jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: "none"
        })
        return
    }
}
