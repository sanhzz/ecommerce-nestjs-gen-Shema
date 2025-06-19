import { Cart } from "./Cart";
export declare class CreditLine {
    id: string;
    cartId: string;
    reference: string | null;
    referenceId: string | null;
    amount: string;
    rawAmount: object;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    cart: Cart;
}
