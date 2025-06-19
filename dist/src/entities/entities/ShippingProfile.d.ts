import { ShippingOption } from "./ShippingOption";
export declare class ShippingProfile {
    id: string;
    name: string;
    type: string;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    shippingOptions: ShippingOption[];
}
