import { Region } from "./Region";
export declare class RegionCountry {
    iso_2: string;
    iso_3: string;
    numCode: string;
    name: string;
    displayName: string;
    regionId: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    region: Region;
}
