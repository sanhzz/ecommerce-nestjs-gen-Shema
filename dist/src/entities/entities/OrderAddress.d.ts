import { Order } from "./Order";
export declare class OrderAddress {
    id: string;
    customerId: string | null;
    company: string | null;
    firstName: string | null;
    lastName: string | null;
    address_1: string | null;
    address_2: string | null;
    city: string | null;
    countryCode: string | null;
    province: string | null;
    postalCode: string | null;
    phone: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    orders: Order[];
    orders2: Order[];
}
