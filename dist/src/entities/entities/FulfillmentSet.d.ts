import { ServiceZone } from "./ServiceZone";
export declare class FulfillmentSet {
    id: string;
    name: string;
    type: string;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    serviceZones: ServiceZone[];
}
