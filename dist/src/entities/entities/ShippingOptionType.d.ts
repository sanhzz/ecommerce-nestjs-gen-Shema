import { ShippingOption } from "./ShippingOption";
export declare class ShippingOptionType {
    id: string;
    label: string;
    description: string | null;
    code: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    shippingOptions: ShippingOption[];
}
