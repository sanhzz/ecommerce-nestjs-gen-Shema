import { PaymentCollection } from "./PaymentCollection";
export declare class PaymentSession {
    id: string;
    currencyCode: string;
    amount: string;
    rawAmount: object;
    providerId: string;
    data: object;
    context: object | null;
    status: string;
    authorizedAt: Date | null;
    paymentCollectionId: string;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    paymentCollection: PaymentCollection;
}
