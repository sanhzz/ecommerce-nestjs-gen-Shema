import { Store } from "./Store";
export declare class StoreCurrency {
    id: string;
    currencyCode: string;
    isDefault: boolean;
    storeId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    store: Store;
}
