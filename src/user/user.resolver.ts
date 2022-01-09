import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';
import { NewUserInput } from './dto/new-user.input';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Mutation((returns) => User)
  async createUser(@Args('newUserData') newUserData: NewUserInput) {
    return await this.userService.create(newUserData);
  }
}
