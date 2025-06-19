import { CartShippingMethod } from "./CartShippingMethod";
export declare class CartShippingMethodTaxLine {
    id: string;
    description: string | null;
    taxRateId: string | null;
    code: string;
    rate: number;
    providerId: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    shippingMethodId: string | null;
    shippingMethod: CartShippingMethod;
}
