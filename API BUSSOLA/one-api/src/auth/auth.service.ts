// src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  private readonly users = [
    {
      userId: 1,
      username: 'pedrinho',
      password: '$2a$10$yGnZsJj4s0h7Yy0QVHKCieS2jDl.QO4p8QuEtnIk8ax6xyy1v92Dm', // senha: 'password'
    },
    {
      userId: 2,
      username: 'otavio',
      password: '$2a$10$uq.0zktqexinWW8m5WcW2.9D0QnOV4ls.KF3UV5tG8/vgTbbywzau', // senha: 'secret'
    },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find(user => user.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload), 
    };
  }
}
