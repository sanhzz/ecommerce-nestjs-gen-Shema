import { OrderShippingMethod } from "./OrderShippingMethod";
export declare class OrderShippingMethodTaxLine {
    id: string;
    description: string | null;
    taxRateId: string | null;
    code: string;
    rate: string;
    rawRate: object;
    providerId: string | null;
    createdAt: Date;
    updatedAt: Date;
    shippingMethodId: string;
    deletedAt: Date | null;
    shippingMethod: OrderShippingMethod;
}
