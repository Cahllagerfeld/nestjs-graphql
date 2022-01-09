import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-user.input';
import { User } from './user.model';

@Injectable()
export class UserService {
  userCollection: User[] = [];
  constructor() {}

  public async getAll(): Promise<User[]> {
    return this.userCollection;
  }

  public async create(userDto: NewUserInput) {
    const newUser: User = {
      id: new Date().toISOString(),
      avatarUrl: userDto.avatarUrl,
      bio: userDto.bio,
      firstName: userDto.firstName,
      secondName: userDto.firstName,
    };
    this.userCollection = [...this.userCollection, newUser];
    return newUser;
  }
}
