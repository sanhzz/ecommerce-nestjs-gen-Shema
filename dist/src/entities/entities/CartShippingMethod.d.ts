import { Cart } from "./Cart";
import { CartShippingMethodAdjustment } from "./CartShippingMethodAdjustment";
import { CartShippingMethodTaxLine } from "./CartShippingMethodTaxLine";
export declare class CartShippingMethod {
    id: string;
    cartId: string;
    name: string;
    description: object | null;
    amount: string;
    rawAmount: object;
    isTaxInclusive: boolean;
    shippingOptionId: string | null;
    data: object | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    cart: Cart;
    cartShippingMethodAdjustments: CartShippingMethodAdjustment[];
    cartShippingMethodTaxLines: CartShippingMethodTaxLine[];
}
