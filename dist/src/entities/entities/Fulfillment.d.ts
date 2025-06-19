import { FulfillmentAddress } from "./FulfillmentAddress";
import { FulfillmentProvider } from "./FulfillmentProvider";
import { ShippingOption } from "./ShippingOption";
import { FulfillmentItem } from "./FulfillmentItem";
import { FulfillmentLabel } from "./FulfillmentLabel";
export declare class Fulfillment {
    id: string;
    locationId: string;
    packedAt: Date | null;
    shippedAt: Date | null;
    deliveredAt: Date | null;
    canceledAt: Date | null;
    data: object | null;
    shippingOptionId: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    markedShippedBy: string | null;
    createdBy: string | null;
    requiresShipping: boolean;
    deliveryAddress: FulfillmentAddress;
    provider: FulfillmentProvider;
    shippingOption: ShippingOption;
    fulfillmentItems: FulfillmentItem[];
    fulfillmentLabels: FulfillmentLabel[];
}
