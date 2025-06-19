import { Order } from "./Order";
export declare class OrderTransaction {
    id: string;
    orderId: string;
    version: number;
    amount: string;
    rawAmount: object;
    currencyCode: string;
    reference: string | null;
    referenceId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    returnId: string | null;
    claimId: string | null;
    exchangeId: string | null;
    order: Order;
}
