export declare class OrderClaimItem {
    id: string;
    claimId: string;
    itemId: string;
    isAdditionalItem: boolean;
    reason: "missing_item" | "wrong_item" | "production_failure" | "other" | null;
    quantity: string;
    rawQuantity: object;
    note: string | null;
    metadata: object | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
