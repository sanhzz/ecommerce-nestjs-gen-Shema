import { GeoZone } from "./GeoZone";
import { FulfillmentSet } from "./FulfillmentSet";
import { ShippingOption } from "./ShippingOption";
export declare class ServiceZone {
    id: string;
    name: string;
    metadata: object | null;
    fulfillmentSetId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    geoZones: GeoZone[];
    fulfillmentSet: FulfillmentSet;
    shippingOptions: ShippingOption[];
}
