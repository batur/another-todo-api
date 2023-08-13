import { InputType, Int, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateTodoInput implements Prisma.TodoCreateInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
