import { Payment } from "./Payment";
export declare class Refund {
    id: string;
    amount: string;
    rawAmount: object;
    paymentId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    createdBy: string | null;
    metadata: object | null;
    refundReasonId: string | null;
    note: string | null;
    payment: Payment;
}
