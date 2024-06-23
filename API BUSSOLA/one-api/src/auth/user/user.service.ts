import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  private users = [
    { userId: 1, username: 'Otavio', password: bcrypt.hashSync('password', 10) },
    { userId: 2, username: 'Pedrinho', password: bcrypt.hashSync('secret', 10) },
  ];

  async findByUsername(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }

  async findAll(): Promise<any[]> {
    return this.users;
  }

  async findOne(id: number): Promise<any> {
    return this.users.find(user => user.userId === id);
  }

  async create(user: any): Promise<any> {
    const newUser = { userId: Date.now(), ...user };
    newUser.password = bcrypt.hashSync(newUser.password, 10); 
    this.users.push(newUser);
    return newUser;
  }

  async update(id: number, updateUserDto: any): Promise<any> {
    const index = this.users.findIndex(user => user.userId === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updateUserDto };
      return this.users[index];
    }
    return null;
  }

  async remove(id: number): Promise<any> {
    const index = this.users.findIndex(user => user.userId === id);
    if (index !== -1) {
      const removedUser = this.users.splice(index, 1);
      return removedUser[0];
    }
    return null;
  }
}
