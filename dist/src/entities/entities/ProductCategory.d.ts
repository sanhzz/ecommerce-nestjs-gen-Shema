import { Product } from "./Product";
export declare class ProductCategory {
    id: string;
    name: string;
    description: string;
    handle: string;
    mpath: string;
    isActive: boolean;
    isInternal: boolean;
    rank: number;
    parentCategoryId: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    metadata: object | null;
    parentCategory: ProductCategory;
    productCategories: ProductCategory[];
    products: Product[];
}
