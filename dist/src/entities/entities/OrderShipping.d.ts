import { Order } from "./Order";
export declare class OrderShipping {
    id: string;
    orderId: string;
    version: number;
    shippingMethodId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    returnId: string | null;
    claimId: string | null;
    exchangeId: string | null;
    order: Order;
}
