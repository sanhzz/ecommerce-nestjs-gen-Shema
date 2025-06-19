import { Payment } from "./Payment";
export declare class Capture {
    id: string;
    amount: string;
    rawAmount: object;
    paymentId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    createdBy: string | null;
    metadata: object | null;
    payment: Payment;
}
