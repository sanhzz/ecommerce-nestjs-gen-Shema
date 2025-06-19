import { CartShippingMethod } from "./CartShippingMethod";
export declare class CartShippingMethodAdjustment {
    id: string;
    description: string | null;
    promotionId: string | null;
    code: string | null;
    amount: string;
    rawAmount: object;
    providerId: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    shippingMethodId: string | null;
    shippingMethod: CartShippingMethod;
}
