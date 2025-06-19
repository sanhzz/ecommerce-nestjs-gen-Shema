import { ProductOption } from "./ProductOption";
import { ProductVariant } from "./ProductVariant";
export declare class ProductOptionValue {
    id: string;
    value: string;
    optionId: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    option: ProductOption;
    productVariants: ProductVariant[];
}
