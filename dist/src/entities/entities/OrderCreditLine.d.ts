import { Order } from "./Order";
export declare class OrderCreditLine {
    id: string;
    orderId: string;
    reference: string | null;
    referenceId: string | null;
    amount: string;
    rawAmount: object;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    order: Order;
}
