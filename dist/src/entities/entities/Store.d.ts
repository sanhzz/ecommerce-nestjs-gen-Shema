import { StoreCurrency } from "./StoreCurrency";
export declare class Store {
    id: string;
    name: string;
    defaultSalesChannelId: string | null;
    defaultRegionId: string | null;
    defaultLocationId: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    storeCurrencies: StoreCurrency[];
}
