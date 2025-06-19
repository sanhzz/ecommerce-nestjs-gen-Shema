import { OrderShippingMethodAdjustment } from "./OrderShippingMethodAdjustment";
import { OrderShippingMethodTaxLine } from "./OrderShippingMethodTaxLine";
export declare class OrderShippingMethod {
    id: string;
    name: string;
    description: object | null;
    amount: string;
    rawAmount: object;
    isTaxInclusive: boolean;
    shippingOptionId: string | null;
    data: object | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    isCustomAmount: boolean;
    orderShippingMethodAdjustments: OrderShippingMethodAdjustment[];
    orderShippingMethodTaxLines: OrderShippingMethodTaxLine[];
}
