import { Product } from "./Product";
export declare class ProductType {
    id: string;
    value: string;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    products: Product[];
}
