import { ServiceZone } from "./ServiceZone";
export declare class GeoZone {
    id: string;
    type: string;
    countryCode: string;
    provinceCode: string | null;
    city: string | null;
    serviceZoneId: string;
    postalExpression: object | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    serviceZone: ServiceZone;
}
