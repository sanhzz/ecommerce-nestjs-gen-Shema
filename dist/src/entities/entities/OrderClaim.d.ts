export declare class OrderClaim {
    id: string;
    orderId: string;
    returnId: string | null;
    orderVersion: number;
    displayId: number;
    type: "refund" | "replace";
    noNotification: boolean | null;
    refundAmount: string | null;
    rawRefundAmount: object | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    canceledAt: Date | null;
    createdBy: string | null;
}
