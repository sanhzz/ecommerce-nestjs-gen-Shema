import { Fulfillment } from "./Fulfillment";
import { ShippingOption } from "./ShippingOption";
export declare class FulfillmentProvider {
    id: string;
    isEnabled: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    fulfillments: Fulfillment[];
    shippingOptions: ShippingOption[];
}
