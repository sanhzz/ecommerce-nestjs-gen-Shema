export declare class OrderExchange {
    id: string;
    orderId: string;
    returnId: string | null;
    orderVersion: number;
    displayId: number;
    noNotification: boolean | null;
    allowBackorder: boolean;
    differenceDue: string | null;
    rawDifferenceDue: object | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    canceledAt: Date | null;
    createdBy: string | null;
}
