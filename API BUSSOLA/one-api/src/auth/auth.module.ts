import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: '&|rFo%rYy)l3LC;RV2RP+;Cx7w2MG?)%', 
      signOptions: { expiresIn: '24h' }, 
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
