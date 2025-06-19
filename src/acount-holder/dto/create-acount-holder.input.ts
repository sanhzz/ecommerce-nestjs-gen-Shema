import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAcountHolderInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
