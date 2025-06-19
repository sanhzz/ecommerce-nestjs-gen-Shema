import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcountHolderService } from './acount-holder.service';
import { AcountHolderResolver } from './acount-holder.resolver';

import { AccountHolder } from 'src/entities/entities/AccountHolder';

@Module({
  imports: [TypeOrmModule.forFeature([AccountHolder])],
  providers: [AcountHolderResolver, AcountHolderService],
})
export class AcountHolderModule {}
