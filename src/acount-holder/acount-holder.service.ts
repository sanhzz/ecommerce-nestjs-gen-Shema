import { Injectable } from '@nestjs/common';
// import { CreateAcountHolderInput } from './dto/create-acount-holder.input';
// import { UpdateAcountHolderInput } from './dto/update-acount-holder.input';
import { AccountHolder } from 'src/entities/entities/AccountHolder';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AcountHolderService {

  constructor(
    @InjectRepository(AccountHolder)
    private readonly accountHolderRepo: Repository<AccountHolder>,
  ) { }


  // create(createAcountHolderInput: CreateAcountHolderInput) {
  //   return 'This action adds a new acountHolder';
  // }


  // ✅ FIND ALL
  async findAllAccountHolder(): Promise<AccountHolder[]> {
    try {
      return await this.accountHolderRepo.find();
    } catch (error) {
      throw new InternalServerErrorException(`Failed to fetch account holders: ${error.message}`);
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} acountHolder`;
  // }

  // update(id: number, updateAcountHolderInput: UpdateAcountHolderInput) {
  //   return `This action updates a #${id} acountHolder`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} acountHolder`;
  // }
}


