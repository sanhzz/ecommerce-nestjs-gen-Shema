import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AcountHolderService } from './acount-holder.service';
import { AccountHolder } from 'src/entities/entities/AccountHolder';

import { CreateAcountHolderInput } from './dto/create-acount-holder.input';
import { UpdateAcountHolderInput } from './dto/update-acount-holder.input';

@Resolver(() => AccountHolder)
export class AcountHolderResolver {
  constructor(private readonly acountHolderService: AcountHolderService) {}

  // @Mutation(() => AcountHolder)
  // createAcountHolder(@Args('createAcountHolderInput') createAcountHolderInput: CreateAcountHolderInput) {
  //   return this.acountHolderService.create(createAcountHolderInput);
  // }


  // ✅ FIND ALL
  @Query(() => [AccountHolder])
  findAllAcount() {
    return this.acountHolderService.findAllAccountHolder();
  }

  // @Query(() => AcountHolder, { name: 'acountHolder' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.acountHolderService.findOne(id);
  // }

  // @Mutation(() => AcountHolder)
  // updateAcountHolder(@Args('updateAcountHolderInput') updateAcountHolderInput: UpdateAcountHolderInput) {
  //   return this.acountHolderService.update(updateAcountHolderInput.id, updateAcountHolderInput);
  // }

  // @Mutation(() => AcountHolder)
  // removeAcountHolder(@Args('id', { type: () => Int }) id: number) {
  //   return this.acountHolderService.remove(id);
  // }
}
