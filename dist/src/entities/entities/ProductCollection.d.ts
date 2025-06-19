import { Product } from "./Product";
export declare class ProductCollection {
    id: string;
    title: string;
    handle: string;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    products: Product[];
}
