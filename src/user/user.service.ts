import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  userCollection: User[] = [];
  constructor() {}

  public async getAll(): Promise<User[]> {
    return this.userCollection;
  }
}
