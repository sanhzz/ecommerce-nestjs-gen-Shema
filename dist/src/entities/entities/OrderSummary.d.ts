import { Order } from "./Order";
export declare class OrderSummary {
    id: string;
    orderId: string;
    version: number;
    totals: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    order: Order;
}
