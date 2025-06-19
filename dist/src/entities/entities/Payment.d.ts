import { Capture } from "./Capture";
import { PaymentCollection } from "./PaymentCollection";
import { Refund } from "./Refund";
export declare class Payment {
    id: string;
    amount: string;
    rawAmount: object;
    currencyCode: string;
    providerId: string;
    data: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    capturedAt: Date | null;
    canceledAt: Date | null;
    paymentCollectionId: string;
    paymentSessionId: string;
    metadata: object | null;
    captures: Capture[];
    paymentCollection: PaymentCollection;
    refunds: Refund[];
}
