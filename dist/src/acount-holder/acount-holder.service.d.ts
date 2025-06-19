import { AccountHolder } from 'src/entities/entities/AccountHolder';
import { Repository } from 'typeorm';
export declare class AcountHolderService {
    private readonly accountHolderRepo;
    constructor(accountHolderRepo: Repository<AccountHolder>);
    findAllAccountHolder(): Promise<AccountHolder[]>;
}
