import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@/module/user/dto/create-user.dto';
import { AuthDto } from './dto/auth.dto';
import { Request } from 'express';
import { AccessTokenGuard } from '@/common/accessToken.guard';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  signin(@Body() AuthDto: AuthDto) {
    return this.authService.signIn(AuthDto);
  }

  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout(@Req() req: Request) {
    console.log(req.user['sub']);

    this.authService.logout(req.user['sub']);
  }
}
