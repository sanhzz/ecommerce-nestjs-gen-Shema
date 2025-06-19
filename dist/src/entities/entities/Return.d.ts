export declare class Return {
    id: string;
    orderId: string;
    claimId: string | null;
    exchangeId: string | null;
    orderVersion: number;
    displayId: number;
    status: "open" | "requested" | "received" | "partially_received" | "canceled";
    noNotification: boolean | null;
    refundAmount: string | null;
    rawRefundAmount: object | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    receivedAt: Date | null;
    canceledAt: Date | null;
    locationId: string | null;
    requestedAt: Date | null;
    createdBy: string | null;
}
