import { CartAddress } from "./CartAddress";
import { CartLineItem } from "./CartLineItem";
import { CartShippingMethod } from "./CartShippingMethod";
import { CreditLine } from "./CreditLine";
export declare class Cart {
    id: string;
    regionId: string | null;
    customerId: string | null;
    salesChannelId: string | null;
    email: string | null;
    currencyCode: string;
    shippingAddressId: string | null;
    billingAddressId: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    completedAt: Date | null;
    billingAddress: CartAddress;
    shippingAddress: CartAddress;
    cartLineItems: CartLineItem[];
    cartShippingMethods: CartShippingMethod[];
    creditLines: CreditLine[];
}
