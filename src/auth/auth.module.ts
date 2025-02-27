import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport'; // Import PassportModule
import { AccessTokenStrategy } from '@/auth/stragetries/accessToken.strategy'; // Import your strategy
import { UserModule } from '@/module/user/user.module';
import { RefreshTokenStrategy } from './stragetries/refreshToken.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy], // Add AccessTokenStrategy
})
export class AuthModule { }
