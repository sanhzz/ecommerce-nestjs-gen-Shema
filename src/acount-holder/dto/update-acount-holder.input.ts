import { CreateAcountHolderInput } from './create-acount-holder.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAcountHolderInput extends PartialType(CreateAcountHolderInput) {
  @Field(() => Int)
  id: number;
}
