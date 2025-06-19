import { OrderChange } from "./OrderChange";
export declare class OrderChangeAction {
    id: string;
    orderId: string | null;
    version: number | null;
    ordering: string;
    orderChangeId: string | null;
    reference: string | null;
    referenceId: string | null;
    action: string;
    details: object | null;
    amount: string | null;
    rawAmount: object | null;
    internalNote: string | null;
    applied: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    returnId: string | null;
    claimId: string | null;
    exchangeId: string | null;
    orderChange: OrderChange;
}
