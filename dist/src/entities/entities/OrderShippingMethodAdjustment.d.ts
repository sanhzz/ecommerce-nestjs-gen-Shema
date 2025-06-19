import { OrderShippingMethod } from "./OrderShippingMethod";
export declare class OrderShippingMethodAdjustment {
    id: string;
    description: string | null;
    promotionId: string | null;
    code: string | null;
    amount: string;
    rawAmount: object;
    providerId: string | null;
    createdAt: Date;
    updatedAt: Date;
    shippingMethodId: string;
    deletedAt: Date | null;
    shippingMethod: OrderShippingMethod;
}
