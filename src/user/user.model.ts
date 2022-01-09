import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Usermodel' })
export class User {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  secondName: string;

  @Field({ nullable: true })
  bio: string;

  @Field({ nullable: true })
  avatarUrl: string;
}
