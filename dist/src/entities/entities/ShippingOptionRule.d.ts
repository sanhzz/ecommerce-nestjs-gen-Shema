import { ShippingOption } from "./ShippingOption";
export declare class ShippingOptionRule {
    id: string;
    attribute: string;
    operator: string;
    value: object | null;
    shippingOptionId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    shippingOption: ShippingOption;
}
