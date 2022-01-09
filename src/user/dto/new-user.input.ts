import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, MaxLength } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(30)
  firstName: string;

  @Field({ nullable: true })
  @MaxLength(30)
  @IsOptional()
  secondName: string;

  @Field({ nullable: true })
  @IsOptional()
  bio: string;

  @Field({ nullable: true })
  @IsOptional()
  avatarUrl: string;
}
