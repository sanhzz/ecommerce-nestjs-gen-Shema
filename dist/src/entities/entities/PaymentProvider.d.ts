import { PaymentCollection } from "./PaymentCollection";
export declare class PaymentProvider {
    id: string;
    isEnabled: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    paymentCollections: PaymentCollection[];
}
