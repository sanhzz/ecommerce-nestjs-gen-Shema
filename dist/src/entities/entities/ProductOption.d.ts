import { Product } from "./Product";
import { ProductOptionValue } from "./ProductOptionValue";
export declare class ProductOption {
    id: string;
    title: string;
    productId: string;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    product: Product;
    productOptionValues: ProductOptionValue[];
}
