import { AcountHolderService } from './acount-holder.service';
import { AccountHolder } from 'src/entities/entities/AccountHolder';
export declare class AcountHolderResolver {
    private readonly acountHolderService;
    constructor(acountHolderService: AcountHolderService);
    findAllAcount(): Promise<AccountHolder[]>;
}
