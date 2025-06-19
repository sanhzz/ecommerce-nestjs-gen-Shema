import { Product } from "./Product";
import { ProductOptionValue } from "./ProductOptionValue";
export declare class ProductVariant {
    id: string;
    title: string;
    sku: string | null;
    barcode: string | null;
    ean: string | null;
    upc: string | null;
    allowBackorder: boolean;
    manageInventory: boolean;
    hsCode: string | null;
    originCountry: string | null;
    midCode: string | null;
    material: string | null;
    weight: number | null;
    length: number | null;
    height: number | null;
    width: number | null;
    metadata: object | null;
    variantRank: number | null;
    productId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    product: Product;
    productOptionValues: ProductOptionValue[];
}
