import { Fulfillment } from "./Fulfillment";
export declare class FulfillmentAddress {
    id: string;
    company: string | null;
    firstName: string | null;
    lastName: string | null;
    address_1: string | null;
    address_2: string | null;
    city: string | null;
    countryCode: string | null;
    province: string | null;
    postalCode: string | null;
    phone: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    fulfillments: Fulfillment[];
}
