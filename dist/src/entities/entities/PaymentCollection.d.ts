import { Payment } from "./Payment";
import { PaymentProvider } from "./PaymentProvider";
import { PaymentSession } from "./PaymentSession";
export declare class PaymentCollection {
    id: string;
    currencyCode: string;
    amount: string;
    rawAmount: object;
    authorizedAmount: string | null;
    rawAuthorizedAmount: object | null;
    capturedAmount: string | null;
    rawCapturedAmount: object | null;
    refundedAmount: string | null;
    rawRefundedAmount: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    completedAt: Date | null;
    status: string;
    metadata: object | null;
    payments: Payment[];
    paymentProviders: PaymentProvider[];
    paymentSessions: PaymentSession[];
}
