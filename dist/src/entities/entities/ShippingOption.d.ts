import { Fulfillment } from "./Fulfillment";
import { FulfillmentProvider } from "./FulfillmentProvider";
import { ServiceZone } from "./ServiceZone";
import { ShippingOptionType } from "./ShippingOptionType";
import { ShippingProfile } from "./ShippingProfile";
import { ShippingOptionRule } from "./ShippingOptionRule";
export declare class ShippingOption {
    id: string;
    name: string;
    priceType: string;
    serviceZoneId: string;
    shippingProfileId: string | null;
    providerId: string | null;
    data: object | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    fulfillments: Fulfillment[];
    provider: FulfillmentProvider;
    serviceZone: ServiceZone;
    shippingOptionType: ShippingOptionType;
    shippingProfile: ShippingProfile;
    shippingOptionRules: ShippingOptionRule[];
}
