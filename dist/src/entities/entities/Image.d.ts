import { Product } from "./Product";
export declare class Image {
    id: string;
    url: string;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    rank: number;
    productId: string;
    product: Product;
}
