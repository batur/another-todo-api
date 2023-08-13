import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Todo as TodoDB } from '@prisma/client';
@ObjectType()
export class Todo implements TodoDB {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => Boolean)
  isCompleted: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
